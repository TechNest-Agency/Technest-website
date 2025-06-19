const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateTOTP, verifyTOTP } = require("../utils/twoFactorAuth");
const crypto = require("crypto");
const { transporter } = require("../utils/nodeMailService");

// Register new user
exports.register = async (req, res) => {
  const { email } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

// two Facotor Verification
exports.TwoFactorVerify = async (req, res) => {
  try {
    const { userId, code } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if code is valid and not expired
    if (user.twoFactorCode === code && user.twoFactorCodeExpires > new Date()) {
      // Reset 2FA code fields for security
      user.twoFactorCode = null;
      user.twoFactorCodeExpires = null;
      user.isEmailVerified = true;

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      await user.save();

      // Send JWT as cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      });

      res.json({
        status: true,
        message: "Verification Successful",
        data: {
          token,
          user: {
            id: user._id,
            email: user.email,
            role: user.role,
          },
        },
      });
    } else {
      res.status(400).json({
        verified: false,
        message: "Invalid or expired code, try again",
      });
    }
  } catch (error) {
    console.error("TwoFactorVerify Error:", error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: false,
        message: "Please enter a valid email address",
      });
    }

    // Find user by email
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({
        status: false,
        message: "Invalid email or password",
      });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        status: false,
        message: "Invalid email or password",
      });
    }

    // Generate 2FA code
    const twoFactorCode = Math.floor(100000 + Math.random() * 900000).toString();
    const twoFactorCodeExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    user.twoFactorCode = twoFactorCode;
    user.twoFactorCodeExpires = twoFactorCodeExpires;
    await user.save();

    // Send verification code via email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Your CraftNetic Login Verification Code",
      html: `
        <h2>Welcome to CraftNetic</h2>
        <p>Your verification code is: <strong>${twoFactorCode}</strong></p>
        <p>This code will expire in 10 minutes.</p>
      `,
    });

    res.json({
      status: true,
      message: "Verification code sent to your email",
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      status: false,
      message: "An error occurred during login. Please try again.",
    });
  }
};

// Logout user
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};

// Get current user
exports.getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select(
      "-password -twoFactorSecret"
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Get current user error:", error);
    res.status(500).json({ message: "Server error while fetching user" });
  }
};

// Enable/Disable 2FA
exports.toggleTwoFactor = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isTwoFactorEnabled = !user.isTwoFactorEnabled;
    await user.save();

    res.json({
      message: `Two-factor authentication ${
        user.isTwoFactorEnabled ? "enabled" : "disabled"
      }`,
      isTwoFactorEnabled: user.isTwoFactorEnabled,
    });
  } catch (error) {
    console.error("Toggle 2FA error:", error);
    res.status(500).json({ message: "Server error while toggling 2FA" });
  }
};

// Reset password
exports.resetPassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify old password
    const isValidPassword = await bcrypt.compare(oldPassword, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid current password" });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({ message: "Server error while resetting password" });
  }
};

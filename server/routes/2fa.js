const express = require('express');
const router = express.Router();
const twoFactorAuth = require('../utils/twoFactorAuth');
const auth = require('../middleware/auth');
const User = require('../models/User');

// Generate 2FA secret and QR code
router.post('/generate', auth, async (req, res) => {
    try {
        const { secret, qrCode } = await twoFactorAuth.generateSecret(req.user.email);
        await User.findByIdAndUpdate(req.user.id, { 
            twoFactorSecret: secret,
            twoFactorEnabled: false
        });
        
        res.json({ qrCode });
    } catch (error) {
        res.status(500).json({ message: 'Error generating 2FA' });
    }
});

// Enable 2FA
router.post('/enable', auth, async (req, res) => {
    try {
        const { token } = req.body;
        const user = await User.findById(req.user.id);
        
        const isValid = twoFactorAuth.verifyToken(token, user.twoFactorSecret);
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid token' });
        }

        await User.findByIdAndUpdate(req.user.id, { twoFactorEnabled: true });
        res.json({ message: '2FA enabled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error enabling 2FA' });
    }
});

// Verify 2FA token
router.post('/verify', auth, async (req, res) => {
    try {
        const { token } = req.body;
        const user = await User.findById(req.user.id);
        
        const isValid = twoFactorAuth.verifyToken(token, user.twoFactorSecret);
        res.json({ isValid });
    } catch (error) {
        res.status(500).json({ message: 'Error verifying token' });
    }
});

// Disable 2FA
router.post('/disable', auth, async (req, res) => {
    try {
        const { token } = req.body;
        const user = await User.findById(req.user.id);
        
        const isValid = twoFactorAuth.verifyToken(token, user.twoFactorSecret);
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid token' });
        }

        await User.findByIdAndUpdate(req.user.id, {
            twoFactorSecret: null,
            twoFactorEnabled: false
        });
        
        res.json({ message: '2FA disabled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error disabling 2FA' });
    }
});

module.exports = router;

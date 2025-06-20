import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Bars3Icon,
    XMarkIcon,
    ShoppingCartIcon,
    UserCircleIcon,
    MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const { getCartCount, setIsCartOpen } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleMenuLinkClick = () => setIsMenuOpen(false);

    const navigationLinks = [
        { to: "/", text: "Home" },
        { to: "/about", text: "About" },
        { to: "/services", text: "Services" },
        { to: "/portfolio", text: "Portfolio" },
        { to: "/team", text: "Team" },
        { to: "/blog", text: "Blog" },
        { to: "/contact", text: "Contact" }
    ];

    const NavLink = ({ to, text }) => (
        <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link
                to={to}
                className="relative px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-600 transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary-400"
                tabIndex={0}
            >
                <span className="relative z-10">{text}</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-primary-500/20 group-hover:to-primary-500/10 transition-all duration-300 rounded-lg transform group-hover:scale-110" />
            </Link>
        </motion.div>
    );

    const MobileNavLink = ({ to, text }) => (
        <motion.div
            whileTap={{ scale: 0.95 }}
        >
            <Link
                to={to}
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary-600 transition-all duration-300 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary-400"
                tabIndex={0}
                onClick={handleMenuLinkClick}
            >
                <span className="relative z-10">{text}</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-primary-500/20 group-hover:to-primary-500/10 transition-all duration-300" />
            </Link>
        </motion.div>
    );

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrollPosition > 0
                    ? "bg-white/90 backdrop-blur-lg shadow-lg shadow-primary-100/10"
                    : "bg-white/70 backdrop-blur-sm"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <motion.div
                            onClick={handleLogoClick}
                            className="flex items-center cursor-pointer mr-8"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-2xl font-extrabold text-black tracking-tight select-none" style={{ fontFamily: 'Garamond, serif' }}>
                                LaunchLayer
                            </span>
                        </motion.div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                            {navigationLinks.map(link => (
                                <NavLink key={link.to} {...link} />
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* Search Icon Only */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-100 transition-all duration-300"
                            aria-label="Search"
                        >
                            <MagnifyingGlassIcon className="h-6 w-6" />
                        </motion.button>
                        {/* Shopping Cart */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-100 transition-all duration-300"
                        >
                            <ShoppingCartIcon className="h-6 w-6" />
                            {getCartCount() > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-1 -right-1 bg-gradient-to-r from-primary-400 to-secondary-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-glow"
                                >
                                    {getCartCount()}
                                </motion.span>
                            )}
                        </motion.button>
                        {/* User Menu */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => user ? navigate("/profile") : navigate("/login")}
                            className={`p-2 rounded-lg ${user ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-100' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-100'} transition-all duration-300`}
                            aria-label={user ? 'Profile' : 'Sign In'}
                        >
                            <UserCircleIcon className="h-6 w-6" />
                        </motion.button>
                        {/* Mobile menu button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-100 transition-all duration-300"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMenuOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </motion.button>
                    </div>
                </div>
                {/* Mobile menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/10 backdrop-blur-sm md:hidden"
                                onClick={() => setIsMenuOpen(false)}
                            />
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute top-full left-0 right-0 md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg shadow-black/10 max-h-[80vh] overflow-y-auto"
                                id="mobile-menu"
                                role="menu"
                                aria-label="Mobile navigation menu"
                            >
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.05
                                            }
                                        }
                                    }}
                                    className="px-4 py-4 space-y-4"
                                >
                                    {/* Mobile Search Icon Only */}
                                    <div className="sm:hidden mb-2 flex justify-end">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-100 transition-all duration-300"
                                            aria-label="Search"
                                        >
                                            <MagnifyingGlassIcon className="h-6 w-6" />
                                        </motion.button>
                                    </div>
                                    {/* Navigation Links */}
                                    <div className="space-y-1">
                                        {navigationLinks.map(link => (
                                            <motion.div
                                                key={link.to}
                                                variants={{
                                                    hidden: { opacity: 0, y: 20 },
                                                    visible: { opacity: 1, y: 0 }
                                                }}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <MobileNavLink {...link} />
                                            </motion.div>
                                        ))}
                                        {/* Sign In Option for Mobile Menu */}
                                        {!user && (
                                            <motion.div
                                                variants={{
                                                    hidden: { opacity: 0, y: 20 },
                                                    visible: { opacity: 1, y: 0 }
                                                }}
                                                onClick={() => { setIsMenuOpen(false); navigate('/login'); }}
                                                className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 cursor-pointer mt-2"
                                            >
                                                <UserCircleIcon className="h-6 w-6" />
                                                <span>Sign In</span>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;

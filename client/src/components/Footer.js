import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    GlobeAltIcon,
} from '@heroicons/react/24/outline';
import {
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaFacebookF
} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = {
        company: [
            { label: 'About Us', path: '/about' },
            { label: 'Our Team', path: '/team' },
            { label: 'Portfolio', path: '/portfolio' },
            { label: 'Contact', path: '/contact' }
        ],
        services: [
            { label: 'Web Development', path: '/services#web' },
            { label: 'Mobile Apps', path: '/services#mobile' },
            { label: 'AI Solutions', path: '/services#ai' },
            { label: 'Cloud Services', path: '/services#cloud' }
        ]
    };

    const contactInfo = [
        { icon: EnvelopeIcon, text: 'contact@craftnest.agency' },
        { icon: PhoneIcon, text: '+880 1322-695162' },
        { icon: MapPinIcon, text: 'Dhaka, Bangladesh' },
        { icon: GlobeAltIcon, text: 'www.craftnest.agency' }
    ];

    const socialLinks = [
        { icon: FaLinkedinIn, href: '#' },
        { icon: FaGithub, href: '#' },
        { icon: FaInstagram, href: '#' },
        { icon: FaFacebookF, href: '#' }
    ];

    const FooterLink = ({ label, path }) => (
        <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link 
                to={path} 
                className="text-gray-400 hover:text-white transition-colors duration-300"
            >
                {label}
            </Link>
        </motion.div>
    );

    return (
        <footer className="relative bg-gray-900">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-10 bg-gradient-to-br from-primary-500 to-secondary-500" />
                <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-10 bg-gradient-to-br from-primary-400 to-secondary-600" />
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <img src="/logo.png" alt="CraftNest Logo" className="h-8" />
                        <p className="text-gray-400 mt-4">
                            Empowering businesses through innovative technology solutions and expert development services.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 flex items-center justify-center transition-all duration-300"
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <div className="space-y-2">
                            {footerSections.company.map((link, index) => (
                                <FooterLink key={index} {...link} />
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <div className="space-y-2">
                            {footerSections.services.map((link, index) => (
                                <FooterLink key={index} {...link} />
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => {
                                const Icon = contact.icon;
                                return (
                                    <div key={index} className="flex items-center space-x-3 text-gray-400">
                                        <Icon className="h-5 w-5" />
                                        <span>{contact.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} CraftNest. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
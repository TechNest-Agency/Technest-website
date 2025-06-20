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
        { icon: EnvelopeIcon, text: 'contact@launchlayer.agency' },
        { icon: PhoneIcon, text: '+880 1322-695162' },
        { icon: MapPinIcon, text: 'Dhaka, Bangladesh' },
        { icon: GlobeAltIcon, text: 'www.launchlayer.agency' }
    ];

    const socialLinks = [
        { icon: FaLinkedinIn, href: '#' },
        { icon: FaGithub, href: '#' },
        { icon: FaInstagram, href: '#' },
        { icon: FaFacebookF, href: '#' }
    ];

    // Update all footer section text/link colors to use black and pink gradient
    const FooterLink = ({ label, path }) => (
        <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link 
                to={path} 
                className="font-semibold bg-gradient-to-r from-black via-pink-500 to-black bg-clip-text text-transparent hover:text-pink-600 transition-colors duration-300"
            >
                {label}
            </Link>
        </motion.div>
    );

    return (
        <footer className="relative bg-white border-t border-gray-200">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-10 bg-gradient-to-br from-primary-100 to-secondary-100" />
                <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-10 bg-gradient-to-br from-primary-50 to-secondary-200" />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 md:py-16">
                    {/* Company Info */}
                    <div className="space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                        <span className="text-2xl font-extrabold text-black tracking-tight select-none" style={{ fontFamily: 'Garamond, serif' }}>
                            LaunchLayer
                        </span>
                        <p className="font-semibold bg-gradient-to-r from-black via-pink-500 to-black bg-clip-text text-transparent mt-4">
                            Empowering businesses through innovative technology solutions and expert development services.
                        </p>
                        <div className="flex space-x-4 justify-center sm:justify-start">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 hover:text-primary-600 hover:bg-primary-100 flex items-center justify-center transition-all duration-300"
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
                    <div className="mt-8 sm:mt-0 flex flex-col items-center sm:items-start">
                        <h3 className="font-bold bg-gradient-to-r from-black via-pink-500 to-black bg-clip-text text-transparent mb-4">Company</h3>
                        <div className="space-y-2">
                            {footerSections.company.map((link, index) => (
                                <FooterLink key={index} {...link} />
                            ))}
                        </div>
                    </div>
                    {/* Services */}
                    <div className="mt-8 lg:mt-0 flex flex-col items-center sm:items-start">
                        <h3 className="font-bold bg-gradient-to-r from-black via-pink-500 to-black bg-clip-text text-transparent mb-4">Services</h3>
                        <div className="space-y-2">
                            {footerSections.services.map((link, index) => (
                                <FooterLink key={index} {...link} />
                            ))}
                        </div>
                    </div>
                    {/* Contact Info */}
                    <div className="mt-8 lg:mt-0 flex flex-col items-center sm:items-start w-full">
                        <h3 className="font-bold bg-gradient-to-r from-black via-pink-500 to-black bg-clip-text text-transparent mb-4">Contact</h3>
                        <div className="flex flex-col gap-4 w-full">
                            {contactInfo.map((contact, index) => {
                                const Icon = contact.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-row items-center justify-center sm:justify-start gap-3 flex-wrap w-full text-center sm:text-left font-semibold bg-gradient-to-r from-black via-pink-500 to-black bg-clip-text text-transparent"
                                    >
                                        <Icon className="h-5 w-5 flex-shrink-0" />
                                        <span className="break-all text-sm sm:text-base">{contact.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* Newsletter Section removed and moved to its own component */}
                {/* Footer Bottom */}
                <div className="border-t border-gray-200 py-6 md:py-8 mt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="font-semibold bg-gradient-to-r from-black via-pink-500 to-black bg-clip-text text-transparent text-center">
                            © {currentYear} LaunchLayer. All rights reserved.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 md:mt-0 items-center">
                            <Link to="/privacy" className="text-sm font-semibold bg-gradient-to-r from-black via-pink-500 to-black bg-clip-text text-transparent hover:text-pink-600 transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-sm font-semibold bg-gradient-to-r from-black via-pink-500 to-black bg-clip-text text-transparent hover:text-pink-600 transition-colors duration-300">
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
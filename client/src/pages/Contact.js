import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Call Us',
      content: '+880 1322-695162',
      link: 'tel:+880 1322-695162'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      content: 'contact@launchlayer.agency',
      link: 'mailto:contact@launchlayer.agency'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      content: 'Dhaka,Bangladesh',
      link: 'https://maps.google.com'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <PageLayout
      title="Contact Us"
      subtitle="Let's Start a Conversation"
    >
      <div className="min-h-screen bg-black grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-black border border-gray-700 rounded-xl hover:bg-gray-900 transition-all duration-300"
              >
                <info.icon className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-300">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 bg-black border border-gray-700 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose Direct Contact?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary-500 mt-1 mr-3" />
                <p className="text-gray-300">Get personalized solutions tailored to your needs</p>
              </li>
              <li className="flex items-start">
                <ClockIcon className="h-6 w-6 text-primary-500 mt-1 mr-3" />
                <p className="text-gray-300">Quick response time with dedicated support</p>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative"
        >
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="p-8 bg-white border border-gray-200 rounded-2xl relative overflow-hidden"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-gray-900 mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 border border-gray-200"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-900 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 border border-gray-200"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-900 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 border border-gray-200"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-900 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 border border-gray-200"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg flex items-center justify-center text-white transition-all duration-300
                  ${isSubmitting
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-400 to-secondary-400 hover:from-primary-300 hover:to-secondary-300'
                  }`}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    Send Message
                    <PaperAirplaneIcon className="w-5 h-5 ml-2" />
                  </>
                )}
              </motion.button>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/40 to-secondary-100/40 -z-10" />
          </motion.form>

          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary-100/30 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary-100/30 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Contact;
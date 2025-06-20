import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { useCart } from '../context/CartContext';
import {
  CodeBracketIcon,
  CloudArrowUpIcon,
  DevicePhoneMobileIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  SparklesIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
  ChatBubbleBottomCenterTextIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  SwatchIcon,
  MapIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  EnvelopeIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  const { addToCart } = useCart();
  const [selectedTab, setSelectedTab] = useState('all');

  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies.',
      icon: CodeBracketIcon,
      features: ['React/Next.js', 'Node.js/Express', 'REST APIs', 'Database Design'],
      category: 'Development'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure solutions.',
      icon: CloudArrowUpIcon,
      features: ['AWS/Azure', 'Cloud Migration', 'DevOps', 'Serverless'],
      category: 'Infrastructure'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      icon: DevicePhoneMobileIcon,
      features: ['React Native', 'iOS/Android', 'App Store Publishing', 'Mobile UI/UX'],
      category: 'Development'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced AI.',
      icon: CubeTransparentIcon,
      features: ['Data Analysis', 'Predictive Models', 'Neural Networks', 'Computer Vision'],
      category: 'Technology'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for digital assets.',
      icon: ShieldCheckIcon,
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Data Protection'],
      category: 'Security'
    },
    {
      title: 'Digital Transformation',
      description: 'Strategic digital solutions for business growth.',
      icon: RocketLaunchIcon,
      features: ['Process Automation', 'Digital Strategy', 'Innovation', 'Analytics'],
      category: 'Consulting'
    }
  ];

  const whyChooseUs = [
    {
      icon: RocketLaunchIcon,
      title: 'Innovation',
      description: 'Cutting-edge solutions using the latest technologies'
    },
    {
      icon: ChartBarIcon,
      title: 'Scalability',
      description: 'Solutions that grow with your business needs'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Enterprise-grade security in all our solutions'
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: 'Support',
      description: '24/7 dedicated customer support'
    }
  ];

  const processSteps = [
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: 'Consultation',
      description: 'Understanding your needs and objectives'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Planning',
      description: 'Detailed project planning and architecture'
    },
    {
      icon: CommandLineIcon,
      title: 'Development',
      description: 'Development with regular updates'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Launch',
      description: 'Deployment and continuous support'
    }
  ];

  const packages = [
    {
      title: "Enterprise Security Pack",
      subtitle: "Advanced Protection",
      icon: ShieldCheckIcon,
      category: "dev",
      featured: true,
      bestFor: "Large businesses, financial institutions, data-sensitive operations",
      features: [
        "Full Security Audit",
        "Penetration Testing",
        "Compliance Assessment",
        "Security Monitoring Setup",
        "Incident Response Plan",
        "Staff Security Training"
      ],
      delivery: "4-6 weeks",
      priceRange: "$3,000 – $5,000"
    },
    {
      title: "Custom Web Development",
      subtitle: "Tailored Solutions",
      icon: CodeBracketIcon,
      category: "dev",
      bestFor: "Growing businesses needing custom solutions",
      features: [
        "Custom Website Development",
        "Mobile-First Design",
        "API Integration",
        "Performance Optimization",
        "SEO Best Practices",
        "3 Months Support"
      ],
      delivery: "8-12 weeks",
      priceRange: "$5,000 – $15,000"
    },
    {
      title: "UI/UX Design Package",
      subtitle: "Premium Design Experience",
      icon: SwatchIcon,
      category: "design",
      bestFor: "Businesses focusing on user experience",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "UI Design System",
        "Interactive Prototypes",
        "Usability Testing",
        "Design Documentation"
      ],
      delivery: "4-6 weeks",
      priceRange: "$4,000 – $8,000"
    },
    {
      title: "Digital Marketing Bundle",
      subtitle: "Growth & Visibility",
      icon: MegaphoneIcon,
      category: "marketing",
      bestFor: "Businesses seeking online growth",
      features: [
        "SEO Strategy & Implementation",
        "Social Media Management",
        "Content Marketing Plan",
        "Email Marketing Setup",
        "Analytics & Reporting",
        "Ad Campaign Management"
      ],
      delivery: "3 months",
      priceVariants: [
        { name: "Basic", price: "$1,500/month" },
        { name: "Pro", price: "$2,500/month" },
        { name: "Enterprise", price: "$4,000/month" }
      ]
    },
    {
      title: "E-commerce Solution",
      subtitle: "Online Store Setup",
      icon: ShoppingCartIcon,
      category: "dev",
      bestFor: "Retail businesses moving online",
      features: [
        "E-commerce Platform Setup",
        "Product Catalog Integration",
        "Payment Gateway Setup",
        "Inventory Management",
        "Order Processing System",
        "Mobile Shopping App"
      ],
      delivery: "6-8 weeks",
      priceRange: "$4,000 – $10,000"
    },
    {
      title: "Brand Identity Package",
      subtitle: "Visual Brand Development",
      icon: PaintBrushIcon,
      category: "design",
      bestFor: "New businesses or rebranding projects",
      features: [
        "Logo Design",
        "Brand Style Guide",
        "Business Card Design",
        "Social Media Templates",
        "Marketing Materials",
        "Brand Strategy Document"
      ],
      delivery: "3-4 weeks",
      priceRange: "$2,500 – $5,000"
    },
    {
      title: "Visibility Kickstart Pack",
      subtitle: "Be Seen Where It Counts",
      icon: MegaphoneIcon,
      category: "marketing",
      bestFor: "Founders who just launched or rebranded",
      features: [
        "Profile Optimization (LinkedIn, Twitter, Flippa)",
        "10 Social Media Posts (Content + Design)",
        "Hashtag Strategy + Caption Guide",
        "1 Social Media Audit Report"
      ],
      delivery: "7 days",
      priceRange: "$150"
    },
    {
      title: "Cold Outreach Pack",
      subtitle: "DMs That Don't Suck",
      icon: EnvelopeIcon,
      category: "marketing",
      bestFor: "Solo founders or agencies trying to land first clients",
      features: [
        "3 Cold Email Templates (Custom)",
        "2 DM Scripts (LinkedIn/Discord)",
        "Lead Sheet Template (Notion or Sheet)",
        "Mini Training: How to follow-up without being pushy"
      ],
      delivery: "5 days",
      priceRange: "$100"
    },
    {
      title: "Growth Engine Pack",
      subtitle: "Turn Posts Into Leads",
      icon: ChartBarIcon,
      category: "marketing",
      featured: true,
      bestFor: "SaaS & Service Founders wanting steady organic reach",
      features: [
        "20 Custom Branded Social Media Posts",
        "CTA Design Integration",
        "Caption Copy + Scheduling Plan",
        "Competitor Content Analysis"
      ],
      delivery: "10-14 days",
      priceRange: "$300/month"
    },
    {
      title: "Flippa Marketing Boost",
      subtitle: "Make It Sell",
      icon: RocketLaunchIcon,
      category: "marketing",
      bestFor: "Creators listing products on Flippa",
      features: [
        "Listing Copywriting (Title + Description + CTA)",
        "Cover Image Design",
        "Product Demo Script",
        "3 Promo Posts (For social or email)",
        "Add-on: Video Demo Script/Recording [+$100]"
      ],
      delivery: "3-5 days",
      priceVariants: [
        { name: "Basic", price: "$180" },
        { name: "With Video Add-on", price: "$280" }
      ]
    },
    {
      title: "Marketing Strategy Intensive",
      subtitle: "One Week to Clarity",
      icon: SparklesIcon,
      category: "marketing",
      bestFor: "Small teams with unclear positioning, niche, or offer",
      features: [
        "60-min Strategy Call (Zoom)",
        "Ideal Client Persona Mapping",
        "Offer Refinement Doc",
        "1-Month Growth Plan (Organic + Outreach)"
      ],
      delivery: "7 days",
      priceRange: "$250"
    },
    {
      title: "Agency Bundle",
      subtitle: "Built to Get Clients",
      icon: BriefcaseIcon,
      category: "marketing",
      bestFor: "Freelancers or agencies trying to scale online",
      features: [
        "Positioning & Offer Clarity Workshop",
        "30 Social Posts (15 Carousel, 15 Promo)",
        "Cold Email + DM Templates",
        "Client Onboarding Docs (Notion Templates)"
      ],
      delivery: "3 weeks",
      priceRange: "$500"
    },
    {
      title: "UI/UX Starter Pack",
      subtitle: "Your MVP's First Look",
      icon: SwatchIcon,
      category: "design",
      bestFor: "Founders building their first product or MVP",
      features: [
        "1 Landing Page (Desktop + Mobile)",
        "1 Dashboard or App Screen Set (Up to 5 screens)",
        "Wireframe → UI Flow",
        "Light UX Research (User Personas, Goals)",
        "2 Rounds of Revisions"
      ],
      delivery: "5-7 days",
      priceRange: "$200"
    },
    {
      title: "UX Discovery Pack",      subtitle: "Clarity Before Code",
      icon: MapIcon,
      category: "design",
      bestFor: "Anyone who has a product idea but no structure yet",
      features: [
        "UX Research (User Personas, Journey Map)",
        "Low-Fidelity Wireframes (Up to 7-10 screens)",
        "Information Architecture"
      ],
      delivery: "7-10 days",
      priceRange: "$300"
    },
    {
      title: "UI Overhaul Pack",
      subtitle: "Redesign That Converts",
      icon: PaintBrushIcon,
      category: "design",
      bestFor: "SaaS tools, marketplaces, or old platforms needing visual rework",
      features: [
        "Audit of Existing Design",
        "Fresh Modern UI Design (Up to 10 screens)",
        "Typography, Colors, Icons Revamp",
        "Interaction/Animation Suggestion Guide",
        "Developer Handoff Ready (Figma → Dev)"
      ],
      delivery: "10-14 days",
      priceRange: "$450"
    },
    {
      title: "UX Audit + Fixes",
      subtitle: "Fix Why Users Drop Off",
      icon: MagnifyingGlassIcon,
      category: "design",
      bestFor: "Live products with low conversion or confused users",
      features: [
        "Heuristic UX Audit",
        "Behavior Map (Where Users Get Stuck)",
        "Action Plan with Quick Wins",
        "Redesign of 3 Problem Screens",
        "Before/After Comparison"
      ],
      delivery: "5-7 days",
      priceRange: "$250"
    },
    {
      title: "Brand + UI Kit Pack",
      subtitle: "Look Professional from Day 1",
      icon: SparklesIcon,
      category: "design",
      bestFor: "Solo founders & micro SaaS teams",
      features: [
        "Mini Style Guide (Fonts, Colors, Buttons)",
        "Reusable Figma UI Kit",
        "5 Core UI Components (Navbar, Card, Modal, etc.)",
        "Custom Logo (Minimal Style)",
        "Branding Assets Pack (Favicon, Social, CTA banners)"
      ],
      delivery: "7-10 days",
      priceRange: "$300"
    },
    {
      title: "Complete SaaS UI/UX Pack",
      subtitle: "Everything but the Code",
      icon: RocketLaunchIcon,
      category: "design",
      featured: true,
      bestFor: "SaaS founders ready to hand off to devs",
      features: [
        "UX Discovery + Flow Mapping",
        "Wireframes (10-15 Screens)",
        "High-Fidelity UI in Figma",
        "Mobile + Desktop Variants",
        "Dev Handoff (Figma components + Export Guidelines)",
        "BONUS: Design Feedback Round with Devs"
      ],
      delivery: "2-3 weeks",
      priceRange: "$700"
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
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none z-0" />
      <PageLayout>
        {/* Hero Section */}
        <motion.div
          className="relative bg-white rounded-3xl overflow-hidden mb-20 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 bg-white" />
          <div className="relative max-w-7xl mx-auto py-24 px-6">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-pink-400 text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform Your Digital Presence
            </motion.h1>
            <motion.p 
              className="text-xl text-pink-200 text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Expert solutions tailored to your business needs
            </motion.p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 bg-black"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl bg-black p-8 hover:bg-gray-900 transition-all duration-500 border border-gray-700 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/10 transform hover:-translate-y-1"
            >
              <service.icon className="h-12 w-12 text-primary-500 mb-6" />
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary-100/40 to-secondary-100/40 text-primary-700 rounded-full text-sm mb-4 border border-primary-100 group-hover:border-primary-300 transition-all duration-300">
                {service.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-300">
                    <SparklesIcon className="h-5 w-5 text-primary-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50/20 to-secondary-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>      {/* Why Choose Us */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20 bg-gradient-to-br from-black via-pink-950 to-pink-900"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-pink-400 text-center mb-12"
          >
            Why Choose LaunchLayer
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-black via-pink-950 to-pink-900 border border-pink-900 rounded-xl hover:bg-pink-950 transition-all duration-300 text-center"
              >
                <item.icon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-pink-400 mb-2">{item.title}</h3>
                <p className="text-pink-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20 bg-gradient-to-br from-black via-pink-950 to-pink-900"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-pink-400 text-center mb-12"
          >
            Our Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="p-6 bg-gradient-to-br from-black via-pink-950 to-pink-900 border border-pink-900 rounded-xl hover:bg-pink-950 transition-all duration-300">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shadow-lg shadow-primary-100/20 border border-primary-200">
                    {index + 1}
                  </div>
                  <step.icon className="h-12 w-12 text-primary-500 mb-4" />
                  <h3 className="text-xl font-bold text-pink-400 mb-2">{step.title}</h3>
                  <p className="text-pink-200">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-primary-200 to-primary-100 transform -translate-y-1/2 rounded-full shadow-glow" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Package Filter */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-12 bg-black"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTab('all')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                selectedTab === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50'
              }`}
            >
              All Packages
            </motion.button>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTab('dev')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                selectedTab === 'dev'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50'
              }`}
            >
              Development
            </motion.button>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTab('design')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                selectedTab === 'design'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50'
              }`}
            >
              Design
            </motion.button>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTab('marketing')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                selectedTab === 'marketing'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50'
              }`}
            >
              Marketing
            </motion.button>
          </div>
        </motion.div>

        {/* Pricing Grid */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20 bg-black"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative group rounded-2xl overflow-hidden ${
                  pkg.featured 
                    ? 'md:col-span-2 lg:col-span-1 scale-105 z-10' 
                    : ''
                }`}
              >
                {/* Card Background with Gradient Border */}
                <div className="absolute inset-0.5 bg-gradient-to-br from-black via-pink-900 to-pink-700 rounded-2xl z-0" />
                <div className={`relative h-full p-8 group-hover:backdrop-brightness-110 transition-all duration-500 ${
                  pkg.featured
                    ? 'bg-gradient-to-br from-pink-900/80 via-black/90 to-pink-700/80 border-2 border-pink-400/60'
                    : 'bg-gradient-to-br from-black via-pink-950 to-pink-900 border border-pink-900'
                }`}>
                  {pkg.featured && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-400 to-secondary-400 text-white text-sm px-4 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}

                  <pkg.icon className="w-12 h-12 text-primary-500 mb-6" />
                  
                  <h3 className="text-2xl font-bold text-pink-400 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-pink-300 mb-4">{pkg.subtitle}</p>
                    {pkg.priceRange ? (
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-4">
                      {pkg.priceRange}
                      {pkg.priceRange && pkg.priceRange.includes('/month') && (
                        <span className="text-sm font-normal text-pink-200 ml-1">/month</span>
                      )}
                    </div>
                  ) : pkg.priceVariants ? (
                    <div className="space-y-2 mb-4">
                      {pkg.priceVariants.map((variant, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm bg-pink-950/40 p-2 rounded-lg">
                          <span className="text-pink-200">{variant.name}</span>
                          <span className="text-pink-400 font-semibold">{variant.price}</span>
                        </div>
                      ))}
                    </div>
                  ) : pkg.monthlyPrice ? (
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-4">
                      ${pkg.monthlyPrice}
                      <span className="text-sm font-normal text-pink-200 ml-1">/month</span>
                    </div>                ) : null}

                  <p className="text-sm text-pink-200 mb-6">
                    Best For: {pkg.bestFor}
                  </p>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-pink-400">✓</div>
                        <span className="ml-3 text-pink-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.delivery && (
                    <p className="text-sm text-pink-200 mb-6">
                      Delivery: {pkg.delivery}
                    </p>
                  )}                <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const itemToAdd = {
                        ...pkg,
                        price: pkg.priceRange || (pkg.priceVariants && pkg.priceVariants[0].price) || `$${pkg.monthlyPrice}`
                      };
                      addToCart(itemToAdd);
                    }}
                    className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-pink-500 to-pink-700 text-white hover:shadow-lg hover:shadow-pink-500/25 border border-pink-400`}
                  >
                    Get Started
                  </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Other sections */}
          {/* CTA Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center bg-white"
          >
            <motion.div
              variants={itemVariants}          className="p-12 bg-white rounded-2xl relative overflow-hidden border border-gray-200"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our innovative solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg shadow-lg shadow-primary-500/20 inline-flex items-center border border-primary-300"
              >
                Schedule a Consultation
                <RocketLaunchIcon className="w-5 h-5 ml-2" />
              </motion.button>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50/40 to-secondary-100/40 -z-10" />
            </motion.div>
          </motion.section>
        </PageLayout>
      </div>
  );
};

export default Services;
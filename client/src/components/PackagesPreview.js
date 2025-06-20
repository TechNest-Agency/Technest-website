import React from 'react';
import { motion } from 'framer-motion';

const packages = [
  {
    name: 'Startup Package 🚀',
    price: '$499',
    features: ['Landing Page', 'Basic SEO', '1 Month Support'],
  },
  {
    name: 'SaaS Launch Kit 💼',
    price: '$1499',
    features: ['MVP SaaS App', 'Payment Integration', '3 Months Support'],
  },
  {
    name: 'Website Revamp 🎯',
    price: '$899',
    features: ['Redesign', 'Performance Boost', '2 Months Support'],
  },
];

const PackagesPreview = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Productized Packages</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-8 flex-1 min-w-[250px] flex flex-col items-center hover:shadow-2xl transition-shadow"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
            <div className="text-3xl font-extrabold text-primary-600 mb-4">{pkg.price}</div>
            <ul className="mb-4 space-y-1">
              {pkg.features.map((f, i) => (
                <li key={i} className="text-gray-700">{f}</li>
              ))}
            </ul>
            <button className="mt-auto px-4 py-2 bg-pink-600 text-white rounded font-bold hover:bg-pink-700 transition">Add to Cart</button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PackagesPreview;

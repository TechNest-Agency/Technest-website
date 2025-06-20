import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Clients Served', value: 120 },
  { label: 'Projects Completed', value: 85 },
  { label: 'Avg. Delivery Time', value: '3.2 weeks' },
  { label: 'Repeat Clients', value: '67%' },
];

const ResultsStats = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Results We Delivered</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="bg-pink-50 rounded-xl p-8 flex flex-col items-center shadow hover:shadow-lg transition-shadow"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-4xl font-extrabold text-pink-600 mb-2 animate-pulse">{stat.value}</span>
            <span className="text-lg font-semibold text-gray-700 text-center">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsStats;

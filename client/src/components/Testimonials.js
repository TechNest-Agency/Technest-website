import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sumaiya Rahman',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'LaunchLayer delivered our SaaS MVP in record time. Real human support, always!',
    rating: 5
  },
  {
    name: 'Jannat Hossain',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'Professional, creative, and reliable. Highly recommend for startups.',
    rating: 5
  },
  {
    name: 'Sumon Ahmed',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Loved the custom codebase and clear communication throughout.',
    rating: 5
  }
];

const Testimonials = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Client Testimonials</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center max-w-xs hover:shadow-2xl transition-shadow"
            whileHover={{ y: -5 }}
          >
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-4" />
            <div className="flex mb-2">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 italic mb-2 text-center">“{t.text}”</p>
            <span className="font-bold text-pink-600">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

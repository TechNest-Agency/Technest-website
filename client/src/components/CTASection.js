import React from 'react';

const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Got an idea? Let’s build it.</h2>
      <p className="text-lg mb-8">Book a free consultation and let’s turn your vision into reality.</p>
      <a href="/contact" className="inline-block px-8 py-4 bg-white text-pink-600 font-bold rounded-full shadow-lg hover:bg-pink-100 transition text-lg">Book Free Consultation</a>
    </div>
  </section>
);

export default CTASection;

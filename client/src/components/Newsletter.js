import React from 'react';

const Newsletter = () => (
  <div className="max-w-4xl mx-auto w-full mb-12">
    <div className="relative bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl pointer-events-none" />
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Subscribe to our newsletter for the latest tech insights and updates.
        </p>
        <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-gray-100 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all duration-300"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-semibold transform transition hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25"
          >
            Subscribe
          </button>
        </form>
        <p className="text-gray-400 text-sm text-center mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  </div>
);

export default Newsletter;

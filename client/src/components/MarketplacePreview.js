import React from 'react';

const addons = [
  { name: 'Logo Animation', price: '$99' },
  { name: 'Speed Optimization', price: '$149' },
  { name: 'Blog Setup', price: '$79' },
  { name: 'SEO Boost', price: '$129' },
];

const MarketplacePreview = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Add-on Marketplace</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {addons.map((addon, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center min-w-[180px] hover:shadow-lg transition">
            <span className="font-bold text-lg mb-2">{addon.name}</span>
            <span className="text-pink-600 font-extrabold text-xl mb-4">{addon.price}</span>
            <button className="px-4 py-2 bg-pink-600 text-white rounded font-bold hover:bg-pink-700 transition">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MarketplacePreview;

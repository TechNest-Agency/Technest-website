import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$499',
    features: ['Landing Page', 'Basic SEO', '1 Month Support'],
    highlight: false
  },
  {
    name: 'Pro',
    price: '$1499',
    features: ['Full Website', 'Advanced SEO', '3 Months Support', 'E-commerce'],
    highlight: true
  },
  {
    name: 'Custom',
    price: 'Contact Us',
    features: ['Everything in Pro', 'Custom Features', 'Dedicated Support'],
    highlight: false
  }
];

const PricingSnapshot = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Pricing Snapshot</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {plans.map((plan, idx) => (
          <div key={idx} className={`rounded-xl shadow-lg p-8 flex-1 min-w-[250px] flex flex-col items-center border-2 ${plan.highlight ? 'border-pink-600' : 'border-gray-200'} bg-gray-50`}>
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl font-extrabold text-primary-600 mb-4">{plan.price}</div>
            <ul className="mb-4 space-y-1">
              {plan.features.map((f, i) => (
                <li key={i} className="text-gray-700">{f}</li>
              ))}
            </ul>
            <button className="mt-auto px-4 py-2 bg-pink-600 text-white rounded font-bold hover:bg-pink-700 transition">{plan.name === 'Custom' ? 'Customize Your Plan' : 'Choose Plan'}</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSnapshot;

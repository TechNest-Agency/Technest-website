import React from 'react';

const faqs = [
  {
    q: 'Do you offer revisions?',
    a: 'Yes, we offer multiple rounds of revisions to ensure your satisfaction.'
  },
  {
    q: 'How long does a project take?',
    a: 'Most projects are delivered within 2-4 weeks, depending on scope.'
  },
  {
    q: 'Do I own the final code?',
    a: 'Absolutely! You get full ownership and rights to your project code.'
  }
];

const MiniFAQ = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, idx) => (
          <details key={idx} className="mb-4 border rounded-lg p-4 group">
            <summary className="font-semibold cursor-pointer group-open:text-pink-600 transition-colors">{faq.q}</summary>
            <p className="mt-2 text-gray-700">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default MiniFAQ;

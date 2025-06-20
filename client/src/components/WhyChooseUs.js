import React from 'react';
import { CheckCircleIcon, UserIcon, ClockIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const features = [
  { icon: <ClockIcon className="h-8 w-8 text-pink-500" />, label: 'On-time Delivery' },
  { icon: <UserIcon className="h-8 w-8 text-pink-500" />, label: 'Real Human Support' },
  { icon: <CheckCircleIcon className="h-8 w-8 text-pink-500" />, label: 'Ownership Rights' },
  { icon: <CodeBracketIcon className="h-8 w-8 text-pink-500" />, label: 'Custom Codebase' },
];

const WhyChooseUs = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Why Choose LaunchLayer?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {f.icon}
            <span className="mt-3 text-lg font-semibold text-gray-800 text-center">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

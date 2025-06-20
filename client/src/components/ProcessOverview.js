import React from 'react';
import { BeakerIcon, ClipboardDocumentCheckIcon, RocketLaunchIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const steps = [
  { icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-pink-500" />, label: 'Discovery Call' },
  { icon: <BeakerIcon className="h-8 w-8 text-pink-500" />, label: 'Planning & Wireframes' },
  { icon: <ClipboardDocumentCheckIcon className="h-8 w-8 text-pink-500" />, label: 'Execution & Feedback' },
  { icon: <RocketLaunchIcon className="h-8 w-8 text-pink-500" />, label: 'Launch & Support' },
];

const ProcessOverview = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-center">How We Work</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center relative">
            <div className="z-10">{step.icon}</div>
            <span className="mt-3 text-lg font-semibold text-gray-800 text-center">{step.label}</span>
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute right-[-60px] top-4 w-12 h-1 bg-pink-200 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessOverview;

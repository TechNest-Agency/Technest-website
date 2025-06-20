import React from 'react';

const techs = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
];

const TechStack = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Tools & Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {techs.map((t, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img src={t.logo} alt={t.name} className="h-16 w-16 mb-2" />
            <span className="text-sm font-semibold text-gray-700">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;

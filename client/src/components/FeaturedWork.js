import React from 'react';
import { motion } from 'framer-motion';

const FeaturedWork = () => {
  // TODO: Replace with real data and images
  const projects = [
    {
      title: 'SaaS Dashboard',
      tools: ['React', 'Tailwind', 'Node.js'],
      image: 'https://source.unsplash.com/400x250/?dashboard,app',
      link: '#'
    },
    {
      title: 'Startup Landing',
      tools: ['Figma', 'React'],
      image: 'https://source.unsplash.com/400x250/?startup,website',
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      tools: ['MongoDB', 'Node.js', 'React'],
      image: 'https://source.unsplash.com/400x250/?ecommerce,web',
      link: '#'
    },
    {
      title: 'Portfolio Site',
      tools: ['Next.js', 'Figma'],
      image: 'https://source.unsplash.com/400x250/?portfolio,web',
      link: '#'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl shadow-lg overflow-hidden group bg-gray-50 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="px-2 py-1 bg-pink-100 text-pink-600 rounded text-xs font-semibold group-hover:bg-pink-600 group-hover:text-white transition-colors">{tool}</span>
                  ))}
                </div>
                <a href={project.link} className="inline-block mt-2 text-primary-600 font-semibold hover:underline">View Project</a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a href="/portfolio" className="px-6 py-3 bg-primary-600 text-white rounded-lg font-bold shadow hover:bg-primary-700 transition">View Full Portfolio</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;

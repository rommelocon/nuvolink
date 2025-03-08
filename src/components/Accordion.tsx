import { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: 'Affordable Innovation',
      description: 'We provide state of the art technology at prices that fit every budget.',
    },
    {
      title: 'User-Friendly Solutions',
      description: 'Our products are designed for easy installation and effortless use.',
    },
    {
      title: 'Global Reach',
      description: 'As a global leader, we deliver smart home solutions to households around the world.',
    },
    {
      title: 'Future-Ready',
      description: 'Stay ahead with products that evolve to meet the demands of tomorrow.',
    },
    {
      title: 'Free Services',
      description: 'We offer free installation and other related services to ensure a smooth and hassle-free experience.',
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {services.map((service, index) => (
        <div key={index} className="mb-4 border rounded-lg shadow-sm">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full p-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-lg focus:outline-none"
          >
            <span className="font-semibold">{service.title}</span>
            <span className="transform transition-transform duration-200">
              {activeIndex === index ? '−' : '+'}
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white">
              <p className="text-gray-600">{service.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
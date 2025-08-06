import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WaitlistModal } from './WaitlistModal';

export const WaitlistSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      title: "Fine Dining Restaurants",
      description: "Elevate your dining experience with our sophisticated POS system.",
      image: "/hero7.avif"
    },
    {
      title: "Quick Service Restaurants",
      description: "Speed up operations and reduce wait times.",
      image: "/hero5.avif"
    },
    {
      title: "Cafes & Bakeries",
      description: "Perfect for managing your café with ease.",
      image: "/hero6.avif"
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-900 via-blue-900 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
              Choose Your Restaurant Type
            </h2>
            <p className="text-xl text-blue-100">
              Join our waitlist and be among the first to experience the future of restaurant management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-colors">
                  <div className="h-48 bg-gray-900/50">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-blue-100">{feature.description}</p>
                    <button className="mt-4 text-blue-400 font-semibold hover:text-blue-300 flex items-center space-x-2 group">
                      <span>Join Waitlist</span>
                      <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-lg font-medium rounded-xl text-white bg-transparent hover:bg-blue-400/10 transition-all duration-200 space-x-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Join Waitlist Now</span>
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </motion.button>
          </div>
        </div>
      </section>

      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

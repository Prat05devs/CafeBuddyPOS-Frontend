import React from 'react';
import { motion } from 'framer-motion';

export const MenuManagementSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Powerful Menu Management
          </h2>
          <p className="text-xl text-gray-600">
            Take control of your menu with our intuitive management system. Update prices, add items, and manage categories in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Real-time Menu Updates</h3>
              <p className="text-gray-600">Instantly update menu items, prices, and availability across all your devices.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Category Management</h3>
              <p className="text-gray-600">Organize your menu with custom categories and subcategories for better organization.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Special Offers & Combos</h3>
              <p className="text-gray-600">Create and manage special offers, combo meals, and happy hour discounts effortlessly.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/home1.avif"
                alt="Menu Management Interface"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full px-4 py-2 text-sm font-medium">
                Live Preview
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

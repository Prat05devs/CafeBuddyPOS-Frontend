import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export const FeatureSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Order Management",
      description: "Accept and manage orders from multiple platforms in one place"
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Track sales, inventory, and performance in real-time"
    },
    {
      icon: "🔄",
      title: "Menu Optimization",
      description: "Dynamic menu updates across all platforms instantly"
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Manage your restaurant from anywhere, anytime"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-[#1DE9B6] to-[#29B6F6] bg-clip-text text-transparent">
              Grow Your Restaurant
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            One platform to accept, manage and grow your restaurant business
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Workflow Integration Section */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/pos-workflow.jpg" 
                alt="POS Workflow" 
                className="w-full h-auto"
              />
              {/* Floating UI Elements */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 text-sm">
                <div className="font-semibold text-blue-600">98% Uptime</div>
                <div className="text-gray-500">Last 30 days</div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 text-sm">
                <div className="font-semibold text-green-600">24/7 Support</div>
                <div className="text-gray-500">Always available</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Seamless Integration with Your Workflow
            </h3>
            <p className="text-gray-600 text-lg">
              Our POS system adapts to your restaurant's workflow, making it easier to manage orders, 
              track inventory, and boost efficiency.
            </p>
            <ul className="space-y-4">
              {[
                "Intuitive interface requires minimal training",
                "Automated order routing to kitchen display systems",
                "Real-time inventory tracking and alerts"
              ].map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

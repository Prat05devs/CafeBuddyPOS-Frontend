import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, LineChart, PieChart } from 'lucide-react';

export const AnalyticsSection: React.FC = () => {
  const features = [
    {
      icon: <BarChart className="w-6 h-6 text-blue-500" />,
      title: 'Sales Analytics',
      description: 'Track your daily, weekly, and monthly sales performance with detailed breakdowns.'
    },
    {
      icon: <LineChart className="w-6 h-6 text-green-500" />,
      title: 'Growth Insights',
      description: "Monitor your restaurant's growth with comprehensive performance metrics."
    },
    {
      icon: <PieChart className="w-6 h-6 text-purple-500" />,
      title: 'Menu Performance',
      description: 'Analyze your best-selling items and optimize your menu for maximum profit.'
    }
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#DBE4C9' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Data-Driven Decisions
          </h2>
          <p className="text-xl text-gray-600">
            Make informed decisions with our powerful analytics tools. Track sales, monitor growth, and optimize your operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="grid gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
                  >
                    <div className="shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                src="/hero4.png"
                alt="Analytics Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-2 text-sm font-medium">
                Live Dashboard
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

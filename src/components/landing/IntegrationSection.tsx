import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const IntegrationSection = () => {
  const platforms = [
    {
      name: "Swiggy",
      icon: "/platform-logos/swiggy.svg",
      description: "India's largest food delivery platform"
    },
    {
      name: "Zomato",
      icon: "/platform-logos/zomato.svg",
      description: "Premier restaurant discovery platform"
    },
    {
      name: "ONDC",
      icon: "/platform-logos/ondc.svg",
      description: "Open Network for Digital Commerce"
    },
    {
      name: "UPI",
      icon: "/platform-logos/upi.svg",
      description: "Instant payment solutions"
    }
  ];

  const benefits = [
    {
      title: "Real-Time Sync",
      description: "Orders automatically sync across all platforms"
    },
    {
      title: "Smart Routing",
      description: "Intelligent order routing to kitchen stations"
    },
    {
      title: "Unified Reports",
      description: "Combined analytics from all platforms"
    },
    {
      title: "Auto Settlement",
      description: "Automated payment reconciliation"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Integrations Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Seamless Integration with{' '}
            <span className="bg-gradient-to-r from-[#1DE9B6] to-[#29B6F6] bg-clip-text text-transparent">
              Popular Platforms
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Connect with India's leading food delivery and payment platforms
          </motion.p>
        </div>

        {/* Platform Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <img
                src={platform.icon}
                alt={platform.name}
                className="h-12 w-auto mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
              <p className="text-gray-600 text-sm">{platform.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Why Choose Our Integration Platform?
            </h3>
            <p className="text-gray-600 text-lg">
              Our platform seamlessly connects with your favorite services while keeping 
              everything organized and efficient.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <h4 className="font-semibold text-lg">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
            <Button
              size="lg"
              className="bg-[#0052FF] hover:bg-blue-700 text-white mt-4"
            >
              View All Integrations →
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/integration-dashboard.jpg"
              alt="Integration Dashboard"
              className="rounded-lg shadow-2xl"
            />
            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4"
            >
              <div className="text-sm font-semibold text-blue-600">100+ Integrations</div>
              <div className="text-xs text-gray-500">And growing...</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

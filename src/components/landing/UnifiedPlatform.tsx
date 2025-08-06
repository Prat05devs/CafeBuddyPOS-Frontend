import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export const UnifiedPlatform = () => {
  const steps = [
    {
      number: "01",
      title: "Order Received",
      description: "Orders from all platforms automatically sync to one dashboard"
    },
    {
      number: "02",
      title: "Kitchen Assignment",
      description: "Smart routing to the right kitchen station"
    },
    {
      number: "03",
      title: "Preparation",
      description: "Real-time tracking and status updates"
    },
    {
      number: "04",
      title: "Delivery",
      description: "Automatic rider assignment and delivery tracking"
    }
  ];

  const metrics = [
    {
      percentage: "95%",
      description: "Faster Order Processing",
      color: "from-blue-400 to-blue-600"
    },
    {
      percentage: "78%",
      description: "Reduction in Missed Orders",
      color: "from-green-400 to-green-600"
    },
    {
      percentage: "99.9%",
      description: "Order Accuracy",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Unified Platform for{' '}
            <span className="bg-gradient-to-r from-[#1DE9B6] to-[#29B6F6] bg-clip-text text-transparent">
              All Your Orders
            </span>
          </motion.h2>
        </div>

        {/* Never Miss an Order Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/order-management.jpg"
              alt="Order Management"
              className="rounded-lg shadow-2xl"
            />
            {/* Floating UI Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4"
            >
              <div className="text-sm font-semibold text-blue-600">Swiggy Order #1234</div>
              <div className="text-xs text-gray-500">2 mins ago</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4"
            >
              <div className="text-sm font-semibold text-green-600">Zomato Order #5678</div>
              <div className="text-xs text-gray-500">Just now</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">Never Miss an Order Again</h3>
            <p className="text-gray-600 text-lg">
              Manage all your orders from different platforms in one place. 
              Get real-time notifications and updates for every order.
            </p>
            <ul className="space-y-4">
              {[
                "Unified dashboard for all platforms",
                "Smart order routing and assignment",
                "Real-time order tracking and updates"
              ].map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              How It Works: From Order to Delivery
            </h3>
            <p className="text-gray-600 text-lg">
              A streamlined process that ensures efficiency at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-blue-600/20 mb-4">
                      {step.number}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.percentage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                {metric.percentage}
              </div>
              <div className="text-gray-600">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

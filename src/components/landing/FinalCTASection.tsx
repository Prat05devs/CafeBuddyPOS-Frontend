import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const benefits = [
    "30-day free trial with all features",
    "No credit card required",
    "24/7 priority support",
    "Free onboarding assistance"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Transform Your Restaurant Operations Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful restaurants using our POS system to streamline their operations and boost revenue.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              Schedule Demo
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center gap-2 text-blue-100"
              >
                <Check className="w-5 h-5 text-green-400" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

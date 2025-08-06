import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Ready to{' '}
              <span className="text-blue-400">Transform</span> Your Restaurant?
            </h1>
            <p className="text-xl text-blue-100">
              Join thousands of restaurants already using our POS system to streamline operations and boost revenue.
            </p>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600">
                  Start Your Free Trial 🔥
                </Button>
                <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                  View Pricing →
                </Button>
              </div>
              <div className="flex gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  No Setup Fees
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Cancel Anytime
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Free Support
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-blue-100">Orders Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-blue-100">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>
          </div>
          <div className="relative lg:ml-8">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="/home3.avif" 
                alt="Restaurant POS System" 
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-blue-600">
                +35% Increase in Revenue
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center px-4">
          <div className="text-blue-100 mb-6 text-lg">Trusted by restaurants across India</div>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-white/90 text-sm sm:text-base">
            <div className="flex items-center">
              <span>Cloud Kitchens</span>
              <span className="mx-4 hidden sm:block">•</span>
            </div>
            <div className="flex items-center">
              <span>Fine Dining</span>
              <span className="mx-4 hidden sm:block">•</span>
            </div>
            <div className="flex items-center">
              <span>Quick Service</span>
              <span className="mx-4 hidden sm:block">•</span>
            </div>
            <div>
              <span>Cafes</span>
            </div>
          </div>
        </div>
      </div>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/50 to-transparent" />
    </section>
  );
};

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900 to-gray-900/95 shadow-lg backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">CafeBuddy</span>
            </a>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features">
              <a className="text-gray-300 hover:text-white transition-colors">Features</a>
            </Link>
            <Link href="#pricing">
              <a className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            </Link>
            <Link href="#about">
              <a className="text-gray-300 hover:text-white transition-colors">About</a>
            </Link>
            <Link href="/dashboard">
              <a className="text-gray-300 hover:text-white transition-colors">Dashboard</a>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                Log in
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-blue-500 text-white hover:bg-blue-600">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

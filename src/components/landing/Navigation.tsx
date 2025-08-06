import React, { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
                <img 
                  src="/cafe-pos-logo.svg" 
                  alt="Cafe POS System" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Cafe POS System
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#integrations">Integrations</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Log in</Button>
              <Button 
                className="bg-[#0052FF] hover:bg-blue-700 text-white"
              >
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <MobileNavLink href="#features">Features</MobileNavLink>
                  <MobileNavLink href="#pricing">Pricing</MobileNavLink>
                  <MobileNavLink href="#integrations">Integrations</MobileNavLink>
                  <MobileNavLink href="#about">About Us</MobileNavLink>
                  <div className="pt-4 space-y-4">
                    <Button variant="ghost" className="w-full justify-start">
                      Log in
                    </Button>
                    <Button className="w-full bg-[#0052FF]">
                      Start Free Trial
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href}>
    <a className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
      {children}
    </a>
  </Link>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href}>
    <a className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors">
      {children}
    </a>
  </Link>
);

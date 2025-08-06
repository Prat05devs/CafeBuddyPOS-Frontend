import React from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { MenuManagementSection } from '@/components/landing/MenuManagementSection';
import { AnalyticsSection } from '@/components/landing/AnalyticsSection';
import { FinalCTASection } from '@/components/landing/FinalCTASection';
import { WaitlistSection } from '@/components/landing/WaitlistSection';
import { Footer } from '@/components/landing/Footer';
import { Navbar } from '@/components/landing/Navbar';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <HeroSection />
      <MenuManagementSection />
      <AnalyticsSection />
      <FinalCTASection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Landing;

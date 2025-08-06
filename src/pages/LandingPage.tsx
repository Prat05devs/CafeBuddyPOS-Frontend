import React from 'react';
import { Navigation } from '@/components/landing/Navigation';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeatureSection } from '@/components/landing/FeatureSection';
import { IntegrationSection } from '@/components/landing/IntegrationSection';
import { UnifiedPlatform } from '@/components/landing/UnifiedPlatform';
import { MenuManagement } from '@/components/landing/MenuManagement';
import { Analytics } from '@/components/landing/Analytics';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Global styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        :root {
          --primary-blue: #0052FF;
          --primary-text: #212529;
          --primary-cta: #FFC107;
        }

        body {
          font-family: 'Inter', sans-serif;
          color: var(--primary-text);
        }
      `}</style>

      <Navigation />

      <main className="relative">
        <HeroSection />
        <FeatureSection />
        <IntegrationSection />
        <UnifiedPlatform />
        <MenuManagement />
        <Analytics />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;

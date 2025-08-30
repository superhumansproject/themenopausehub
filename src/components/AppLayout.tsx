import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from './Header';
import HeroSection from './HeroSection';
import FreeGuides from './FreeGuides';
import GLP1Section from './GLP1Section';
import PremiumSection from './PremiumSection';
import CorporateSection from './CorporateSection';
import CommunitySection from './CommunitySection';
import Footer from './Footer';
import Chatbot from './Chatbot';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FreeGuides />
        <GLP1Section />
        <PremiumSection />
        <CorporateSection />
        <CommunitySection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default AppLayout;

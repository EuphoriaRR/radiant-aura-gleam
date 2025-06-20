
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import CaseStudies from '@/components/CaseStudies';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Features />
      <CaseStudies />
      <Pricing />
      <FinalCTA />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;

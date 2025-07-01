
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import UMKMSection from '@/components/UMKMSection';
import Features from '@/components/Features';
import CaseStudies from '@/components/CaseStudies';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content container */}
      <main className="w-full flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <Features />
      </main>
        <UMKMSection />
      <main className="w-full flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <CaseStudies />
        <Pricing />
      </main>
      <FinalCTA />
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Index;

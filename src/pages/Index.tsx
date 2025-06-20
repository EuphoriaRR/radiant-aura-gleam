
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
    // Ganti kode lama Anda dengan yang ini di index.tsx
<div className="flex flex-col min-h-screen">
  <Header />

  {/* Konten utama sekarang dibungkus oleh <main> yang menjadi container */}
  <main className="w-full flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
    <HeroSection />
    <Features />
    <CaseStudies />
    <Pricing />
    
  </main>
  <FinalCTA />
  <Footer />
  
  {/* Chatbot biasanya memiliki posisi fixed/absolute, jadi penempatannya di sini sudah baik */}
</div>
  );
};

export default Index;

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target ke 24 Juni 2025 pukul 23:59:59 WIB
    const targetDate = new Date("2025-07-27T23:59:59+07:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-white via-muted/30 to-primary/5 py-6 sm:py-8 lg:py-16">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Ubah dari grid lg:grid-cols-2 menjadi flex justify-center */}
        <div className="flex justify-center items-center">
          {/* Text Content */}
          <div className="text-center animate-fade-in max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-bold text-gray-800 leading-tight mb-4 sm:mb-6">
              Posting tiap hari, capek, tapi tetap sepi? 
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-lato text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Mungkin bukan kamu yang salah—tapi sistem <span className='text-primary'>IG</span>-mu yang <span className="text-secondary font-semibold">bocor</span>. <br></br>Audit ini bantu kamu temukan titik <span className="text-secondary font-semibold">bocor</span> yang tak kamu sadari.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('pricing')}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-lato font-semibold text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
              >
                Mulai Audit Sekarang
              </Button>
              <Button 
                onClick={() => scrollToSection('pricing')}
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-lato font-semibold text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
              >
                Lihat Paket Kami
              </Button>
            </div>
          </div>

          {/* Visual */}
          {/*<div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl opacity-20 absolute -rotate-6"></div>
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-accent via-primary to-coral rounded-3xl opacity-30 absolute rotate-3"></div>
              <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-montserrat font-bold text-gray-800 mb-2">Special</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-lato">Audit eksklusif untuk 10 UMKM/batch — gratis, aman, langsung jalan. <br></br>Batch penuh dalam: <span className="text-secondary">[terisi 7/10]</span></p>
                  <p className="text-sm sm:text-base text-gray-700 font-semibold font-lato mt-2">⏳ Sisa waktu: {timeLeft.days}h {timeLeft.hours}j {timeLeft.minutes}m {timeLeft.seconds}d</p>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
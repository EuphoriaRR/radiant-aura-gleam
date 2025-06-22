import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-white via-muted/30 to-primary/5 py-6 sm:py-8 lg:py-16">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-bold text-gray-800 leading-tight mb-4 sm:mb-6">
              Buat <span className="text-primary">Instagram</span> bekerja untukmu, bukan sebaliknya! 
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-lato text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Dapatkan analisis dan strategi mendalam untuk melesatkan pertumbuhan akun Anda. 
              <span className="text-secondary font-semibold"> Akurat dan Cepat!</span>
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('pricing')}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-lato font-semibold text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
              >
                Klaim Audit Instagram Gratis Saya
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
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
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
                  <p className="text-sm sm:text-base text-gray-600 font-lato">Audit & Strategi AI eksklusif untuk 10 UMKM/batch — gratis, aman, langsung jalan. <br></br>Batch penuh dalam: <span className="text-secondary">[terisi 7/10]</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
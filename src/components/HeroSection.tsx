
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-white via-muted/30 to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-gray-800 leading-tight mb-6">
              Buka Potensi Penuh <span className="text-primary">Instagram Anda</span> dengan Kekuatan AI
            </h1>
            <p className="text-xl md:text-2xl font-lato text-gray-600 mb-8 leading-relaxed">
              Dapatkan analisis dan strategi mendalam untuk melesatkan pertumbuhan akun Anda. 
              <span className="text-secondary font-semibold"> Coba audit pertama Anda, 100% Gratis!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('pricing')}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-lato font-semibold text-lg px-8 py-4 h-auto"
              >
                Klaim Audit Instagram Gratis Saya
              </Button>
              <Button 
                onClick={() => scrollToSection('pricing')}
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-lato font-semibold text-lg px-8 py-4 h-auto"
              >
                Lihat Paket Kami
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl opacity-20 absolute -rotate-6"></div>
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tr from-accent via-primary to-coral rounded-3xl opacity-30 absolute rotate-3"></div>
              <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-gray-800 mb-2">AI Analytics</h3>
                  <p className="text-gray-600 font-lato">Analisis mendalam dengan teknologi AI terdepan</p>
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

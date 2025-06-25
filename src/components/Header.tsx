import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
const imageStyle = {
    width: '25%',
    height: 'auto',
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-0">
            <img src="/logo.png" className="w-8 sm:w-10 h-auto" />
            <span className="text-xl font-bold tracking-tight text-gray-800">Nodesatu</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-primary transition-colors font-lato font-medium text-sm lg:text-base"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-700 hover:text-primary transition-colors font-lato font-medium text-sm lg:text-base"
            >
              Studi Kasus
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-primary transition-colors font-lato font-medium text-sm lg:text-base"
            >
              Harga
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors font-lato font-medium text-sm lg:text-base"
            >
              Kontak Kami
            </button>
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="bg-primary hover:bg-primary/90 font-lato font-semibold px-4 lg:px-6 text-sm lg:text-base"
            >
              Dapatkan Audit Sekarang
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-primary transition-colors font-lato font-medium text-left text-sm"
              >
                Layanan
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="text-gray-700 hover:text-primary transition-colors font-lato font-medium text-left text-sm"
              >
                Studi Kasus
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-primary transition-colors font-lato font-medium text-left text-sm"
              >
                Harga
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary transition-colors font-lato font-medium text-left text-sm"
              >
                Kontak Kami
              </button>
              <Button 
                onClick={() => scrollToSection('pricing')}
                className="bg-primary hover:bg-primary/90 font-lato font-semibold w-fit text-sm"
              >
                Dapatkan Audit Sekarang
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

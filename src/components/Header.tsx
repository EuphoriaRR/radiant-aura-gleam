
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
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
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-montserrat font-bold text-gray-800">Athel AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-primary transition-colors font-lato font-medium"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-700 hover:text-primary transition-colors font-lato font-medium"
            >
              Studi Kasus
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-primary transition-colors font-lato font-medium"
            >
              Harga
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors font-lato font-medium"
            >
              Kontak Kami
            </button>
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="bg-primary hover:bg-primary/90 font-lato font-semibold px-6"
            >
              Dapatkan Audit Gratis
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-primary transition-colors font-lato font-medium text-left"
              >
                Layanan
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="text-gray-700 hover:text-primary transition-colors font-lato font-medium text-left"
              >
                Studi Kasus
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-primary transition-colors font-lato font-medium text-left"
              >
                Harga
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary transition-colors font-lato font-medium text-left"
              >
                Kontak Kami
              </button>
              <Button 
                onClick={() => scrollToSection('pricing')}
                className="bg-primary hover:bg-primary/90 font-lato font-semibold w-fit"
              >
                Dapatkan Audit Gratis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-montserrat font-bold">Athel AI</span>
            </div>
            <p className="font-lato text-gray-300">
              © 2025 Athel AI. All Rights Reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('features')}
                className="block font-lato text-gray-300 hover:text-white transition-colors mx-auto"
              >
                Layanan
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="block font-lato text-gray-300 hover:text-white transition-colors mx-auto"
              >
                Studi Kasus
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block font-lato text-gray-300 hover:text-white transition-colors mx-auto"
              >
                Harga
              </button>
              <a 
                href="#" 
                className="block font-lato text-gray-300 hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-montserrat font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4 justify-center md:justify-end">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.098.119.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.001 12.017z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.036 0C5.369 0 .036 5.333.036 12s5.333 12 11.964 12S24 18.667 24 12 18.667 0 12.036 0zM16.521 8.706c-.006.125-.006.25-.006.369 0 3.781-2.875 8.134-8.134 8.134v-.003A8.071 8.071 0 014 15.85a5.738 5.738 0 004.224-1.181 2.856 2.856 0 01-2.664-1.981 2.863 2.863 0 001.288-.049A2.853 2.853 0 014.565 9.97v-.037a2.847 2.847 0 001.294.356A2.856 2.856 0 014.979 6.43a8.094 8.094 0 005.871 2.981 2.853 2.853 0 014.86-2.6 5.695 5.695 0 001.806-.69 2.864 2.864 0 01-1.25 1.578A5.666 5.666 0 0017.521 6.9c-.019.019-.019.044-.019.063a5.67 5.67 0 01-1.406 1.544z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

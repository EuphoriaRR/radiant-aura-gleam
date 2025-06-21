import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const CaseStudies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const casesPerPage = 3; // Jumlah case yang ditampilkan per halaman di desktop

  const cases = [
    {
      clientName: "Brand Fashion X",
      beforeEngagement: "1.2%",
      afterEngagement: "4.5%",
      beforeFollowers: "+50/minggu",
      afterFollowers: "+400/minggu",
      testimonial: "Node Satu mengubah cara kami melihat Instagram. Pertumbuhannya luar biasa!",
      clientType: "Fashion Brand"
    },
    {
      clientName: "Influencer Y",
      beforeEngagement: "2.1%",
      afterEngagement: "6.8%",
      beforeFollowers: "+120/minggu",
      afterFollowers: "+800/minggu",
      testimonial: "Strategi dari Node Satu membuat konten saya lebih engaging dan tepat sasaran.",
      clientType: "Content Creator"
    },
    {
      clientName: "Café Local Z",
      beforeEngagement: "0.8%",
      afterEngagement: "3.9%",
      beforeFollowers: "+25/minggu",
      afterFollowers: "+350/minggu",
      testimonial: "Pelanggan baru terus berdatangan setelah menggunakan strategi Node Satu.",
      clientType: "Local Business"
    },
    {
      clientName: "Startup Tech A",
      beforeEngagement: "1.5%",
      afterEngagement: "5.2%",
      beforeFollowers: "+80/minggu",
      afterFollowers: "+500/minggu",
      testimonial: "ROI dari Instagram marketing kami meningkat 300% berkat Node Satu.",
      clientType: "Tech Startup"
    },
    {
      clientName: "Restaurant B",
      beforeEngagement: "0.9%",
      afterEngagement: "4.1%",
      beforeFollowers: "+30/minggu",
      afterFollowers: "+380/minggu",
      testimonial: "Reservasi online meningkat drastis setelah menggunakan strategi Node Satu.",
      clientType: "Restaurant"
    },
    {
      clientName: "Fitness Coach C",
      beforeEngagement: "2.3%",
      afterEngagement: "7.1%",
      beforeFollowers: "+150/minggu",
      afterFollowers: "+900/minggu",
      testimonial: "Klien pribadi saya bertambah 5x lipat dalam 3 bulan!",
      clientType: "Fitness Coach"
    },
    {
      clientName: "Beauty Brand D",
      beforeEngagement: "1.8%",
      afterEngagement: "5.9%",
      beforeFollowers: "+100/minggu",
      afterFollowers: "+650/minggu",
      testimonial: "Penjualan produk skincare kami naik 250% berkat strategi konten yang tepat.",
      clientType: "Beauty Brand"
    },
    {
      clientName: "Travel Blogger E",
      beforeEngagement: "2.0%",
      afterEngagement: "6.5%",
      beforeFollowers: "+200/minggu",
      afterFollowers: "+850/minggu",
      testimonial: "Sponsor dan brand collaboration semakin banyak setelah growth yang konsisten.",
      clientType: "Travel Blogger"
    },
    {
      clientName: "E-commerce F",
      beforeEngagement: "1.1%",
      afterEngagement: "4.8%",
      beforeFollowers: "+60/minggu",
      afterFollowers: "+450/minggu",
      testimonial: "Conversion rate dari Instagram ke website meningkat 400%.",
      clientType: "E-commerce"
    }
  ];

  // Detect mobile screen size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Hitung total halaman
  const totalPages = Math.ceil(cases.length / casesPerPage);

  // Dapatkan case untuk halaman saat ini (hanya untuk desktop)
  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases = isMobile ? cases : cases.slice(indexOfFirstCase, indexOfLastCase);

  // Mobile scroll functions
  const scrollToCard = (index) => {
    if (scrollContainerRef.current && isMobile) {
      const cardWidth = 320; // Approximate card width + gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveCardIndex(index);
    }
  };

  // Handle mobile scroll to detect active card
  const handleMobileScroll = () => {
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320;
      const scrollLeft = container.scrollLeft;
      const activeIndex = Math.round(scrollLeft / cardWidth);
      setActiveCardIndex(Math.min(activeIndex, cases.length - 1));
      
      // Pause auto-scroll when user manually scrolls
      setIsAutoPlay(false);
      setTimeout(() => {
        setIsAutoPlay(true);
      }, 10000);
    }
  };

  // Fungsi untuk mengubah halaman (desktop)
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPrevious = () => {
    if (isMobile) {
      const newIndex = Math.max(activeCardIndex - 1, 0);
      scrollToCard(newIndex);
    } else {
      setCurrentPage(prev => Math.max(prev - 1, 1));
    }
  };

  const goToNext = () => {
    if (isMobile) {
      const newIndex = Math.min(activeCardIndex + 1, cases.length - 1);
      scrollToCard(newIndex);
    } else {
      setCurrentPage(prev => Math.min(prev + 1, totalPages));
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      if (isMobile) {
        const nextIndex = activeCardIndex + 1;
        if (nextIndex >= cases.length) {
          // Reset to beginning
          scrollToCard(0);
        } else {
          scrollToCard(nextIndex);
        }
      } else {
        setCurrentPage(prev => {
          if (prev >= totalPages) {
            return 1;
          }
          return prev + 1;
        });
      }
    }, 3000); // 4 detik

    return () => clearInterval(interval);
  }, [isAutoPlay, totalPages, isMobile, activeCardIndex, cases.length]);

  // Pause auto-scroll saat user berinteraksi
  const handleManualNavigation = (callback) => {
    setIsAutoPlay(false);
    callback();
    // Resume auto-scroll setelah 10 detik tidak ada interaksi
    setTimeout(() => {
      setIsAutoPlay(true);
    }, 10000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  // Reset active card index when switching to mobile
  useEffect(() => {
    if (isMobile) {
      setActiveCardIndex(0);
    }
  }, [isMobile]);



  const CaseCard = ({ caseStudy, index }) => (
    <Card className={`bg-white hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg ${
      isMobile ? 'min-w-[300px] snap-center' : ''
    }`}>
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white font-bold text-xl">{caseStudy.clientName.charAt(0)}</span>
        </div>
        <h3 className="text-xl font-montserrat font-bold text-gray-800">{caseStudy.clientName}</h3>
        <p className="text-sm font-lato text-gray-500">{caseStudy.clientType}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Before & After Stats */}
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
            <span className="font-lato font-medium text-gray-700">Engagement Rate:</span>
            <span className="font-montserrat font-bold text-red-600">{caseStudy.beforeEngagement}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
            <span className="font-lato font-medium text-gray-700">Setelah:</span>
            <span className="font-montserrat font-bold text-green-600">{caseStudy.afterEngagement}</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
            <span className="font-lato font-medium text-gray-700">Pertumbuhan:</span>
            <span className="font-montserrat font-bold text-red-600">{caseStudy.beforeFollowers}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
            <span className="font-lato font-medium text-gray-700">Setelah:</span>
            <span className="font-montserrat font-bold text-green-600">{caseStudy.afterFollowers}</span>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="font-lato text-gray-700 italic">
            "{caseStudy.testimonial}"
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-4">
            Lihat Transformasi Klien Kami
          </h2>
          <p className="text-xl font-lato text-gray-600 max-w-2xl mx-auto">
            Hasil nyata dari klien yang telah mempercayai layanan Node Satu untuk mengembangkan Instagram mereka
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        {isMobile ? (
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              onScroll={handleMobileScroll}
              className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {cases.map((caseStudy, index) => (
                <CaseCard key={index} caseStudy={caseStudy} index={index} />
              ))}
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={toggleAutoPlay}
                className={`flex items-center px-3 py-2 rounded-lg font-lato font-medium transition-colors ${
                  isAutoPlay
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              
              <button
                onClick={() => handleManualNavigation(goToPrevious)}
                disabled={activeCardIndex === 0}
                className={`flex items-center px-4 py-2 rounded-lg font-lato font-medium transition-colors ${
                  activeCardIndex === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white shadow-md'
                }`}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </button>
              
              <button
                onClick={() => handleManualNavigation(goToNext)}
                disabled={activeCardIndex === cases.length - 1}
                className={`flex items-center px-4 py-2 rounded-lg font-lato font-medium transition-colors ${
                  activeCardIndex === cases.length - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white shadow-md'
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            {/* Mobile scroll indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNavigation(() => scrollToCard(index))}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeCardIndex
                      ? 'bg-blue-500 scale-125 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: Grid + Pagination */
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentCases.map((caseStudy, index) => (
                <CaseCard key={index} caseStudy={caseStudy} index={index} />
              ))}
            </div>

            {/* Desktop Pagination Controls */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={toggleAutoPlay}
                className={`flex items-center px-3 py-2 rounded-lg font-lato font-medium transition-colors ${
                  isAutoPlay
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
                title={isAutoPlay ? 'Pause Auto-scroll' : 'Resume Auto-scroll'}
              >
                {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={() => handleManualNavigation(goToPrevious)}
                disabled={currentPage === 1}
                className={`flex items-center px-4 py-2 rounded-lg font-lato font-medium transition-colors ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white shadow-md'
                }`}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handleManualNavigation(() => goToPage(pageNumber))}
                    className={`w-10 h-10 rounded-lg font-montserrat font-medium transition-colors ${
                      currentPage === pageNumber
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white shadow-md'
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleManualNavigation(goToNext)}
                disabled={currentPage === totalPages}
                className={`flex items-center px-4 py-2 rounded-lg font-lato font-medium transition-colors ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white shadow-md'
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </>
        )}

        {/* Page Info */}
        <div className="text-center mt-6">
          <p className="text-sm font-lato text-gray-600">
            {isMobile ? (
              <>Swipe left/right to explore all {cases.length} case studies</>
            ) : (
              <>Showing {indexOfFirstCase + 1}-{Math.min(indexOfLastCase, cases.length)} of {cases.length} case studies</>
            )}
            {isAutoPlay && (
              <span className="ml-2 text-blue-500">• Auto-scrolling every 4 seconds</span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
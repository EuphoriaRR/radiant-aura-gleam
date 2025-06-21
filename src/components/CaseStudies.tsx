import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const CaseStudies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const casesPerPage = 3;

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

  // Function untuk mendapatkan cases berdasarkan page number
  const getCasesForPage = (pageNumber) => {
    const indexOfLastCase = pageNumber * casesPerPage;
    const indexOfFirstCase = indexOfLastCase - casesPerPage;
    return cases.slice(indexOfFirstCase, indexOfLastCase);
  };

  // Dapatkan case untuk halaman saat ini
  const currentCases = isMobile ? cases : getCasesForPage(currentPage);

  // Enhanced smooth scroll function untuk mobile - FASTER
  const scrollToCard = (index) => {
    if (scrollContainerRef.current && isMobile) {
      const container = scrollContainerRef.current;
      const cards = container.children;
      
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
      
      setActiveCardIndex(index);
    }
  };

  // Handle mobile scroll to detect active card - FASTER
  const handleMobileScroll = () => {
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.children;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      for (let i = 0; i < cards.length; i++) {
        const cardRect = cards[i].getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }
      
      if (closestIndex !== activeCardIndex) {
        setActiveCardIndex(closestIndex);
      }
      
      setIsAutoPlay(false);
      setTimeout(() => {
        setIsAutoPlay(true);
      }, 6250); // Increased from 5000ms to 6250ms (25% slower)
    }
  };

  // Enhanced page transition function - 25% SLOWER
  const transitionToPage = (pageNumber) => {
    if (isTransitioning || pageNumber === currentPage) return;
    
    setIsTransitioning(true);
    
    // 25% slower fade out and fade in
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 31); // Increased from 25ms to 31ms (25% slower)
    }, 188); // Increased from 150ms to 188ms (25% slower)
  };

  // Fungsi untuk mengubah halaman (desktop)
  const goToPage = (pageNumber) => {
    transitionToPage(pageNumber);
  };

  const goToPrevious = () => {
    if (isMobile) {
      const newIndex = Math.max(activeCardIndex - 1, 0);
      scrollToCard(newIndex);
    } else {
      const prevPage = Math.max(currentPage - 1, 1);
      transitionToPage(prevPage);
    }
  };

  const goToNext = () => {
    if (isMobile) {
      const newIndex = Math.min(activeCardIndex + 1, cases.length - 1);
      scrollToCard(newIndex);
    } else {
      const nextPageNum = Math.min(currentPage + 1, totalPages);
      transitionToPage(nextPageNum);
    }
  };

  // Enhanced auto-scroll functionality - 25% SLOWER
  useEffect(() => {
    if (!isAutoPlay || isTransitioning) return;

    const interval = setInterval(() => {
      if (isMobile) {
        const nextIndex = activeCardIndex + 1;
        if (nextIndex >= cases.length) {
          scrollToCard(0);
        } else {
          scrollToCard(nextIndex);
        }
      } else {
        const nextPageNum = currentPage >= totalPages ? 1 : currentPage + 1;
        transitionToPage(nextPageNum);
      }
    }, 3125); // Increased from 2500ms to 3125ms (25% slower)

    return () => clearInterval(interval);
  }, [isAutoPlay, totalPages, isMobile, activeCardIndex, cases.length, currentPage, isTransitioning]);

  // Pause auto-scroll saat user berinteraksi - 25% SLOWER
  const handleManualNavigation = (callback) => {
    setIsAutoPlay(false);
    callback();
    setTimeout(() => {
      setIsAutoPlay(true);
    }, 6250); // Increased from 5000ms to 6250ms (25% slower)
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
    <Card className={`bg-white hover:shadow-xl transition-all duration-250 ease-out border-0 shadow-lg ${
      isMobile ? 'min-w-[300px] snap-center transform hover:scale-105' : 'transform hover:scale-105'
    }`}>
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center transform transition-transform duration-250 hover:rotate-12">
          <span className="text-white font-bold text-xl">{caseStudy.clientName.charAt(0)}</span>
        </div>
        <h3 className="text-xl font-montserrat font-bold text-gray-800">{caseStudy.clientName}</h3>
        <p className="text-sm font-lato text-gray-500">{caseStudy.clientType}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg transition-all duration-250 hover:bg-red-100">
            <span className="font-lato font-medium text-gray-700">Engagement Rate:</span>
            <span className="font-montserrat font-bold text-red-600">{caseStudy.beforeEngagement}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg transition-all duration-250 hover:bg-green-100">
            <span className="font-lato font-medium text-gray-700">Setelah:</span>
            <span className="font-montserrat font-bold text-green-600">{caseStudy.afterEngagement}</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg transition-all duration-250 hover:bg-red-100">
            <span className="font-lato font-medium text-gray-700">Pertumbuhan:</span>
            <span className="font-montserrat font-bold text-red-600">{caseStudy.beforeFollowers}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg transition-all duration-250 hover:bg-green-100">
            <span className="font-lato font-medium text-gray-700">Setelah:</span>
            <span className="font-montserrat font-bold text-green-600">{caseStudy.afterFollowers}</span>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 transition-all duration-250 hover:bg-blue-100 hover:border-l-8">
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
              className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth',
                scrollPaddingLeft: '1rem',
                scrollPaddingRight: '1rem'
              }}
            >
              {cases.map((caseStudy, index) => (
                <div
                  key={index}
                  className={`transition-all duration-250 ease-out ${
                    index === activeCardIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-75'
                  }`}
                >
                  <CaseCard caseStudy={caseStudy} index={index} />
                </div>
              ))}
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={toggleAutoPlay}
                className={`flex items-center px-3 py-2 rounded-lg font-lato font-medium transition-all duration-250 transform hover:scale-105 ${
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
                className={`flex items-center px-4 py-2 rounded-lg font-lato font-medium transition-all duration-250 transform hover:scale-105 ${
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
                className={`flex items-center px-4 py-2 rounded-lg font-lato font-medium transition-all duration-250 transform hover:scale-105 ${
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
                  className={`w-3 h-3 rounded-full transition-all duration-250 transform ${
                    index === activeCardIndex
                      ? 'bg-blue-500 scale-125 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: Grid + Smooth Transitions - FASTER */
          <>
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-250 ease-in-out ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}>
              {currentCases.map((caseStudy, index) => (
                <div
                  key={`${currentPage}-${index}`}
                  className="transform transition-all duration-250 ease-out"
                  style={{
                    transitionDelay: `${index * 19}ms` // Increased from 15ms to 19ms (25% slower)
                  }}
                >
                  <CaseCard caseStudy={caseStudy} index={index} />
                </div>
              ))}
            </div>

            {/* Desktop Pagination Controls */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={toggleAutoPlay}
                className={`flex items-center px-3 py-2 rounded-lg font-lato font-medium transition-all duration-250 transform hover:scale-105 ${
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
                disabled={currentPage === 1 || isTransitioning}
                className={`flex items-center px-4 py-2 rounded-lg font-lato font-medium transition-all duration-250 transform hover:scale-105 ${
                  currentPage === 1 || isTransitioning
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
                    disabled={isTransitioning}
                    className={`w-10 h-10 rounded-lg font-montserrat font-medium transition-all duration-250 transform hover:scale-110 ${
                      currentPage === pageNumber
                        ? 'bg-blue-500 text-white shadow-lg scale-110'
                        : isTransitioning
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white shadow-md'
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleManualNavigation(goToNext)}
                disabled={currentPage === totalPages || isTransitioning}
                className={`flex items-center px-4 py-2 rounded-lg font-lato font-medium transition-all duration-250 transform hover:scale-105 ${
                  currentPage === totalPages || isTransitioning
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
              <>Showing page {currentPage} of {totalPages} ({cases.length} total case studies)</>
            )}
            {isAutoPlay && (
              <span className="ml-2 text-blue-500 animate-pulse">• Auto-scrolling every 3.1 seconds</span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
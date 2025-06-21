import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const CaseStudies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  
  // Refs for managing scroll behavior and timeouts
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isUserScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
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

  // Cleanup all timeouts on unmount
  useEffect(() => {
    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Calculate total pages for desktop pagination
  const totalPages = Math.ceil(cases.length / casesPerPage);

  // Get cases for current page (desktop only)
  const getCasesForPage = (pageNumber: number) => {
    const indexOfLastCase = pageNumber * casesPerPage;
    const indexOfFirstCase = indexOfLastCase - casesPerPage;
    return cases.slice(indexOfFirstCase, indexOfLastCase);
  };

  // Current cases to display
  const currentCases = isMobile ? cases : getCasesForPage(currentPage);

  // IMPROVED: Perfect scroll to card function with better positioning
  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current || !isMobile || index < 0 || index >= cases.length) return;
    
    console.log('Scrolling to card:', index); // Debug log
    
    // Temporarily disable user scrolling detection
    isUserScrollingRef.current = true;
    
    const container = scrollContainerRef.current;
    const cards = Array.from(container.children) as HTMLElement[];
    
    console.log('Container:', container, 'Cards:', cards.length); // Debug log
    
    if (cards[index]) {
      // Set active card immediately
      setActiveCardIndex(index);
      
      // Use multiple methods to ensure scrolling works
      const cardElement = cards[index];
      const containerWidth = container.offsetWidth;
      const cardWidth = cardElement.offsetWidth;
      const gap = 16; // gap-4 = 16px
      
      // Method 1: Calculate precise scroll position
      const cardOffsetLeft = cardElement.offsetLeft;
      const scrollPosition = cardOffsetLeft - (containerWidth / 2) + (cardWidth / 2);
      const maxScroll = container.scrollWidth - containerWidth;
      const finalScrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));
      
      console.log('Scroll calculation:', { cardOffsetLeft, scrollPosition, finalScrollPosition }); // Debug log
      
      // Method 2: Use scrollIntoView as primary method
      try {
        cardElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        console.log('Used scrollIntoView'); // Debug log
      } catch (error) {
        console.log('scrollIntoView failed, using fallback'); // Debug log
        
        // Method 3: Manual scrollTo with animation
        const startScroll = container.scrollLeft;
        const distance = finalScrollPosition - startScroll;
        const duration = 300;
        let start = 0;
        
        const animateScroll = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          
          // Easing function
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          
          container.scrollLeft = startScroll + (distance * easeOutCubic);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };
        
        requestAnimationFrame(animateScroll);
      }
      
      // Re-enable scroll detection after animation
      setTimeout(() => {
        isUserScrollingRef.current = false;
      }, 600);
    }
  };

  // IMPROVED: Mobile scroll detection with better debouncing
  const handleMobileScroll = () => {
    if (!isMobile || !scrollContainerRef.current) return;
    
    // Don't interfere if user is actively scrolling or programmatic scroll is happening
    if (isUserScrollingRef.current) return;
    
    // Clear previous timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Debounce the scroll detection
    scrollTimeoutRef.current = setTimeout(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      const cards = Array.from(container.children) as HTMLElement[];
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      // Find the card closest to center
      for (let i = 0; i < cards.length; i++) {
        const cardRect = cards[i].getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }
      
      // Update active card index if different and not currently auto-scrolling
      if (closestIndex !== activeCardIndex && !isUserScrollingRef.current) {
        setActiveCardIndex(closestIndex);
      }
    }, 150);
  };

  // Handle user scroll start
  const handleScrollStart = () => {
    isUserScrollingRef.current = true;
    setIsAutoPlay(false);
    
    // Clear existing timeout
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
  };

  // Handle scroll end with proper detection
  const handleScrollEnd = () => {
    // Clear existing timeout
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
    
    // Set timeout to detect when user stops scrolling
    userInteractionTimeoutRef.current = setTimeout(() => {
      isUserScrollingRef.current = false;
      handleMobileScroll(); // Update active card
      
      // Resume auto-scroll after user interaction
      setTimeout(() => {
        setIsAutoPlay(true);
      }, 1000);
    }, 150);
  };

  // Enhanced page transition function for desktop
  const transitionToPage = (pageNumber: number) => {
    if (isTransitioning || pageNumber === currentPage) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  // Navigation functions
  const goToPage = (pageNumber: number) => {
    transitionToPage(pageNumber);
  };

  const goToPrevious = () => {
    if (isMobile) {
      const newIndex = activeCardIndex > 0 ? activeCardIndex - 1 : cases.length - 1;
      scrollToCard(newIndex);
    } else {
      const prevPage = currentPage > 1 ? currentPage - 1 : totalPages;
      transitionToPage(prevPage);
    }
  };

  const goToNext = () => {
    if (isMobile) {
      const newIndex = activeCardIndex < cases.length - 1 ? activeCardIndex + 1 : 0;
      scrollToCard(newIndex);
    } else {
      const nextPageNum = currentPage < totalPages ? currentPage + 1 : 1;
      transitionToPage(nextPageNum);
    }
  };

  // IMPROVED: Auto-scroll functionality with better mobile handling
  useEffect(() => {
    if (!isAutoPlay || isTransitioning) return;

    // Clear existing timeout
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }

    autoScrollTimeoutRef.current = setTimeout(() => {
      // Skip if user is currently interacting
      if (isUserScrollingRef.current) return;
      
      if (isMobile) {
        const nextIndex = activeCardIndex < cases.length - 1 ? activeCardIndex + 1 : 0;
        // Ensure smooth transition to next card
        requestAnimationFrame(() => {
          scrollToCard(nextIndex);
        });
      } else {
        const nextPageNum = currentPage < totalPages ? currentPage + 1 : 1;
        transitionToPage(nextPageNum);
      }
    }, 3000);

    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [isAutoPlay, activeCardIndex, currentPage, totalPages, isMobile, cases.length, isTransitioning]);

  // Handle manual navigation with proper auto-scroll management
  const handleManualNavigation = (callback: () => void) => {
    setIsAutoPlay(false);
    isUserScrollingRef.current = true;
    
    // Clear existing timeouts
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
    
    callback();
    
    // Resume auto-scroll after delay
    userInteractionTimeoutRef.current = setTimeout(() => {
      isUserScrollingRef.current = false;
      setIsAutoPlay(true);
    }, 4000);
  };

  // Toggle auto-play functionality
  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
    
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
  };

  // Reset and initialize mobile scroll position
  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      setActiveCardIndex(0);
      
      // Debug log
      console.log('Mobile mode initialized, scrolling to first card');
      
      // Force immediate scroll to beginning
      scrollContainerRef.current.scrollLeft = 0;
      
      // Small delay to ensure DOM is ready, then scroll to first card
      const timer = setTimeout(() => {
        console.log('Executing delayed scroll to card 0');
        scrollToCard(0);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  // Case Study Card Component
  const CaseCard = ({ caseStudy, index }: { caseStudy: typeof cases[0], index: number }) => (
    <Card className={`bg-white hover:shadow-xl transition-all duration-300 ease-out border-0 shadow-lg ${
      isMobile 
        ? 'flex-shrink-0 w-[280px] sm:w-[320px] transform' 
        : 'transform hover:scale-105'
    } ${isMobile && index === activeCardIndex ? 'scale-105 ring-4 ring-blue-200' : ''}`}
    style={isMobile ? { scrollSnapAlign: 'center' } : {}}>
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center transform transition-transform duration-300 hover:rotate-12">
          <span className="text-white font-bold text-xl">{caseStudy.clientName.charAt(0)}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800">{caseStudy.clientName}</h3>
        <p className="text-sm text-gray-500">{caseStudy.clientType}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg transition-all duration-300 hover:bg-red-100">
            <span className="font-medium text-gray-700 text-sm">Engagement Rate:</span>
            <span className="font-bold text-red-600">{caseStudy.beforeEngagement}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100">
            <span className="font-medium text-gray-700 text-sm">Setelah:</span>
            <span className="font-bold text-green-600">{caseStudy.afterEngagement}</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg transition-all duration-300 hover:bg-red-100">
            <span className="font-medium text-gray-700 text-sm">Pertumbuhan:</span>
            <span className="font-bold text-red-600">{caseStudy.beforeFollowers}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100">
            <span className="font-medium text-gray-700 text-sm">Setelah:</span>
            <span className="font-bold text-green-600">{caseStudy.afterFollowers}</span>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 transition-all duration-300 hover:bg-blue-100 hover:border-l-8">
          <p className="text-gray-700 italic text-sm">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lihat Transformasi Klien Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hasil nyata dari klien yang telah mempercayai layanan Node Satu untuk mengembangkan Instagram mereka
          </p>
        </div>

        {/* Mobile: Horizontal Scroll with Perfect Positioning */}
        {isMobile ? (
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              onScroll={handleMobileScroll}
              onTouchStart={handleScrollStart}
              onTouchEnd={handleScrollEnd}
              onTouchMove={handleScrollStart}
              className="flex overflow-x-auto gap-4 pb-4 px-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                overscrollBehaviorX: 'contain',
                scrollSnapType: 'x mandatory',
                transform: 'translateZ(0)', // Force hardware acceleration
                willChange: 'scroll-position'
              }}
            >
              {cases.map((caseStudy, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 ease-out ${
                    index === activeCardIndex ? 'opacity-100' : 'opacity-80'
                  }`}
                >
                  <CaseCard caseStudy={caseStudy} index={index} />
                </div>
              ))}
            </div>
            
            {/* Mobile Navigation Controls */}
            <div className="flex flex-col items-center space-y-4 mt-8">
              {/* Play/Pause and Navigation Buttons */}
              <div className="flex justify-center items-center space-x-3">
                <button
                  onClick={toggleAutoPlay}
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    isAutoPlay
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md border'
                  }`}
                >
                  {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                
                <button
                  onClick={() => handleManualNavigation(goToPrevious)}
                  className="flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white text-gray-700 hover:bg-blue-500 hover:text-white shadow-md border"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  <span className="text-sm">Prev</span>
                </button>
                
                <div className="px-3 py-2 bg-blue-50 rounded-full">
                  <span className="text-sm font-semibold text-blue-600">
                    {activeCardIndex + 1} / {cases.length}
                  </span>
                </div>
                
                <button
                  onClick={() => handleManualNavigation(goToNext)}
                  className="flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white text-gray-700 hover:bg-blue-500 hover:text-white shadow-md border"
                >
                  <span className="text-sm">Next</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              {/* Mobile Dot Indicators */}
              <div className="flex justify-center overflow-x-auto max-w-full px-4">
                <div className="flex space-x-2 py-2">
                  {cases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleManualNavigation(() => scrollToCard(index))}
                      className={`flex-shrink-0 w-3 h-3 rounded-full transition-all duration-300 transform ${
                        index === activeCardIndex
                          ? 'bg-blue-500 scale-125 shadow-lg'
                          : 'bg-gray-300 hover:bg-gray-400 hover:scale-110 active:scale-95'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop: Grid Layout with Smooth Transitions */
          <>
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-300 ease-in-out ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}>
              {currentCases.map((caseStudy, index) => (
                <div
                  key={`${currentPage}-${index}`}
                  className="transform transition-all duration-300 ease-out"
                  style={{
                    transitionDelay: `${index * 100}ms`
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
                className={`flex items-center px-3 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
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
                disabled={isTransitioning}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  isTransitioning
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
                    className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 transform hover:scale-110 ${
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
                disabled={isTransitioning}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  isTransitioning
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

        {/* Status Information */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            {isMobile ? (
              <>Swipe left/right to explore all {cases.length} case studies</>
            ) : (
              <>Showing page {currentPage} of {totalPages} ({cases.length} total case studies)</>
            )}
            {isAutoPlay && (
              <span className="ml-2 text-blue-500 animate-pulse">• Auto-scrolling every 3 seconds</span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
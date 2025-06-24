
const UMKMSection = () => {
  return (
     <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-white mb-6">
                  Siapa kami dan kenapa kami peduli.
                </h2>
                
                {/* Statistics as List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#fce75d] text-black/60 mr-2 mt-[4px] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-sm sm:text-base font-lato text-white">
                    NodeSatu berdedikasi membantu meningkatkan harga diri 10 juta+ UMKM Indonesia — agar setiap usaha kecil merasa layak dipercaya, dipilih, dan diperjuangkan.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#fce75d] text-black/60 mr-2 mt-[4px] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-sm sm:text-base font-lato text-white">
                    Kami hadir bukan untuk sekadar membantu usaha tumbuh, tetapi kami hadir untuk membantu keluarga merasa layak untuk bermimpi lagi.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#fce75d] text-black/60 mr-2 mt-[4px] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-sm sm:text-base font-lato text-white">
                    Karena setiap usaha kecil adalah tulang punggung dan harapan yang sedang dicicil diam-diam oleh satu keluarga.
                  </p>
                </li>
              </ul>
              </div>
            </div>
            {/* Right Image */}
            <div className="lg:order-last order-first">
              <div className="relative">
                <div className="bg-[#fce75d] rounded-3xl p-8 lg:p-12 shadow-xl backdrop-blur-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Person using laptop for digital business" 
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UMKMSection;

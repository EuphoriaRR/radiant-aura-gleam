
const UMKMSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-gray-800 mb-6">
                  Digitalisasi UMKM
                </h2>
                
                {/* Statistics as List */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base font-lato text-gray-600">
                      <span className="font-semibold text-primary">50 juta</span> dari 65 juta UMKM di Indonesia belum masuk ekosistem digital
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base font-lato text-gray-600">
                      <span className="font-semibold text-secondary">Jutaan</span> UMKM yang belum mengetahui potensi produk mereka
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base font-lato text-gray-600">
                      <span className="font-semibold text-accent">Banyak</span> yang tidak tahu cara masuk ke ekosistem digital
                    </p>
                  </li>
                </ul>
              </div>

              {/* Main Content */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg font-lato text-gray-700 leading-relaxed">
                  Kami hadir karena melihat jutaan potensi UMKM Indonesia yang luar biasa masih tersimpan di luar dunia digital. 
                  <span className="text-primary font-semibold"> Misi kami sederhana: menjadi teman seperjalanan bagi para pelaku UMKM untuk go digital.</span>
                </p>
                
                <p className="text-base sm:text-lg font-lato text-gray-700 leading-relaxed">
                  Kami tidak hanya membuka akses, tetapi juga membantu Anda menemukan "kekuatan" produk Anda dan memberikan panduan langkah demi langkah yang praktis.
                </p>
                
                <p className="text-base sm:text-lg font-lato text-gray-700 leading-relaxed">
                  <span className="text-secondary font-semibold">Visi kami adalah melihat setiap UMKM di Indonesia naik kelas, berkembang, dan bangga dengan produknya di panggung digital.</span>
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:order-last order-first">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12">
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

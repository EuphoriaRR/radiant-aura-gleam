
const UMKMSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-gray-800 mb-4">
              Digitalisasi UMKM
            </h2>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="text-2xl sm:text-3xl font-montserrat font-bold text-primary mb-2">
                50 Juta
              </div>
              <p className="text-sm sm:text-base font-lato text-gray-600">
                dari 65 juta UMKM di Indonesia belum masuk ekosistem digital
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="text-2xl sm:text-3xl font-montserrat font-bold text-secondary mb-2">
                Jutaan
              </div>
              <p className="text-sm sm:text-base font-lato text-gray-600">
                UMKM yang belum mengetahui potensi produk mereka
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="text-2xl sm:text-3xl font-montserrat font-bold text-accent mb-2">
                Banyak
              </div>
              <p className="text-sm sm:text-base font-lato text-gray-600">
                yang tidak tahu cara masuk ke ekosistem digital
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-3xl shadow-xl">
            <div className="text-center">
              <p className="text-base sm:text-lg lg:text-xl font-lato text-gray-700 leading-relaxed mb-6">
                Kami hadir karena melihat jutaan potensi UMKM Indonesia yang luar biasa masih tersimpan di luar dunia digital. 
                <span className="text-primary font-semibold"> Misi kami sederhana: menjadi teman seperjalanan bagi para pelaku UMKM untuk go digital.</span>
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl font-lato text-gray-700 leading-relaxed mb-6">
                Kami tidak hanya membuka akses, tetapi juga membantu Anda menemukan "kekuatan" produk Anda dan memberikan panduan langkah demi langkah yang praktis.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl font-lato text-gray-700 leading-relaxed">
                <span className="text-secondary font-semibold">Visi kami adalah melihat setiap UMKM di Indonesia naik kelas, berkembang, dan bangga dengan produknya di panggung digital.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UMKMSection;

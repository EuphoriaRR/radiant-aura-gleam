
import { Target, TrendingUp, Brain, FileText } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Analisis Mendalam",
      description: "Kami menganalisis lebih dari 50 metrik untuk menemukan potensi tersembunyi."
    },
    {
      icon: TrendingUp,
      title: "Strategi Pertumbuhan",
      description: "Dapatkan rekomendasi actionable untuk meningkatkan engagement dan followers."
    },
    {
      icon: Brain,
      title: "Didukung Experts",
      description: "Experts kami memastikan audit yang cepat, akurat, dan komprehensif."
    },
    {
      icon: FileText,
      title: "Laporan Mudah Dipahami",
      description: "Hasil audit disajikan dalam format visual yang jelas dan ringkas."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-4">
            Bagaimana Kami Membantu Anda
          </h2>
          <p className="text-xl font-lato text-gray-600 max-w-2xl mx-auto">
            Dengan teknologi AI terdepan, kami memberikan solusi komprehensif untuk mengoptimalkan performa Instagram Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="font-lato text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

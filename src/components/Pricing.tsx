
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: "Starter",
      price: "GRATIS",
      popular: true,
      features: [
        "Audit 1 akun",
        "Analisis Profil",  
        "Analisis 10 Postingan Terakhir",
        "Skor Performa"
      ],
      buttonText: "Coba Sekarang",
      buttonAction: scrollToContact
    },
    {
      name: "Growth",
      price: "Rp 299.000",
      period: "/bulan",
      popular: false,
      features: [
        "Semua fitur Starter",
        "Analisis Hashtag",
        "Analisis Kompetitor", 
        "Rekomendasi Konten",
        "Laporan Mingguan"
      ],
      buttonText: "Pilih Paket Growth",
      buttonAction: scrollToContact
    },
    {
      name: "Pro / Custom AI",
      price: "Hubungi Kami",
      popular: false,
      features: [
        "Semua fitur Growth",
        "Konsultasi 1-on-1",
        "AI Services (chatbot, dll)",
        "Laporan Bulanan",
        "Support Priority"
      ],
      buttonText: "Jadwalkan Konsultasi",
      buttonAction: scrollToContact
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-4">
            Pilih Paket yang Tepat untuk Anda
          </h2>
          <p className="text-xl font-lato text-gray-600 max-w-2xl mx-auto">
            Mulai dengan audit gratis, lalu tingkatkan ke paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-primary shadow-xl scale-105' : 'border shadow-lg'} bg-white hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-white font-lato font-semibold px-4 py-1">
                  Paling Populer
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-montserrat font-bold text-gray-800 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-montserrat font-bold text-primary">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 font-lato">
                      {plan.period}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="font-lato text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={plan.buttonAction}
                  className={`w-full font-lato font-semibold py-3 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

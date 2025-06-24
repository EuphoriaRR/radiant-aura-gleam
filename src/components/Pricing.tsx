
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const Pricing = () => {
const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown to 3 days from now at midnight (00:00:00)
    const now = new Date();
    const endDate = new Date();
    endDate.setDate(now.getDate() + 3);
    endDate.setHours(0, 0, 0, 0); // Set to midnight
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      popular: false,
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
      originalPrice: "Rp 1.395.000",
      price: "Rp 279.000",
      period: "/bulan",
      discount: "80%",
      popular: true,
      isPromo: true,
      features: [
        "Semua fitur Starter",
        "Analisis Hashtag",
        "Analisis Kompetitor", 
        "Rekomendasi Konten",
        "Laporan Mingguan"
      ],
      buttonText: "Ambil Promo Sekarang!",
      buttonAction: scrollToContact
    },
    {
      name: "Pro / Custom",
      price: "Hubungi Kami",
      popular: false,
      features: [
        "Semua fitur Growth",
        "Konsultasi 1-on-1",
        "AI Services (chatbot Whatsapp, Telegram, dll)",
        "Laporan Bulanan",
        "Support 24/7"
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

              {plan.isPromo && (
                  <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-red-600 font-lato font-semibold text-sm">
                        Promo Berakhir Dalam:
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="bg-red-500 text-white rounded px-2 py-1">
                        <div className="text-lg font-bold">{timeLeft.days}</div>
                        <div className="text-xs">Hari</div>
                      </div>
                      <div className="bg-red-500 text-white rounded px-2 py-1">
                        <div className="text-lg font-bold">{timeLeft.hours}</div>
                        <div className="text-xs">Jam</div>
                      </div>
                      <div className="bg-red-500 text-white rounded px-2 py-1">
                        <div className="text-lg font-bold">{timeLeft.minutes}</div>
                        <div className="text-xs">Menit</div>
                      </div>
                      <div className="bg-red-500 text-white rounded px-2 py-1">
                        <div className="text-lg font-bold">{timeLeft.seconds}</div>
                        <div className="text-xs">Detik</div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-lg text-gray-500 line-through font-lato mb-1">
                      {plan.originalPrice}
                    </div>
                  )}
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
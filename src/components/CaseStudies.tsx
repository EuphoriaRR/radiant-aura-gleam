
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const CaseStudies = () => {
  const cases = [
    {
      clientName: "Brand Fashion X",
      beforeEngagement: "1.2%",
      afterEngagement: "4.5%",
      beforeFollowers: "+50/minggu",
      afterFollowers: "+400/minggu",
      testimonial: "Athel AI mengubah cara kami melihat Instagram. Pertumbuhannya luar biasa!",
      clientType: "Fashion Brand"
    },
    {
      clientName: "Influencer Y",
      beforeEngagement: "2.1%",
      afterEngagement: "6.8%",
      beforeFollowers: "+120/minggu",
      afterFollowers: "+800/minggu",
      testimonial: "Strategi dari Athel AI membuat konten saya lebih engaging dan tepat sasaran.",
      clientType: "Content Creator"
    },
    {
      clientName: "Café Local Z",
      beforeEngagement: "0.8%",
      afterEngagement: "3.9%",
      beforeFollowers: "+25/minggu",
      afterFollowers: "+350/minggu",
      testimonial: "Pelanggan baru terus berdatangan setelah menggunakan strategi Athel AI.",
      clientType: "Local Business"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-4">
            Lihat Transformasi Klien Kami
          </h2>
          <p className="text-xl font-lato text-gray-600 max-w-2xl mx-auto">
            Hasil nyata dari klien yang telah mempercayai layanan Athel AI untuk mengembangkan Instagram mereka
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
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
                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <p className="font-lato text-gray-700 italic">
                    "{caseStudy.testimonial}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

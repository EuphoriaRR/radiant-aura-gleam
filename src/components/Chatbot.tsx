
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, MessageCircle, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Halo! Saya asisten virtual Athel AI. Ada yang bisa saya bantu?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const predefinedResponses = {
    'layanan': 'Kami menyediakan layanan audit Instagram gratis, analisis mendalam, strategi pertumbuhan, dan AI services untuk bisnis. Ingin tahu lebih detail tentang layanan mana?',
    'audit gratis': 'Audit gratis kami meliputi analisis profil, analisis 10 postingan terakhir, dan skor performa Instagram Anda. Cukup klik tombol "Dapatkan Audit Gratis" untuk memulai!',
    'harga': 'Kami memiliki 3 paket: Starter (GRATIS), Growth (Rp 299.000/bulan), dan Pro/Custom AI (hubungi kami). Paket mana yang ingin Anda ketahui lebih detail?',
    'growth': 'Paket Growth (Rp 299.000/bulan) mencakup semua fitur Starter plus analisis hashtag, analisis kompetitor, rekomendasi konten, dan laporan mingguan.',
    'kontak': 'Anda bisa menghubungi kami via WhatsApp, email, atau jadwalkan panggilan. Scroll ke bagian bawah halaman untuk melihat semua opsi kontak!',
    'cara kerja': 'Prosesnya mudah: 1) Daftar audit gratis, 2) Kami analisis akun Instagram Anda, 3) Terima laporan komprehensif, 4) Implementasikan rekomendasi kami!',
    'default': 'Maaf, saya belum memahami pertanyaan Anda. Coba tanyakan tentang layanan, harga, audit gratis, atau cara kerja kami. Atau hubungi tim kami langsung untuk bantuan lebih lanjut!'
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessages = [...messages, { type: 'user', text: inputMessage }];
      
      // Simple keyword matching for responses
      const lowerInput = inputMessage.toLowerCase();
      let response = predefinedResponses.default;
      
      for (const [keyword, reply] of Object.entries(predefinedResponses)) {
        if (keyword !== 'default' && lowerInput.includes(keyword)) {
          response = reply;
          break;
        }
      }
      
      setTimeout(() => {
        setMessages([...newMessages, { type: 'bot', text: response }]);
      }, 1000);
      
      setMessages(newMessages);
      setInputMessage('');
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl"
          size="icon"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96">
          <Card className="shadow-2xl border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-white rounded-t-lg">
              <CardTitle className="font-montserrat font-bold text-lg flex items-center space-x-2">
                <MessageCircle size={20} />
                <span>Athel AI Assistant</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg font-lato ${
                        message.type === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-800 border shadow-sm'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ketik pesan Anda..."
                    className="font-lato"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;

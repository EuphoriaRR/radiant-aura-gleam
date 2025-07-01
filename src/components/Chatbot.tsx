import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, MessageCircle, Send, Loader2 } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Halo! Saya asisten virtual Athel AI. Ada yang bisa saya bantu?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Store conversation history for context
  const [conversationHistory, setConversationHistory] = useState([]);

  const callGemini = async (userMessage) => {
    try {
      // Build conversation history for Gemini
      const conversationText = conversationHistory.length > 0 
        ? conversationHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n') + '\n'
        : '';
      
      const fullPrompt = `Anda adalah asisten virtual untuk Athel AI, sebuah perusahaan yang menyediakan layanan audit Instagram gratis, analisis mendalam, strategi pertumbuhan, dan AI services untuk bisnis. Jawab dalam bahasa Indonesia dengan ramah dan profesional. 

Layanan kami:
- Starter (GRATIS): Audit dasar Instagram
- Growth (Rp 299.000/bulan): Analisis hashtag, kompetitor, rekomendasi konten, laporan mingguan
- Pro/Custom AI: Solusi kustom (hubungi kami)

Selalu tawarkan bantuan lebih lanjut dan arahkan ke layanan yang sesuai.

${conversationText}User: ${userMessage}
Assistant:`;

      const response = await fetch('/api/gemini-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: fullPrompt
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botResponse = data.response;
      
      // Update conversation history
      setConversationHistory(prev => [
        ...prev,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: botResponse }
      ]);
      
      return botResponse;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return 'Maaf, saya mengalami kesulitan teknis. Silakan coba lagi dalam beberapa saat atau hubungi tim kami langsung untuk bantuan.';
    }
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() && !isLoading) {
      const userMessage = inputMessage.trim();
      const newMessages = [...messages, { type: 'user', text: userMessage }];
      setMessages(newMessages);
      setInputMessage('');
      setIsLoading(true);

      try {
        const botResponse = await callGemini(userMessage);
        setMessages([...newMessages, { type: 'bot', text: botResponse }]);
      } catch (error) {
        setMessages([...newMessages, { 
          type: 'bot', 
          text: 'Maaf, saya mengalami kesulitan teknis. Silakan coba lagi dalam beberapa saat.' 
        }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl"
          size="icon"
        >
          {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-16 sm:bottom-24 right-2 sm:right-6 z-50 w-[calc(100vw-16px)] max-w-sm sm:w-80 md:w-96">
          <Card className="shadow-2xl border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-white rounded-t-lg">
              <CardTitle className="font-montserrat font-bold text-base sm:text-lg flex items-center space-x-2">
                <MessageCircle size={18} />
                <span>Athel AI Assistant</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-64 sm:h-80 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-2 sm:p-3 rounded-lg font-lato text-sm ${
                        message.type === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-800 border shadow-sm'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 border shadow-sm p-2 sm:p-3 rounded-lg font-lato text-sm flex items-center space-x-2">
                      <Loader2 size={16} className="animate-spin" />
                      <span>Mengetik...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-3 sm:p-4 border-t bg-white">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                    placeholder="Ketik pesan Anda..."
                    className="font-lato text-sm"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-primary hover:bg-primary/90 flex-shrink-0"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
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
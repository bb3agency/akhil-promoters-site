import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Building2, PhoneCall, ShieldCheck } from 'lucide-react';
import { projectData } from '../../data';

export const AIPropertyConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: "Welcome to Akhil Promoters! I am your AI Property Concierge. How can I assist you today? You can ask about our signature villas in Banjara Hills, sky residences in Jubilee Hills, or loan EMI calculations."
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    const newMessages = [...messages, { sender: 'user' as const, text: userText }];
    setMessages(newMessages);
    setInputMessage('');

    // Generate intelligent AI response based on real estate queries
    setTimeout(() => {
      let botResponse = "Thank you for reaching out! Our luxury sales team would be delighted to assist you further. You can call us directly at +91 40 4859 9999 or schedule a private site tour.";

      const lower = userText.toLowerCase();
      if (lower.includes('signature') || lower.includes('banjara')) {
        botResponse = "Akhil Signature features 36 ultra-luxury sky villas in Banjara Hills (Road No. 12) starting from ₹12.5 Cr with private plunge pools and double-height living salons.";
      } else if (lower.includes('heights') || lower.includes('jubilee')) {
        botResponse = "Akhil Heights is a 32-story sky residence tower in Jubilee Hills offering 3 BHK & 4 BHK luxury suites (3,450 - 4,950 sq.ft) with 270° views of KBR National Park.";
      } else if (lower.includes('emi') || lower.includes('loan') || lower.includes('calculator')) {
        botResponse = "You can test custom loan amounts and interest schedules on our Support Services page using our interactive EMI Calculator!";
      } else if (lower.includes('nri') || lower.includes('dollar') || lower.includes('currency')) {
        botResponse = "We offer complete NRI investment advisory including FEMA compliance, Power of Attorney assistance, and multi-currency conversion in our Support Services suite.";
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('call') || lower.includes('visit')) {
        botResponse = "You can reach our concierge at +91 40 4859 9999 or book a private site visit via the Project Details page!";
      }

      setMessages((prev) => [...prev, { sender: 'bot' as const, text: botResponse }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#111111] text-[#C5A880] border border-[#C5A880]/50 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2 group"
        title="AI Property Assistant"
      >
        <Sparkles className="w-5 h-5 animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider hidden md:inline pr-2">Property Advisor</span>
      </button>

      {/* Chat Drawer Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white border border-gray-200 shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            {/* Drawer Header */}
            <div className="bg-[#111111] text-white p-4 flex justify-between items-center border-b border-gold-900/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C5A880] text-black flex items-center justify-center font-bold text-xs">
                  AP
                </div>
                <div>
                  <h4 className="text-sm font-serif font-semibold text-white">Akhil Property Concierge</h4>
                  <span className="text-[10px] text-[#C5A880] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Online | AI Powered
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50 text-xs">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-black text-white font-medium'
                        : 'bg-white text-gray-800 border border-gray-200 shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200 flex gap-2">
              <input
                type="text"
                placeholder="Ask about projects, prices, or site visits..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-[#C5A880]"
              />
              <button
                type="submit"
                className="p-2 bg-black text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

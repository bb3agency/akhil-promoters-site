import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Building2, PhoneCall, ShieldCheck } from 'lucide-react';
import { projectData } from '../../data';
import { mobileTap, mobileButtonTap, mobileChipTap } from '../../utils/motion';

export const AIPropertyConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: "Welcome to Akhil Promoters! I am your AI Property Concierge. How can I assist you today? You can ask about our residential developments (Blueberry, Apple, Cherry, Daffodils), specifications, or loan EMI calculations."
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sendPrompt = (query: string) => {
    const newMessages = [...messages, { sender: 'user' as const, text: query }];
    setMessages(newMessages);

    setTimeout(() => {
      let botResponse = "Thank you for reaching out! Our advisory team would be delighted to assist you further. You can call our Vijayawada office directly at +91 96766 67666 or visit our Contact page.";

      const lower = query.toLowerCase();
      if (lower.includes('blueberry') || lower.includes('ayodhya')) {
        botResponse = "Blueberry features luxury 3 BHK flats (1930 & 2020 SFT) in Lotus Land Mark, Ayodhya Nagar, Vijayawada with premium architectural planning and generator backup.";
      } else if (lower.includes('apple')) {
        botResponse = "Apple offers premium 3 BHK residences (1445 SFT) in Mahadevpuram Colony, Kanuru, Vijayawada with 3D isometric interior planning and high-end joinery.";
      } else if (lower.includes('cherry')) {
        botResponse = "Cherry is a completed 3 BHK landmark project (1625 SFT) in Varalakshmi Puram, Kanuru, Vijayawada situated on 33' and 40' wide roads.";
      } else if (lower.includes('daffodils') || lower.includes('poranki') || lower.includes('tadigadapa')) {
        botResponse = "Daffodils offers premium 3 BHK apartments (1700 & 1730 SFT) on Tadigadapa 100ft Road, Poranki, Vijayawada, just 1 Km from Kamineni Hospital.";
      } else if (lower.includes('emi') || lower.includes('loan') || lower.includes('calculator')) {
        botResponse = "You can test custom loan amounts and interest schedules on our Support Services page using our interactive EMI Calculator!";
      } else if (lower.includes('nri') || lower.includes('dollar') || lower.includes('currency')) {
        botResponse = "We offer complete NRI investment advisory including FEMA compliance, Power of Attorney assistance, and multi-currency conversion in our Support Services suite.";
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('call') || lower.includes('visit')) {
        botResponse = "You can reach our Vijayawada office directly at +91 96766 67666 or +91 99121 62349, or WhatsApp us anytime!";
      }

      setMessages((prev) => [...prev, { sender: 'bot' as const, text: botResponse }]);
    }, 500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    const text = inputMessage.trim();
    setInputMessage('');
    sendPrompt(text);
  };

  const quickPills = ['Blueberry 3 BHK', 'Apple Kanuru', 'Daffodils Poranki', 'Calculate EMI'];

  return (
    <>
      {/* Floating Trigger Button with Ambient Pulse & Tactile Tap */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={mobileButtonTap}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3.5 sm:p-4 bg-[#111111] text-[#C5A880] border border-[#C5A880]/50 rounded-full shadow-2xl transition-all flex items-center gap-2 group min-w-[48px] min-h-[48px] justify-center"
        title="AI Property Assistant"
        aria-label="Open AI Property Assistant"
      >
        <Sparkles className="w-5 h-5 animate-pulse text-[#C5A880]" />
        <span className="text-xs font-bold uppercase tracking-wider hidden md:inline pr-2">Property Advisor</span>
      </motion.button>

      {/* Chat Drawer Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-3 bottom-20 sm:bottom-24 sm:right-6 sm:left-auto sm:w-96 max-h-[75dvh] sm:max-h-[500px] h-[490px] z-50 bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Drawer Header */}
            <div className="bg-[#111111] text-white p-4 flex justify-between items-center border-b border-gold-900/30 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C5A880] text-black flex items-center justify-center font-bold text-xs">
                  AP
                </div>
                <div>
                  <h4 className="text-sm font-serif font-semibold text-white">Akhil Property Concierge</h4>
                  <span className="text-[10px] text-[#C5A880] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block -ml-2.5"></span> Online | AI Powered
                  </span>
                </div>
              </div>
              <motion.button
                whileTap={mobileButtonTap}
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close concierge"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Chat History with Animated Bubble Pop-ins */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50 text-xs">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-lg leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-black text-white font-medium shadow-sm'
                        : 'bg-white text-gray-800 border border-gray-200 shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Suggestion Pills (Touch-Friendly for Mobile) */}
            <div className="px-3 py-2 bg-white border-t border-gray-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
              {quickPills.map((pill) => (
                <motion.button
                  key={pill}
                  whileTap={mobileChipTap}
                  onClick={() => sendPrompt(pill)}
                  className="px-2.5 py-1 bg-gray-100 hover:bg-[#C5A880]/20 active:bg-[#C5A880]/30 text-gray-700 hover:text-black rounded-full text-[10px] font-medium whitespace-nowrap transition-colors border border-gray-200"
                >
                  {pill}
                </motion.button>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200 flex gap-2 shrink-0">
              <input
                type="text"
                placeholder="Ask about projects, prices, or site visits..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-3 py-2.5 bg-gray-50 border border-gray-300 text-base sm:text-xs text-gray-900 focus:outline-none focus:border-[#C5A880] rounded-lg"
              />
              <motion.button
                whileTap={mobileButtonTap}
                type="submit"
                className="p-2.5 min-w-[44px] min-h-[44px] bg-black text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-colors rounded-lg flex items-center justify-center"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


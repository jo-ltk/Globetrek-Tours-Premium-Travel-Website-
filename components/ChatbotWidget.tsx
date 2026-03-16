"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Headset, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface Message {
  id: string;
  text: string;
  sender: "user" | "concierge";
  timestamp: Date;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm James, your Globetrek concierge. I'm here to help you design a journey that fits your style perfectly. What's on your mind?",
      sender: "concierge",
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textOverride?: string) => {
    const textToSend = textOverride || inputValue;
    if (!textToSend.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate concierge response
    setTimeout(() => {
      const responses = [
        "That's a fantastic choice! Our private collections for that region are quite exceptional.",
        "I understand completely. We can tailor the pace of the tour to ensure maximum comfort.",
        "Excellent. Let me check the best seasonal windows for that specific destination.",
        "We have a few 'hidden gems' in that area that aren't on the public site. Shall I tell you more?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "concierge",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(10px)" }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="mb-6 flex h-[600px] w-[90vw] flex-col overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/70 shadow-[0_32px_80px_-16px_rgba(32,53,35,0.2),0_0_0_1px_rgba(32,53,35,0.05)] backdrop-blur-2xl sm:w-[420px]"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[var(--accent)] to-[#1a3317] p-6 text-white">
              {/* Decorative background element */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="h-12 w-12 overflow-hidden rounded-2xl border-2 border-white/20 shadow-inner">
                      <Image 
                        src="/images/concierge-avatar.png" 
                        alt="Concierge Avatar" 
                        width={48} 
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-emerald-500">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base font-semibold tracking-tight">James</h3>
                      <CheckCircle2 className="h-3.5 w-3.5 text-white/60" />
                    </div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-white/70">Expert Concierge</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-white/20 active:scale-90"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="relative flex-1 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed p-6 space-y-6 scroll-smooth h-full">
              {messages.map((msg, idx) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.05 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`relative max-w-[85%] px-5 py-3 text-[14px] shadow-sm ${
                      msg.sender === "user"
                        ? "bg-[var(--accent)] text-white rounded-[22px] rounded-tr-none"
                        : "bg-white text-[var(--ink)] rounded-[22px] rounded-tl-none border border-black/5"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="leading-relaxed">{msg.text}</span>
                      <div className={`flex shrink-0 items-center gap-1 text-[9px] font-medium uppercase tracking-wider opacity-40 self-end mb-0.5`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        {msg.sender === "user" && <CheckCircle2 className="h-2.5 w-2.5" />}
                      </div>
                    </div>
                    {msg.sender === "concierge" && (
                       <span className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-white" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-full bg-white/80 px-4 py-3 border border-black/5">
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Actions */}
            <div className="px-6 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-white/40">
              {["Custom Itinerary", "Private Villas", "Exclusive Safaris", "Contact Support"].map((text) => (
                <button
                  key={text}
                  onClick={() => handleSend(text)}
                  className="whitespace-nowrap rounded-2xl border border-[var(--accent)]/10 bg-white/50 px-4 py-2 text-[12px] font-semibold text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all shadow-sm active:scale-95"
                >
                  {text}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-6 pt-2 bg-white/50 border-t border-black/5">
              <div className="relative group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask James anything..."
                  className="w-full rounded-[1.5rem] border border-black/5 bg-white p-4 pr-14 text-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] focus:border-[var(--accent)]/30 focus:ring-4 focus:ring-[var(--accent)]/5 transition-all outline-none placeholder:text-[var(--muted)]/50"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim() && !isTyping}
                  className="absolute right-2 top-1.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-white transition-all hover:shadow-lg active:scale-90 disabled:opacity-20 disabled:grayscale"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close concierge" : "Open travel assistant"}
        className="group relative h-[56px] min-w-[56px] cursor-pointer overflow-hidden rounded-full font-medium text-white active:scale-95 px-6"
        initial={false}
        animate={{ 
          backgroundColor: isOpen ? "#1a3317" : "#294825", // Using hex for reliability
          width: isOpen ? "120px" : "190px",
          boxShadow: isOpen 
            ? "0 12px 30px -8px rgba(0,0,0,0.3)" 
            : "0 24px 50px -12px rgba(41,72,37,0.35)"
        }}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 200,
          backgroundColor: { duration: 0.3 }
        }}
      >
        <div className="relative h-full w-full flex items-center justify-center">
          <AnimatePresence initial={false} mode="popLayout">
            {isOpen ? (
              <motion.div
                key="close-state"
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.9 }}
                transition={{ duration: 0.2, ease: "circOut" }}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <X className="h-5 w-5" />
                <span>Close</span>
              </motion.div>
            ) : (
              <motion.div
                key="chat-state"
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.9 }}
                transition={{ duration: 0.2, ease: "circOut" }}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="h-5 w-5 fill-white/10" />
                <span>Ask concierge</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
}

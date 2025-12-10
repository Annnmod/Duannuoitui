import React, { useRef, useEffect, useState } from 'react';
import { Message } from '../types';
import { Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

const Chat: React.FC<ChatProps> = ({ messages, onSendMessage, isLoading }) => {
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() && !isLoading) {
      onSendMessage(inputText.trim());
      setInputText('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative z-20">
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 no-scrollbar bg-gradient-to-b from-white to-gray-50/50">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-gray-300">
            <Sparkles size={24} className="mb-1 text-orange-200 animate-pulse" />
            <p className="font-medium text-[10px] uppercase tracking-wide">Hãy nói "Xin chào" với Tui đi!</p>
          </div>
        )}
        
        <AnimatePresence initial={false}>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-snug shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-orange-500 text-white rounded-br-none' 
                    : 'bg-white border border-gray-100 text-gray-700 rounded-bl-none'}
                `}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white border border-gray-100 px-3 py-1.5 rounded-2xl rounded-bl-none flex items-center gap-1 shadow-sm">
              <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area - Compact */}
      <div className="p-2 bg-white border-t border-gray-100">
        <form onSubmit={handleSubmit} className="flex gap-2 relative">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Nói gì đó..."
            className="flex-1 bg-gray-100 text-gray-800 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-300 focus:bg-white transition-all placeholder-gray-400 text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="w-9 h-9 bg-orange-500 text-white rounded-full hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md flex items-center justify-center shrink-0"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
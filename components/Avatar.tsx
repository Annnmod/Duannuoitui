import React from 'react';
import { AnMood } from '../types';
import { motion } from 'framer-motion';

interface AvatarProps {
  mood: AnMood;
}

const Avatar: React.FC<AvatarProps> = ({ mood }) => {
  // Simple emoji/svg representation based on mood
  // In a real app, these would be cute images or Lottie animations
  
  const getAvatarContent = () => {
    // Base text size responsive: text-6xl (mobile) -> text-8xl (desktop)
    const emojiClass = "text-6xl sm:text-7xl md:text-8xl filter drop-shadow-xl select-none";
    
    switch (mood) {
      case AnMood.HAPPY:
        return (
          <div className="relative flex items-center justify-center">
            <span className={emojiClass}>🥰</span>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: -20 }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute -top-4 -right-4 text-3xl sm:text-4xl select-none"
            >
              💖
            </motion.div>
          </div>
        );
      case AnMood.SAD:
        return <span className={emojiClass}>🥺</span>;
      case AnMood.ANGRY:
        return <span className={emojiClass}>😤</span>;
      case AnMood.SLEEPY:
        return (
          <div className="relative flex items-center justify-center">
             <span className={emojiClass}>😴</span>
             <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 20, y: -20 }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-2 right-0 text-2xl sm:text-3xl font-bold text-blue-400 select-none"
            >
              Zzz
            </motion.div>
          </div>
        );
      case AnMood.EATING:
        return <span className={emojiClass}>😋</span>;
      case AnMood.NEUTRAL:
      default:
        return <span className={emojiClass}>🐣</span>;
    }
  };

  return (
    <motion.div 
      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(8,_112,_184,_0.1)] border-4 border-pink-100 shrink-0"
      animate={{ 
        y: [0, -10, 0],
        scale: mood === AnMood.HAPPY ? [1, 1.05, 1] : 1
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 3,
        ease: "easeInOut"
      }}
    >
      {getAvatarContent()}
    </motion.div>
  );
};

export default Avatar;
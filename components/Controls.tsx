import React from 'react';
import { Utensils, Gamepad2, Moon, Gift } from 'lucide-react';

interface ControlsProps {
  onFeed: () => void;
  onPlay: () => void;
  onSleep: () => void;
  onDonate: () => void;
  disabled: boolean;
}

const ControlButton: React.FC<{
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  colorClass: string;
  iconColor: string;
  disabled: boolean;
}> = ({ onClick, icon, label, colorClass, iconColor, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      flex flex-col items-center justify-center gap-1
      w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl
      ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'hover:-translate-y-1 active:scale-95 bg-white/80 backdrop-blur-md'}
      transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)]
      border border-white/60
      group
    `}
  >
    <div className={`
      p-2 sm:p-2.5 md:p-3 rounded-xl transition-colors duration-300
      ${disabled ? 'text-gray-400 bg-gray-200' : `${colorClass} text-white shadow-lg group-hover:scale-110`}
    `}>
      {icon}
    </div>
    <span className={`text-[10px] sm:text-xs font-bold mt-0.5 sm:mt-1 ${disabled ? 'text-gray-400' : 'text-gray-600'}`}>{label}</span>
  </button>
);

const Controls: React.FC<ControlsProps> = ({ onFeed, onPlay, onSleep, onDonate, disabled }) => {
  return (
    <div className="flex justify-center items-center gap-2 sm:gap-4 w-full py-2 px-2">
      <ControlButton
        onClick={onFeed}
        icon={<Utensils className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
        label="Ăn"
        colorClass="bg-gradient-to-br from-orange-400 to-red-400"
        iconColor="text-orange-500"
        disabled={disabled}
      />
      <ControlButton
        onClick={onPlay}
        icon={<Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
        label="Chơi"
        colorClass="bg-gradient-to-br from-pink-400 to-purple-400"
        iconColor="text-pink-500"
        disabled={disabled}
      />
      <ControlButton
        onClick={onSleep}
        icon={<Moon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
        label="Ngủ"
        colorClass="bg-gradient-to-br from-blue-400 to-indigo-400"
        iconColor="text-blue-500"
        disabled={disabled}
      />
      <ControlButton
        onClick={onDonate}
        icon={<Gift className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
        label="Tặng quà"
        colorClass="bg-gradient-to-br from-yellow-400 to-orange-500"
        iconColor="text-yellow-500"
        disabled={disabled}
      />
    </div>
  );
};

export default Controls;
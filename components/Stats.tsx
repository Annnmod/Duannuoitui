import React from 'react';
import { AnStats } from '../types';
import { Heart, Zap, Utensils } from 'lucide-react';

interface StatsProps {
  stats: AnStats;
}

const StatBar: React.FC<{ 
  icon: React.ReactNode; 
  value: number; 
  colorFrom: string;
  colorTo: string;
  label: string;
}> = ({ icon, value, colorFrom, colorTo, label }) => (
  <div className="flex flex-col w-full mb-2 sm:mb-3">
    <div className="flex justify-between items-center text-[10px] sm:text-xs font-bold text-gray-500 mb-1 px-1">
      <div className="flex items-center gap-1.5">
         {icon}
         <span>{label}</span>
      </div>
      <span>{Math.round(value)}%</span>
    </div>
    <div className="h-3 sm:h-4 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner border border-black/5 relative">
      <div 
        className={`h-full bg-gradient-to-r ${colorFrom} ${colorTo} transition-all duration-700 ease-out relative`}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      >
        {/* Shine effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30 rounded-t-full"></div>
      </div>
    </div>
  </div>
);

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="w-full max-w-[95%] sm:max-w-[90%] mx-auto glass-card p-3 sm:p-5 rounded-2xl sm:rounded-3xl">
      <StatBar 
        icon={<Heart size={14} className="text-pink-500" />} 
        value={stats.happiness} 
        colorFrom="from-pink-400"
        colorTo="to-rose-500"
        label="Vui vẻ"
      />
      <StatBar 
        icon={<Utensils size={14} className="text-orange-500" />} 
        value={stats.hunger} 
        colorFrom="from-orange-400"
        colorTo="to-amber-500"
        label="No bụng"
      />
      <StatBar 
        icon={<Zap size={14} className="text-blue-500" />} 
        value={stats.energy} 
        colorFrom="from-blue-400"
        colorTo="to-cyan-500"
        label="Năng lượng"
      />
    </div>
  );
};

export default Stats;
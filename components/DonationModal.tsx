import React, { useEffect, useState } from 'react';
import { X, Copy, Check, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  packageName: string;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, amount, packageName }) => {
  const [supportCode, setSupportCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const randomCode = `NT-${Math.floor(1000 + Math.random() * 9000)}`;
      setSupportCode(randomCode);
      setCopied(false);
    }
  }, [isOpen]);

  const copyToClipboard = () => {
    const text = `VIETCOMBANK\nANACE\nVO PHAM TRUONG AN\n${amount}\n${supportCode}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirm = () => {
      // Massive Fireworks Effect
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      // Close modal after effect
      setTimeout(() => {
          onClose();
      }, 3500);
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white w-[90%] sm:w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative z-10"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-5 flex justify-between items-start text-white relative overflow-hidden">
             <div className="relative z-10">
                 <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">Xác nhận đầu tư</p>
                 <h3 className="font-black text-xl leading-tight">Cổng Thanh Toán <br/>Niềm Tin</h3>
             </div>
             <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors relative z-10">
               <X size={24} />
             </button>
             <HeartHandshake className="absolute -bottom-4 -right-4 text-white opacity-10" size={100} />
          </div>

          <div className="p-5 space-y-5">
            <div className="text-center bg-orange-50 p-4 rounded-2xl border border-orange-100">
              <p className="text-xs text-gray-500 mb-1 font-bold uppercase">Gói đã chọn</p>
              <h4 className="text-lg font-bold text-orange-600 mb-1">{packageName}</h4>
              <p className="text-3xl font-black text-gray-900">{amount}</p>
            </div>

            {/* Bank Card Look */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-800 rounded-xl p-5 text-white shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-20 font-black text-4xl italic group-hover:scale-110 transition-transform duration-500">VCB</div>
              
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-[10px] opacity-70 uppercase tracking-wider font-bold">Ngân hàng</p>
                        <p className="font-bold">VIETCOMBANK</p>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/sim-card-chip.png" className="w-8 opacity-80" alt="chip"/>
                </div>
                
                <div onClick={copyToClipboard} className="cursor-pointer active:scale-95 transition-transform">
                  <p className="text-[10px] opacity-70 uppercase tracking-wider font-bold mb-1">Số tài khoản (Chạm để copy)</p>
                  <div className="flex items-center gap-2">
                    <p className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-yellow-300 drop-shadow-md">ANACE</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] opacity-70 uppercase tracking-wider font-bold">Chủ tài khoản</p>
                  <p className="font-bold uppercase tracking-wide">VÕ PHẠM TRƯỜNG AN</p>
                </div>
              </div>
            </div>

            {/* Transfer Memo */}
            <div>
              <div className="flex justify-between items-center mb-2">
                  <p className="text-xs font-bold text-gray-700">Nội dung CK (Quan trọng!!)</p>
                  <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">Không được sai</span>
              </div>
              <div className="flex items-center justify-between bg-gray-100 p-3 rounded-xl border border-gray-200">
                <span className="font-mono font-bold text-lg text-gray-800 tracking-wide">{supportCode}</span>
                <button 
                  onClick={copyToClipboard}
                  className={`flex items-center gap-1 text-xs font-bold px-3 py-2 rounded-lg transition-all ${copied ? 'bg-green-500 text-white' : 'bg-white text-gray-800 shadow-sm hover:bg-gray-50'}`}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? 'Đã copy' : 'Copy'}
                </button>
              </div>
              <p className="text-[10px] text-center text-gray-400 mt-3 italic">
                *Lưu ý: Sau khi chuyển khoản, vui lòng hít thở sâu và chờ đợi tín hiệu từ vũ trụ (hoặc check story của tui).
              </p>
            </div>

            <button 
              onClick={handleConfirm}
              className="w-full py-3.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-xl active:scale-95"
            >
              Đã chuyển khoản (Uy tín)
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DonationModal;
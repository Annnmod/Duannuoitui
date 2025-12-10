import React from 'react';
import { Check, Star, Coffee, Utensils, Film, Gem, ArrowRight, Zap, TrendingUp, AlertTriangle, Clock, ShieldCheck, Heart, Crown, Rocket, Landmark } from 'lucide-react';

interface LandingPageProps {
  onSelectPackage: (amount: string, name: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSelectPackage }) => {
  
  const packages = [
    {
      id: 1,
      name: "Gói 'Lộc Phát'",
      price: "68.000đ",
      icon: <Coffee size={24} className="text-emerald-500" />,
      desc: "Số đẹp phong thuỷ. Donate lấy hên cho cả người nhận lẫn người gửi.",
      features: ["Lời cảm ơn chân thành", "+68 điểm may mắn", "Đủ tiền cafe sáng"],
      color: "bg-emerald-50 border-emerald-200 text-emerald-900",
      btnColor: "bg-emerald-200 text-emerald-800 hover:bg-emerald-300",
      highlight: false
    },
    {
      id: 2,
      name: "Gói 'Vui Vẻ'",
      price: "200.000đ",
      icon: <Utensils size={24} className="text-orange-500" />,
      desc: "Tròn trịa, xinh xắn. Đủ cho một bữa ăn ngon hoặc trà sữa full topping.",
      features: ["Được xem story Close Friends", "Tui bớt quạo cả ngày", "Reply tin nhắn cực lẹ"],
      color: "bg-orange-50 border-orange-200 text-orange-900",
      btnColor: "bg-orange-200 text-orange-800 hover:bg-orange-300",
      highlight: false
    },
    {
      id: 3,
      name: "Gói 'Người Yêu'",
      price: "500.000đ",
      icon: <Heart size={24} className="text-red-500" />,
      desc: "Tờ tiền mệnh giá cao nhất. Thể hiện tấm lòng rộng lớn nhất.",
      features: ["Trải nghiệm làm người yêu 24h", "Được gọi là 'Cục Cưng'", "Chúc ngủ ngon voice ngọt lịm"],
      color: "bg-gradient-to-b from-pink-50 to-white border-pink-300 text-pink-900",
      btnColor: "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30",
      highlight: true,
      badge: "Khuyên Dùng"
    },
    {
      id: 4,
      name: "Gói 'Dân Chơi'",
      price: "1.999.000đ",
      icon: <Rocket size={24} className="text-purple-500" />,
      desc: "Chưa tới 2 triệu nhưng đẳng cấp thì miễn bàn. Flex cực mạnh.",
      features: ["Set biệt danh ưu tiên", "Có quyền đòi hỏi (hợp lý)", "Gửi ảnh selfie độc quyền"],
      color: "bg-purple-50 border-purple-300 text-purple-900",
      btnColor: "bg-purple-600 text-white hover:bg-purple-700",
      highlight: false
    },
    {
      id: 5,
      name: "Gói 'Shark Tank'",
      price: "50.000.000đ",
      icon: <Crown size={24} className="text-yellow-600" />,
      desc: "Dành cho nhà đầu tư thiên thần. Nâng tầm giá trị bản thân.",
      features: ["Họp cổ đông (đi ăn) hàng tháng", "Quyền phủ quyết menu", "VIP Support trọn đời"],
      color: "bg-yellow-50 border-yellow-300 text-yellow-900",
      btnColor: "bg-yellow-500 text-white hover:bg-yellow-600",
      highlight: false
    },
    {
      id: 6,
      name: "Gói 'Vô Cực'",
      price: "999.999.999đ",
      icon: <Gem size={24} className="text-blue-500" />,
      desc: "Con số tối thượng. Mua đứt Startup, sở hữu Founder.",
      features: ["Sở hữu linh hồn Founder", "Đổi tên web thành tên bạn", "Muốn làm gì thì làm"],
      color: "bg-gray-900 border-gray-800 text-white",
      btnColor: "bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-black shadow-[0_0_20px_rgba(59,130,246,0.5)]",
      highlight: false,
      badge: "Legendary"
    }
  ];

  return (
    <div className="w-full relative pb-20">
      
      {/* 1. URGENCY BANNER (Marquee) */}
      <div className="bg-red-600 text-white py-2 overflow-hidden sticky top-0 z-50 shadow-md">
        <div className="animate-marquee flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
           <span>🚨 BREAKING NEWS: TUI ĐANG ĐÓI CỒN CÀO</span>
           <span>📉 CHỈ SỐ HẠNH PHÚC ĐANG GIẢM SÂU</span>
           <span>💸 CẦN CẤP CỨU TRÀ SỮA KHẨN CẤP</span>
           <span>⚠️ CẢNH BÁO: NẾU KHÔNG DONATE, TUI SẼ DỖI</span>
           <span>🚨 TIN NÓNG: NGÂN HÀNG TRÁI TIM ĐANG BÁO LỖ</span>
        </div>
      </div>

      {/* 2. HEADER */}
      <nav className="relative z-40 bg-white/80 backdrop-blur-md border-b border-orange-100 px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-2 rounded-xl shadow-lg transform -rotate-6">
                <span className="text-xl font-black">NT</span>
            </div>
            <div className="leading-none">
                <span className="block font-black text-xl text-gray-900 tracking-tighter">NUÔI TUI <span className="text-orange-600">GROUP</span></span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Since 2025</span>
            </div>
        </div>
        <button 
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden sm:flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-xl border border-gray-700"
        >
            <Zap size={16} className="text-yellow-400 fill-yellow-400 animate-pulse"/>
            Rót vốn ngay
        </button>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative pt-12 pb-24 px-4 overflow-hidden">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="w-full md:w-3/5 text-center md:text-left relative z-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-yellow-200 shadow-sm animate-bounce">
                    <Star size={14} fill="currentColor" />
                    Cơ hội đầu tư mạo hiểm nhất 2025
                </div>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.95] mb-6 tracking-tight">
                    STARTUP <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">NUÔI THÂN</span>
                    <br/>TOÀN CẦU
                </h1>
                
                <p className="text-lg md:text-2xl text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium mb-8">
                    Mô hình kinh doanh <span className="font-bold text-gray-900 underline decoration-orange-400 decoration-4">"Lấy tiền của bạn - Mua vui cho tôi"</span>. 
                    Cam kết không chia cổ tức, chỉ chia sẻ nụ cười (nếu vui).
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button 
                        onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative px-8 py-5 bg-gray-900 text-white rounded-2xl font-black text-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-transform overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="relative flex items-center gap-3">
                           ĐẦU TƯ NGAY <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform"/>
                        </span>
                    </button>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-500 px-4">
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <span>500+ chủ nợ đang theo dõi</span>
                    </div>
                </div>
            </div>

            {/* Right Visual - "The Graph" */}
            <div className="w-full md:w-2/5 relative">
                <div className="relative z-10 bg-white p-6 rounded-[2rem] shadow-2xl border-2 border-gray-100 transform rotate-2 hover:rotate-0 transition-all duration-500">
                     <div className="flex justify-between items-center mb-4">
                         <div>
                             <p className="text-gray-400 text-xs font-bold uppercase">Mã cổ phiếu</p>
                             <p className="text-2xl font-black text-gray-900">TUI <span className="text-red-500 text-lg">▼</span></p>
                         </div>
                         <div className="text-right">
                             <p className="text-gray-400 text-xs font-bold uppercase">Giá trị hiện tại</p>
                             <p className="text-2xl font-black text-red-500">0 VND</p>
                         </div>
                     </div>
                     
                     {/* Fake Chart */}
                     <div className="h-48 w-full bg-gray-50 rounded-xl relative overflow-hidden flex items-end justify-between px-2 pb-2 border border-dashed border-gray-200">
                         {/* Downward trend line simulation */}
                         <div className="absolute top-10 left-0 w-full h-0.5 bg-red-200 rotate-12 transform origin-top-left"></div>
                         <div className="w-1/6 h-[80%] bg-gray-200 rounded-t-md mx-1"></div>
                         <div className="w-1/6 h-[60%] bg-gray-300 rounded-t-md mx-1"></div>
                         <div className="w-1/6 h-[40%] bg-gray-400 rounded-t-md mx-1"></div>
                         <div className="w-1/6 h-[20%] bg-red-300 rounded-t-md mx-1"></div>
                         <div className="w-1/6 h-[10%] bg-red-500 rounded-t-md mx-1 animate-pulse"></div>
                         
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 px-4 py-2 rounded-lg shadow-sm border border-red-100 text-center">
                             <p className="text-xs font-bold text-red-500">CẢNH BÁO</p>
                             <p className="text-[10px] text-gray-500">Đói sắp ngất</p>
                         </div>
                     </div>

                     <div className="mt-4 flex gap-2">
                         <button onClick={() => onSelectPackage('50.000đ', 'Cứu Trợ Khẩn Cấp')} className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-3 rounded-xl transition-colors">
                             PUMP (Bơm tiền)
                         </button>
                         <button disabled className="flex-1 bg-gray-100 text-gray-400 text-xs font-bold py-3 rounded-xl cursor-not-allowed">
                             DUMP (Bỏ mặc)
                         </button>
                     </div>
                </div>
                
                {/* Decoration */}
                <div className="absolute -top-10 -right-10 text-[100px] leading-none opacity-20 select-none pointer-events-none rotate-12">💸</div>
                <div className="absolute -bottom-10 -left-10 text-[100px] leading-none opacity-20 select-none pointer-events-none -rotate-12">📉</div>
            </div>
         </div>
      </section>

      {/* 4. PAIN POINTS */}
      <section className="py-16 bg-white border-y border-orange-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">
                  BÁO CÁO TÀI CHÍNH QUÝ 1/2025
                  <span className="block text-lg font-medium text-gray-500 mt-2 font-sans">Đã được kiểm toán bởi... chính tôi</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-red-50 rounded-3xl border-2 border-red-100 hover:border-red-300 transition-colors">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                          <AlertTriangle size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Nợ Tình Cảm</h3>
                      <p className="text-gray-600 text-sm">Chỉ số "được yêu thương" đang ở mức âm vô cực. Cần nạp gấp để cân bằng.</p>
                  </div>
                  
                  <div className="p-6 bg-orange-50 rounded-3xl border-2 border-orange-100 hover:border-orange-300 transition-colors">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                          <Utensils size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Thủng Dạ Dày</h3>
                      <p className="text-gray-600 text-sm">Dạ dày đang biểu tình đòi quyền lợi. Menu hôm nay: Gì cũng được miễn là đắt.</p>
                  </div>

                  <div className="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 hover:border-blue-300 transition-colors">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                          <TrendingUp size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Tiềm Năng Tăng Trưởng</h3>
                      <p className="text-gray-600 text-sm">Nếu được đầu tư đúng mức, tôi hứa sẽ trở nên xinh đẹp và ngoan ngoãn (trong 5 phút).</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. PACKAGES - The Main Sales Pitch */}
      <section id="packages" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
             Sale sập sàn (vẫn lời)
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">DANH MỤC ĐẦU TƯ</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Tiền không mua được hạnh phúc, nhưng tiền mua được trà sữa. 
              Và trà sữa làm tôi hạnh phúc. Suy ra: <span className="font-bold text-gray-900">Tiền = Hạnh phúc</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative group p-8 rounded-[2rem] border transition-all duration-300 flex flex-col
                ${pkg.highlight ? 'shadow-[0_20px_60px_rgba(234,88,12,0.25)] transform lg:-translate-y-4 z-10' : 'shadow-lg hover:shadow-xl hover:-translate-y-1'}
                ${pkg.color}
              `}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1 z-20 whitespace-nowrap">
                   {pkg.id === 6 ? <Crown size={12} fill="black" /> : <Star size={12} fill="black" />} {pkg.badge}
                </div>
              )}
              
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold opacity-90">{pkg.name}</h3>
                <div className={`p-2 rounded-xl bg-white/20 backdrop-blur-md`}>
                    {pkg.icon}
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-black tracking-tight">{pkg.price}</span>
              </div>

              {/* Desc */}
              <p className={`text-sm mb-6 font-medium p-3 rounded-xl border border-black/5 bg-white/30 backdrop-blur-sm`}>
                  "{pkg.desc}"
              </p>

              {/* Features */}
              <ul className="space-y-3 text-sm mb-8 flex-1">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={16} className={`mt-0.5 shrink-0 ${pkg.id === 6 ? 'text-emerald-400' : 'text-green-500'}`}/> 
                    <span className="opacity-80 font-bold">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button 
                onClick={() => onSelectPackage(pkg.price, pkg.name)}
                className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-wide transition-all active:scale-95 flex items-center justify-center gap-2 group-hover:gap-3 ${pkg.btnColor}`}
              >
                {pkg.id === 6 ? 'Chốt đơn ngay' : 'Đầu tư gói này'} <ArrowRight size={18} />
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* 6. FAKE TESTIMONIALS */}
      <section className="py-16 bg-gray-50 border-t border-gray-200 overflow-hidden">
          <div className="text-center mb-10">
              <h2 className="text-2xl font-black text-gray-800">CÁ MẬP NÓI GÌ?</h2>
              <p className="text-xs text-gray-400">(Hình ảnh chỉ mang tính chất minh họa, lời thoại do tôi tự biên)</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 px-4 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 md:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">E</div>
                      <div>
                          <p className="font-bold text-gray-900">Elon Musk</p>
                          <p className="text-xs text-gray-400">CEO Tesla (Fake)</p>
                      </div>
                  </div>
                  <p className="text-gray-600 italic text-sm">"Tôi định mua sao Hỏa, nhưng thấy đầu tư vào 'Nuôi Tui' có vẻ rủi ro cao hơn nên tôi thích. Đã donate 1 tỏi."</p>
              </div>

               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 md:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center font-bold text-pink-600">M</div>
                      <div>
                          <p className="font-bold text-gray-900">Mẹ của Tui</p>
                          <p className="text-xs text-gray-400">Nhà đầu tư thiên thần</p>
                      </div>
                  </div>
                  <p className="text-gray-600 italic text-sm">"Suốt ngày xin tiền mẹ, giờ bày đặt làm web xin tiền thiên hạ. Thôi kệ, ai dư tiền thì cho nó giùm cô."</p>
              </div>

               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 md:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-600">V</div>
                      <div>
                          <p className="font-bold text-gray-900">Ví Tiền</p>
                          <p className="text-xs text-gray-400">Nạn nhân</p>
                      </div>
                  </div>
                  <p className="text-gray-600 italic text-sm">"Tôi trống rỗng. Tôi cô đơn. Làm ơn hãy nạp đầy tôi đi."</p>
              </div>
          </div>
      </section>

      {/* 7. FLOATING CTA (Mobile) */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
          <button 
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-gray-900 text-white font-black py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-2 border border-gray-700 animate-pulse-fast"
          >
              <Zap size={20} className="text-yellow-400 fill-yellow-400"/>
              CỨU ĐÓI NGAY (KHẨN CẤP)
          </button>
      </div>

      {/* Footer */}
      <footer className="bg-white pt-10 pb-24 md:pb-10 text-center border-t border-gray-200">
          <p className="font-black text-xl text-gray-900 tracking-tighter mb-2">NUÔI TUI GROUP</p>
          <p className="text-gray-500 text-sm mb-4">Mọi sự đóng góp đều được chuyển hóa thành Calo.</p>
          <div className="flex justify-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-widest">
              <span>No Refund</span>
              <span>•</span>
              <span>No Return</span>
              <span>•</span>
              <span>Only Love</span>
          </div>
      </footer>
    </div>
  );
};

export default LandingPage;
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import DonationModal from './components/DonationModal';

const App: React.FC = () => {
  // Donation Modal State
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [donationPackage, setDonationPackage] = useState<{amount: string, name: string}>({
    amount: '0đ',
    name: 'Tùy tâm'
  });

  const handleOpenDonation = (amount: string, name: string) => {
    setDonationPackage({ amount, name });
    setIsDonationOpen(true);
  };

  return (
    <div className="flex flex-col min-h-[100dvh] w-full relative font-sans text-gray-800 bg-orange-50">
      {/* Background - Giữ lại hiệu ứng nền đẹp mắt */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 animate-gradient-xy -z-10 fixed"></div>
      
      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
        amount={donationPackage.amount}
        packageName={donationPackage.name}
      />

      {/* Main Content - Chỉ hiển thị Landing Page */}
      <div className="flex-1 w-full overflow-y-auto overflow-x-hidden">
        <LandingPage 
          onSelectPackage={handleOpenDonation} 
        />
      </div>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { Home, UtensilsCrossed, Sparkles, Phone } from 'lucide-react';

const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 26, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
  </svg>
);

export const MobileBottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'menu' | 'specialities' | 'contact'>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections: ('home' | 'menu' | 'specialities' | 'contact')[] = [
        'home',
        'menu',
        'specialities',
        'contact',
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: 'home' | 'menu' | 'specialities' | 'contact') => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const whatsappUrl =
    'https://wa.me/917474111132?text=Namaste%20Aamantran%20Restaurant,%20I%20am%20viewing%20your%20digital%20food%20menu%20and%20would%20like%20to%20enquire!';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      {/* Floating Dock Container with Curved Top Corners & Soft Elevation */}
      <div className="relative bg-white/98 backdrop-blur-md border-t border-[#E5E9DE] rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] px-2 pt-2 pb-3">
        {/* Navigation Grid of 5 Items */}
        <div className="grid grid-cols-5 items-end justify-items-center">
          {/* 1. Home */}
          <button
            onClick={() => scrollTo('home')}
            className={`flex flex-col items-center justify-center py-1 w-full transition-colors ${
              activeTab === 'home' ? 'text-[#527B20]' : 'text-[#72776D] hover:text-[#20251D]'
            }`}
          >
            <div className={`p-1 rounded-xl transition-all ${activeTab === 'home' ? 'bg-[#EFF6E6]' : ''}`}>
              <Home size={22} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
            </div>
            <span className={`text-[10px] tracking-tight mt-0.5 ${activeTab === 'home' ? 'font-bold text-[#527B20]' : 'font-medium'}`}>
              Home
            </span>
          </button>

          {/* 2. Menu */}
          <button
            onClick={() => scrollTo('menu')}
            className={`flex flex-col items-center justify-center py-1 w-full transition-colors ${
              activeTab === 'menu' ? 'text-[#527B20]' : 'text-[#72776D] hover:text-[#20251D]'
            }`}
          >
            <div className={`p-1 rounded-xl transition-all ${activeTab === 'menu' ? 'bg-[#EFF6E6]' : ''}`}>
              <UtensilsCrossed size={22} strokeWidth={activeTab === 'menu' ? 2.5 : 2} />
            </div>
            <span className={`text-[10px] tracking-tight mt-0.5 ${activeTab === 'menu' ? 'font-bold text-[#527B20]' : 'font-medium'}`}>
              Menu
            </span>
          </button>

          {/* 3. Center Elevated Floating WhatsApp Button */}
          <div className="relative -top-5 flex flex-col items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Enquiry"
              className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(37,211,102,0.45)] border-4 border-white transform active:scale-95 hover:scale-105 transition-all"
            >
              <WhatsAppIcon size={28} />
            </a>
            <span className="text-[11px] font-extrabold text-[#20251D] tracking-tight mt-1">
              Enquiry
            </span>
          </div>

          {/* 4. Specialities */}
          <button
            onClick={() => scrollTo('specialities')}
            className={`flex flex-col items-center justify-center py-1 w-full transition-colors ${
              activeTab === 'specialities' ? 'text-[#527B20]' : 'text-[#72776D] hover:text-[#20251D]'
            }`}
          >
            <div className={`p-1 rounded-xl transition-all ${activeTab === 'specialities' ? 'bg-[#EFF6E6]' : ''}`}>
              <Sparkles size={22} strokeWidth={activeTab === 'specialities' ? 2.5 : 1.75} />
            </div>
            <span className={`text-[10px] tracking-tight mt-0.5 ${activeTab === 'specialities' ? 'font-bold text-[#527B20]' : 'font-medium'}`}>
              Specials
            </span>
          </button>

          {/* 5. Direct Call */}
          <a
            href="tel:+917474111132"
            className="flex flex-col items-center justify-center py-1 w-full text-[#72776D] hover:text-[#527B20] transition-colors"
          >
            <div className="p-1 rounded-xl transition-all">
              <Phone size={22} strokeWidth={2} />
            </div>
            <span className="text-[10px] font-medium tracking-tight mt-0.5">
              Call Now
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

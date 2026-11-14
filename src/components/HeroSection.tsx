import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowDown, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 pb-8 sm:pt-28 sm:pb-14 overflow-hidden">
      {/* Refined, subtle ambient background */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#EFF6E6]/40 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Minimal Pure Veg Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6E6] border border-[#E5E9DE] text-[#527B20] text-[11px] sm:text-xs font-semibold tracking-wide uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#527B20]" />
              <span>{t('hero.tagline')}</span>
            </div>

            {/* Clean, Editorial Headline */}
            <h1
              className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#20251D] tracking-tight leading-tight mb-2.5 ${
                language === 'gu' ? 'gujarati font-bold' : ''
              }`}
            >
              {t('hero.heading')}
            </h1>

            {/* Refined Subtitle */}
            <p className="text-xs sm:text-base text-[#72776D] max-w-xl mx-auto lg:mx-0 mb-5 leading-relaxed font-normal">
              {t('hero.subtext')}
            </p>

            {/* Minimal, Sleek Action Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 max-w-md mx-auto lg:mx-0">
              <button
                onClick={scrollToMenu}
                className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#527B20] hover:bg-[#263B19] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-1.5 group"
              >
                <span>{t('hero.btn.menu')}</span>
                <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-4 py-2.5 bg-white hover:bg-[#EFF6E6] text-[#20251D] border border-[#E5E9DE] hover:border-[#527B20] text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <MapPin size={14} className="text-[#527B20]" />
                <span className="hidden sm:inline">{t('hero.btn.contact')}</span>
                <span className="sm:hidden">Location</span>
              </button>
            </div>

            {/* Key Minimal Badges */}
            <div className="mt-5 pt-4 border-t border-[#E5E9DE]/60 flex items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#72776D]">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#20251D]">182</span>
                <span>Dishes</span>
              </div>
              <span className="text-[#E5E9DE]">•</span>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#527B20]">17</span>
                <span>Categories</span>
              </div>
              <span className="text-[#E5E9DE]">•</span>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#20251D]">Kathiyawadi & Punjabi</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card (Desktop & Tablet) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="bg-white rounded-2xl p-3 border border-[#E5E9DE] shadow-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square rounded-xl overflow-hidden bg-black flex items-center justify-center p-3">
                  <img
                    src="/images/logo.jpg"
                    alt="Aamantran Mascot"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-[#EFF6E6]">
                  <img
                    src="/images/Kathiyawadi_Thali_platter_served_765d29a5.jpg"
                    alt="Kathiyawadi Thali"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-[#EFF6E6]">
                  <img
                    src="/images/Paneer_butter_masala_in_bowl_b4c8118e.jpg"
                    alt="Paneer Butter Masala"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-[#EFF6E6]">
                  <img
                    src="/images/Dal_Bati_restaurant_menu_photo_67770369.jpg"
                    alt="Dal Bati"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

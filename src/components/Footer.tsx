import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#263B19] text-[#F8FAF5] pt-12 pb-8 border-t border-[#527B20]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#527B20]/40">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#A8D83F] bg-black flex-shrink-0">
                <img
                  src="/images/logo.jpg"
                  alt="Aamantran Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-white leading-none">
                  Aamantran
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A8D83F] mt-1">
                  Kathiyawadi & Punjabi
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#F8FAF5]/70 max-w-sm leading-relaxed mb-4">
              Authentic Kathiyawadi flavours and rich Punjabi cuisine crafted with purity, tradition, and the highest hygiene standards.
            </p>
            <div className="inline-block px-3 py-1 rounded-md bg-[#527B20]/40 border border-[#A8D83F]/30 text-[11px] font-semibold text-[#A8D83F]">
              100% Pure Vegetarian Restaurant
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#A8D83F] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F8FAF5]/80">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-[#A8D83F] transition-colors"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('menu')}
                  className="hover:text-[#A8D83F] transition-colors"
                >
                  {t('nav.menu')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('specialities')}
                  className="hover:text-[#A8D83F] transition-colors"
                >
                  {t('nav.specialities')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#A8D83F] transition-colors"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-[#A8D83F] transition-colors"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact info */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#A8D83F] mb-3">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#F8FAF5]/80">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#A8D83F] flex-shrink-0 mt-0.5" />
                <span>Khedbrahma–Ambaji Highway, Udwa – 383255, Gujarat, India.</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#A8D83F] flex-shrink-0" />
                <a href="tel:+917474111132" className="hover:text-[#A8D83F] transition-colors">
                  +91 74741 11132 / +91 74300 35005
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8FAF5]/60 gap-3">
          <p>© 2026 Aamantran Restaurant. {t('footer.rights')}</p>
          <p className="text-[11px] text-[#A8D83F]/80">
            {t('footer.note')}
          </p>
        </div>
      </div>
    </footer>
  );
};

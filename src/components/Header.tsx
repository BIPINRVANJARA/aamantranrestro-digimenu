import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Menu as MenuIcon, X, Globe, Phone, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'menu', 'specialities', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'menu', label: t('nav.menu') },
    { id: 'specialities', label: t('nav.specialities') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8FAF5]/95 backdrop-blur-md shadow-sm border-b border-[#E5E9DE]'
          : 'bg-[#F8FAF5] border-b border-[#E5E9DE]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#A8D83F] shadow-xs bg-black flex-shrink-0 transition-transform group-hover:scale-105">
              <img
                src="/images/logo.jpg"
                alt="Aamantran Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder-dish.svg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#263B19] leading-none group-hover:text-[#527B20] transition-colors">
                Aamantran
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-[#72776D] mt-0.5">
                Kathiyawadi & Punjabi
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-[#263B19] bg-[#EFF6E6] font-bold'
                      : 'text-[#72776D] hover:text-[#20251D] hover:bg-[#EFF6E6]/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Language Selector & Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#EFF6E6] p-1 rounded-xl border border-[#E5E9DE]">
              <button
                onClick={() => setLanguage('gu')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  language === 'gu'
                    ? 'bg-[#527B20] text-white shadow-xs'
                    : 'text-[#20251D] hover:text-[#527B20]'
                }`}
              >
                ગુજરાતી
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-[#527B20] text-white shadow-xs'
                    : 'text-[#20251D] hover:text-[#527B20]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('gujlish')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  language === 'gujlish'
                    ? 'bg-[#527B20] text-white shadow-xs'
                    : 'text-[#20251D] hover:text-[#527B20]'
                }`}
              >
                Gujenglish
              </button>
            </div>

            {/* Quick Call */}
            <a
              href="tel:+917474111132"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#527B20] text-white rounded-xl text-xs font-bold hover:bg-[#263B19] transition-colors shadow-xs"
            >
              <Phone size={13} />
              <span>Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#263B19] hover:bg-[#EFF6E6] rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F8FAF5] border-b border-[#E5E9DE] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
          {/* Mobile Language Selector */}
          <div className="mb-4 pt-2">
            <div className="text-xs font-semibold text-[#72776D] mb-1.5 flex items-center gap-1.5">
              <Globe size={13} />
              <span>Language / ભાષા</span>
            </div>
            <div className="grid grid-cols-3 gap-1 bg-[#EFF6E6] p-1 rounded-xl border border-[#E5E9DE]">
              <button
                onClick={() => setLanguage('gu')}
                className={`py-2 text-xs font-semibold rounded-lg text-center transition-all ${
                  language === 'gu'
                    ? 'bg-[#527B20] text-white shadow-xs'
                    : 'text-[#20251D]'
                }`}
              >
                ગુજરાતી
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`py-2 text-xs font-semibold rounded-lg text-center transition-all ${
                  language === 'en'
                    ? 'bg-[#527B20] text-white shadow-xs'
                    : 'text-[#20251D]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('gujlish')}
                className={`py-2 text-xs font-semibold rounded-lg text-center transition-all ${
                  language === 'gujlish'
                    ? 'bg-[#527B20] text-white shadow-xs'
                    : 'text-[#20251D]'
                }`}
              >
                Gujenglish
              </button>
            </div>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#527B20] text-white'
                      : 'text-[#20251D] hover:bg-[#EFF6E6]'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Call & Location */}
          <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-[#E5E9DE]">
            <a
              href="tel:+917474111132"
              className="flex items-center justify-center gap-2 py-3 bg-[#527B20] text-white rounded-xl text-sm font-bold shadow-xs"
            >
              <Phone size={16} />
              <span>+91 74741 11132</span>
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center justify-center gap-2 py-3 bg-[#EFF6E6] text-[#263B19] border border-[#E5E9DE] rounded-xl text-sm font-bold"
            >
              <MapPin size={16} />
              <span>Location</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

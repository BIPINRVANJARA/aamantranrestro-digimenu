import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Phone, MapPin, MessageCircle, Navigation } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Aamantran+Kathiyawadi+Punjabi+Khedbrahma+Ambaji+Highway+Udwa+383255';
  const whatsappUrl = 'https://wa.me/917474111132?text=Hello%20Aamantran%20Restaurant,%20I%20would%20like%20to%20know%20more%20about%20your%20menu!';

  return (
    <section id="contact" className="py-16 bg-[#EFF6E6]/50 scroll-mt-20 border-t border-[#E5E9DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#527B20] bg-[#EFF6E6] px-3 py-1 rounded-md border border-[#A8D83F]/50">
            Find & Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#263B19] mt-3 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#72776D] mt-2">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Phone Numbers Card */}
          <div className="bg-white rounded-3xl border border-[#E5E9DE] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#EFF6E6] text-[#527B20] rounded-2xl flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#20251D] mb-1">
                {t('contact.phone_title')}
              </h3>
              <p className="text-xs text-[#72776D] mb-4">
                Direct phone assistance for party bookings & queries.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+917474111132"
                  className="block text-base font-extrabold text-[#527B20] hover:underline"
                >
                  +91 74741 11132
                </a>
                <a
                  href="tel:+917430035005"
                  className="block text-base font-extrabold text-[#527B20] hover:underline"
                >
                  +91 74300 35005
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E9DE] flex gap-2">
              <a
                href="tel:+917474111132"
                className="flex-1 py-2.5 bg-[#527B20] text-white rounded-xl text-xs font-bold text-center hover:bg-[#263B19] transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone size={14} />
                <span>{t('contact.btn_call')}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-[#25D366] text-white rounded-xl text-xs font-bold hover:bg-[#128C7E] transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Address & Highway Location Card */}
          <div className="bg-white rounded-3xl border border-[#E5E9DE] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#EFF6E6] text-[#527B20] rounded-2xl flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#20251D] mb-1">
                {t('contact.address_title')}
              </h3>
              <p className="text-xs text-[#72776D] mb-3">
                Convenient highway location with ample parking.
              </p>
              <address className="text-sm font-semibold text-[#20251D] not-italic leading-relaxed">
                {t('contact.address')}
              </address>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E9DE]">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#263B19] text-white rounded-xl text-xs font-bold text-center hover:bg-[#527B20] transition-colors flex items-center justify-center gap-1.5"
              >
                <Navigation size={14} />
                <span>{t('contact.btn_directions')}</span>
              </a>
            </div>
          </div>

          {/* Social & Connect Card */}
          <div className="bg-white rounded-3xl border border-[#E5E9DE] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#EFF6E6] text-[#527B20] rounded-2xl flex items-center justify-center mb-4">
                <InstagramIcon size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#20251D] mb-1">
                Follow On Social
              </h3>
              <p className="text-xs text-[#72776D] mb-3">
                Official updates, food videos, and festival announcements.
              </p>
              <div className="p-3 bg-[#EFF6E6] rounded-xl border border-[#E5E9DE]">
                <span className="text-xs font-bold text-[#527B20]">
                  @aamantran_kathiyawadi
                </span>
                <p className="text-[11px] text-[#72776D] mt-0.5">
                  Official Instagram Handle
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E9DE]">
              <a
                href="https://instagram.com/aamantran_kathiyawadi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl text-xs font-bold text-center hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5 shadow-xs"
              >
                <InstagramIcon size={14} />
                <span>Visit Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

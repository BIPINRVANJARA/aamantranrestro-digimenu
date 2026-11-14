import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ShieldCheck, HeartHandshake, Leaf, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Leaf,
      titleEn: '100% Pure Vegetarian',
      descEn: 'Authentic pure vegetarian food prepared in a pristine kitchen.',
    },
    {
      icon: ShieldCheck,
      titleEn: 'Highest Hygiene & Quality',
      descEn: 'Fresh local produce, premium spices, and pure cooking mediums.',
    },
    {
      icon: HeartHandshake,
      titleEn: 'Warm Hospitality',
      descEn: 'Welcoming family atmosphere with traditional Gujarati courtesy.',
    },
    {
      icon: Award,
      titleEn: 'Authentic Recipes',
      descEn: 'Genuine village-style Kathiyawadi & authentic Punjabi tadka.',
    },
  ];

  return (
    <section id="about" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E5E9DE] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Mascot & Brand Column */}
            <div className="lg:col-span-4 text-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full bg-black p-2 border-4 border-[#A8D83F] shadow-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/images/logo.jpg"
                  alt="Aamantran Chef"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-black text-[#263B19] mt-4 tracking-tight">
                Aamantran
              </h3>
              <p className="text-xs font-bold text-[#527B20] uppercase tracking-wider">
                Kathiyawadi & Punjabi
              </p>
            </div>

            {/* Story & Description Column */}
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#527B20] bg-[#EFF6E6] px-3 py-1 rounded-md">
                Our Story & Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263B19] mt-3 mb-4 tracking-tight">
                {t('about.title')}
              </h2>
              <p className="text-base sm:text-lg text-[#20251D] leading-relaxed mb-6 font-medium">
                {t('about.text')}
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5E9DE]">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-[#EFF6E6] text-[#527B20] flex-shrink-0 mt-0.5">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#20251D]">
                          {v.titleEn}
                        </h4>
                        <p className="text-xs text-[#72776D] mt-0.5">
                          {v.descEn}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Sparkles } from 'lucide-react';

interface SpecialityCard {
  titleEn: string;
  titleGu: string;
  titleGujlish: string;
  category: string;
  image: string;
  descriptionEn: string;
  descriptionGu: string;
  descriptionGujlish: string;
}

const specialities: SpecialityCard[] = [
  {
    titleEn: 'Kathiyawadi Thali',
    titleGu: 'કાઠિયાવાડી થાળી',
    titleGujlish: 'Kathiyawadi Thali',
    category: 'Traditional Platter',
    image: '/images/Kathiyawadi_Thali_platter_served_765d29a5.jpg',
    descriptionEn: 'Wholesome Kathiyawadi feast with regional delicacies, rotla, and accompaniments.',
    descriptionGu: 'દેશી રોટલો, વિવિધ શાક, કઢી અને અસલ કાઠિયાવાડી વાનગીઓથી સજ્જ થાળી.',
    descriptionGujlish: 'Desi bajra rotlo, sabji, kadhi ane pure Kathiyawadi items ni grand thali.',
  },
  {
    titleEn: 'Punjabi Thali',
    titleGu: 'પંજાબી થાળી',
    titleGujlish: 'Punjabi Thali',
    category: 'Royal Feast',
    image: '/images/Punjabi_Thali_food_photography_321f7595.jpg',
    descriptionEn: 'Rich assortment of Punjabi curries, dal, paneer, and fresh tandoori breads.',
    descriptionGu: 'પનીરની વાનગીઓ, દાળ, પુલાવ અને ગરમાગરમ રોટી સાથેની સંપૂર્ણ પંજાબી થાળી.',
    descriptionGujlish: 'Paneer sabji, dal, pulav ane garam tandoori roti sathe complete Punjabi meal.',
  },
  {
    titleEn: 'Dal Bati Special',
    titleGu: 'દાળ બાટી સ્પેશિયલ',
    titleGujlish: 'Dal Bati Special',
    category: 'Signature Dish',
    image: '/images/Dal_Bati_restaurant_menu_photo_67770369.jpg',
    descriptionEn: 'Traditional baked batis served with flavorful spiced dal and pure ghee.',
    descriptionGu: 'શુદ્ધ ઘી, સ્વાદિષ્ટ દાળ અને પરંપરાગત બાટીનો અદભુત સ્વાદ.',
    descriptionGujlish: 'Shuddha desi ghee, testy dal ane authentic Rajasthani-Gujarati style bati.',
  },
  {
    titleEn: 'Paneer Butter Masala',
    titleGu: 'પનીર બટર મસાલા',
    titleGujlish: 'Paneer Butter Masala',
    category: 'Punjabi Speciality',
    image: '/images/Paneer_butter_masala_in_bowl_b4c8118e.jpg',
    descriptionEn: 'Tender paneer cubes simmered in a luscious tomato and butter gravy.',
    descriptionGu: 'ટામેટા અને બટરની રિચ ગ્રેવીમાં તૈયાર થયેલું મુલાયમ પનીર.',
    descriptionGujlish: 'Rich tomato gravy ane soft fresh paneer no buttery taste.',
  },
  {
    titleEn: 'Ringan Bhartu & Rotlo',
    titleGu: 'રીંગણ ભરથું અને રોટલો',
    titleGujlish: 'Ringan Bhartu ane Rotlo',
    category: 'Kathiyawadi Classic',
    image: '/images/Ringan_bhartu_bowl_in_studio_42e473e6.jpg',
    descriptionEn: 'Fire-roasted spiced eggplant preparation, best enjoyed with fresh Bajra Rotlo.',
    descriptionGu: 'દેશી પદ્ધતિથી શેકેલા રીંગણનું મસાલેદાર ભરથું.',
    descriptionGujlish: 'Desi chulha par roasted ringan bhartu sathe garam bajra no rotlo.',
  },
  {
    titleEn: 'Veg Manchurian Dry',
    titleGu: 'વેજ મન્ચુરિયન ડ્રાય',
    titleGujlish: 'Veg Manchurian Dry',
    category: 'Chinese Selection',
    image: '/images/Veg_Manchurian_Dry_food_photograph_ff56f13f.jpg',
    descriptionEn: 'Crisp vegetable dumplings tossed in garlic, ginger, and savory sauces.',
    descriptionGu: 'ક્રિસ્પી વેજીટેબલ મન્ચુરિયન સાથે મસાલેદાર ચાઇનીઝ સોસ.',
    descriptionGujlish: 'Crispy veggies balls ane spicy Chinese tadka no perfect starter.',
  },
];

export const SpecialitiesSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="specialities" className="py-16 bg-[#EFF6E6]/40 border-y border-[#E5E9DE] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6E6] border border-[#A8D83F]/60 text-[#527B20] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>{t('specialities.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#263B19] tracking-tight">
            {t('specialities.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#72776D] mt-2">
            {t('specialities.subtitle')}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialities.map((item, idx) => {
            const title =
              language === 'gu'
                ? item.titleGu
                : language === 'gujlish'
                ? item.titleGujlish
                : item.titleEn;

            const secondaryTitle =
              language === 'gu' ? item.titleEn : item.titleGu;

            const description =
              language === 'gu'
                ? item.descriptionGu
                : language === 'gujlish'
                ? item.descriptionGujlish
                : item.descriptionEn;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5E9DE] shadow-xs hover:shadow-md transition-all group"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-[#EFF6E6]">
                  <img
                    src={item.image}
                    alt={item.titleEn}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-[#263B19]/80 backdrop-blur-xs text-white text-[11px] font-bold">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#20251D] group-hover:text-[#527B20] transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-[#527B20] font-semibold mt-0.5">
                    {secondaryTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#72776D] mt-2 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

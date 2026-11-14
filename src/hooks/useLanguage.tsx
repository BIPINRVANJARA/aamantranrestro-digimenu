import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'gu' | 'gujlish';

interface Translations {
  [key: string]: {
    en: string;
    gu: string;
    gujlish: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    gu: 'હોમ',
    gujlish: 'Home',
  },
  'nav.menu': {
    en: 'Explore Menu',
    gu: 'મેનૂ જુઓ',
    gujlish: 'Menu',
  },
  'nav.specialities': {
    en: 'Specialities',
    gu: 'વિશેષતાઓ',
    gujlish: 'Specialities',
  },
  'nav.about': {
    en: 'About Us',
    gu: 'અમારા વિશે',
    gujlish: 'About Us',
  },
  'nav.contact': {
    en: 'Contact & Location',
    gu: 'સંપર્ક અને સરનામું',
    gujlish: 'Contact',
  },

  // Hero
  'hero.tagline': {
    en: '100% Pure Vegetarian',
    gu: '૧૦૦% શુદ્ધ શાકાહારી',
    gujlish: '100% Pure Vegetarian',
  },
  'hero.heading': {
    en: 'Every Bite Has a Story.',
    gu: 'દરેક સ્વાદમાં એક અલગ જ મજા.',
    gujlish: 'Every Bite Has a Story.',
  },
  'hero.subtext': {
    en: 'Discover the authentic flavours of Kathiyawad and the richness of Punjabi cuisine at Aamantran.',
    gu: 'આમંત્રણમાં માણો અસલ કાઠિયાવાડી અને પંજાબી વાનગીઓનો અનોખો સ્વાદ.',
    gujlish: 'Kathiyawadi no asli swaad ane Punjabi food ni mast variety — badhu ek j jagyae!',
  },
  'hero.btn.menu': {
    en: 'Explore Digital Menu',
    gu: 'ડિજિટલ મેનૂ જુઓ',
    gujlish: 'Digital Menu Juo',
  },
  'hero.btn.contact': {
    en: 'Directions & Contact',
    gu: 'લોકેશન અને સંપર્ક',
    gujlish: 'Location & Contact',
  },

  // Search & Filter
  'search.placeholder': {
    en: 'Search your favourite dish...',
    gu: 'તમારી મનપસંદ વાનગી શોધો...',
    gujlish: 'Tamari favourite dish search karo...',
  },
  'search.all_categories': {
    en: 'All Items',
    gu: 'બધી વાનગીઓ',
    gujlish: 'All Items',
  },
  'search.clear': {
    en: 'Clear filter',
    gu: 'ફિલ્ટર હટાવો',
    gujlish: 'Filter Hatao',
  },
  'search.items_count': {
    en: 'dishes listed',
    gu: 'વાનગીઓ ઉપલબ્ધ',
    gujlish: 'dishes listed',
  },
  'search.no_results': {
    en: 'No dishes found matching your search.',
    gu: 'તમારી શોધ અનુસાર કોઈ વાનગી મળી નથી.',
    gujlish: 'Tamari search mujab koi dish nathi mali.',
  },
  'search.try_again': {
    en: 'Try searching with another keyword or explore other categories.',
    gu: 'કૃપા કરીને અન્ય નામ અથવા કેટેગરી પસંદ કરીને પ્રયાસ કરો.',
    gujlish: 'Bijo koi word search karo athva category badlo.',
  },

  // Specialities
  'specialities.badge': {
    en: 'CURATED PICKS',
    gu: 'ખાસ ભલામણ',
    gujlish: 'SPECIALLY RECOMMENDED',
  },
  'specialities.title': {
    en: 'Restaurant Specialities',
    gu: 'રેસ્ટોરન્ટ સ્પેશિયલ્સ',
    gujlish: 'Restaurant Specialities',
  },
  'specialities.subtitle': {
    en: 'Handcrafted traditional recipes made with genuine village-style purity and rich aromatic spices.',
    gu: 'શુદ્ધ દેશી મસાલા અને ઉત્તમ સામગ્રીથી તૈયાર થયેલી પરંપરાગત વાનગીઓ.',
    gujlish: 'Desi style ane rich flavours thi baneli amari authentic dishes.',
  },

  // About
  'about.title': {
    en: 'About Aamantran',
    gu: 'આમંત્રણ વિશે',
    gujlish: 'Aamantran Vishe',
  },
  'about.text': {
    en: 'Welcome to Aamantran — where the traditional flavours of Kathiyawad meet the richness of Punjabi cuisine. Explore a wide selection of dishes and enjoy a memorable food experience.',
    gu: 'આમંત્રણમાં આપનું હાર્દિક સ્વાગત છે. અહીં માણો કાઠિયાવાડી સ્વાદની પરંપરા અને પંજાબી વાનગીઓની મજા.',
    gujlish: 'Kathiyawadi tradition ane Punjabi flavours ni perfect food journey — Aamantran ma tamaru swagat chhe!',
  },
  'about.purity_title': {
    en: '100% Pure Vegetarian',
    gu: '૧૦૦% શુદ્ધ શાકાહારી',
    gujlish: '100% Pure Vegetarian',
  },
  'about.purity_desc': {
    en: 'Prepared with highest hygiene, pure ingredients, and genuine homestyle hospitality.',
    gu: 'સંપૂર્ણ સ્વચ્છતા, શ્રેષ્ઠ સામગ્રી અને પ્રેમથી પીરસાતું સ્વાદિષ્ટ ભોજન.',
    gujlish: 'Complete hygiene, authentic taste ane prem thi banavelu pure food.',
  },

  // Contact
  'contact.title': {
    en: 'Contact & Location',
    gu: 'સંપર્ક અને સ્થાન',
    gujlish: 'Contact & Location',
  },
  'contact.subtitle': {
    en: 'We look forward to welcoming you and your family for a delightful meal.',
    gu: 'આપના આગમન માટે અમે હંમેશા આતુર છીએ. આપના પરિવાર સાથે પધારો.',
    gujlish: 'Family and friends sathe enjoy karo fresh authentic food.',
  },
  'contact.phone_title': {
    en: 'Call for Enquiries',
    gu: 'પૂછપરછ માટે કૉલ કરો',
    gujlish: 'Call for Enquiries',
  },
  'contact.address_title': {
    en: 'Restaurant Address',
    gu: 'રેસ્ટોરન્ટનું સરનામું',
    gujlish: 'Restaurant Address',
  },
  'contact.address': {
    en: 'Khedbrahma–Ambaji Highway, Udwa – 383255, Gujarat, India.',
    gu: 'ખેડબ્રહ્મા–અંબાજી હાઇવે, ઉડવા – ૩૮૩૨૫૫, ગુજરાત, ભારત.',
    gujlish: 'Khedbrahma–Ambaji Highway, Udwa – 383255, Gujarat, India.',
  },
  'contact.btn_call': {
    en: 'Call Now',
    gu: 'કૉલ કરો',
    gujlish: 'Call Karo',
  },
  'contact.btn_directions': {
    en: 'Get Directions',
    gu: 'મેપ પર જુઓ',
    gujlish: 'Get Directions',
  },
  'contact.btn_instagram': {
    en: 'Instagram: @aamantran_kathiyawadi',
    gu: 'ઇન્સ્ટાગ્રામ: @aamantran_kathiyawadi',
    gujlish: 'Instagram: @aamantran_kathiyawadi',
  },

  // Footer
  'footer.rights': {
    en: 'All rights reserved. Digital Menu Showcase.',
    gu: 'સર્વાધિકાર સુરક્ષિત. ડિજિટલ મેનૂ પ્રદર્શન.',
    gujlish: 'All rights reserved. Official Digital Menu.',
  },
  'footer.note': {
    en: 'Prices are as printed in the official 2026 restaurant menu.',
    gu: 'ભાવ સત્તાવાર ૨૦૨૬ રેસ્ટોરન્ટ મેનૂ અનુસાર દર્શાવેલ છે.',
    gujlish: 'Prices are as printed in the official 2026 restaurant menu.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('aamantran_lang_v2');
    return (saved as Language) || 'gujlish';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('aamantran_lang_v2', lang);
  };

  const t = (key: string): string => {
    if (!translations[key]) {
      return key;
    }
    return translations[key][language] || translations[key]['en'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

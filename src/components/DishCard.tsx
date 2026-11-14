import React, { useState } from 'react';
import type { MenuItem } from '../data/menu';
import { useLanguage } from '../hooks/useLanguage';
import { getDishImageUrl } from '../utils/imageMapping';

interface DishCardProps {
  item: MenuItem;
}

export const DishCard: React.FC<DishCardProps> = ({ item }) => {
  const { language } = useLanguage();
  const [imageError, setImageError] = useState(false);

  // Primary name based on selected language
  const primaryName =
    language === 'gu'
      ? item.name_gu
      : language === 'gujlish'
      ? item.name_gujlish
      : item.name_en;

  // Secondary name for cultural context
  const secondaryName =
    language === 'gu' ? item.name_en : item.name_gu;

  const imageUrl = imageError
    ? '/images/placeholder-dish.svg'
    : getDishImageUrl(item.image);

  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#E5E9DE] hover:border-[#A8D83F] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      {/* Dish Image Container */}
      <div className="relative aspect-4/3 w-full bg-[#EFF6E6] overflow-hidden">
        <img
          src={imageUrl}
          alt={item.name_en}
          loading="lazy"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Indian Standard Vegetarian Symbol Badge */}
        {item.is_vegetarian && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-xs p-0.5 sm:p-1 rounded-sm sm:rounded-md shadow-xs flex items-center justify-center border border-[#E5E9DE]">
            <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border border-[#527B20] flex items-center justify-center p-0.5">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#527B20]" />
            </div>
          </div>
        )}

        {/* Category Pill Tag (Desktop only to prevent clutter on mobile) */}
        <div className="hidden sm:block absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-[#263B19]/80 backdrop-blur-xs text-[10px] font-semibold text-white tracking-wide uppercase">
          {item.category_id.replace(/-/g, ' ')}
        </div>
      </div>

      {/* Dish Details */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Dish Title */}
          <h3 className="font-bold text-xs sm:text-base text-[#20251D] group-hover:text-[#527B20] transition-colors line-clamp-1">
            {primaryName}
          </h3>

          {/* Secondary Title (Gujarati or English) */}
          <p className="text-[10px] sm:text-xs text-[#72776D] font-medium mt-0.5 line-clamp-1">
            {secondaryName}
          </p>
        </div>

        {/* Price Row: STRICT PRD RULE — Display pure number without ₹ or currency prefix */}
        <div className="mt-2 sm:mt-4 pt-1.5 sm:pt-3 border-t border-[#E5E9DE] flex items-baseline justify-between">
          <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider text-[#72776D] uppercase">
            Price
          </span>
          {/* ONLY the exact printed number, no currency prefix */}
          <span className="text-base sm:text-xl font-black text-[#527B20] tracking-tight">
            {item.price}
          </span>
        </div>
      </div>
    </div>
  );
};

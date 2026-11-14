import React, { useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import type { Category } from '../data/menu';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getCategoryIcon } from '../utils/categoryIcons';

interface CategoryNavigationProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const { language, t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getCategoryName = (cat: Category) => {
    if (language === 'gu') return cat.name_gu;
    if (language === 'gujlish') return cat.name_gujlish;
    return cat.name_en;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -250 : 250;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-16 sm:top-20 z-40 bg-[#F8FAF5]/98 backdrop-blur-md border-b border-[#E5E9DE] py-2 sm:py-2.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center">
        {/* Scroll Left Button (Desktop) */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#E5E9DE] text-[#20251D] shadow-xs hover:bg-[#EFF6E6] mr-2 flex-shrink-0"
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Categories Horizontal Scroller */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar scroll-smooth py-0.5 w-full"
        >
          {/* All Items Chip */}
          <button
            onClick={() => onSelectCategory(null)}
            className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 ${
              selectedCategory === null
                ? 'bg-[#527B20] text-white shadow-xs font-bold'
                : 'bg-white text-[#20251D] border border-[#E5E9DE] hover:bg-[#EFF6E6]'
            }`}
          >
            {getCategoryIcon('all', 14, selectedCategory === null ? 'text-white' : 'text-[#527B20]')}
            <span>{t('search.all_categories')}</span>
          </button>

          {/* Each Category */}
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const name = getCategoryName(cat);

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 ${
                  isSelected
                    ? 'bg-[#527B20] text-white font-bold shadow-xs'
                    : 'bg-white text-[#20251D] border border-[#E5E9DE] hover:bg-[#EFF6E6] hover:border-[#A8D83F]'
                }`}
              >
                {getCategoryIcon(cat.id, 14, isSelected ? 'text-white' : 'text-[#527B20]')}
                <span>{name}</span>
              </button>
            );
          })}
        </div>

        {/* Scroll Right Button (Desktop) */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#E5E9DE] text-[#20251D] shadow-xs hover:bg-[#EFF6E6] ml-2 flex-shrink-0"
          aria-label="Scroll right"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

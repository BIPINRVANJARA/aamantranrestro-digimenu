import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import type { Category, MenuItem } from '../data/menu';
import { DishCard } from './DishCard';
import { SearchBar } from './SearchBar';
import { CategoryNavigation } from './CategoryNavigation';
import { AlertCircle } from 'lucide-react';
import { getCategoryIcon } from '../utils/categoryIcons';

interface MenuSectionProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  groupedItems: { category: Category; items: MenuItem[] }[];
  totalFiltered: number;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  groupedItems,
  totalFiltered,
}) => {
  const { language, t } = useLanguage();

  const getCategoryName = (cat: Category) => {
    if (language === 'gu') return cat.name_gu;
    if (language === 'gujlish') return cat.name_gujlish;
    return cat.name_en;
  };

  return (
    <section id="menu" className="scroll-mt-20">
      {/* Category Navigation Bar (Sticky) */}
      <CategoryNavigation
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />

      {/* Search Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4 sm:pt-6 sm:pb-6">
        {/* Search Bar */}
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          totalFiltered={totalFiltered}
        />
      </div>

      {/* Menu Items List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {groupedItems.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl border border-[#E5E9DE] p-10 text-center max-w-md mx-auto my-12 shadow-xs">
            <div className="w-16 h-16 bg-[#EFF6E6] text-[#527B20] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-lg font-bold text-[#20251D] mb-1">
              {t('search.no_results')}
            </h3>
            <p className="text-xs sm:text-sm text-[#72776D] mb-5">
              {t('search.try_again')}
            </p>
            <button
              onClick={() => {
                onSearchChange('');
                onSelectCategory(null);
              }}
              className="px-5 py-2.5 bg-[#527B20] text-white text-xs font-bold rounded-xl hover:bg-[#263B19] transition-colors"
            >
              {t('search.clear')}
            </button>
          </div>
        ) : (
          /* Category Groups */
          <div className="space-y-8 sm:space-y-12">
            {groupedItems.map(({ category, items }) => (
              <div key={category.id} id={`category-${category.id}`} className="scroll-mt-36">
                {/* Category Header */}
                <div className="flex items-center justify-between pb-2 mb-3.5 sm:pb-3 sm:mb-5 border-b border-[#E5E9DE]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#EFF6E6] flex items-center justify-center flex-shrink-0 border border-[#E5E9DE]">
                      {getCategoryIcon(category.id, 16, 'text-[#527B20]')}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-[#20251D] tracking-tight">
                        {getCategoryName(category)}
                      </h3>
                      {language !== 'gu' && (
                        <span className="text-[10px] sm:text-xs text-[#72776D] font-medium block">
                          {category.name_gu}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-[#527B20] bg-[#EFF6E6] px-2 sm:px-2.5 py-0.5 rounded-md border border-[#E5E9DE]">
                    {items.length} {items.length === 1 ? 'item' : 'items'}
                  </div>
                </div>

                {/* Dish Cards Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
                  {items.map((dish) => (
                    <DishCard key={dish.id} item={dish} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

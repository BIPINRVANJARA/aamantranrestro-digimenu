import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalFiltered: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  totalFiltered,
}) => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-[#72776D] pointer-events-none">
          <Search size={18} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t('search.placeholder')}
          className="w-full pl-10 pr-24 py-2.5 sm:py-3 bg-white border border-[#E5E9DE] rounded-xl text-[#20251D] placeholder-[#72776D] text-xs sm:text-sm font-medium shadow-xs focus:outline-none focus:border-[#527B20] focus:ring-2 focus:ring-[#527B20]/15 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-16 p-1 text-[#72776D] hover:text-[#20251D] hover:bg-[#EFF6E6] rounded-full transition-colors"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
        <div className="absolute right-3 px-2 py-0.5 bg-[#EFF6E6] rounded-md text-[11px] font-bold text-[#527B20] border border-[#E5E9DE]">
          {totalFiltered}
        </div>
      </div>
    </div>
  );
};

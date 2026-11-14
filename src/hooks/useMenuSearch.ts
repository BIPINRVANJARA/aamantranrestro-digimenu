import { useState, useMemo } from 'react';
import { menuItems, categories } from '../data/menu';
import type { MenuItem, Category } from '../data/menu';

export const useMenuSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return menuItems.filter((item) => {
      // Category match
      if (selectedCategory && item.category_id !== selectedCategory) {
        return false;
      }

      // If no query, return true
      if (!query) return true;

      // Search match across English, Gujarati, and Gujenglish names
      const matchEn = item.name_en.toLowerCase().includes(query);
      const matchGu = item.name_gu.toLowerCase().includes(query);
      const matchGujlish = item.name_gujlish.toLowerCase().includes(query);

      return matchEn || matchGu || matchGujlish;
    });
  }, [searchQuery, selectedCategory]);

  // Group items by category that actually have items
  const groupedItems = useMemo(() => {
    const groups: { category: Category; items: MenuItem[] }[] = [];

    categories.forEach((cat) => {
      const itemsInCat = filteredItems.filter((i) => i.category_id === cat.id);
      if (itemsInCat.length > 0) {
        groups.push({
          category: cat,
          items: itemsInCat,
        });
      }
    });

    return groups;
  }, [filteredItems]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredItems,
    groupedItems,
    categories,
    totalCount: menuItems.length,
    filteredCount: filteredItems.length,
  };
};

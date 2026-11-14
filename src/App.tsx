import React from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { useMenuSearch } from './hooks/useMenuSearch';
import { Header } from './components/Header';
import { BannerSlideshow } from './components/BannerSlideshow';
import { MenuSection } from './components/MenuSection';
import { SpecialitiesSection } from './components/SpecialitiesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';

const MainContent: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    groupedItems,
    categories,
    filteredCount,
  } = useMenuSearch();

  return (
    <div className="min-h-screen bg-[#F8FAF5] text-[#20251D] flex flex-col font-sans selection:bg-[#A8D83F] selection:text-[#263B19]">
      <Header />
      <main className="flex-1 pb-24 md:pb-0">
        <BannerSlideshow />
        <MenuSection
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          groupedItems={groupedItems}
          totalFiltered={filteredCount}
        />
        <SpecialitiesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      {/* Mobile Floating Bottom Navigation Dock */}
      <MobileBottomNav />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;

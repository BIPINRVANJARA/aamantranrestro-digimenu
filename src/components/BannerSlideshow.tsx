import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerSlide {
  id: number;
  image: string;
  alt: string;
}

const slides: BannerSlide[] = [
  {
    id: 1,
    image: '/images/banners/banner-1.jpg',
    alt: 'Aamantran Restaurant - Experience the Perfect Blend of Kathiyawadi & Punjabi Flavours',
  },
  {
    id: 2,
    image: '/images/banners/banner-2.jpg',
    alt: 'Kathiyawadi Special Thali - Desh ni Swad, Aamantran ni Saath',
  },
  {
    id: 3,
    image: '/images/banners/banner-3.jpg',
    alt: 'Khedbrahma Best Restaurant - Good Food, Great Vibes, Always',
  },
];

export const BannerSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section
      id="home"
      className="pt-18 sm:pt-22 pb-4 sm:pb-6 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slideshow Container */}
      <div className="relative group">
        <div
          className="relative w-full aspect-16/9 sm:aspect-21/9 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#20251D] shadow-sm border border-[#E5E9DE]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover sm:object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}

          {/* Desktop Left/Right Controls */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/65 text-white backdrop-blur-xs items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/65 text-white backdrop-blur-xs items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Clean Pill Pagination Dots (Inspired by modern travel/e-commerce design) */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          {slides.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-7 sm:w-8 h-2 bg-[#527B20]'
                    : 'w-2 h-2 bg-[#D1D5DB] hover:bg-[#9CA3AF]'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

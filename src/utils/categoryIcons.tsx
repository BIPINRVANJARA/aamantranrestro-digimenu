import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const getCategoryIcon = (categoryId: string, size = 16, className = ''): React.ReactNode => {
  const strokeWidth = 1.6;

  switch (categoryId) {
    case 'all':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="7" height="7" x="3" y="3" rx="1.5" />
          <rect width="7" height="7" x="14" y="3" rx="1.5" />
          <rect width="7" height="7" x="14" y="14" rx="1.5" />
          <rect width="7" height="7" x="3" y="14" rx="1.5" />
        </svg>
      );
    case 'tea-coffee-milk':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" x2="6" y1="2" y2="4" />
          <line x1="10" x2="10" y1="2" y2="4" />
          <line x1="14" x2="14" y1="2" y2="4" />
        </svg>
      );
    case 'paratha-breakfast':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12c1.5 2 4.5 2 6 0" />
          <path d="M12 7v2" />
        </svg>
      );
    case 'buttermilk-lassi':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M7 2h10l-1.5 18a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2L7 2Z" />
          <line x1="6" x2="18" y1="6" y2="6" />
        </svg>
      );
    case 'papad':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="9" strokeDasharray="2 3" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      );
    case 'soup':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M3 11c0 4.97 4.03 9 9 9s9-4.03 9-9H3Z" />
          <path d="M12 2v4" />
          <path d="M8 3c0 2 2 3 2 3" />
          <path d="M16 3c0 2-2 3-2 3" />
        </svg>
      );
    case 'starters':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case 'chinese-rice':
    case 'khichdi-kadhi-dal-rice':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 11h16a8 8 0 0 1-16 0Z" />
          <path d="M7 11V8a5 5 0 0 1 10 0v3" />
        </svg>
      );
    case 'chinese':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M21 3 3 21" />
          <path d="m19 1-1 3-3-1 1-3Z" />
          <path d="m4 12 8 8" />
          <path d="M7 9l8 8" />
        </svg>
      );
    case 'kathiyawadi':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M6 9h12" />
          <path d="M4 9c0 6 3 11 8 11s8-5 8-11" />
          <path d="M12 4v5" />
          <circle cx="12" cy="3" r="1" fill="currentColor" />
        </svg>
      );
    case 'punjabi':
    case 'veg-curry-kofta':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
          <path d="M12 7c-2 0-3-1.5-3-3" />
          <path d="M16 6c-1.5 0-2-1.5-2-3" />
        </svg>
      );
    case 'tawa-special':
    case 'tandoori-special':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="10" cy="12" r="7" />
          <path d="M17 12h5" />
        </svg>
      );
    case 'dal-bati-special':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="8" cy="14" r="5" />
          <circle cx="16" cy="14" r="5" />
          <circle cx="12" cy="8" r="4.5" />
        </svg>
      );
    case 'raita':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <ellipse cx="12" cy="14" rx="8" ry="5" />
          <path d="M12 4v5" />
          <path d="M9 6s1.5 2 3 2 3-2 3-2" />
        </svg>
      );
    case 'fixed-thali':
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="8" cy="10" r="2.5" />
          <circle cx="16" cy="10" r="2.5" />
          <circle cx="12" cy="15.5" r="2.5" />
        </svg>
      );
  }
};

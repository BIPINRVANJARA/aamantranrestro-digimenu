// Utility to resolve dish images
export const getDishImageUrl = (imageName: string | undefined): string => {
  if (!imageName || imageName.trim() === '') {
    return '/images/placeholder-dish.svg';
  }
  return `/images/${imageName}`;
};

export const PLACEHOLDER_DISH_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300" fill="%23EFF6E6"><rect width="400" height="300" fill="%23EFF6E6"/><circle cx="200" cy="150" r="60" fill="%23A8D83F" opacity="0.3"/><path d="M170 150c0-16.5 13.5-30 30-30s30 13.5 30 30c0 10-6 18-15 23v17h-30v-17c-9-5-15-13-15-23z" fill="%23527B20"/><text x="50%" y="220" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="600" fill="%23527B20">Aamantran Fresh Food</text></svg>`;

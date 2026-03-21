import type { BadgeType } from 'src/types/menu';

export const BADGE_LABELS: Record<BadgeType, string> = {
  recommended: 'Recommended',
  new: 'New',
  spicy: 'Spicy',
  popular: 'Popular',
  vegetarian: 'Vegetarian',
};

export const BADGE_COLORS: Record<BadgeType, string> = {
  recommended: 'bg-amber-100 text-amber-800',
  new: 'bg-green-100 text-green-800',
  spicy: 'bg-red-100 text-red-800',
  popular: 'bg-blue-100 text-blue-800',
  vegetarian: 'bg-emerald-100 text-emerald-800',
};

export const CART_STORAGE_KEY = 'redwood-diner-cart';
export const MIN_CUSTOM_DESCRIPTION_LENGTH = 10;
export const CURRENCY_CODE = 'USD';

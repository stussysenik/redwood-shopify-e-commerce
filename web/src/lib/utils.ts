import type { CartItem } from 'src/types/menu';

export function formatPrice(amount: string | number): string {
  const numeric = typeof amount === 'string' ? parseFloat(amount) : amount;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numeric);
}

export function generateCartLineId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getLineItemTotal(item: CartItem): string {
  const unitPrice = parseFloat(item.variant.price.amount);
  const total = unitPrice * item.quantity;
  return formatPrice(total);
}

export function calculateCartTotal(lines: CartItem[]): string {
  const total = lines.reduce((sum, item) => {
    return sum + parseFloat(item.variant.price.amount) * item.quantity;
  }, 0);
  return formatPrice(total);
}

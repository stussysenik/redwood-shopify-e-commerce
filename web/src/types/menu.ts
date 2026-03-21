// Mirror Shopify's type structure for easy migration later

export type BadgeType = 'recommended' | 'new' | 'spicy' | 'popular' | 'vegetarian';

export interface ProductImage {
  url: string;
  altText: string;
  width: number;
  height: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  availableForSale: boolean;
}

export interface ProductAttribute {
  key: string;
  value: string;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  images: ProductImage[];
  variants: ProductVariant[];
  badges: BadgeType[];
  isDescribeYourOwn: boolean;
  categoryHandle: string;
  emoji: string;
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image?: ProductImage;
  products: Product[];
  hasDescribeYourOwn: boolean;
  describeYourOwnPrice?: string;
}

export interface CartLineAttribute {
  key: string;
  value: string;
}

export interface CartItem {
  id: string;
  product: Product;
  variant: ProductVariant;
  quantity: number;
  attributes: CartLineAttribute[];
}

export interface Cart {
  id: string;
  lines: CartItem[];
  totalQuantity: number;
  cost: {
    subtotalAmount: { amount: string; currencyCode: string };
    totalAmount: { amount: string; currencyCode: string };
  };
}

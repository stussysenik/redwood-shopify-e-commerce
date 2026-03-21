import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import type { CartItem, CartLineAttribute, Product, ProductVariant } from 'src/types/menu';
import { CART_STORAGE_KEY } from 'src/lib/constants';
import { generateCartLineId } from 'src/lib/utils';

interface CartState {
  lines: CartItem[];
  totalQuantity: number;
}

type CartAction =
  | {
      type: 'ADD_ITEM';
      payload: {
        product: Product;
        variant: ProductVariant;
        quantity: number;
        attributes: CartLineAttribute[];
      };
    }
  | { type: 'REMOVE_ITEM'; payload: { lineId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { lineId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState };

export interface CartContextValue {
  cart: CartState;
  addItem: (
    product: Product,
    variant: ProductVariant,
    quantity?: number,
    attributes?: CartLineAttribute[],
  ) => void;
  removeItem: (lineId: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

const INITIAL_STATE: CartState = {
  lines: [],
  totalQuantity: 0,
};

function getCustomDescription(attributes: CartLineAttribute[]): string | undefined {
  return attributes.find((a) => a.key === 'customDescription')?.value;
}

function isSameLine(
  existing: CartItem,
  productId: string,
  variantId: string,
  incomingAttrs: CartLineAttribute[],
): boolean {
  if (existing.product.id !== productId) return false;
  if (existing.variant.id !== variantId) return false;

  const existingDesc = getCustomDescription(existing.attributes);
  const incomingDesc = getCustomDescription(incomingAttrs);

  if (existingDesc !== undefined || incomingDesc !== undefined) {
    return existingDesc === incomingDesc;
  }

  return true;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity, attributes } = action.payload;

      const existingIndex = state.lines.findIndex((line) =>
        isSameLine(line, product.id, variant.id, attributes),
      );

      let nextLines: CartItem[];

      if (existingIndex !== -1) {
        nextLines = state.lines.map((line, i) =>
          i === existingIndex
            ? { ...line, quantity: line.quantity + quantity }
            : line,
        );
      } else {
        const newItem: CartItem = {
          id: generateCartLineId(),
          product,
          variant,
          quantity,
          attributes,
        };
        nextLines = [...state.lines, newItem];
      }

      return {
        lines: nextLines,
        totalQuantity: nextLines.reduce((sum, l) => sum + l.quantity, 0),
      };
    }

    case 'REMOVE_ITEM': {
      const nextLines = state.lines.filter((l) => l.id !== action.payload.lineId);
      return {
        lines: nextLines,
        totalQuantity: nextLines.reduce((sum, l) => sum + l.quantity, 0),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { lineId, quantity } = action.payload;

      const nextLines =
        quantity <= 0
          ? state.lines.filter((l) => l.id !== lineId)
          : state.lines.map((l) => (l.id === lineId ? { ...l, quantity } : l));

      return {
        lines: nextLines,
        totalQuantity: nextLines.reduce((sum, l) => sum + l.quantity, 0),
      };
    }

    case 'CLEAR_CART':
      return INITIAL_STATE;

    case 'LOAD_CART':
      return action.payload;

    default:
      return state;
  }
}

function loadCartFromStorage(): CartState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CartState;
    if (!Array.isArray(parsed.lines)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveCartToStorage(state: CartState): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage quota exceeded or private-mode block
  }
}

export const CartContext = createContext<CartContextValue | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const stored = loadCartFromStorage();
    if (stored) {
      dispatch({ type: 'LOAD_CART', payload: stored });
    }
  }, []);

  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  function addItem(
    product: Product,
    variant: ProductVariant,
    quantity: number = 1,
    attributes: CartLineAttribute[] = [],
  ): void {
    dispatch({
      type: 'ADD_ITEM',
      payload: { product, variant, quantity, attributes },
    });
  }

  function removeItem(lineId: string): void {
    dispatch({ type: 'REMOVE_ITEM', payload: { lineId } });
  }

  function updateQuantity(lineId: string, quantity: number): void {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { lineId, quantity } });
  }

  function clearCart(): void {
    dispatch({ type: 'CLEAR_CART' });
  }

  function openCart(): void {
    setIsCartOpen(true);
  }

  function closeCart(): void {
    setIsCartOpen(false);
  }

  function toggleCart(): void {
    setIsCartOpen((prev) => !prev);
  }

  const value: CartContextValue = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isCartOpen,
    openCart,
    closeCart,
    toggleCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

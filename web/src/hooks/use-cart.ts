import { useContext } from 'react';
import { CartContext, type CartContextValue } from 'src/context/cart-context';

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      'useCart must be used within a CartProvider. ' +
        'Ensure <CartProvider> wraps your component tree.',
    );
  }
  return context;
}

import { Metadata } from '@redwoodjs/web'
import { CartMain } from 'src/components/cart/CartMain/CartMain'

const CartPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Metadata title="Your Cart" description="Review your order and proceed to checkout." />
      <CartMain layout="page" />
    </div>
  )
}

export default CartPage

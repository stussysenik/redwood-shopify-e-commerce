import type { Meta, StoryObj } from '@storybook/react'
import { ProductDetail } from './ProductDetail'
import { CartProvider } from 'src/context/cart-context'
import type { Product } from 'src/types/menu'

const regularProduct: Product = {
  id: 'gid://shopify/Product/1011',
  handle: 'classic-cheeseburger',
  title: 'Classic Cheeseburger',
  description: 'A hand-formed 6 oz beef patty griddled to a perfect sear.',
  descriptionHtml: '<p>A hand-formed 6 oz beef patty griddled to a perfect sear, layered with American cheese, crisp iceberg lettuce, tomato, pickles, and our secret diner sauce on a toasted brioche bun.</p>',
  images: [],
  variants: [{ id: 'v11', title: 'Default', price: { amount: '12.99', currencyCode: 'USD' }, availableForSale: true }],
  badges: ['popular'],
  isDescribeYourOwn: false,
  categoryHandle: 'burgers',
  emoji: '🍔',
}

const dyoProduct: Product = {
  id: 'gid://shopify/Product/1019',
  handle: 'describe-your-own-burger',
  title: 'Describe Your Own Burger',
  description: 'Your burger, your rules.',
  descriptionHtml: '<p>Your burger, your rules — pick your patty, cheese, toppings, sauce, and bun.</p>',
  images: [],
  variants: [{ id: 'v19', title: 'Default', price: { amount: '14.99', currencyCode: 'USD' }, availableForSale: true }],
  badges: [],
  isDescribeYourOwn: true,
  categoryHandle: 'burgers',
  emoji: '✍️',
}

const meta: Meta<typeof ProductDetail> = {
  component: ProductDetail,
  title: 'Product/ProductDetail',
  decorators: [(Story) => <CartProvider><Story /></CartProvider>],
}

export default meta
type Story = StoryObj<typeof ProductDetail>

export const Regular: Story = {
  args: { product: regularProduct, categoryTitle: 'Burgers' },
}

export const DescribeYourOwn: Story = {
  args: { product: dyoProduct, categoryTitle: 'Burgers' },
}

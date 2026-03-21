import type { Meta, StoryObj } from '@storybook/react'
import { CartLineItem } from './CartLineItem'
import { CartProvider } from 'src/context/cart-context'
import type { CartItem } from 'src/types/menu'

const mockItem: CartItem = {
  id: 'line-1',
  product: {
    id: 'gid://shopify/Product/1001',
    handle: 'pancake-stack',
    title: 'Pancake Stack',
    description: 'Fluffy buttermilk pancakes.',
    descriptionHtml: '<p>Fluffy buttermilk pancakes.</p>',
    images: [],
    variants: [{ id: 'v1', title: 'Default', price: { amount: '9.99', currencyCode: 'USD' }, availableForSale: true }],
    badges: ['popular'],
    isDescribeYourOwn: false,
    categoryHandle: 'breakfast',
    emoji: '🥞',
  },
  variant: { id: 'v1', title: 'Default', price: { amount: '9.99', currencyCode: 'USD' }, availableForSale: true },
  quantity: 2,
  attributes: [],
}

const mockCustomItem: CartItem = {
  ...mockItem,
  id: 'line-2',
  product: {
    ...mockItem.product,
    id: 'gid://shopify/Product/1010',
    handle: 'describe-your-own-breakfast',
    title: 'Describe Your Own Breakfast',
    isDescribeYourOwn: true,
    emoji: '✍️',
  },
  quantity: 1,
  attributes: [{ key: 'customDescription', value: 'Scrambled eggs with smoked salmon, capers, and cream cheese on a toasted bagel' }],
}

const meta: Meta<typeof CartLineItem> = {
  component: CartLineItem,
  title: 'Cart/CartLineItem',
  decorators: [
    (Story) => (
      <CartProvider>
        <ul style={{ maxWidth: 500, listStyle: 'none', padding: 0 }}>
          <Story />
        </ul>
      </CartProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof CartLineItem>

export const Standard: Story = { args: { item: mockItem } }
export const CustomDescription: Story = { args: { item: mockCustomItem } }

import type { Meta, StoryObj } from '@storybook/react'
import { MenuItemCard } from './MenuItemCard'
import type { Product } from 'src/types/menu'

const mockProduct: Product = {
  id: 'gid://shopify/Product/1001',
  handle: 'pancake-stack',
  title: 'Pancake Stack',
  description: 'Three fluffy buttermilk pancakes stacked high and served with whipped butter and warm maple syrup.',
  descriptionHtml: '<p>Three fluffy buttermilk pancakes stacked high.</p>',
  images: [],
  variants: [{ id: 'v1', title: 'Default', price: { amount: '9.99', currencyCode: 'USD' }, availableForSale: true }],
  badges: ['popular'],
  isDescribeYourOwn: false,
  categoryHandle: 'breakfast',
  emoji: '🥞',
}

const meta: Meta<typeof MenuItemCard> = {
  component: MenuItemCard,
  title: 'Menu/MenuItemCard',
  decorators: [(Story) => <div style={{ maxWidth: 320 }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof MenuItemCard>

export const Default: Story = {
  args: { product: mockProduct, categoryHandle: 'breakfast' },
}

export const WithMultipleBadges: Story = {
  args: {
    product: { ...mockProduct, badges: ['vegetarian', 'new'], emoji: '🥑', title: 'Avocado Toast' },
    categoryHandle: 'breakfast',
  },
}

export const NoBadges: Story = {
  args: {
    product: { ...mockProduct, badges: [], emoji: '🍳', title: 'Eggs Any Style' },
    categoryHandle: 'breakfast',
  },
}

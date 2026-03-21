import type { Meta, StoryObj } from '@storybook/react'
import { DescribeYourOwnCard } from './DescribeYourOwnCard'
import type { Product } from 'src/types/menu'

const mockDYOProduct: Product = {
  id: 'gid://shopify/Product/1010',
  handle: 'describe-your-own-breakfast',
  title: 'Describe Your Own Breakfast',
  description: 'Dream up your perfect morning plate and we will bring it to life.',
  descriptionHtml: '<p>Dream up your perfect morning plate.</p>',
  images: [],
  variants: [{ id: 'v10', title: 'Default', price: { amount: '12.99', currencyCode: 'USD' }, availableForSale: true }],
  badges: [],
  isDescribeYourOwn: true,
  categoryHandle: 'breakfast',
  emoji: '✍️',
}

const meta: Meta<typeof DescribeYourOwnCard> = {
  component: DescribeYourOwnCard,
  title: 'Menu/DescribeYourOwnCard',
  decorators: [(Story) => <div style={{ maxWidth: 320 }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof DescribeYourOwnCard>

export const Default: Story = {
  args: { product: mockDYOProduct, categoryHandle: 'breakfast' },
}

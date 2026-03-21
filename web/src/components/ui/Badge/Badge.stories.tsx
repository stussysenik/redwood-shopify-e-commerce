import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'UI/Badge',
}

export default meta
type Story = StoryObj<typeof Badge>

export const Recommended: Story = { args: { type: 'recommended' } }
export const New: Story = { args: { type: 'new' } }
export const Spicy: Story = { args: { type: 'spicy' } }
export const Popular: Story = { args: { type: 'popular' } }
export const Vegetarian: Story = { args: { type: 'vegetarian' } }

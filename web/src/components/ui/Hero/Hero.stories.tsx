import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: 'UI/Hero',
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {}

export const Custom: Story = {
  args: {
    title: 'Sunday Brunch Special',
    subtitle: 'Join us every Sunday for our signature brunch menu',
    ctaText: 'Reserve a Table',
    ctaLink: '/reservations',
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from './EmptyState'

const meta: Meta<typeof EmptyState> = {
  component: EmptyState,
  title: 'UI/EmptyState',
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {}

export const Custom: Story = {
  args: {
    title: 'No results found',
    message: 'Try a different search term or browse our categories.',
    actionLabel: 'Browse Categories',
    actionLink: '/menu',
  },
}

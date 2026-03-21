import type { BadgeType } from 'src/types/menu'
import { BADGE_LABELS, BADGE_COLORS } from 'src/lib/constants'

interface BadgeProps {
  type: BadgeType
}

export function Badge({ type }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${BADGE_COLORS[type]}`}>
      {BADGE_LABELS[type]}
    </span>
  )
}

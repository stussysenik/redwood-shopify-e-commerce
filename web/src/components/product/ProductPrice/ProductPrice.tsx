import { formatPrice } from 'src/lib/utils'

interface ProductPriceProps {
  amount: string
  currencyCode?: string
  size?: 'sm' | 'md' | 'lg'
}

const SIZE_CLASSES: Record<NonNullable<ProductPriceProps['size']>, string> = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
}

export function ProductPrice({ amount, size = 'md' }: ProductPriceProps) {
  return (
    <span className={`font-semibold text-amber-700 ${SIZE_CLASSES[size]}`}>
      {formatPrice(amount)}
    </span>
  )
}

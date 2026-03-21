import { MIN_CUSTOM_DESCRIPTION_LENGTH } from 'src/lib/constants'

interface DescribeYourOwnFormProps {
  description: string
  onDescriptionChange: (description: string) => void
}

export function DescribeYourOwnForm({ description, onDescriptionChange }: DescribeYourOwnFormProps) {
  const charCount = description.length
  const isValid = charCount >= MIN_CUSTOM_DESCRIPTION_LENGTH

  return (
    <div className="space-y-2">
      <label htmlFor="custom-description" className="block font-serif text-base font-semibold text-stone-800">
        Describe Your Custom Dish
      </label>
      <textarea
        id="custom-description"
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
        placeholder="Describe your dream dish… Tell us the ingredients, cooking style, and any special requests."
        rows={5}
        className={[
          'w-full resize-y rounded-lg border p-4 text-sm leading-relaxed text-stone-800',
          'placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-offset-0',
          'min-h-[120px] transition-colors duration-150',
          isValid
            ? 'border-amber-400 bg-amber-50/30 focus:border-amber-500 focus:ring-amber-300'
            : 'border-stone-300 bg-white focus:border-stone-400 focus:ring-stone-200',
        ].join(' ')}
      />
      <div className="flex items-center justify-between gap-4">
        {isValid ? (
          <span className="flex items-center gap-1.5 text-xs font-medium text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Looks great!
          </span>
        ) : (
          <span className="text-xs text-stone-400">Minimum {MIN_CUSTOM_DESCRIPTION_LENGTH} characters</span>
        )}
        <span className={`text-xs tabular-nums ${isValid ? 'text-amber-600' : 'text-stone-400'}`} aria-live="polite" aria-label={`${charCount} characters entered`}>
          {charCount}
        </span>
      </div>
    </div>
  )
}

import * as React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('py-16 md:py-20 lg:py-24', className)}
        {...props}
      />
    )
  }
)

Section.displayName = 'Section'

export { Section }

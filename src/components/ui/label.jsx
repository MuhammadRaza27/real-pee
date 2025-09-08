import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-[#344054]",
        primary: "text-[#344054]",
        muted: "text-[#344054]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

const Label = React.forwardRef(
  ({ className, variant, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(labelVariants({ variant }), className)}
      {...props}
    />
  )
)
Label.displayName = "Label"

export { Label }

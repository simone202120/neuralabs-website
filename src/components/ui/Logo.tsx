import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  iconClassName?: string
  iconOnly?: boolean
}

export function Logo({ className, iconClassName, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 font-display font-bold text-xl tracking-tight select-none logo-container", className)}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-8 h-8 text-primary", iconClassName)}
        aria-label="SigmaLabs Logo"
      >
        {/* Hexagon Frame (Crucible Container) */}
        <path
          d="M16 2 L27 8.5 L27 23.5 L16 30 L5 23.5 L5 8.5 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hexagon"
        />

        {/* Single Orbital Ring */}
        <circle
          cx="16"
          cy="16"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
          className="orbit-ring"
        />

        {/* Central Core (larger, more visible) */}
        <circle
          cx="16"
          cy="16"
          r="5"
          fill="currentColor"
          className="core"
        />
      </svg>

      {!iconOnly && (
        <span>SigmaLabs</span>
      )}
    </div>
  )
}

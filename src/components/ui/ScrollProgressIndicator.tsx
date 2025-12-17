'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'
import { useMemo } from 'react'

interface ScrollProgressIndicatorProps {
  scrollProgress: MotionValue<number>
  services: Array<{ title: string }>
  onDotClick?: (index: number) => void
}

export function ScrollProgressIndicator({
  scrollProgress,
  services,
  onDotClick,
}: ScrollProgressIndicatorProps) {
  // Calculate active service index from scroll progress
  const activeIndex = useTransform(
    scrollProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 1, 2, 3, 3]
  )

  // Calculate individual progress for each dot (Hooks at top level)
  const dotProgress1 = useTransform(scrollProgress, [0, 0.25], [0, 1])
  const dotProgress2 = useTransform(scrollProgress, [0.25, 0.5], [0, 1])
  const dotProgress3 = useTransform(scrollProgress, [0.5, 0.75], [0, 1])
  const dotProgress4 = useTransform(scrollProgress, [0.75, 1], [0, 1])

  const dotProgresses = useMemo(
    () => [dotProgress1, dotProgress2, dotProgress3, dotProgress4],
    [dotProgress1, dotProgress2, dotProgress3, dotProgress4]
  )

  // Active indicator animations - shared opacity for all services
  const activeOpacity0 = useTransform(activeIndex, (latest) =>
    Math.round(latest) === 0 ? 1 : 0
  )
  const activeOpacity1 = useTransform(activeIndex, (latest) =>
    Math.round(latest) === 1 ? 1 : 0
  )
  const activeOpacity2 = useTransform(activeIndex, (latest) =>
    Math.round(latest) === 2 ? 1 : 0
  )
  const activeOpacity3 = useTransform(activeIndex, (latest) =>
    Math.round(latest) === 3 ? 1 : 0
  )

  // Desktop scale (0 or 1)
  const desktopScale0 = useTransform(activeIndex, (latest) =>
    Math.round(latest) === 0 ? 1 : 0
  )
  const desktopScale1 = useTransform(activeIndex, (latest) =>
    Math.round(latest) === 1 ? 1 : 0
  )
  const desktopScale2 = useTransform(activeIndex, (latest) =>
    Math.round(latest) === 2 ? 1 : 0
  )
  const desktopScale3 = useTransform(activeIndex, (latest) =>
    Math.round(latest) === 3 ? 1 : 0
  )

  // Mobile scale (0 or 1.5)
  const mobileScale0 = useTransform(activeIndex, (latest) =>
    Math.round(latest) === 0 ? 1.5 : 0
  )
  const mobileScale1 = useTransform(activeIndex, (latest) =>
    Math.round(latest) === 1 ? 1.5 : 0
  )
  const mobileScale2 = useTransform(activeIndex, (latest) =>
    Math.round(latest) === 2 ? 1.5 : 0
  )
  const mobileScale3 = useTransform(activeIndex, (latest) =>
    Math.round(latest) === 3 ? 1.5 : 0
  )

  // Memoize animation objects
  const activeIndicators = useMemo(
    () => [
      { opacity: activeOpacity0, scale: desktopScale0 },
      { opacity: activeOpacity1, scale: desktopScale1 },
      { opacity: activeOpacity2, scale: desktopScale2 },
      { opacity: activeOpacity3, scale: desktopScale3 },
    ],
    [
      activeOpacity0,
      activeOpacity1,
      activeOpacity2,
      activeOpacity3,
      desktopScale0,
      desktopScale1,
      desktopScale2,
      desktopScale3,
    ]
  )

  const activeRings = useMemo(
    () => [
      { opacity: activeOpacity0, scale: mobileScale0 },
      { opacity: activeOpacity1, scale: mobileScale1 },
      { opacity: activeOpacity2, scale: mobileScale2 },
      { opacity: activeOpacity3, scale: mobileScale3 },
    ],
    [
      activeOpacity0,
      activeOpacity1,
      activeOpacity2,
      activeOpacity3,
      mobileScale0,
      mobileScale1,
      mobileScale2,
      mobileScale3,
    ]
  )

  return (
    <>
      {/* Desktop: Vertical Sidebar */}
      <nav
        aria-label="Services progress"
        className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-20"
      >
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => onDotClick?.(index)}
              className="group relative flex items-center gap-4"
              aria-label={`Navigate to ${service.title}`}
            >
              {/* Dot */}
              <motion.div
                className="relative w-3 h-3 rounded-full border-2 border-border overflow-hidden"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Fill Progress */}
                <motion.div
                  className="absolute inset-0 bg-primary"
                  style={{
                    scaleY: dotProgresses[index],
                    originY: 0,
                  }}
                />
              </motion.div>

              {/* Label (shows on hover) */}
              <motion.span
                className="absolute left-6 whitespace-nowrap text-sm font-medium text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                {service.title}
              </motion.span>

              {/* Active Indicator */}
              <motion.div
                className="absolute -left-1 w-5 h-5 rounded-full bg-primary/20 blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                style={{
                  opacity: activeIndicators[index].opacity,
                  scale: activeIndicators[index].scale,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                }}
              />
            </button>
          ))}

          {/* Connecting Line */}
          <motion.div
            className="absolute left-[5px] top-0 w-0.5 bg-border"
            style={{
              height: '100%',
              scaleY: scrollProgress,
              originY: 0,
            }}
          />
        </div>
      </nav>

      {/* Mobile: Horizontal Top Bar */}
      <nav
        aria-label="Services progress"
        className="md:hidden sticky top-20 z-20 bg-background/80 backdrop-blur-lg border-b border-border py-4"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => onDotClick?.(index)}
                className="relative flex flex-col items-center gap-2"
                aria-label={`Navigate to ${service.title}`}
              >
                {/* Dot */}
                <motion.div
                  className="relative w-2.5 h-2.5 rounded-full border-2 border-border overflow-hidden"
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Fill Progress */}
                  <motion.div
                    className="absolute inset-0 bg-primary"
                    style={{
                      scaleX: dotProgresses[index],
                      originX: 0,
                    }}
                  />
                </motion.div>

                {/* Active Ring */}
                <motion.div
                  className="absolute top-0 w-4 h-4 rounded-full border-2 border-primary"
                  initial={{ opacity: 0, scale: 0 }}
                  style={{
                    opacity: activeRings[index].opacity,
                    scale: activeRings[index].scale,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                  }}
                />
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            style={{
              width: '100%',
              scaleX: scrollProgress,
              originX: 0,
            }}
          />
        </div>
      </nav>
    </>
  )
}

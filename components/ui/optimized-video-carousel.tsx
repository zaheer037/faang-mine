"use client"

import { useEffect, useRef, useState } from "react"
import { OptimizedPortraitVideo } from "./optimized-portrait-video"

interface OptimizedVideoCarouselProps {
  videos: Array<{
    src: string
    title?: string
  }>
  className?: string
  speed?: number
}

export function OptimizedVideoCarousel({ videos, className = "", speed = 50 }: OptimizedVideoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const animationFrameRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(0)
  const scrollPositionRef = useRef<number>(0)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const smoothScroll = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime
      }

      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime

      if (!isHovered && scrollContainer) {
        // Calculate smooth scroll increment based on time delta
        const scrollIncrement = (speed * deltaTime) / 1000
        scrollPositionRef.current += scrollIncrement
        
        // Reset to beginning when reaching halfway point (seamless loop)
        const maxScroll = scrollContainer.scrollWidth / 2
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0
        }
        
        scrollContainer.scrollLeft = scrollPositionRef.current
      }

      animationFrameRef.current = requestAnimationFrame(smoothScroll)
    }

    animationFrameRef.current = requestAnimationFrame(smoothScroll)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [speed, isHovered])

  // Simple duplication for loop effect
  const duplicatedVideos = [...videos, ...videos]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden pb-4 scroll-smooth"
        style={{ 
          scrollBehavior: 'smooth',
          willChange: 'scroll-position'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedVideos.map((video, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-56 h-80 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <OptimizedPortraitVideo
              src={video.src}
              title={video.title}
              className="w-full h-full rounded-lg overflow-hidden shadow-lg"
            />
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none z-10" />
      
      {/* Enhanced status indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center space-x-2 text-sm">
          {!isHovered ? (
            <>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-600 font-medium">Auto-scrolling • Hover to pause</span>
            </>
          ) : (
            <>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-orange-600 font-medium">Paused • Click video for fullscreen</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

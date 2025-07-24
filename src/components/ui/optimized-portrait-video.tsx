"use client"

import { useEffect, useRef, useState } from "react"
import { Maximize, X, Volume2, VolumeX } from "lucide-react"

interface OptimizedPortraitVideoProps {
  src: string
  title?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
}

export function OptimizedPortraitVideo({ 
  src, 
  title, 
  className = "", 
  autoPlay = true, 
  muted = true, 
  loop = true
}: OptimizedPortraitVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalMuted, setIsModalMuted] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video && autoPlay) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true)
        }).catch(() => {
          // Auto-play failed, which is fine
        })
      }
    }
  }, [autoPlay])

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsModalOpen(true)
    setIsModalMuted(false)
  }

  const closeModal = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setIsModalOpen(false)
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
    }
  }

  const toggleModalMute = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoRef.current.muted
      setIsModalMuted(modalVideoRef.current.muted)
    }
  }

  return (
    <>
      <div 
        className={`relative overflow-hidden rounded-xl shadow-lg bg-gray-100 cursor-pointer transition-transform duration-200 hover:scale-105 group ${className}`}
        onClick={handleVideoClick}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Simple hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-white/90 rounded-full p-2">
              <Maximize className="w-4 h-4 text-gray-800" />
            </div>
          </div>
        </div>
        
        {/* Title */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
            <p className="text-white text-xs font-medium">{title}</p>
          </div>
        )}
        
        {/* Status indicator */}
        <div className="absolute top-2 right-2">
          <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400' : 'bg-red-400'}`}></div>
        </div>
      </div>

      {/* Optimized Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={closeModal}>
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-60 bg-white/20 rounded-full p-2"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Mute button */}
          <button
            onClick={toggleModalMute}
            className="absolute top-4 left-4 z-60 bg-white/20 rounded-full p-2"
          >
            {isModalMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Video container */}
          <div className="relative w-full max-w-sm max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full aspect-[9/16] bg-black rounded-lg overflow-hidden">
              <video
                ref={modalVideoRef}
                src={src}
                autoPlay
                muted={isModalMuted}
                loop={loop}
                playsInline
                className="w-full h-full object-cover"
              />
              
              {title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white text-lg font-bold">{title}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

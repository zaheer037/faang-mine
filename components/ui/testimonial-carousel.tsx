"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "FAANG Tech Lab completely transformed my career. The curriculum was exactly what I needed to land my dream job at Google. The mentors were incredible and the career support was unmatched.",
    rating: 5,
    company: "Google",
    salary: "$165K",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Data Scientist at Netflix",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "From zero coding experience to Netflix in 6 months. The data science program was intensive but incredibly rewarding. The hands-on projects prepared me perfectly for real-world challenges.",
    rating: 5,
    company: "Netflix",
    salary: "$140K",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Senior Engineer at Amazon",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The system design course was a game-changer. It gave me the confidence to tackle complex architecture problems and helped me get promoted to Senior Engineer within a year.",
    rating: 5,
    company: "Amazon",
    salary: "$180K",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Frontend Engineer at Facebook",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The interview preparation was phenomenal. I went from failing technical interviews to getting multiple offers from FAANG companies. The mock interviews were incredibly realistic.",
    rating: 5,
    company: "Meta",
    salary: "$155K",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="bg-white border-primary-100 shadow-xl overflow-hidden">
        <CardContent className="p-0">
          <div className="relative bg-gradient-to-br from-primary-50 to-accent-50 p-8">
            <Quote className="absolute top-4 left-4 h-8 w-8 text-primary-300" />
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  {currentTestimonial.company}
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary-400 text-secondary-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-primary-800 mb-4 italic">"{currentTestimonial.content}"</blockquote>
                <div className="space-y-1">
                  <div className="font-semibold text-primary-900">{currentTestimonial.name}</div>
                  <div className="text-primary-600">{currentTestimonial.role}</div>
                  <div className="text-sm text-accent-700 font-semibold">
                    Starting Salary: {currentTestimonial.salary}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full border-primary-300 hover:bg-primary-50 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary-500 scale-125" : "bg-primary-200 hover:bg-primary-300"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full border-primary-300 hover:bg-primary-50 bg-transparent"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

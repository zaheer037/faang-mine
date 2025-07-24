"use client"

import { OptimizedVideoCarousel } from "./ui/optimized-video-carousel"

export function StudentAchievements() {
  const successStories = [
    {
      src: "/videos/Faang/success stories/Video-139.mp4",
      title: "From Bootcamp to Google"
    },
    {
      src: "/videos/Faang/success stories/Video-153.mp4",
      title: "Career Change Success at Meta"
    },
    {
      src: "/videos/Faang/success stories/Video-244.mp4",
      title: "Landing Dream Job at Amazon"
    },
    {
      src: "/videos/Faang/success stories/Video-265.mp4",
      title: "Netflix Engineer Journey"
    },
    {
      src: "/videos/Faang/success stories/Video-322.mp4",
      title: "Apple iOS Developer Success"
    },
    {
      src: "/videos/Faang/success stories/Video-585.mp4",
      title: "Microsoft Cloud Engineer"
    },
    {
      src: "/videos/Faang/success stories/Video-90.mp4",
      title: "Startup to FAANG Journey"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-16 w-36 h-36 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-44 h-44 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-xl mb-8">
            <span className="text-2xl mr-3">🏆</span>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Student Achievements</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Inspiring 
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Success Stories</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover the remarkable journeys of our graduates who transformed their careers and landed 
            their dream jobs at the world's most prestigious tech companies through dedication and our comprehensive program.
          </p>
        </div>
        
        <div className="mb-16">
          <OptimizedVideoCarousel videos={successStories} speed={40} className="mb-8" />
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-emerald-500 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">95%</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Job Placement</h3>
            <p className="text-gray-700 text-sm leading-relaxed">Successfully placed in tech roles within 6 months</p>
          </div>
          
          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-teal-500 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xl font-bold">$120K</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Avg Salary</h3>
            <p className="text-gray-700 text-sm leading-relaxed">Average starting salary for our graduates</p>
          </div>
          
          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-cyan-500 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xl font-bold">2500+</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Graduates</h3>
            <p className="text-gray-700 text-sm leading-relaxed">Success stories and growing every month</p>
          </div>
          
          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-blue-500 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xl font-bold">6mo</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Avg Time</h3>
            <p className="text-gray-700 text-sm leading-relaxed">Average time to land first tech job</p>
          </div>
        </div>
        
        {/* Enhanced company showcase */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Graduates Work At</h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="group flex items-center gap-3 hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">G</span>
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Google</span>
              </div>
              
              <div className="group flex items-center gap-3 hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">M</span>
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Meta</span>
              </div>
              
              <div className="group flex items-center gap-3 hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">A</span>
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">Amazon</span>
              </div>
              
              <div className="group flex items-center gap-3 hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-400 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">N</span>
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors">Netflix</span>
              </div>
              
              <div className="group flex items-center gap-3 hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-400 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">A</span>
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 transition-colors">Apple</span>
              </div>
              
              <div className="group flex items-center gap-3 hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">M</span>
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">Microsoft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

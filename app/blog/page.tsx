"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { CodingMarathon } from "@/components/coding-marathon"
import { Calendar, Clock, User, ArrowRight, Search, TrendingUp, Code, Target, Zap, BookOpen, Star } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Data Structures Every FAANG Engineer Should Master",
    excerpt:
      "Deep dive into the fundamental data structures that form the backbone of technical interviews at top tech companies.",
    author: "Dr. Sarah Kim",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Interview Prep",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Data Structures", "Algorithms", "Interview"],
    featured: true,
  },
  {
    id: 2,
    title: "How to Negotiate Your Tech Salary Like a Pro",
    excerpt:
      "Learn the insider strategies that helped our graduates increase their starting salaries by an average of 40%.",
    author: "Marcus Thompson",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Career Tips",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Salary", "Negotiation", "Career"],
    featured: false,
  },
  {
    id: 3,
    title: "The Rise of AI in Software Development: What You Need to Know",
    excerpt:
      "Explore how artificial intelligence is reshaping the software development landscape and what skills you need to stay relevant.",
    author: "Dr. Maria Rodriguez",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Industry News",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["AI", "Machine Learning", "Future"],
    featured: false,
  },
  {
    id: 4,
    title: "Building Scalable Systems: Lessons from Netflix Architecture",
    excerpt:
      "A comprehensive look at how Netflix handles millions of concurrent users and what we can learn from their approach.",
    author: "Alex Chen",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "System Design",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["System Design", "Scalability", "Netflix"],
    featured: false,
  },
  {
    id: 5,
    title: "From Bootcamp to FAANG: A Complete Roadmap",
    excerpt: "Step-by-step guide on how to transition from a coding bootcamp graduate to landing your first FAANG job.",
    author: "Jennifer Park",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Success Stories",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Career Change", "Bootcamp", "Success"],
    featured: false,
  },
  {
    id: 6,
    title: "Mastering React Hooks: Advanced Patterns and Best Practices",
    excerpt:
      "Go beyond the basics with advanced React Hook patterns that will make you stand out in technical interviews.",
    author: "David Kim",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Coding Tips",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "JavaScript", "Frontend"],
    featured: false,
  },
]

const categories = [
  { name: "All Posts", count: 24, icon: BookOpen },
  { name: "Interview Prep", count: 8, icon: Target },
  { name: "Coding Tips", count: 6, icon: Code },
  { name: "Career Tips", count: 5, icon: TrendingUp },
  { name: "Industry News", count: 3, icon: Zap },
  { name: "Success Stories", count: 2, icon: Star },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Posts")

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Filter by category
    if (selectedCategory !== "All Posts") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    return filtered
  }, [searchQuery, selectedCategory])

  const featuredPost = filteredPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400 animate-bounce-in">
              📚 Knowledge Hub
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl animate-fade-in">
              Learn from <span className="text-accent-700">Industry Experts</span>
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto animate-slide-up">
              Stay ahead of the curve with insights, tips, and strategies from FAANG engineers. Get the latest industry
              trends, coding best practices, and career advice.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative animate-scale-in">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-primary-200 focus:border-primary-400 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coding Marathon Section */}
      <CodingMarathon />

      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Search Results Info */}
            {(searchQuery || selectedCategory !== "All Posts") && (
              <div className="flex items-center justify-between">
                <p className="text-neutral-600">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedCategory !== "All Posts" && ` in ${selectedCategory}`}
                </p>
                {(searchQuery || selectedCategory !== "All Posts") && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("All Posts")
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            )}

            {/* Featured Post */}
            {featuredPost && (
              <section className="animate-fade-in">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="h-5 w-5 text-secondary-600" />
                  <h2 className="text-2xl font-bold text-primary-900">Featured Article</h2>
                </div>

                <InteractiveCard className="overflow-hidden" hoverScale={false} glowEffect>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-secondary-500 text-white">Featured</Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-neutral-600">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {featuredPost.readTime}
                          </div>
                        </div>

                        <Badge className="bg-accent-100 text-accent-800 w-fit">{featuredPost.category}</Badge>

                        <h3 className="text-2xl font-bold text-primary-900 leading-tight">{featuredPost.title}</h3>

                        <p className="text-neutral-600 leading-relaxed">{featuredPost.excerpt}</p>

                        <div className="flex flex-wrap gap-2">
                          {featuredPost.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button asChild className="bg-accent hover:bg-accent-600 text-white w-fit">
                          <Link href={`/blog/${featuredPost.id}`}>
                            Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </InteractiveCard>
              </section>
            )}

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-bold text-primary-900 mb-8">
                {searchQuery || selectedCategory !== "All Posts" ? "Search Results" : "Latest Articles"}
              </h2>

              {regularPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-neutral-600 mb-4">No articles found matching your criteria.</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("All Posts")
                    }}
                  >
                    View All Articles
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {regularPosts.map((post, index) => (
                    <InteractiveCard
                      key={post.id}
                      className="overflow-hidden animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-48">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary-500 text-white">{post.category}</Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-sm text-neutral-600">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-primary-900 leading-tight line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{post.tags.length - 2}
                              </Badge>
                            )}
                          </div>

                          <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                            <Link href={`/blog/${post.id}`}>
                              Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </InteractiveCard>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card className="animate-slide-in">
              <CardHeader>
                <CardTitle className="text-primary-800">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors group ${
                        selectedCategory === category.name ? "bg-primary-100 text-primary-900" : "hover:bg-primary-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`h-4 w-4 ${
                            selectedCategory === category.name
                              ? "text-primary-700"
                              : "text-primary-600 group-hover:text-primary-700"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            selectedCategory === category.name
                              ? "text-primary-900"
                              : "text-primary-800 group-hover:text-primary-900"
                          }`}
                        >
                          {category.name}
                        </span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  )
                })}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <div className="animate-slide-in" style={{ animationDelay: "200ms" }}>
              <NewsletterSignup />
            </div>

            {/* Popular Posts */}
            <Card className="animate-slide-in" style={{ animationDelay: "400ms" }}>
              <CardHeader>
                <CardTitle className="text-primary-800">Popular This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                    <div className="flex gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-primary-800 group-hover:text-primary-900 line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-neutral-600">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card
              className="bg-gradient-to-br from-accent-50 to-secondary-50 border-accent-200 animate-slide-in"
              style={{ animationDelay: "600ms" }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-accent-700" />
                </div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Ready to Start Your Journey?</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Join thousands of successful graduates who landed their dream jobs at FAANG companies.
                </p>
                <Button asChild size="sm" className="bg-accent hover:bg-accent-600 text-white">
                  <Link href="/courses">
                    Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

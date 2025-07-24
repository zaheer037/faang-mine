import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, BookOpen, CheckCircle, Lightbulb } from "lucide-react"

// Mock blog post data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Data Structures Every FAANG Engineer Should Master",
    content: `
      <p>When preparing for technical interviews at top tech companies like Facebook, Amazon, Apple, Netflix, and Google, mastering fundamental data structures is absolutely crucial. These data structures form the backbone of efficient algorithms and are frequently tested in coding interviews.</p>
      
      <h2>1. Arrays and Dynamic Arrays</h2>
      <p>Arrays are the most fundamental data structure, providing constant-time access to elements by index. Dynamic arrays (like Python lists or JavaScript arrays) can grow and shrink during runtime, making them incredibly versatile.</p>
      
      <h3>Key Operations:</h3>
      <ul>
        <li>Access: O(1)</li>
        <li>Search: O(n)</li>
        <li>Insertion: O(n) worst case, O(1) amortized for append</li>
        <li>Deletion: O(n)</li>
      </ul>
      
      <h2>2. Linked Lists</h2>
      <p>Linked lists are linear data structures where elements are stored in nodes, and each node contains data and a reference to the next node. They're excellent for scenarios where you need frequent insertions and deletions.</p>
      
      <h2>3. Stacks and Queues</h2>
      <p>These are abstract data types that follow specific ordering principles. Stacks follow LIFO (Last In, First Out), while queues follow FIFO (First In, First Out).</p>
      
      <h2>4. Hash Tables</h2>
      <p>Hash tables provide average O(1) time complexity for insertions, deletions, and lookups, making them incredibly powerful for many applications.</p>
      
      <h2>5. Trees</h2>
      <p>Trees are hierarchical data structures with a root node and child nodes. Binary trees, binary search trees, and balanced trees like AVL trees are commonly tested.</p>
      
      <h2>Practice Problems</h2>
      <p>To master these data structures, practice implementing them from scratch and solving problems that utilize them effectively. Focus on understanding when to use each data structure and their trade-offs.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering these data structures is just the beginning. The key is understanding how to apply them to solve complex problems efficiently. Keep practicing, and you'll be well-prepared for your FAANG interviews!</p>
    `,
    author: "Dr. Sarah Kim",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Interview Prep",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Data Structures", "Algorithms", "Interview"],
    featured: true,
  },
  {
    id: 2,
    title: "How to Negotiate Your Tech Salary Like a Pro",
    content: `
      <p>Salary negotiation is one of the most important skills you can develop as a tech professional. Our graduates have increased their starting salaries by an average of 40% using these proven strategies.</p>
      
      <h2>Research is Your Foundation</h2>
      <p>Before entering any negotiation, you need to know your worth in the market. Use resources like Levels.fyi, Glassdoor, and Blind to understand salary ranges for your role and experience level.</p>
      
      <h2>Timing is Everything</h2>
      <p>The best time to negotiate is after you've received an offer but before you've accepted it. This is when you have the most leverage.</p>
      
      <h2>Beyond Base Salary</h2>
      <p>Remember that total compensation includes:</p>
      <ul>
        <li>Base salary</li>
        <li>Stock options/RSUs</li>
        <li>Signing bonus</li>
        <li>Annual bonus</li>
        <li>Benefits and perks</li>
      </ul>
      
      <h2>The Negotiation Process</h2>
      <p>Always negotiate professionally and with data to back up your requests. Express enthusiasm for the role while advocating for fair compensation.</p>
    `,
    author: "Marcus Thompson",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Career Tips",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Salary", "Negotiation", "Career"],
    featured: false,
  },
]

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    return (
      <div className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-primary-900 mb-4">Article Not Found</h1>
          <p className="text-neutral-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-8 bg-white">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="space-y-6">
              <Badge className="bg-accent-100 text-accent-800">{post.category}</Badge>

              <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl animate-fade-in">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-neutral-600 animate-slide-up">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 animate-scale-in">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="max-w-none">
              {/* Featured Image */}
              <div className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden animate-fade-in">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none animate-slide-up"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={
                  {
                    "--tw-prose-body": "rgb(75 85 99)",
                    "--tw-prose-headings": "rgb(31 58 122)",
                    "--tw-prose-links": "rgb(52 168 83)",
                    "--tw-prose-bold": "rgb(31 58 122)",
                    "--tw-prose-counters": "rgb(107 114 128)",
                    "--tw-prose-bullets": "rgb(209 213 219)",
                    "--tw-prose-hr": "rgb(229 231 235)",
                    "--tw-prose-quotes": "rgb(75 85 99)",
                    "--tw-prose-quote-borders": "rgb(229 231 235)",
                    "--tw-prose-captions": "rgb(107 114 128)",
                    "--tw-prose-code": "rgb(31 58 122)",
                    "--tw-prose-pre-code": "rgb(229 231 235)",
                    "--tw-prose-pre-bg": "rgb(31 41 55)",
                    "--tw-prose-th-borders": "rgb(209 213 219)",
                    "--tw-prose-td-borders": "rgb(229 231 235)",
                  } as React.CSSProperties
                }
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-primary-800">Share this article:</span>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <Card className="mt-8 bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-700 font-semibold text-lg">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary-800 mb-1">{post.author}</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Senior Software Engineer with 10+ years of experience at top tech companies. Passionate about
                        helping developers advance their careers.
                      </p>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-primary-900 mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary-500 text-white">{relatedPost.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-sm text-neutral-600">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {relatedPost.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {relatedPost.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-primary-900 leading-tight line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                            <Link href={`/blog/${relatedPost.id}`}>
                              Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Table of Contents */}
            <Card className="animate-slide-in">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-800 transition-colors">
                    1. Arrays and Dynamic Arrays
                  </a>
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-800 transition-colors">
                    2. Linked Lists
                  </a>
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-800 transition-colors">
                    3. Stacks and Queues
                  </a>
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-800 transition-colors">
                    4. Hash Tables
                  </a>
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-800 transition-colors">
                    5. Trees
                  </a>
                </nav>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <div className="animate-slide-in" style={{ animationDelay: "200ms" }}>
              <NewsletterSignup />
            </div>

            {/* Quick Tips */}
            <Card
              className="bg-gradient-to-br from-accent-50 to-secondary-50 border-accent-200 animate-slide-in"
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-secondary-600" />
                  <h3 className="text-lg font-semibold text-primary-800">Quick Tips</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Practice implementing data structures from scratch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Understand time and space complexity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Solve problems on LeetCode daily</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

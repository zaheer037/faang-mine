"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const courses = [
  {
    title: "Full Stack Web Development",
    href: "/courses#fullstack",
    description: "Master React, Node.js, and modern web technologies",
  },
  {
    title: "Data Science & ML",
    href: "/courses#datascience",
    description: "Python, machine learning, and data analysis",
  },
  {
    title: "System Design",
    href: "/courses#systemdesign",
    description: "Design scalable systems like FAANG engineers",
  },
  {
    title: "Interview Preparation",
    href: "/courses#interview",
    description: "Coding interviews and behavioral prep",
  },
]

const resources = [
  {
    title: "Blog",
    href: "/blog",
    description: "Latest coding tips and industry insights",
  },
  {
    title: "Career Guide",
    href: "/resources/career-guide",
    description: "Complete guide to landing FAANG jobs",
  },
  {
    title: "Coding Challenges",
    href: "/resources/challenges",
    description: "Practice problems and solutions",
  },
  {
    title: "Interview Questions",
    href: "/resources/interview-questions",
    description: "Common FAANG interview questions",
  },
  {
    title: "Salary Guide",
    href: "/resources/salary-guide",
    description: "Tech salary data and negotiation tips",
  },
  {
    title: "Student Portal",
    href: "/portal",
    description: "Access your courses and materials",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full nav-backdrop shadow-xl border-b-2 border-primary-100">
      <div className="container flex h-20 items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-4 group logo-hover">
          <div className="relative w-24 h-16 overflow-hidden">
            <Image
              src="/images/faang-logo-svg.jpeg"
              alt="FAANG Tech Lab"
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="hidden lg:block">
            <h1 className="text-xl font-bold text-primary-800 group-hover:text-primary-600 transition-colors">
              FAANG Tech Lab
            </h1>
            <p className="text-sm text-primary-600 font-medium">Code Your Future</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "nav-link group inline-flex h-12 w-max items-center justify-center rounded-lg bg-background px-6 py-3 text-base font-semibold transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-105 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 border-2 border-transparent hover:border-accent shadow-md hover:shadow-lg",
                    isActive("/") && "bg-accent/50 border-accent text-accent-foreground nav-item-active",
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "nav-link group inline-flex h-12 w-max items-center justify-center rounded-lg bg-background px-6 py-3 text-base font-semibold transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-105 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 border-2 border-transparent hover:border-accent shadow-md hover:shadow-lg",
                    isActive("/about") && "bg-accent/50 border-accent text-accent-foreground nav-item-active",
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/courses" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "nav-link group inline-flex h-12 w-max items-center justify-center rounded-lg bg-background px-6 py-3 text-base font-semibold transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-105 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 border-2 border-transparent hover:border-accent shadow-md hover:shadow-lg",
                  isActive("/courses") && "bg-accent/50 border-accent text-accent-foreground nav-item-active",
                )}>
                  Courses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="nav-link h-12 px-6 py-3 text-base font-semibold rounded-lg border-2 border-transparent hover:border-accent hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {resources.map((resource) => (
                    <li key={resource.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={resource.href}
                          className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-105 border border-transparent hover:border-accent"
                        >
                          <div className="text-base font-semibold leading-none">{resource.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {resource.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "nav-link group inline-flex h-12 w-max items-center justify-center rounded-lg bg-background px-6 py-3 text-base font-semibold transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-105 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 border-2 border-transparent hover:border-accent shadow-md hover:shadow-lg",
                    isActive("/blog") && "bg-accent/50 border-accent text-accent-foreground nav-item-active",
                  )}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "nav-link group inline-flex h-12 w-max items-center justify-center rounded-lg bg-background px-6 py-3 text-base font-semibold transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-105 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 border-2 border-transparent hover:border-accent shadow-md hover:shadow-lg",
                    isActive("/contact") && "bg-accent/50 border-accent text-accent-foreground nav-item-active",
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button
            asChild
            size="lg"
            className="hidden md:inline-flex enhanced-nav-button text-white font-bold px-8 py-3 text-base hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg border-2 border-accent-300 nav-glow"
          >
            <Link href="/contact">🚀 Enroll Now</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="lg" className="p-3">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] mobile-menu-enter">
              <nav className="flex flex-col space-y-6">
                <Link
                  href="/"
                  className="flex items-center space-x-4 text-xl font-bold border-b border-primary-100 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative w-20 h-14 overflow-hidden">
                    <Image src="/images/faang-logo-svg.jpeg" alt="FAANG Tech Lab" fill className="object-contain" />
                  </div>
                  <div>
                    <h1 className="text-primary-800">FAANG Tech Lab</h1>
                    <p className="text-sm text-primary-600 font-medium">Code Your Future</p>
                  </div>
                </Link>
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/" 
                    className={cn(
                      "text-lg font-semibold hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent/20",
                      isActive("/") && "text-primary bg-accent/20"
                    )} 
                    onClick={() => setIsOpen(false)}
                  >
                    🏠 Home
                  </Link>
                  <Link
                    href="/about"
                    className={cn(
                      "text-lg font-semibold hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent/20",
                      isActive("/about") && "text-primary bg-accent/20"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    👥 About
                  </Link>
                  <Link
                    href="/courses"
                    className={cn(
                      "text-lg font-semibold hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent/20",
                      isActive("/courses") && "text-primary bg-accent/20"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    📚 Courses
                  </Link>
                  <Link
                    href="/blog"
                    className={cn(
                      "text-lg font-semibold hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent/20",
                      isActive("/blog") && "text-primary bg-accent/20"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    📝 Blog
                  </Link>
                  <Link
                    href="/contact"
                    className={cn(
                      "text-lg font-semibold hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent/20",
                      isActive("/contact") && "text-primary bg-accent/20"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    📞 Contact
                  </Link>
                  
                  {/* Mobile Resources Section */}
                  <div className="border-t border-primary-100 pt-4">
                    <h3 className="text-lg font-bold text-primary-800 mb-3 px-4">📋 Resources</h3>
                    <div className="space-y-2">
                      {resources.slice(0, 4).map((resource) => (
                        <Link
                          key={resource.title}
                          href={resource.href}
                          className="block text-base font-medium hover:text-primary transition-colors py-2 px-6 rounded-lg hover:bg-accent/10"
                          onClick={() => setIsOpen(false)}
                        >
                          {resource.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    size="lg" 
                    className="mt-6 enhanced-nav-button text-white font-bold text-lg py-4 shadow-lg rounded-lg"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      🚀 Enroll Now
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

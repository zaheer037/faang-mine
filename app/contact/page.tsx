"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ParticleBackground } from "@/components/ui/particle-background"
import { InteractiveCard } from "@/components/ui/interactive-card"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  Users,
  Award,
  ArrowRight,
  MessageSquare,
  Target,
  Zap,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    goals: "",
    timeline: "",
    message: "",
    newsletter: false,
    terms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full animate-bounce-in">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-accent-600" />
            </div>
            <h1 className="text-3xl font-bold text-primary-900 mb-4">Application Submitted Successfully!</h1>
            <p className="text-lg text-neutral-600 mb-6">
              Thank you for your interest in FAANG Tech Lab. Our admissions team will review your application and get
              back to you within 24 hours.
            </p>
            <div className="bg-secondary-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-primary-800 mb-2">What happens next?</h3>
              <ul className="text-sm text-neutral-600 space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-600" />
                  Application review (within 24 hours)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-600" />
                  Technical assessment invitation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-600" />
                  One-on-one interview with our team
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-600" />
                  Enrollment confirmation and course start
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent-600 text-accent-900">
                <Link href="/">
                  Back to Home <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-20 overflow-hidden">
        <ParticleBackground />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400 animate-bounce-in">
              🚀 Start Your Journey
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl animate-fade-in">
              Ready to <span className="text-accent-700">Transform</span> Your Career?
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto animate-slide-up">
              Take the first step towards landing your dream job at a top tech company. Our admissions team is here to
              help you choose the right program and start your journey to success.
            </p>

            <div className="flex items-center justify-center space-x-8 pt-4 animate-scale-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-800">24hrs</div>
                <div className="text-sm text-neutral-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-800">95%</div>
                <div className="text-sm text-neutral-600">Acceptance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-800">$0</div>
                <div className="text-sm text-neutral-600">Application Fee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <InteractiveCard className="animate-slide-in">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Apply Now</CardTitle>
                <CardDescription>
                  Fill out the form below to start your application. Our team will review your information and get back
                  to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary-800">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="border-primary-200 focus:border-primary-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="border-primary-200 focus:border-primary-400"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="border-primary-200 focus:border-primary-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="border-primary-200 focus:border-primary-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Program Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary-800">Program Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="course">Interested Course *</Label>
                        <Select onValueChange={(value) => handleInputChange("course", value)}>
                          <SelectTrigger className="border-primary-200 focus:border-primary-400">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fullstack">Full Stack Web Development</SelectItem>
                            <SelectItem value="datascience">Data Science & Machine Learning</SelectItem>
                            <SelectItem value="systemdesign">System Design Mastery</SelectItem>
                            <SelectItem value="interview">FAANG Interview Preparation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Preferred Start Date *</Label>
                        <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger className="border-primary-200 focus:border-primary-400">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediately</SelectItem>
                            <SelectItem value="1month">Within 1 month</SelectItem>
                            <SelectItem value="3months">Within 3 months</SelectItem>
                            <SelectItem value="6months">Within 6 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Programming Experience *</Label>
                      <Select onValueChange={(value) => handleInputChange("experience", value)}>
                        <SelectTrigger className="border-primary-200 focus:border-primary-400">
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Complete Beginner</SelectItem>
                          <SelectItem value="some">Some Programming Experience</SelectItem>
                          <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                          <SelectItem value="experienced">Experienced (3+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Goals and Message */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary-800">Tell Us About Your Goals</h3>
                    <div className="space-y-2">
                      <Label htmlFor="goals">Career Goals *</Label>
                      <Textarea
                        id="goals"
                        placeholder="What are your career goals? Which companies are you targeting?"
                        value={formData.goals}
                        onChange={(e) => handleInputChange("goals", e.target.value)}
                        className="border-primary-200 focus:border-primary-400 min-h-[100px]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Any questions or additional information you'd like to share?"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="border-primary-200 focus:border-primary-400 min-h-[100px]"
                      />
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for coding tips and industry insights
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                        required
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary-600 hover:text-primary-700 underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                          Privacy Policy
                        </Link>{" "}
                        *
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.terms}
                    className="w-full bg-accent hover:bg-accent-600 text-accent-900 text-lg py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-900 mr-2" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Application <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </InteractiveCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <InteractiveCard className="animate-slide-in" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <CardTitle className="text-primary-800">Get in Touch</CardTitle>
                <CardDescription>Have questions? We're here to help you every step of the way.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent-700" />
                  </div>
                  <div>
                    <div className="font-medium text-primary-800">Email</div>
                    <div className="text-sm text-neutral-600">admissions@faangtechlab.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-secondary-700" />
                  </div>
                  <div>
                    <div className="font-medium text-primary-800">Phone</div>
                    <div className="text-sm text-neutral-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <div className="font-medium text-primary-800">Address</div>
                    <div className="text-sm text-neutral-600">
                      123 Tech Street
                      <br />
                      San Francisco, CA 94105
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-accent-700" />
                  </div>
                  <div>
                    <div className="font-medium text-primary-800">Office Hours</div>
                    <div className="text-sm text-neutral-600">Mon-Fri: 9AM-6PM PST</div>
                  </div>
                </div>
              </CardContent>
            </InteractiveCard>

            {/* Quick Stats */}
            <InteractiveCard className="animate-slide-in" style={{ animationDelay: "400ms" }}>
              <CardHeader>
                <CardTitle className="text-primary-800">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent-700" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-800">2,500+</div>
                    <div className="text-sm text-neutral-600">Successful Graduates</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Target className="h-5 w-5 text-secondary-700" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-800">95%</div>
                    <div className="text-sm text-neutral-600">Job Placement Rate</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-800">$120K</div>
                    <div className="text-sm text-neutral-600">Average Starting Salary</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-accent-700" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-800">4.9/5</div>
                    <div className="text-sm text-neutral-600">Student Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </InteractiveCard>

            {/* Schedule a Call */}
            <InteractiveCard
              className="bg-gradient-to-br from-accent-50 to-secondary-50 border-accent-200 animate-slide-in"
              style={{ animationDelay: "600ms" }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-accent-700" />
                </div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Prefer to Talk?</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Schedule a free 15-minute consultation with our admissions team to discuss your goals and find the
                  perfect program.
                </p>
                <Button asChild size="sm" className="bg-accent hover:bg-accent-600 text-accent-900">
                  <Link href="/schedule">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Call
                  </Link>
                </Button>
              </CardContent>
            </InteractiveCard>

            {/* FAQ Quick Links */}
            <InteractiveCard className="animate-slide-in" style={{ animationDelay: "800ms" }}>
              <CardHeader>
                <CardTitle className="text-primary-800">Quick Questions?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/faq#tuition"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <span className="text-sm font-medium text-primary-800 group-hover:text-primary-900">
                    Tuition & Payment Options
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary-600 group-hover:text-primary-700" />
                </Link>
                <Link
                  href="/faq#prerequisites"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <span className="text-sm font-medium text-primary-800 group-hover:text-primary-900">
                    Prerequisites & Requirements
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary-600 group-hover:text-primary-700" />
                </Link>
                <Link
                  href="/faq#schedule"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <span className="text-sm font-medium text-primary-800 group-hover:text-primary-900">
                    Class Schedule & Format
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary-600 group-hover:text-primary-700" />
                </Link>
                <Link
                  href="/faq#support"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <span className="text-sm font-medium text-primary-800 group-hover:text-primary-900">
                    Career Support & Job Guarantee
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary-600 group-hover:text-primary-700" />
                </Link>
              </CardContent>
            </InteractiveCard>
          </div>
        </div>
      </div>
    </div>
  )
}

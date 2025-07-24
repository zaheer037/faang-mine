import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StudentAchievements } from "@/components/student-achievements"
import {
  Target,
  Users,
  Award,
  BookOpen,
  Code,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400">About FAANG Tech Lab</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
              Empowering the Next Generation of <span className="text-accent-700">Tech Leaders</span>
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Founded by former FAANG engineers, we're on a mission to democratize access to top-tier tech education and
              help ambitious individuals break into the world's most prestigious technology companies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200">Our Mission</Badge>
                <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">
                  Breaking Down Barriers to Tech Success
                </h2>
                <p className="text-lg text-neutral-600">
                  We believe that talent is equally distributed, but opportunity is not. Our mission is to level the
                  playing field by providing world-class coding education that's accessible, practical, and directly
                  aligned with what top tech companies are looking for.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-accent-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-2">Industry-Aligned Curriculum</h3>
                    <p className="text-neutral-600">
                      Our courses are designed by engineers who've worked at FAANG companies and are updated regularly
                      to reflect current industry standards and practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-2">Personalized Support</h3>
                    <p className="text-neutral-600">
                      Every student gets dedicated mentorship, career coaching, and ongoing support throughout their
                      learning journey and beyond graduation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-2">Proven Results</h3>
                    <p className="text-neutral-600">
                      With a 95% job placement rate and graduates at every major tech company, our track record speaks
                      for itself.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Students collaborating on coding projects"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-800">2,500+</div>
                  <div className="text-sm text-neutral-600">Successful Graduates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-accent-100 text-accent-800 hover:bg-accent-200">Our Story</Badge>
              <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">
                From FAANG Engineers to Education Pioneers
              </h2>
            </div>

            <div className="space-y-8">
              <Card className="bg-white border-primary-100">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-2xl font-bold text-primary-800">The Beginning</h3>
                      <p className="text-neutral-600">
                        FAANG Tech Lab was founded in 2020 by a team of senior engineers from Google, Facebook, Amazon,
                        and Netflix who recognized a critical gap in tech education. Despite the high demand for skilled
                        developers, traditional education wasn't preparing students for the realities of working at top
                        tech companies.
                      </p>
                      <p className="text-neutral-600">
                        We started with a simple question: "What if we could create a program that teaches exactly what
                        these companies are looking for?"
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lightbulb className="h-12 w-12 text-primary-700" />
                      </div>
                      <div className="text-2xl font-bold text-primary-800">2020</div>
                      <div className="text-sm text-neutral-600">Founded</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-primary-100">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="text-center md:order-1">
                      <div className="w-24 h-24 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-12 w-12 text-accent-700" />
                      </div>
                      <div className="text-2xl font-bold text-primary-800">2021-2023</div>
                      <div className="text-sm text-neutral-600">Rapid Growth</div>
                    </div>
                    <div className="md:col-span-2 space-y-4 md:order-2">
                      <h3 className="text-2xl font-bold text-primary-800">Scaling Success</h3>
                      <p className="text-neutral-600">
                        What started as a small cohort of 20 students quickly grew as word spread about our exceptional
                        job placement rates. By 2023, we had graduated over 2,000 students, with 95% landing jobs at
                        their target companies within 6 months of graduation.
                      </p>
                      <p className="text-neutral-600">
                        Our success attracted attention from industry leaders, leading to partnerships with major tech
                        companies for direct recruitment pipelines.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-primary-100">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-2xl font-bold text-primary-800">Today & Beyond</h3>
                      <p className="text-neutral-600">
                        Today, FAANG Tech Lab is recognized as one of the premier coding bootcamps in the world. We've
                        expanded our curriculum to include specialized tracks for different career paths, from
                        full-stack development to machine learning and system design.
                      </p>
                      <p className="text-neutral-600">
                        Our vision for the future is to continue democratizing access to top-tier tech education and
                        help create a more diverse and inclusive tech industry.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="h-12 w-12 text-secondary-700" />
                      </div>
                      <div className="text-2xl font-bold text-primary-800">2024</div>
                      <div className="text-sm text-neutral-600">Industry Leader</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200">Our Approach</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">The FAANG Tech Lab Difference</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our unique methodology combines rigorous technical training with real-world application and comprehensive
              career support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-accent-700" />
                </div>
                <CardTitle className="text-primary-800">Learn by Doing</CardTitle>
                <CardDescription>
                  Our project-based curriculum ensures you're building real applications from day one, not just
                  following tutorials.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent-600" />
                    <span className="text-sm">5+ Portfolio Projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent-600" />
                    <span className="text-sm">Real Client Work</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent-600" />
                    <span className="text-sm">Open Source Contributions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary-700" />
                </div>
                <CardTitle className="text-primary-800">Expert Mentorship</CardTitle>
                <CardDescription>
                  Get personalized guidance from engineers currently working at or who have worked at FAANG companies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent-600" />
                    <span className="text-sm">1:1 Weekly Sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent-600" />
                    <span className="text-sm">Code Reviews</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent-600" />
                    <span className="text-sm">Career Guidance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary-700" />
                </div>
                <CardTitle className="text-primary-800">Industry-Relevant Curriculum</CardTitle>
                <CardDescription>
                  Learn the exact technologies, frameworks, and practices used by top tech companies today.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent-600" />
                    <span className="text-sm">Latest Tech Stack</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent-600" />
                    <span className="text-sm">Best Practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent-600" />
                    <span className="text-sm">Industry Standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-accent-100 text-accent-800 hover:bg-accent-200">Meet Our Team</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">Led by Industry Veterans</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our founding team brings decades of combined experience from the world's top technology companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-primary-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Dr. Sarah Kim"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-primary-800">Dr. Sarah Kim</CardTitle>
                <CardDescription>Co-Founder & CEO</CardDescription>
                <Badge className="bg-secondary-100 text-secondary-800 mt-2">Former Google</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 text-center">
                  Former Senior Staff Engineer at Google with 12 years of experience. PhD in Computer Science from
                  Stanford. Led teams of 50+ engineers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-primary-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Marcus Thompson"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-primary-800">Marcus Thompson</CardTitle>
                <CardDescription>Co-Founder & CTO</CardDescription>
                <Badge className="bg-secondary-100 text-secondary-800 mt-2">Former Facebook</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 text-center">
                  Former Principal Engineer at Facebook, architected systems serving billions of users. Expert in
                  distributed systems and scalable architecture.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-primary-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Dr. Maria Rodriguez"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-primary-800">Dr. Maria Rodriguez</CardTitle>
                <CardDescription>Head of Curriculum</CardDescription>
                <Badge className="bg-secondary-100 text-secondary-800 mt-2">Former Netflix</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 text-center">
                  Former Senior Data Scientist at Netflix, specialized in machine learning and recommendation systems.
                  PhD in Machine Learning from MIT.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200">Our Values</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">What Drives Us Every Day</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="h-4 w-4 text-accent-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-2">Excellence</h3>
                  <p className="text-neutral-600">
                    We maintain the highest standards in everything we do, from curriculum design to student support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-secondary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-2">Inclusivity</h3>
                  <p className="text-neutral-600">
                    We believe diverse perspectives make better technologists and actively work to create an inclusive
                    environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb className="h-4 w-4 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-2">Innovation</h3>
                  <p className="text-neutral-600">
                    We continuously evolve our teaching methods and curriculum to stay ahead of industry trends.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="h-4 w-4 text-accent-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-2">Integrity</h3>
                  <p className="text-neutral-600">
                    We're transparent about our outcomes and committed to honest, ethical practices in all our
                    interactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="h-4 w-4 text-secondary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-2">Growth Mindset</h3>
                  <p className="text-neutral-600">
                    We foster a culture of continuous learning and improvement, both for our students and our team.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="h-4 w-4 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-2">Impact</h3>
                  <p className="text-neutral-600">
                    We measure our success by the positive impact we have on our students' lives and careers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Achievements Section */}
      <StudentAchievements />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-secondary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-accent-100 text-accent-800 hover:bg-accent-200">Join Our Mission</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl lg:text-5xl">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Join thousands of successful graduates who've launched their tech careers with FAANG Tech Lab. Your
              journey to a top tech company starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-accent-900 text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary-300 text-primary-700 hover:bg-primary-50 bg-transparent"
              >
                <Link href="/courses">Explore Our Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

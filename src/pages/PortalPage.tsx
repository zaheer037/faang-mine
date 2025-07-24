import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, Video, Users, Award, Lock, ArrowRight } from "lucide-react"

export default function PortalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400">🎓 Student Portal</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
              Access Your <span className="text-accent-700">Learning</span> Dashboard
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Continue your journey with exclusive course materials, progress tracking, and community access.
            </p>
          </div>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-md mx-auto">
            <Card className="animate-fade-in">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary-900">Student Login</CardTitle>
                <p className="text-neutral-600">Access your courses and materials</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full bg-accent hover:bg-accent-600 text-white">
                  <Lock className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
                <div className="text-center">
                  <Link to="/contact" className="text-sm text-primary-600 hover:text-primary-800">
                    Not enrolled yet? Apply now <ArrowRight className="inline h-3 w-3 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Preview Features */}
            <div className="mt-12 space-y-6">
              <h3 className="text-lg font-semibold text-primary-900 text-center">What's Inside</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center animate-slide-up">
                  <CardContent className="p-4">
                    <BookOpen className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Course Materials</p>
                  </CardContent>
                </Card>
                <Card className="text-center animate-slide-up" style={{ animationDelay: "100ms" }}>
                  <CardContent className="p-4">
                    <Video className="h-8 w-8 text-accent-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Video Lectures</p>
                  </CardContent>
                </Card>
                <Card className="text-center animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <CardContent className="p-4">
                    <Users className="h-8 w-8 text-secondary-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Community</p>
                  </CardContent>
                </Card>
                <Card className="text-center animate-slide-up" style={{ animationDelay: "300ms" }}>
                  <CardContent className="p-4">
                    <Award className="h-8 w-8 text-destructive-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Certificates</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

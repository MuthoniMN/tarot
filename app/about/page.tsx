"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Star, Heart, Eye, Menu } from "lucide-react"

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-purple-800/30 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Moon className="h-8 w-8 text-purple-300" />
              <span className="text-xl font-bold text-white">Mystic Readings</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-purple-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white font-semibold">
                About
              </Link>
              <Link href="/services" className="text-purple-200 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/book-session">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Book Session
                </Button>
              </Link>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-purple-800/30"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-purple-800/30">
              <div className="flex flex-col space-y-3 pt-4">
                <Link
                  href="/"
                  className="text-purple-200 hover:text-white transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white font-semibold px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-purple-200 hover:text-white transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/free-consultation"
                  className="text-purple-200 hover:text-white transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Free Reading
                </Link>
                <Link href="/book-session" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full mt-2">
                    Book Session
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Eye className="h-16 w-16 text-white" />
              </div>
              <Star className="h-8 w-8 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
            Meet Luna Starweaver
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Gifted intuitive reader with over 15 years of experience guiding souls through the mysteries of tarot and
            astrology
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 border-purple-600/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">My Journey</h2>
              <div className="text-purple-100 space-y-4 text-lg leading-relaxed">
                <p>
                  My spiritual awakening began at the age of seven when I first encountered my grandmother's worn tarot
                  deck. The cards seemed to whisper secrets that my young mind could somehow understand. What started as
                  childhood curiosity blossomed into a lifelong dedication to the mystical arts.
                </p>
                <p>
                  After studying under renowned mentors in Salem, New Orleans, and the mystical hills of Sedona, I've
                  spent over 15 years helping thousands of souls find clarity, purpose, and peace. My approach combines
                  traditional tarot wisdom with modern astrological insights, creating a unique reading experience that
                  speaks to both heart and mind.
                </p>
                <p>
                  I believe that everyone carries their own inner wisdom – my role is simply to help you unlock it.
                  Through the sacred language of cards and stars, we can illuminate the path that's already written in
                  your soul.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credentials & Approach */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 border-purple-600/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="h-8 w-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Credentials & Training</h3>
              </div>
              <ul className="text-purple-100 space-y-3">
                <li>• Certified Professional Tarot Reader (CPTR)</li>
                <li>• Advanced Astrology Certification - AFA</li>
                <li>• Reiki Master Level III</li>
                <li>• Crystal Healing Practitioner</li>
                <li>• 15+ years of professional practice</li>
                <li>• 10,000+ successful readings completed</li>
                <li>• Featured in Mystical Living Magazine</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 border-purple-600/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-8 w-8 text-pink-400" />
                <h3 className="text-2xl font-bold text-white">My Approach</h3>
              </div>
              <ul className="text-purple-100 space-y-3">
                <li>• Compassionate, non-judgmental guidance</li>
                <li>• Intuitive blend of tarot and astrology</li>
                <li>• Empowering readings that inspire action</li>
                <li>• Honest insights delivered with love</li>
                <li>• Focus on practical spiritual wisdom</li>
                <li>• Safe space for all questions</li>
                <li>• Follow-up support included</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                text: "Luna's reading gave me the clarity I desperately needed. Her insights about my career path were spot-on and helped me make a life-changing decision.",
                rating: 5,
              },
              {
                name: "Michael R.",
                text: "I was skeptical at first, but Luna's astrological reading revealed things about myself I never understood. Truly transformative experience.",
                rating: 5,
              },
              {
                name: "Emma L.",
                text: "The tarot reading was incredibly accurate and helped me navigate a difficult relationship situation. Luna's guidance was exactly what I needed.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 border-purple-600/20 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-purple-100 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-purple-300 font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Connect?</h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
            Let's explore what the universe has in store for you. Begin with a complimentary consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-consultation">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
              >
                Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-200 hover:bg-purple-800/30 text-lg px-8 py-3 bg-transparent"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

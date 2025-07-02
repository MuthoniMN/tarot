"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Moon, Sun, Sparkles, Menu } from "lucide-react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-purple-800/30 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Moon className="h-8 w-8 text-purple-300" />
              <span className="text-xl font-bold text-white">Mystic Readings</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white font-semibold">
                Home
              </Link>
              <Link href="/about" className="text-purple-200 hover:text-white transition-colors">
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
                <Link href="/" className="text-white font-semibold px-2 py-1" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-purple-200 hover:text-white transition-colors px-2 py-1"
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Star className="h-16 w-16 text-yellow-400 animate-pulse" />
              <Sparkles className="h-8 w-8 text-purple-300 absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
            Unlock Your Destiny
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Discover the wisdom of the stars and cards. Professional tarot readings and astrological guidance to
            illuminate your path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-consultation">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
              >
                Get Free Reading
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-200 hover:bg-purple-800/30 text-lg px-8 py-3 bg-transparent"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Sacred Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 border-purple-600/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Moon className="h-8 w-8 text-purple-300" />
                  <CardTitle className="text-2xl text-white">Tarot Readings</CardTitle>
                </div>
                <CardDescription className="text-purple-200">
                  Ancient wisdom through the mystical art of tarot cards
                </CardDescription>
              </CardHeader>
              <CardContent className="text-purple-100">
                <p className="mb-4">
                  Gain clarity on love, career, and life decisions through personalized tarot card readings. Each
                  session reveals hidden truths and guides you toward your highest path.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 3-Card Past, Present, Future Reading</li>
                  <li>• Celtic Cross Deep Dive</li>
                  <li>• Love & Relationship Guidance</li>
                  <li>• Career & Finance Insights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 border-purple-600/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Sun className="h-8 w-8 text-yellow-400" />
                  <CardTitle className="text-2xl text-white">Astrology Readings</CardTitle>
                </div>
                <CardDescription className="text-purple-200">
                  Cosmic guidance through the language of the stars
                </CardDescription>
              </CardHeader>
              <CardContent className="text-purple-100">
                <p className="mb-4">
                  Discover your cosmic blueprint through detailed astrological analysis. Understanding your birth chart
                  unlocks the secrets to your personality, relationships, and destiny.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Complete Birth Chart Analysis</li>
                  <li>• Compatibility Readings</li>
                  <li>• Transit & Timing Guidance</li>
                  <li>• Solar Return Forecasts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-800/30 to-pink-800/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
            Start with a complimentary consultation to experience the transformative power of spiritual guidance.
          </p>
          <Link href="/free-consultation">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold text-lg px-8 py-3"
            >
              Claim Your Free Reading
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-purple-800/30 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Moon className="h-6 w-6 text-purple-300" />
            <span className="text-xl font-bold text-white">Mystic Readings</span>
          </div>
          <p className="text-purple-300 text-sm">
            © 2024 Mystic Readings. All rights reserved. | Illuminating paths since 2020
          </p>
        </div>
      </footer>
    </div>
  )
}

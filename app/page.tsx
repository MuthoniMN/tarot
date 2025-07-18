"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Moon, Sun, Sparkles, Menu } from "lucide-react"
import NavBar from "@/components/nav"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900">
      {/* Navigation */}
      <NavBar />

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
            <Card className="bg-gradient-to-br from-purple-800/70 to-indigo-800/80 border-purple-600/30 backdrop-blur-sm">
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

            <Card className="bg-gradient-to-br from-indigo-800/70 to-purple-800/80 border-purple-600/30 backdrop-blur-sm">
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
      <section className="py-16 px-4 bg-gradient-to-b from-indigo-900 to-pink-800/30">
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
      <Footer />
    </div>
  )
}

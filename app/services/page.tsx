"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, Heart, Briefcase, Star, Clock, Users, Menu } from "lucide-react"

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      icon: <Moon className="h-8 w-8 text-purple-300" />,
      title: "Tarot Card Readings",
      description: "Ancient wisdom through mystical card interpretations",
      duration: "45-60 minutes",
      price: "$75",
      features: [
        "3-Card Past, Present, Future",
        "Celtic Cross Deep Dive",
        "Love & Relationship Focus",
        "Career & Life Path Guidance",
        "Detailed written summary",
      ],
      popular: false,
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-400" />,
      title: "Birth Chart Analysis",
      description: "Complete astrological blueprint of your cosmic DNA",
      duration: "60-75 minutes",
      price: "$95",
      features: [
        "Full natal chart interpretation",
        "Personality & life purpose insights",
        "Relationship compatibility analysis",
        "Career & financial guidance",
        "Comprehensive written report",
      ],
      popular: true,
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-400" />,
      title: "Love & Relationships",
      description: "Specialized readings for matters of the heart",
      duration: "45 minutes",
      price: "$85",
      features: [
        "Soulmate & twin flame guidance",
        "Relationship compatibility",
        "Healing from past relationships",
        "Attracting love insights",
        "Communication strategies",
      ],
      popular: false,
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-400" />,
      title: "Career & Finance",
      description: "Professional guidance for your material world",
      duration: "45 minutes",
      price: "$80",
      features: [
        "Career path illumination",
        "Business venture timing",
        "Financial abundance blocks",
        "Professional relationship dynamics",
        "Success timeline forecasting",
      ],
      popular: false,
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      title: "Spiritual Awakening",
      description: "Deep soul work and spiritual development guidance",
      duration: "60 minutes",
      price: "$90",
      features: [
        "Life purpose discovery",
        "Spiritual gifts identification",
        "Past life influences",
        "Chakra & energy healing",
        "Meditation & practice guidance",
      ],
      popular: false,
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Group Readings",
      description: "Shared mystical experiences for friends & family",
      duration: "90 minutes",
      price: "$200",
      features: [
        "Up to 4 people included",
        "Individual mini-readings",
        "Group energy dynamics",
        "Shared spiritual insights",
        "Party atmosphere welcome",
      ],
      popular: false,
    },
  ]

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
              <Link href="/about" className="text-purple-200 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/services" className="text-white font-semibold">
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
                  className="text-purple-200 hover:text-white transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-white font-semibold px-2 py-1"
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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
            Sacred Services
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Choose your path to enlightenment. Each reading is a unique journey tailored to your soul's needs and
            questions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 border-purple-600/30 backdrop-blur-sm relative overflow-hidden"
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  {service.icon}
                  <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-purple-200 text-lg">{service.description}</CardDescription>
                <div className="flex items-center space-x-4 pt-2">
                  <div className="flex items-center space-x-2 text-purple-300">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-purple-100 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book-session">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Book This Reading
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Special Packages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-purple-700/50 to-indigo-700/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-xl text-white">Complete Soul Reading</CardTitle>
                <CardDescription className="text-purple-200">Tarot + Birth Chart Analysis Combined</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-300 line-through">$170 separately</span>
                  <span className="text-2xl font-bold text-white">$135</span>
                </div>
                <p className="text-purple-100 text-sm mb-4">
                  Get the complete picture with both tarot insights and astrological analysis in one comprehensive
                  90-minute session.
                </p>
                <Link href="/book-session">
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold">
                    Save $35 - Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-700/50 to-purple-700/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-xl text-white">Monthly Guidance Package</CardTitle>
                <CardDescription className="text-purple-200">3 Sessions + Email Support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-300 line-through">$225 separately</span>
                  <span className="text-2xl font-bold text-white">$180</span>
                </div>
                <p className="text-purple-100 text-sm mb-4">
                  Three readings over one month plus unlimited email questions for ongoing spiritual support.
                </p>
                <Link href="/book-session">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Save $45 - Subscribe
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How do online readings work?",
                answer:
                  "We connect via video call (Zoom, Skype, or phone) at your scheduled time. I'll guide you through the process and share my screen to show your cards or chart as we explore your reading together.",
              },
              {
                question: "What information do you need for a birth chart?",
                answer:
                  "I need your exact birth date, time (as precise as possible), and location (city/state/country). If you don't know your birth time, we can still do a reading with some limitations.",
              },
              {
                question: "How should I prepare for my reading?",
                answer:
                  "Come with an open mind and specific questions you'd like guidance on. Find a quiet, private space where you won't be interrupted. Have a notebook ready to jot down insights.",
              },
              {
                question: "Do you record sessions?",
                answer:
                  "Yes! All sessions are recorded (with your permission) and sent to you within 24 hours so you can revisit the guidance whenever you need it.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 border-purple-600/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-purple-100">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin?</h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
            Start your spiritual journey today. Book your session or try a free consultation first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-consultation">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-200 hover:bg-purple-800/30 text-lg px-8 py-3 bg-transparent"
              >
                Free Consultation First
              </Button>
            </Link>
            <Link href="/book-session">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
              >
                Book Paid Session
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

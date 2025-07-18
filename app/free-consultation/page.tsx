"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Moon, Star, Heart, Sparkles, Menu } from "lucide-react"
import NavBar from "@/components/nav"

export default function FreeConsultationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    birthTime: "",
    birthLocation: "",
    readingType: "",
    questions: "",
    experience: "",
    newsletter: false,
    terms: false,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 flex items-center justify-center px-4">
        <Card className="max-w-md w-full bg-gradient-to-br from-purple-800/50 to-indigo-800/50 border-purple-600/30 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Star className="h-16 w-16 text-yellow-400 animate-pulse" />
                <Sparkles className="h-8 w-8 text-purple-300 absolute -top-2 -right-2 animate-bounce" />
              </div>
            </div>
            <CardTitle className="text-2xl text-white">Thank You!</CardTitle>
            <CardDescription className="text-purple-200">
              Your free consultation request has been received
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-purple-100">
              I'll review your information and reach out within 24 hours to schedule your complimentary 15-minute
              consultation.
            </p>
            <p className="text-purple-200 text-sm">Check your email for confirmation and next steps.</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-purple-400 text-purple-200 hover:bg-purple-800/30 bg-transparent"
                >
                  Return Home
                </Button>
              </Link>
              <Link href="/services" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  View Services
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900">
      {/* Navigation */}
      <NavBar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Heart className="h-16 w-16 text-pink-400 animate-pulse" />
                <Star className="h-6 w-6 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
              Free Consultation
            </h1>
            <p className="text-lg text-purple-200 mb-6">
              Begin your spiritual journey with a complimentary 15-minute consultation. Let's connect and see how I can
              guide you.
            </p>
            <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-lg p-4">
              <p className="text-purple-100 text-sm">
                <strong>What's included:</strong> Brief energy reading, one specific question answered, and guidance on
                which full reading would serve you best.
              </p>
            </div>
          </div>

          {/* Form */}
          <Card className="bg-gradient-to-br from-purple-800/80 to-indigo-800 border-purple-600/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Tell Me About Yourself</CardTitle>
              <CardDescription className="text-purple-200">
                The more I know about you, the better I can prepare for our connection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-purple-200">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-purple-200">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-purple-200">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-purple-200">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Birth Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Birth Information (Optional but Helpful)</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="birthDate" className="text-purple-200">
                        Birth Date
                      </Label>
                      <Input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange("birthDate", e.target.value)}
                        className="bg-purple-900/30 border-purple-600/50 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthTime" className="text-purple-200">
                        Birth Time
                      </Label>
                      <Input
                        id="birthTime"
                        type="time"
                        value={formData.birthTime}
                        onChange={(e) => handleInputChange("birthTime", e.target.value)}
                        className="bg-purple-900/30 border-purple-600/50 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthLocation" className="text-purple-200">
                        Birth Location
                      </Label>
                      <Input
                        id="birthLocation"
                        value={formData.birthLocation}
                        onChange={(e) => handleInputChange("birthLocation", e.target.value)}
                        className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300"
                        placeholder="City, State/Country"
                      />
                    </div>
                  </div>
                </div>

                {/* Reading Preferences */}
                <div className="space-y-2">
                  <Label htmlFor="readingType" className="text-purple-200">
                    What type of reading interests you most?
                  </Label>
                  <Select
                    value={formData.readingType}
                    onValueChange={(value) => handleInputChange("readingType", value)}
                  >
                    <SelectTrigger className="bg-purple-900/30 border-purple-600/50 text-white">
                      <SelectValue placeholder="Select a reading type" />
                    </SelectTrigger>
                    <SelectContent className="bg-purple-900 border-purple-600">
                      <SelectItem value="tarot" className="text-white hover:bg-purple-800">
                        Tarot Card Reading
                      </SelectItem>
                      <SelectItem value="astrology" className="text-white hover:bg-purple-800">
                        Birth Chart Analysis
                      </SelectItem>
                      <SelectItem value="love" className="text-white hover:bg-purple-800">
                        Love & Relationships
                      </SelectItem>
                      <SelectItem value="career" className="text-white hover:bg-purple-800">
                        Career & Finance
                      </SelectItem>
                      <SelectItem value="spiritual" className="text-white hover:bg-purple-800">
                        Spiritual Awakening
                      </SelectItem>
                      <SelectItem value="unsure" className="text-white hover:bg-purple-800">
                        Not sure yet
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="questions" className="text-purple-200">
                    What questions or areas would you like guidance on?
                  </Label>
                  <Textarea
                    id="questions"
                    value={formData.questions}
                    onChange={(e) => handleInputChange("questions", e.target.value)}
                    className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300 min-h-[100px]"
                    placeholder="Share what's on your mind or heart. What guidance are you seeking?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-purple-200">
                    Have you had readings before?
                  </Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger className="bg-purple-900/30 border-purple-600/50 text-white">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent className="bg-purple-900 border-purple-600">
                      <SelectItem value="first-time" className="text-white hover:bg-purple-800">
                        This is my first reading
                      </SelectItem>
                      <SelectItem value="some" className="text-white hover:bg-purple-800">
                        I've had a few readings
                      </SelectItem>
                      <SelectItem value="experienced" className="text-white hover:bg-purple-800">
                        I'm experienced with readings
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      className="border-purple-600 data-[state=checked]:bg-purple-600"
                    />
                    <Label htmlFor="newsletter" className="text-purple-200 text-sm">
                      Subscribe to monthly spiritual insights and special offers
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                      className="border-purple-600 data-[state=checked]:bg-purple-600"
                      required
                    />
                    <Label htmlFor="terms" className="text-purple-200 text-sm">
                      I agree to the terms of service and privacy policy *
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-3"
                  disabled={!formData.terms}
                >
                  Request Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-purple-300 text-sm mb-4">
              After submitting, I'll personally review your information and reach out within 24 hours to schedule your
              free consultation.
            </p>
            <p className="text-purple-400 text-xs">
              Ready for a full reading?{" "}
              <Link href="/book-session" className="text-purple-200 hover:text-white underline">
                Book a paid session instead
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Moon, CreditCard, Calendar, Clock, Menu } from "lucide-react"

export default function BookSessionPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    birthTime: "",
    birthLocation: "",
    questions: "",
    terms: false,
  })

  const services = [
    { id: "tarot", name: "Tarot Card Reading", price: 75, duration: "45-60 min" },
    { id: "astrology", name: "Birth Chart Analysis", price: 95, duration: "60-75 min", popular: true },
    { id: "love", name: "Love & Relationships", price: 85, duration: "45 min" },
    { id: "career", name: "Career & Finance", price: 80, duration: "45 min" },
    { id: "spiritual", name: "Spiritual Awakening", price: 90, duration: "60 min" },
    { id: "complete", name: "Complete Soul Reading", price: 135, duration: "90 min", special: true },
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ]

  const selectedService = services.find((s) => s.id === bookingData.service)

  const handleInputChange = (field: string, value: string | boolean) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-purple-800/30 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Moon className="h-8 w-8 text-purple-300" />
              <span className="text-2xl font-bold text-white">Mystic Readings</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-purple-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-purple-200 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/services" className="text-purple-200 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/book-session" className="text-white font-semibold">
                Book Session
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
                <Link
                  href="/book-session"
                  className="text-white font-semibold px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Session
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
              Book Your Session
            </h1>
            <p className="text-lg text-purple-200">Reserve your personalized reading experience</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8 px-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= stepNum
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-purple-800/50 text-purple-300"
                      }`}
                  >
                    {stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div
                      className={`w-8 sm:w-12 h-0.5 mx-1 sm:mx-2 ${step > stepNum ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-purple-800/50"
                        }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 border-purple-600/30 backdrop-blur-sm">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <>
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Choose Your Reading</CardTitle>
                  <CardDescription className="text-purple-200">
                    Select the type of guidance you're seeking
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${bookingData.service === service.id
                          ? "border-purple-400 bg-purple-700/30"
                          : "border-purple-600/30 bg-purple-800/20 hover:border-purple-500/50"
                        }`}
                      onClick={() => handleInputChange("service", service.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                            {service.popular && (
                              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs">
                                Popular
                              </Badge>
                            )}
                            {service.special && (
                              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                                Best Value
                              </Badge>
                            )}
                          </div>
                          <p className="text-purple-200 text-sm">{service.duration}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">${service.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end pt-4">
                    <Button
                      onClick={nextStep}
                      disabled={!bookingData.service}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full sm:w-auto"
                    >
                      Continue to Scheduling
                    </Button>
                  </div>
                </CardContent>
              </>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <>
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Select Date & Time</CardTitle>
                  <CardDescription className="text-purple-200">
                    Choose when you'd like your {selectedService?.name.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-purple-200 flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>Preferred Date</span>
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="bg-purple-900/30 border-purple-600/50 text-white"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-purple-200 flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Preferred Time (EST)</span>
                      </Label>
                      <Select value={bookingData.time} onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger className="bg-purple-900/30 border-purple-600/50 text-white">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-purple-900 border-purple-600">
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time} className="text-white hover:bg-purple-800">
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {selectedService && (
                    <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-lg p-4">
                      <h3 className="text-white font-semibold mb-2">Session Summary</h3>
                      <div className="text-purple-100 space-y-1">
                        <p>
                          <strong>Service:</strong> {selectedService.name}
                        </p>
                        <p>
                          <strong>Duration:</strong> {selectedService.duration}
                        </p>
                        <p>
                          <strong>Investment:</strong> ${selectedService.price}
                        </p>
                        {bookingData.date && (
                          <p>
                            <strong>Date:</strong> {new Date(bookingData.date).toLocaleDateString()}
                          </p>
                        )}
                        {bookingData.time && (
                          <p>
                            <strong>Time:</strong> {bookingData.time} EST
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="border-purple-400 text-purple-200 hover:bg-purple-800/30 bg-transparent w-full sm:w-auto"
                    >
                      Back to Services
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={!bookingData.date || !bookingData.time}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full sm:w-auto"
                    >
                      Continue to Details
                    </Button>
                  </div>
                </CardContent>
              </>
            )}

            {/* Step 3: Personal Details & Payment */}
            {step === 3 && (
              <>
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Personal Details & Payment</CardTitle>
                  <CardDescription className="text-purple-200">Complete your booking information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-purple-200">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={bookingData.firstName}
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
                          value={bookingData.lastName}
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
                          value={bookingData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-purple-200">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={bookingData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300"
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Birth Information for Astrology */}
                  {(bookingData.service === "astrology" || bookingData.service === "complete") && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Birth Information (Required for Astrology)</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="birthDate" className="text-purple-200">
                            Birth Date *
                          </Label>
                          <Input
                            id="birthDate"
                            type="date"
                            value={bookingData.birthDate}
                            onChange={(e) => handleInputChange("birthDate", e.target.value)}
                            className="bg-purple-900/30 border-purple-600/50 text-white"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="birthTime" className="text-purple-200">
                            Birth Time
                          </Label>
                          <Input
                            id="birthTime"
                            type="time"
                            value={bookingData.birthTime}
                            onChange={(e) => handleInputChange("birthTime", e.target.value)}
                            className="bg-purple-900/30 border-purple-600/50 text-white"
                          />
                          <p className="text-xs text-purple-300">If unknown, we can still do a partial reading</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="birthLocation" className="text-purple-200">
                            Birth Location *
                          </Label>
                          <Input
                            id="birthLocation"
                            value={bookingData.birthLocation}
                            onChange={(e) => handleInputChange("birthLocation", e.target.value)}
                            className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300"
                            placeholder="City, State/Country"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Questions */}
                  <div className="space-y-2">
                    <Label htmlFor="questions" className="text-purple-200">
                      Questions or Areas of Focus
                    </Label>
                    <Textarea
                      id="questions"
                      value={bookingData.questions}
                      onChange={(e) => handleInputChange("questions", e.target.value)}
                      className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300 min-h-[100px]"
                      placeholder="What specific questions or life areas would you like guidance on? The more detail you provide, the more focused your reading will be."
                    />
                  </div>

                  {/* Payment Section */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-5 w-5 text-purple-300" />
                      <h3 className="text-lg font-semibold text-white">Payment Information</h3>
                    </div>

                    <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center text-white">
                        <span className="text-lg">Total Amount:</span>
                        <span className="text-2xl font-bold">${selectedService?.price}</span>
                      </div>
                      <p className="text-purple-200 text-sm mt-2">
                        Secure payment processed via Stripe. Your session will be confirmed upon payment.
                      </p>
                    </div>

                    {/* Stripe Payment Form would go here */}
                    <Card className="bg-gradient-to-br from-purple-700/30 to-indigo-700/30 border-purple-500/30">
                      <CardHeader>
                        <CardTitle className="text-lg text-white">Secure Payment</CardTitle>
                        <CardDescription className="text-purple-200">
                          Complete your booking with secure credit card payment
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label className="text-purple-200">Card Number</Label>
                            <Input
                              placeholder="1234 5678 9012 3456"
                              className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="text-purple-200">Expiry Date</Label>
                              <Input
                                placeholder="MM/YY"
                                className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-purple-200">CVC</Label>
                              <Input
                                placeholder="123"
                                className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-purple-200">Cardholder Name</Label>
                            <Input
                              placeholder="Name on card"
                              className="bg-purple-900/30 border-purple-600/50 text-white placeholder:text-purple-300"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Terms */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={bookingData.terms}
                      onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                      className="border-purple-600 data-[state=checked]:bg-purple-600"
                      required
                    />
                    <Label htmlFor="terms" className="text-purple-200 text-sm">
                      I agree to the terms of service, privacy policy, and 24-hour cancellation policy *
                    </Label>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="border-purple-400 text-purple-200 hover:bg-purple-800/30 bg-transparent w-full sm:w-auto"
                    >
                      Back to Scheduling
                    </Button>
                    <Button
                      disabled={
                        !bookingData.firstName ||
                        !bookingData.lastName ||
                        !bookingData.email ||
                        !bookingData.phone ||
                        !bookingData.terms
                      }
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-base sm:text-lg px-4 sm:px-8 w-full sm:w-auto"
                    >
                      Complete Booking - ${selectedService?.price}
                    </Button>
                  </div>
                </CardContent>
              </>
            )}
          </Card>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-purple-300 text-sm mb-2">Need help choosing the right reading?</p>
            <Link href="/free-consultation" className="text-purple-200 hover:text-white underline text-sm">
              Start with a free consultation instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

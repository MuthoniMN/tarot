"use client"

import Footer from "@/components/footer";
import NavBar from "@/components/nav";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FAQ() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900">
            {/* Navigation */}
            <NavBar />

            {/* FAQ */}
            <div className="max-w-3xl mx-auto mb-16 pt-14">
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
                        <Card key={index} className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 border-purple-600/20">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                                <p className="text-purple-100">{faq.answer}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="text-center my-8">
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
                            Free Consultation
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

            <Footer />
        </div>
    )
}
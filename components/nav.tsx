import { Moon, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
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
                        <Link href="/faq" className="text-purple-200 hover:text-white transition-colors">
                            FAQ
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
                            className="text-white hover:bg-purple-800/40 hover:text-white transition-all ease-in-out duration-300"
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
                                href="/faq"
                                className="text-purple-200 hover:text-white transition-colors px-2 py-1"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                FAQ
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
    );
}
import { Moon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black/40 border-t border-purple-800/30 py-8 px-4 rounded-t-3xl">
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
    );
}
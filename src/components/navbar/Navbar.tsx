"use client";
import { Github, Twitter } from "lucide-react";
import CircularText from "../ui/icon";

const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
];

export default function Navbar() {
    return (
        <header className="w-full z-10 border-b border-white/15 text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Left section - logo */}
                <div className="flex items-center gap-2">
                    <CircularText
                        text="WORD*POOL*"
                        onHover="speedUp"
                        spinDuration={20}
                        className="w-8 h-8"
                    />
                    <span className="font-semibold text-lg"></span>
                </div>

                {/* Right section - icons */}
                <div className="flex items-center gap-8">
                    <a
                        href="https://github.com/HimanshuTamoli24"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-gray-300 transition hover:animate-caret-blink"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://x.com/imarnav24"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-gray-300 transition hover:animate-caret-blink"
                    >
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </header>
    );
}

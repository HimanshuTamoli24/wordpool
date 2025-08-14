"use client";
import { Github, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-3 text-xs sm:text-sm">

                {/* Left section */}
                <p className="text-gray-500 tracking-wide">
                    © 2025 WordPool
                </p>

                {/* Right section - links */}
                <nav className="flex items-center gap-5">
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
                </nav>

            </div>
        </footer>
    );
}

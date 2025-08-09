"use client";
import {  Github, Infinity, Twitter, } from "lucide-react";

export default function Navbar() {
    return (
        <header className="w-full border-b border-white/15 bg-black text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Left section - logo */}
                <div className="flex items-center gap-2">
                    <Infinity className="w-6 h-6" />
                    <span className="font-semibold text-lg"></span>
                </div>

                {/* Right section - icons */}
                <div className="flex items-center gap-8">
                    <Github className="w-5 h-5 hover:text-gray-300 cursor-pointer transition" />
                    <Twitter  className="w-5 h-5 hover:text-gray-300 cursor-pointer transition" />
                </div>
            </div>
        </header>
    );
}

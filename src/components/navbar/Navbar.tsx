"use client";
import { Github, Infinity, Twitter, } from "lucide-react";
import CircularText from "../ui/icon";


import GooeyNav from './GooeyNav'

// update with your own items
const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
];
export default function Navbar() {
    return (
        <header className="w-full border-b border-white/15 text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Left section - logo */}
                <div className="flex items-center gap-2 ">
                    <CircularText
                        text="WORD*POOL*"
                        onHover="speedUp"
                        spinDuration={20}
                        className="w-8  h-8"
                    />
                    <span className="font-semibold text-lg"></span>
                </div>

                {/* Right section - icons */}
                <div className="flex items-center gap-8">
                    <Github className="w-5 h-5 hover:text-gray-300 cursor-pointer transition" />
                    <Twitter className="w-5 h-5 hover:text-gray-300 cursor-pointer transition" />
                </div>
            </div>
        </header>
    );
}

"use client";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-3 text-xs sm:text-sm">

                {/* Left section */}
                <p className="text-gray-500 tracking-wide">
                    © 2025 WordPool Inc. All rights reserved.
                </p>

                {/* Right section - links */}
                <nav className="flex items-center gap-5">
                    {["Terms & Conditions", "Privacy Policy", "About"].map((link, i) => (
                        <a
                            key={i}
                            href="#"
                            className="text-gray-500 hover:text-white transition-colors duration-200"
                        >
                            {link}
                        </a>
                    ))}
                </nav>

            </div>
        </footer>
    );
}

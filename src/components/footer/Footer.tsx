"use client";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white border-t border-white/15">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4 gap-4">

                {/* Left section */}
                <p className="text-sm text-gray-400">
                    © 2025 WordPool Inc, All Rights Reserved
                </p>

                {/* Right section - links */}
                <div className="flex items-center gap-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-gray-200 transition-colors">
                        Terms & Conditions
                    </a>
                    <a href="#" className="hover:text-gray-200 transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-gray-200 transition-colors">
                        About
                    </a>
                </div>

            </div>
        </footer>
    );
}

"use client";

import Link from "next/link";
import { Phone, Trees, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

import { NAV_LINKS } from "@/constants/navigation";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-gray-100 bg-white sticky top-0 z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

                {/* 1. Logo (Home Link) */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-[var(--primary)] text-white p-2 rounded-lg group-hover:bg-[var(--secondary)] transition-colors">
                        <Trees className="w-6 h-6" />
                    </div>
                    <span className="text-xl md:text-2xl font-black tracking-tight text-[var(--secondary)]">
                        Lawn<span className="text-[var(--primary)]">.Calc</span>
                    </span>
                </Link>

                {/* 2. Actions (Locations + Call) */}
                <div className="flex items-center gap-4">

                    {/* Desktop/Mobile Menu Trigger */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-2 font-bold text-[var(--secondary)] hover:text-[var(--primary)] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50 bg-gray-50/50 border border-gray-100"
                    >
                        <Globe className="w-5 h-5" />
                        <span className="hidden md:inline">All Locations</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Call Button (Desktop) */}
                    <button className="hidden md:flex items-center gap-2 font-bold text-[var(--secondary)] hover:text-[var(--primary)] transition-colors border-l border-gray-200 pl-4 ml-2">
                        <div className="bg-[var(--muted)] p-2 rounded-full">
                            <Phone className="w-5 h-5" />
                        </div>
                        <span className="text-lg">(555) 012-3456</span>
                    </button>

                    {/* Call Icon (Mobile) */}
                    <button className="md:hidden bg-[var(--primary)] text-white p-2 rounded-full shadow-md">
                        <Phone className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Side Drawer / Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Drawer Content */}
                    <div className="relative w-full max-w-sm bg-white h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">

                        {/* Drawer Header */}
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                            <div className="font-bold text-lg text-[var(--secondary)] flex items-center gap-2">
                                <Globe className="w-5 h-5 text-[var(--primary)]" />
                                Select Location
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                            >
                                <ChevronDown className="w-5 h-5 rotate-90" />
                            </button>
                        </div>

                        {/* Links List */}
                        <div className="overflow-y-auto flex-1 p-2">
                            <div className="flex flex-col gap-1">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 text-sm font-bold text-gray-600 hover:text-[var(--primary)] hover:bg-green-50 rounded-lg transition-all border-b border-gray-50 last:border-0"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Drawer Footer */}
                        <div className="p-4 border-t border-gray-100 bg-gray-50">
                            <p className="text-xs text-center text-gray-400 font-medium">
                                Select your region for accurate pricing
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { MapPin, ArrowRight } from "lucide-react";

export function LocationGrid() {
    return (
        <section className="bg-gray-50 border-t border-gray-100 py-24 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-3 block">
                        Global Coverage
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--secondary)] mb-6">
                        Select Your Region
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Get the most accurate quote by using our location-specific calculators.
                        Calibrated for local labor rates, grass types, and currency.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className="group relative bg-white rounded-3xl p-8 border-2 border-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:border-green-500/10 hover:shadow-green-900/5 hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col items-center text-center gap-6 overflow-hidden"
                        >
                            {/* Gradient Hover Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Icon Container */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 flex items-center justify-center group-hover:from-green-500 group-hover:to-emerald-600 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-green-500/30 group-hover:rotate-3">
                                <MapPin className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 w-full flex flex-col items-center">
                                <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-700 transition-colors mb-3">
                                    {link.label.replace("Lawn Mowing Cost Calculator ", "")}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-[90%] mx-auto">
                                    Calculate 2025 rates for {link.label.replace("Lawn Mowing Cost Calculator ", "")}
                                </p>
                            </div>

                            {/* Action Area */}
                            <div className="mt-2 w-full pt-4 border-t border-gray-50 group-hover:border-green-50/50 transition-colors">
                                <span className="inline-flex items-center text-sm font-bold text-green-600 group-hover:text-green-700 uppercase tracking-wide text-xs">
                                    View Rates <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

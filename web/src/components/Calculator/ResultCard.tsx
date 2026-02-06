"use client";

import { Region } from "./constants";
import { Check, Phone, ArrowRight } from "lucide-react";

interface QuoteBreakdown {
    baseMowing: { min: number; max: number };
    multipliers: number;
    surcharges: number;
    extras: { name: string; min: number; max: number }[];
}

interface ResultCardProps {
    min: number;
    max: number;
    currency: string;
    breakdown: QuoteBreakdown;
    region: Region;
}

export function ResultCard({ min, max, currency, breakdown, region }: ResultCardProps) {
    return (
        <div className="space-y-6">
            {/* 1. Hero Result Card */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-100">
                <div className="bg-[var(--secondary)] text-white p-4 text-center">
                    <h2 className="font-bold uppercase tracking-widest text-sm">Estimated Price Range</h2>
                </div>

                <div className="p-8 text-center space-y-4">
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-5xl md:text-6xl font-black text-[var(--primary)] tracking-tight">
                            {currency}{min}
                        </span>
                        <span className="text-3xl font-light text-gray-300 mx-2">–</span>
                        <span className="text-5xl md:text-6xl font-black text-[var(--primary)] tracking-tight">
                            {currency}{max}
                        </span>
                    </div>
                    <p className="text-[var(--muted-foreground)] text-sm font-medium">
                        *Per service visit based on your inputs.
                    </p>
                </div>

                {/* Breakdown Toggle (Accordion style simplified) */}
                <div className="border-t border-gray-100 bg-gray-50 p-6 space-y-4">
                    <div className="flex justify-between text-sm font-medium text-[var(--foreground)]">
                        <span>Base Mowing Rate</span>
                        <span>{currency}{breakdown.baseMowing.min} - {breakdown.baseMowing.max}</span>
                    </div>
                    {breakdown.multipliers > 1 && (
                        <div className="flex justify-between text-sm font-medium text-[var(--foreground)]">
                            <span>Condition Multiplier</span>
                            <span className="text-[var(--accent)] font-bold">{breakdown.multipliers.toFixed(2)}x</span>
                        </div>
                    )}
                    {breakdown.extras.length > 0 && (
                        <div className="pt-2 border-t border-gray-200 mt-2 space-y-2">
                            {breakdown.extras.map(extra => (
                                <div key={extra.name} className="flex justify-between text-xs text-[var(--muted-foreground)] uppercase tracking-wide">
                                    <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[var(--primary)]" /> {extra.name}</span>
                                    <span>+{currency}{extra.min}-{extra.max}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* 2. Sticky CTA */}
            <div className="sticky bottom-4 z-50">
                <button className="w-full btn-action shadow-xl shadow-orange-900/20 flex items-center justify-center gap-3 group">
                    <span>Book Online Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="text-center mt-3">
                    <div className="inline-flex items-center gap-2 text-[var(--secondary)] font-bold bg-white/80 py-1 px-3 rounded-full backdrop-blur-sm shadow-sm">
                        <Phone className="w-4 h-4" />
                        <span>Or Call: (555) 012-3456</span>
                    </div>
                </div>
            </div>

            {/* 3. Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="text-center space-y-1">
                    <div className="w-10 h-10 bg-gray-100 rounded-full mx-auto flex items-center justify-center text-xl">🛡️</div>
                    <p className="text-[10px] uppercase font-bold text-[var(--muted-foreground)]">Insured</p>
                </div>
                <div className="text-center space-y-1">
                    <div className="w-10 h-10 bg-gray-100 rounded-full mx-auto flex items-center justify-center text-xl">⭐</div>
                    <p className="text-[10px] uppercase font-bold text-[var(--muted-foreground)]">4.9/5 Stars</p>
                </div>
                <div className="text-center space-y-1">
                    <div className="w-10 h-10 bg-gray-100 rounded-full mx-auto flex items-center justify-center text-xl">🤝</div>
                    <p className="text-[10px] uppercase font-bold text-[var(--muted-foreground)]">Satisfaction</p>
                </div>
            </div>
        </div>
    );
}

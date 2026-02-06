"use client";

import { useState } from "react";
import { InputForm, type FormValues } from "./InputForm";
import { ResultCard } from "./ResultCard";
import { calculateQuote } from "./logic";
import { CURRENCIES, Region } from "./constants";
import { Calculator as CalculatorIcon } from "lucide-react";

export function Calculator({ defaultRegion = "US", defaultUnit = "sqft" }: { defaultRegion?: string, defaultUnit?: string }) {
    const [result, setResult] = useState<ReturnType<typeof calculateQuote> | null>(null);
    const [region, setRegion] = useState<Region>(defaultRegion as Region);

    const handleCalculate = (data: FormValues) => {
        setRegion(data.region as Region);
        const quote = calculateQuote({
            region: data.region as Region,
            area: data.area,
            unit: data.unit,
            frequency: data.frequency,
            height: data.height,
            terrain: data.terrain,
            services: data.services,
        });
        setResult(quote);
    };

    return (
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left: Input Panel */}
                    <div className="w-full">
                        <InputForm onCalculate={handleCalculate} defaultRegion={defaultRegion} defaultUnit={defaultUnit} />
                    </div>

                    {/* Right: Result Hologram (Sticky on Desktop) */}
                    <div className="lg:sticky lg:top-8 w-full">
                        {result ? (
                            <ResultCard
                                min={result.min}
                                max={result.max}
                                currency={CURRENCIES[region]}
                                breakdown={result.breakdown}
                                region={region}
                            />
                        ) : (
                            <div className="relative h-full min-h-[500px] w-full bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden flex flex-col items-center justify-center p-8">
                                {/* Abstract Background - Horizontal Document Look */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                                    <div className="absolute top-12 left-12 right-12 h-6 bg-black rounded-full" />
                                    <div className="absolute top-24 left-12 w-1/2 h-4 bg-black rounded-md" />
                                    <div className="absolute top-24 right-12 w-1/3 h-4 bg-black rounded-md" />
                                    <div className="absolute top-36 left-12 right-12 h-40 bg-black rounded-xl" />
                                    <div className="absolute bottom-12 left-12 right-12 h-8 bg-black rounded-md" />
                                    {/* Decorative Grid */}
                                    <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
                                </div>

                                {/* Glass Overlay CTA - Horizontal Layout */}
                                <div className="relative z-10 w-full max-w-lg p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-white/60 shadow-xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8 transform transition-all hover:scale-[1.02] duration-500 group">
                                    <div className="w-24 h-24 shrink-0 bg-gradient-to-br from-[var(--primary)] to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30 relative overflow-hidden group-hover:rotate-6 transition-transform duration-500">
                                        <CalculatorIcon className="w-12 h-12 text-white relative z-10" />
                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 bg-green-400 rounded-2xl blur opacity-40 animate-pulse" />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <div className="text-center sm:text-left">
                                        <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
                                            Quote Pending
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                            Enter your property details on the left to instantly generate your personalized estimate.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

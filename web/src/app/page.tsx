

import { Calculator } from "@/components/Calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lawn Mowing Cost Calculator 2025 | Free Instant Quote",
  description: "Calculate 2025 lawn mowing prices instantly. Adjust for grass height, yard size, and terrain. Trusted by 10,000+ homeowners for accurate lawn care valuation.",
  keywords: ["lawn mowing cost", "grass cutting price", "lawn care estimate", "cost per acre", "2025 lawn rates"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[var(--primary)] selection:text-white">

      {/* 2. Main Layout (Center Stage) */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">

        {/* Hero Text */}
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold mb-2 uppercase tracking-wide">
            Global / National Average Mode
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[var(--secondary)] tracking-tight leading-tight">
            Get Your Instant <br />
            <span className="text-[var(--primary)]">Lawn Mowing Quote</span>
          </h1>
          <p className="text-[var(--muted-foreground)] text-lg max-w-xl mx-auto">
            Get a professional estimate based on <strong>National Averages</strong>.
            <br />
            <span className="text-sm opacity-80 block mt-2">
              (For specific local rates like Texas, UK, or NZ, please select your location from the menu)
            </span>
          </p>
        </div>

        {/* Calculator Container */}
        <div className="animate-in slide-in-from-bottom-4 duration-700">
          <Calculator />
        </div>

        {/* 4. Trust Section (Why Choose Us) */}
        <section className="mt-24 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--secondary)] mb-4">Why Trust Lawn.Calc?</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              We aggregate data from thousands of providers to give you the most accurate 2025 pricing benchmarks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Local Calibration", desc: "US, UK, CA, AU & NZ specific rates adjusted for currency and labor costs." },
              { title: "Terrain Intelligence", desc: "Pricing factors for slope, grass height, and property complexity." },
              { title: "2025 Market Data", desc: "Updated weekly to reflect inflation, fuel costs, and industry shifts." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6 font-black text-xl">
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SEO Content Block (FAQ) */}
        <section className="prose prose-gray max-w-none mt-20 pt-16 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--secondary)]">Common Lawn Care Questions</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">How much does lawn mowing cost in 2025?</h3>
                <p className="text-gray-600">
                  The national average for lawn mowing in 2025 ranges from <strong>$35 to $80 per visit</strong> for standard urban lots (up to 5,000 sq ft).
                  Factors like grass height (over 6 inches), steep slopes, and obstacles can increase rates by 25-50%.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">What is the average cost per acre for mowing?</h3>
                <p className="text-gray-600">
                  For larger properties, professional mowing typically costs between <strong>$50 and $200 per acre</strong> depending on the equipment used (zero-turn vs. tractor).
                  Our <em>Lawn Mowing Cost Calculator Per Acre</em> mode adjusts for bulk discounts on large estates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Does frequency affect the price?</h3>
                <p className="text-gray-600">
                  Yes. Weekly service is usually the most economical option. Bi-weekly service often incurs a <strong>15-20% surcharge</strong> due to increased grass growth,
                  while one-time cuts can cost up to 50% more than the recurring rate.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

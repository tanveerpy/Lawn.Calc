import { Calculator } from "@/components/Calculator";
import { REGIONS } from "@/components/Calculator/constants";
import { Metadata } from "next";
import { MapPin, Info, HelpCircle, CheckCircle2 } from "lucide-react";
import { LOCATION_CONTENT } from "@/data/locationContent";
import { Navbar } from "@/components/Navbar";

// Map URL slugs to Region keys
// Config for URL slugs: maps to Region, Unit defaults, and Metadata overrides
const SLUG_CONFIG: Record<string, { region: keyof typeof REGIONS; unit?: string; titleOverride?: string }> = {
    // 🌎 Country Level
    "lawn-mowing-cost-calculator-usa": { region: "US" },
    "lawn-mowing-cost-calculator-uk": { region: "UK" },
    "lawn-mowing-cost-calculator-canada": { region: "CA" },
    "lawn-mowing-cost-calculator-australia": { region: "AU" },
    "lawn-mowing-cost-calculator-new-zealand": { region: "NZ" },

    // 📍 City/Local Level
    "lawn-mowing-cost-calculator-cape-girardeau": { region: "US_MO_CAPE" },
    "lawn-mowing-cost-calculator-tauranga": { region: "NZ", titleOverride: "Tauranga Lawn Mowing Cost Calculator" },

    // 🇺🇸 US States (Mapping to US National Rates for now)
    "lawn-mowing-cost-calculator-texas": { region: "US", titleOverride: "Texas Lawn Mowing Cost Calculator" },
    "lawn-mowing-cost-calculator-ohio": { region: "US", titleOverride: "Ohio Lawn Mowing Cost Calculator" },
    "lawn-mowing-cost-calculator-michigan": { region: "US", titleOverride: "Michigan Lawn Mowing Cost Calculator" },
    "lawn-mowing-cost-calculator-north-carolina": { region: "US", titleOverride: "North Carolina Mowing Cost Calculator" },

    // 🚜 Feature Specific
    "lawn-mowing-cost-calculator-per-acre": { region: "US", unit: "acre", titleOverride: "Lawn Mowing Cost Per Acre Calculator" },
    "lawn-mowing-cost-calculator-acreage": { region: "US", unit: "acre", titleOverride: "Acreage Mowing Cost Calculator" },
};

type Props = {
    params: Promise<{ country: string }>
}

export async function generateStaticParams() {
    return Object.keys(SLUG_CONFIG).map((slug) => ({
        country: slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const config = SLUG_CONFIG[country as string];
    const regionName = REGIONS[config.region];
    const content = LOCATION_CONTENT[country as string];

    // SEO: Add "Free" to title as requested, and use specific location override if available
    const pageTitle = config.titleOverride
        ? `${config.titleOverride} | 2025 Rates`
        : `Lawn Mowing Cost Calculator ${regionName} | 2025 Pricing`;

    const description = content?.intro
        ? `${content.intro.substring(0, 150)}... Get your free ${regionName} quote today.`
        : `Find the average cost to mow a lawn in ${regionName} for 2025. Localized pricing for labor, fuel, and acre rates.`;

    return {
        title: pageTitle,
        description: description,
        keywords: [`lawn mowing cost ${regionName}`, `grass cutting prices ${regionName}`, `${regionName} lawn care rates`, "2025 mowing calculator"],
    };
}

export default async function RegionalPage({ params }: Props) {
    const { country } = await params;
    const config = SLUG_CONFIG[country as string];
    const regionName = REGIONS[config.region];
    const content = LOCATION_CONTENT[country as string]; // Get unique content

    // Fallback if content missing
    if (!content) {
        return <div>Content not found for {country}</div>;
    }

    return (
        <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[var(--primary)] selection:text-white">

            {/* 2. Main Layout */}
            <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">

                {/* Dynamic Header */}
                <div className="text-center mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-[var(--secondary)] px-3 py-1 rounded-full text-sm font-bold mb-2">
                        <MapPin className="w-4 h-4" />
                        Currently Viewing: {content.title}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-[var(--secondary)] tracking-tight leading-tight">
                        <span className="text-[var(--primary)]">Virtual Quote</span> Engine
                    </h1>
                    <p className="text-[var(--muted-foreground)] text-lg max-w-xl mx-auto">
                        {content.intro}
                    </p>
                </div>

                {/* Calculator Container */}
                <div className="animate-in slide-in-from-bottom-4 duration-700 mb-16">
                    <Calculator defaultRegion={config.region} defaultUnit={config.unit} />
                </div>

                {/* Unique Content Sections */}
                <div className="space-y-16 animate-in slide-in-from-bottom-8 duration-700 delay-200">

                    {/* Factors Grid */}
                    <section>
                        <h2 className="text-2xl font-bold text-[var(--secondary)] mb-6 flex items-center gap-2">
                            <Info className="w-6 h-6 text-[var(--primary)]" />
                            Local Pricing Factors
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {content.factors.map((factor, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-lg text-gray-800 mb-2">{factor.title}</h3>
                                    <p className="text-gray-600">{factor.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* How-To Guide */}
                    <section className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-[var(--secondary)] mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-[var(--primary)]" />
                            How to get the best quote in {config.titleOverride?.replace(" Calculator", "").replace("Lawn Mowing Cost", "").trim() || regionName}
                        </h2>
                        <ul className="space-y-4">
                            {content.guide.map((step, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="bg-[var(--primary)] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">
                                        {i + 1}
                                    </div>
                                    <p className="text-gray-700 text-lg">{step}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* FAQs */}
                    <section>
                        <h2 className="text-2xl font-bold text-[var(--secondary)] mb-6 flex items-center gap-2">
                            <HelpCircle className="w-6 h-6 text-[var(--primary)]" />
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {content.faq.map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.question}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* Footer */}
                <footer className="mt-16 border-t border-gray-100 pt-8 pb-12 text-center text-[var(--muted-foreground)]">
                    <p className="text-sm">© 2025 Lawn.Calc Valuation Engine. All rights reserved.</p>
                </footer>

            </main>
        </div>
    );
}

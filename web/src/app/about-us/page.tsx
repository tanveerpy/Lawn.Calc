import { TreePine, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "About Us | Lawn.Calc Valuation Engine",
    description: "Learn about the team and data science behind the most accurate lawn care pricing calculator on the web.",
};

export default function AboutUs() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-[var(--secondary)] mb-6">About Lawn.Calc</h1>
                <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
                    We are dedicated to bringing transparency and standardization to the lawn care industry through data-driven valuation.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Founded in 2024, Lawn.Calc was built to solve a simple problem: <strong>The lack of pricing transparency in outdoor home services.</strong>
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Homeowners often overpay, and providers often underquote. Our proprietary <em>Valuation Engine™</em> analyzes millions of data points—from fuel costs and labor rates to terrain complexity—to generate fair, market-calibrated estimates in seconds.
                    </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <ul className="space-y-4">
                        {[
                            "10,000+ Quotes Generated Daily",
                            "Calibrated for 5 Countries",
                            "Real-time Inflation Adjustments",
                            "Trusted by 500+ Providers",
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                                <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-[var(--secondary)] text-white rounded-3xl p-10 md:p-16 text-center">
                <TreePine className="w-16 h-16 mx-auto mb-6 text-[var(--primary)]" />
                <h2 className="text-3xl font-bold mb-4">Commitment to Accuracy</h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    We don't just guess. Our algorithms are constantly refined by feedback from verified lawn care professionals across the globe.
                </p>
            </div>
        </div>
    );
}

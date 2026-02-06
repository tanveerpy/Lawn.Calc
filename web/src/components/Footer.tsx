import Link from "next/link";
import { TreePine, MapPin, Calculator, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 mt-24">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2 font-black text-xl tracking-tight text-[var(--secondary)]">
                            <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center text-white">
                                <TreePine className="w-5 h-5" />
                            </div>
                            Lawn.Calc
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The #1 trusted resource for 2025 lawn care pricing. Calibrated for local rates, terrain complexity, and market trends.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link></li>
                            <li><Link href="#calculator" className="hover:text-[var(--primary)] transition-colors">Calculator</Link></li>
                            <li><Link href="/lawn-mowing-cost-calculator-usa" className="hover:text-[var(--primary)] transition-colors">USA Rates</Link></li>
                            <li><Link href="/lawn-mowing-cost-calculator-uk" className="hover:text-[var(--primary)] transition-colors">UK Rates</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/about-us" className="hover:text-[var(--primary)] transition-colors">About Us</Link></li>
                            <li><Link href="/contact-us" className="hover:text-[var(--primary)] transition-colors">Contact Us</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-[var(--primary)] transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-[var(--primary)]" />
                                hello@lawncalc.com
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[var(--primary)]" />
                                Global HQ, Earth
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-12 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Lawn.Calc Valuation Engine. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

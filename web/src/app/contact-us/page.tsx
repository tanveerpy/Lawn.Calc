import { Mail, MapPin } from "lucide-react";

export const metadata = {
    title: "Contact Us | Lawn.Calc Valuation Engine",
    description: "Get in touch with the Lawn.Calc team for support, partnerships, or media inquiries.",
};

export default function ContactUs() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-[var(--secondary)] mb-6">Contact Us</h1>
                <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
                    Have a question about a quote? Want to partner with us? We'd love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {/* Email Card */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-sm text-gray-500 mb-4">For general inquiries and help</p>
                    <a href="mailto:hello@lawncalc.com" className="text-[var(--primary)] font-bold hover:underline">
                        hello@lawncalc.com
                    </a>
                </div>

                {/* Location Card */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Global HQ</h3>
                    <p className="text-sm text-gray-500 mb-4">Our operations center</p>
                    <p className="text-gray-700 font-medium">
                        123 Green Street<br />
                        Landscape City, Earth 90210
                    </p>
                </div>
            </div>

            <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
                <h3 className="font-bold text-gray-900 mb-3">Response Time</h3>
                <p className="text-gray-600 text-sm">
                    We aim to respond to all inquiries within 24 business hours. <br />
                    For immediate pricing answers, please use our <a href="/" className="text-[var(--primary)] underline">Calculator Tool</a>.
                </p>
            </div>
        </div>
    );
}

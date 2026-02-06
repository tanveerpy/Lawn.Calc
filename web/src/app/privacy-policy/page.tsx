export const metadata = {
    title: "Privacy Policy | Lawn.Calc",
    description: "Our commitment to your privacy and data security.",
};

export default function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 prose prose-gray prose-headings:text-[var(--secondary)] prose-a:text-[var(--primary)]">
            <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Last Updated: February 2025</p>

            <p>
                At Lawn.Calc ("we", "us", or "our"), accessibly via lawncalc.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Lawn.Calc and how we use it.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
                We collect data to provide accurate quotes and improve our Valuation Engine. This may include:
            </p>
            <ul>
                <li><strong>Input Data:</strong> Property size, grass condition, and location data entered into our calculator.</li>
                <li><strong>Usage Data:</strong> Information on how you access and use the Service.</li>
                <li><strong>Cookies:</strong> We use cookies to store your preferences (like your last selected region).</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
                We use the information we collect in various ways, including to:
            </p>
            <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
            </ul>

            <h2>3. Third-Party Advertisers (AdSense)</h2>
            <p>
                Lawn.Calc uses Google AdSense to display ads. Google uses cookies (including the DART cookie) to serve ads based on your visit to our site and other sites on the internet.
            </p>
            <p>
                You may opt out of the use of the DART cookie by visiting the Google ad and content network Privacy Policy.
            </p>

            <h2>4. Data Security</h2>
            <p>
                We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>

            <h2>5. Contact Us</h2>
            <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at hello@lawncalc.com.
            </p>
        </div>
    );
}

import { Link } from "react-router-dom";

export default function CookiePolicyPage() {
    const lastUpdated = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="min-h-screen bg-white text-gray-900 pt-20">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Header */}
                <header className="mb-12 border-b border-gray-100 pb-8">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Cookie Policy</h1>
                    <p className="text-gray-500 text-sm">Last updated: {lastUpdated}</p>
                </header>

                {/* Content Sections */}
                <div className="space-y-10">
                    <section>
                        <p className="text-gray-600 leading-relaxed">
                            Hushh Technologies LLC ("Hushh", "we", "us") uses cookies to improve your experience on our website.
                            This policy explains how we use these technologies and your rights to control them.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">What are cookies?</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Cookies are small data files placed on your computer or mobile device. They are widely used by
                            website owners to make their websites work more efficiently and provide reporting information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">How We Use Cookies</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                <h3 className="font-bold mb-2">Essential Cookies</h3>
                                <p className="text-sm text-gray-600">
                                    Required for core site functionality. We use **Supabase** to manage secure login sessions.
                                    These cannot be disabled.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                <h3 className="font-bold mb-2">Analytics Cookies</h3>
                                <p className="text-sm text-gray-600">
                                    We use **Google Analytics** to understand site traffic and user behavior, helping us
                                    optimize our services.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                <h3 className="font-bold mb-2">Financial Integration</h3>
                                <p className="text-sm text-gray-600">
                                    When using our banking features, **Plaid** may set cookies to securely authenticate
                                    and link your financial accounts.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                <h3 className="font-bold mb-2">Preferences</h3>
                                <p className="text-sm text-gray-600">
                                    Used to remember your settings and provide a personalized experience across
                                    different visits.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Controlling Cookies</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Most web browsers allow you to manage cookies through their settings. You can choose to block
                            or delete cookies, but this may result in the loss of some website functionality, such as
                            remaining logged in.
                        </p>
                    </section>

                    <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                        <h2 className="text-xl font-bold mb-3 text-blue-900">Questions?</h2>
                        <p className="text-blue-800">
                            For more information about our privacy practices, please view our{" "}
                            <Link to="/privacy-policy" className="underline font-medium">Privacy Policy</Link> or
                            email us at legal@hushh.ai.
                        </p>
                    </section>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100">
                    <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
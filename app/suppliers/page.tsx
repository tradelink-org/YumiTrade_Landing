"use client";

import React, { useState } from "react";
import { CheckCircle2, Globe, TrendingUp, Rocket } from "lucide-react";
import ComingSoonModal from "../components/ComingSoonModal";

export default function SuppliersPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="pt-20 min-h-screen bg-white">
            <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />

            {/* Hero */}
            <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-900/50 border border-green-500 text-green-400 text-sm font-bold mb-6">
                        For Kenyan Manufacturers & Producers
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Take Your Business Global
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Join YumiTrade to connect with international buyers, manage orders efficiently, and grow your export business.
                    </p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-primary/20"
                    >
                        Join the Waitlist
                    </button>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-green-100 text-primary rounded-xl flex items-center justify-center mb-6">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
                            <p className="text-gray-600">
                                Access a network of verified international buyers looking for African products. We handle the marketing so you can focus on production.
                            </p>
                        </div>
                        <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Badge</h3>
                            <p className="text-gray-600">
                                Stand out from the competition. Our verification process gives buyers confidence in your legitimacy and quality standards.
                            </p>
                        </div>
                        <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Tools</h3>
                            <p className="text-gray-600">
                                Get access to analytics, order management tools, and market insights to help you make data-driven decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">How It Works</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Register", desc: "Create your company profile and submit verification documents." },
                            { step: "02", title: "Verify", desc: "Our team reviews your business to ensure compliance and quality." },
                            { step: "03", title: "List Products", desc: "Upload your catalog with high-quality images and details." },
                            { step: "04", title: "Start Trading", desc: "Receive inquiries and orders from global buyers." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative">
                                <div className="text-6xl font-black text-gray-200 mb-4">{item.step}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto bg-green-50 rounded-3xl p-10 border border-green-100">
                        <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Launching December 28th</h2>
                        <p className="text-gray-600 mb-8">
                            We are currently onboarding a select group of suppliers for our beta launch. Secure your spot early.
                        </p>
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition"
                        >
                            Apply to Join
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

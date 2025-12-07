"use client";

import React from "react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Empowering African Trade</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        YumiTrade is building the digital infrastructure to connect Kenyan manufacturers with the global economy.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    To revolutionize B2B trade in Africa by providing a trusted, transparent, and efficient platform where businesses can discover, negotiate, and transact with confidence.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    A world where African products are easily accessible to global markets, driving economic growth and creating sustainable opportunities for local producers.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop"
                                alt="Kenyan Landscape"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Road to Launch</h2>

                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="flex gap-6">
                            <div className="w-24 text-right font-bold text-gray-400 pt-1">Dec 2025</div>
                            <div className="relative border-l-2 border-gray-700 pl-8 pb-2">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                                <h3 className="text-xl font-bold mb-2">Platform Development</h3>
                                <p className="text-gray-400">Core infrastructure and design system implementation.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-24 text-right font-bold text-gray-400 pt-1">Jan 2026</div>
                            <div className="relative border-l-2 border-gray-700 pl-8 pb-2">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                                <h3 className="text-xl font-bold mb-2">Supplier Verification Pilot</h3>
                                <p className="text-gray-400">Onboarding initial batch of 50 verified suppliers.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-24 text-right font-bold text-primary pt-1">Feb 2026</div>
                            <div className="relative border-l-2 border-gray-700 pl-8 pb-2">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                                <h3 className="text-xl font-bold mb-2 text-primary">Beta Launch</h3>
                                <p className="text-gray-300">Opening the platform to early access buyers and suppliers.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-24 text-right font-bold text-gray-500 pt-1">Q2 2026</div>
                            <div className="relative border-l-2 border-gray-800 pl-8 pb-2">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-700 rounded-full"></div>
                                <h3 className="text-xl font-bold mb-2 text-gray-500">Global Expansion</h3>
                                <p className="text-gray-600">Scaling logistics partnerships and entering new markets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

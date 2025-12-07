"use client";

import React from "react";
import { Truck, ShieldCheck, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Header */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive solutions designed to streamline your trade experience with Kenya.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20">
                <div className="container mx-auto px-6 space-y-24">

                    {/* Service 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="w-16 h-16 bg-green-100 text-primary rounded-2xl flex items-center justify-center mb-6">
                                <Search className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Sourcing</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                We don't just list products; we help you find the *right* partners. Our team verifies every supplier to ensure they meet international standards for quality and capacity.
                            </p>
                            <ul className="space-y-3 text-gray-700 mb-8">
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full"></div> Supplier Verification & Audits</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full"></div> Product Sampling Coordination</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full"></div> Contract Negotiation Support</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-gray-100 rounded-3xl h-80 w-full relative overflow-hidden">
                            {/* Placeholder for Service Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center text-green-200">
                                <Search className="w-32 h-32 opacity-20" />
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Logistics & Shipping</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Navigating customs and international shipping can be complex. YumiTrade partners with top logistics providers to ensure your goods arrive safely and on time.
                            </p>
                            <ul className="space-y-3 text-gray-700 mb-8">
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> Freight Forwarding (Air & Sea)</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> Customs Clearance Assistance</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> Real-time Shipment Tracking</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-gray-100 rounded-3xl h-80 w-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-200">
                                <Truck className="w-32 h-32 opacity-20" />
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trade Assurance</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Trade with confidence. Our escrow-style payment protection ensures that funds are only released when the terms of the order are met.
                            </p>
                            <ul className="space-y-3 text-gray-700 mb-8">
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-amber-600 rounded-full"></div> Secure Payment Processing</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-amber-600 rounded-full"></div> Dispute Resolution Services</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-amber-600 rounded-full"></div> Quality Inspection Services</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-gray-100 rounded-3xl h-80 w-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center text-amber-200">
                                <ShieldCheck className="w-32 h-32 opacity-20" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to start sourcing?</h2>
                    <Link href="/" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
                        Explore Categories <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

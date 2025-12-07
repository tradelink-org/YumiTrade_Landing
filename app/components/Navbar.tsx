"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ComingSoonModal from "./ComingSoonModal";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleInteractiveClick = () => {
        setShowModal(true);
        setIsOpen(false); // Close mobile menu if open
    };

    return (
        <>
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">Y</div>
                            <span className="text-2xl font-bold text-gray-900 tracking-tight">YumiTrade</span>
                        </Link>
                        <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200 uppercase tracking-wide">
                            Beta
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/services" className="text-gray-600 hover:text-primary font-medium transition">Services</Link>
                        <Link href="/suppliers" className="text-gray-600 hover:text-primary font-medium transition">Suppliers</Link>
                        <Link href="/about" className="text-gray-600 hover:text-primary font-medium transition">About</Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={handleInteractiveClick}
                            className="text-gray-900 font-medium hover:text-primary transition"
                        >
                            Sign In
                        </button>
                        <button
                            onClick={handleInteractiveClick}
                            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-medium transition shadow-lg shadow-primary/20"
                        >
                            Join for Free
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen">
                        <div className="flex flex-col p-6 gap-6 text-lg">
                            <Link href="/services" className="text-gray-900 font-medium" onClick={() => setIsOpen(false)}>Services</Link>
                            <Link href="/suppliers" className="text-gray-900 font-medium" onClick={() => setIsOpen(false)}>Suppliers</Link>
                            <Link href="/about" className="text-gray-900 font-medium" onClick={() => setIsOpen(false)}>About</Link>
                            <hr className="border-gray-100" />
                            <button
                                onClick={handleInteractiveClick}
                                className="text-gray-900 font-medium text-left"
                            >
                                Sign In
                            </button>
                            <button
                                onClick={handleInteractiveClick}
                                className="bg-primary text-white px-5 py-3 rounded-lg font-medium text-center"
                            >
                                Join for Free
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </>
    );
};

export default Navbar;

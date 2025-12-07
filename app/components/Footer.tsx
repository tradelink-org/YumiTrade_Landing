import React from "react";
import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-primary font-bold">Y</div>
                            <span className="text-xl font-bold text-white">YumiTrade</span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Connecting Kenyan innovation with global opportunity. The most trusted B2B marketplace for African trade.
                        </p>
                        <div className="mt-4 inline-block px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-xs font-semibold text-gray-400">
                            Status: Beta Preview
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Platform</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                            <li><Link href="/suppliers" className="hover:text-white transition">For Suppliers</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Request for Quotation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Success Stories</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Insights & Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Contact Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li>Nairobi, Kenya</li>
                            <li>admin@yumitrade.org</li>
                            <li>+254 728 818 475</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} YumiTrade. All rights reserved.</p>
                    <div className="flex gap-6 text-sm">
                        <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition">Terms of Service</Link>
                        <div className="flex gap-4 ml-4 border-l border-gray-700 pl-4">
                            <a href="#" className="hover:text-white transition"><Linkedin className="w-4 h-4" /></a>
                            <a href="#" className="hover:text-white transition"><Twitter className="w-4 h-4" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

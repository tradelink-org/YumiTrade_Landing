"use client";

import React from "react";
import { X, Calendar, Rocket } from "lucide-react";

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Decorative Header */}
                <div className="h-32 bg-gradient-to-r from-primary to-green-600 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg">
                        <Rocket className="w-10 h-10" />
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition bg-black/10 hover:bg-black/20 rounded-full p-1"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">We're Launching Soon!</h3>
                    <p className="text-gray-600 mb-6">
                        YumiTrade is currently in <strong>Beta Preview</strong>. We are working hard to onboard suppliers and finalize the platform.
                    </p>

                    <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-8 flex items-center justify-center gap-3">
                        <Calendar className="w-6 h-6 text-primary" />
                        <div className="text-left">
                            <p className="text-xs text-green-600 font-bold uppercase tracking-wider">Official Launch</p>
                            <p className="text-lg font-bold text-gray-900">February 20th, 2026</p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl transition shadow-lg shadow-primary/20"
                    >
                        Got it, I'll wait!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonModal;

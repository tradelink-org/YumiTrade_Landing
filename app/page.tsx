"use client";

import React, { useState } from "react";
import {
  Search,
  Globe,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Hammer,
  Shirt,
  Construction,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ComingSoonModal from "./components/ComingSoonModal";

// --- Components ---

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50 via-white to-white"></div>
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-green-100/50 to-transparent blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Beta Preview • Launching Dec 28th
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Source Premium <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">
                Kenyan Products
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Your direct gateway to verified manufacturers and suppliers in Kenya.
              We are currently onboarding top-tier suppliers for our official launch.
            </p>

            {/* Search Box */}
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 max-w-xl flex items-center gap-2 mb-8">
              <div className="pl-4 text-gray-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="What are you looking for? (e.g. Coffee, Textiles)"
                className="flex-1 py-3 bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
              />
              <button
                onClick={() => setShowModal(true)}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-medium transition"
              >
                Search
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Verified Suppliers
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Trade Assurance
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {/* Abstract Composition for Hero Image */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop" alt="Kenyan Coffee" fill className="object-cover hover:scale-105 transition duration-500" />
                </div>
                <div className="h-40 bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=2070&auto=format&fit=crop" alt="Textiles" fill className="object-cover hover:scale-105 transition duration-500" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-40 bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
                  <Image src="/images/tea.png" alt="Tea" fill className="object-cover hover:scale-105 transition duration-500" />
                </div>
                <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop" alt="Kenyan Landscape" fill className="object-cover hover:scale-105 transition duration-500" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ icon: Icon, title, count, image }: { icon: any, title: string, count: string, image: string }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition duration-300 cursor-pointer border border-gray-100 bg-white">
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
    <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition duration-500" />
    <div className="relative z-20 p-6 h-64 flex flex-col justify-end">
      <div className="mb-2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-300 text-sm">{count} Suppliers Onboarding</p>
    </div>
  </div>
);

const FeaturedCategories = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-20 bg-white">
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Industries We Are Onboarding</h2>
            <p className="text-gray-600">We are actively verifying suppliers in these key sectors for our launch.</p>
          </div>
          <Link href="#" onClick={() => setShowModal(true)} className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            icon={Leaf}
            title="Agriculture & Food"
            count="1,200+"
            image="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop"
          />
          <CategoryCard
            icon={Shirt}
            title="Apparel & Textiles"
            count="850+"
            image="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
          />
          <CategoryCard
            icon={Construction}
            title="Construction Materials"
            count="500+"
            image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop"
          />
          <CategoryCard
            icon={Hammer}
            title="Handicrafts & Decor"
            count="300+"
            image="/images/handicrafts.png"
          />
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="#" onClick={() => setShowModal(true)} className="inline-flex items-center gap-2 text-primary font-semibold">
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ValueProp = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Source from Kenya via YumiTrade?</h2>
          <p className="text-gray-600 text-lg">
            We bridge the gap between international buyers and verified Kenyan suppliers, ensuring quality, trust, and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-14 h-14 bg-green-100 text-primary rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Suppliers</h3>
            <p className="text-gray-600 leading-relaxed">
              Every supplier on our platform undergoes a rigorous verification process to ensure legitimacy and production capability.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Logistics</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrated logistics solutions to handle shipping, customs, and delivery from Nairobi to anywhere in the world.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Trade Assurance</h3>
            <p className="text-gray-600 leading-relaxed">
              Secure payment systems that protect both buyers and suppliers until the order is successfully delivered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-20">
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20 backdrop-blur-sm">
              <Rocket className="w-4 h-4" />
              Launching December 28th, 2025
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Be The First To Know</h2>
            <p className="text-green-100 text-lg md:text-xl mb-10">
              Join our waitlist today. Whether you are a buyer looking for premium goods or a supplier ready to export, secure your spot.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg"
              >
                Find Suppliers
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="bg-primary-dark border border-green-400 text-white hover:bg-green-900 px-8 py-4 rounded-xl font-bold text-lg transition"
              >
                Become a Supplier
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function YUMITradeHomePage() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/20">
      <Hero />
      <FeaturedCategories />
      <ValueProp />
      <CTA />
    </div>
  );
}

import React from "react";
import {
  Mail,
  Briefcase,
  Truck,
  BarChart,
  CheckCircle,
  Smartphone,
  MapPin,
  Twitter,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
interface StatBlockProps {
  value: string;
  label: string;
}
const StatBlock: React.FC<StatBlockProps> = ({ value, label }) => (
  <div className="p-4 bg-white rounded-lg shadow-md border-t-4 border-blue-600">
    <p className="text-4xl font-bold text-blue-600 mb-1">{value}</p>
    <p className="text-sm text-gray-500">{label}</p>
  </div>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-2 border-transparent hover:border-blue-600">
    <div className="text-3xl text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface StepCardProps {
  number: string;
  title: string;
}
 const features = [
    {
      title: "Scalability & Performance",
      items: [
        "High Availability: Enterprise-grade infrastructure ensuring 99.9% uptime",
        "Global Reach: Support for international transactions and multiple currencies",
        "Real-Time Processing: Instant notifications and messaging",
        "Load Handling: Capable of processing thousands of concurrent transactions",
      ],
    },
    {
      title: "Analytics & Insights",
      items: [
        "Performance Dashboards: Track key business metrics",
        "Supplier Analytics: Monitor supplier performance and ratings",
        "Order Tracking: Complete visibility into order lifecycle",
        "Revenue Reports: Comprehensive financial reporting",
      ],
    },
    {
      title: "Integration & Extensibility",
      items: [
        "API Access: RESTful APIs for third-party integrations",
        "Payment Gateways: Support for multiple payment providers",
        "Notification Channels: Email, SMS, and in-app notifications",
        "Custom Workflows: Configurable business processes",
      ],
    },
  ];

interface PortfolioCardProps {
  title: string;
  description: string;
}
const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
}) => (
  <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">📌 {title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface CheckListItemProps {
  text: string;
}
const CheckListItem: React.FC<CheckListItemProps> = ({ text }) => (
  <div className="flex items-start space-x-3">
    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
    <p className="text-lg text-gray-700">{text}</p>
  </div>
);

const YUMITradeHomePage: React.FC = () => {
  return (
    <div className="min-h-screen antialiased">
      <section className="bg-white py-20 md:py-32 border-b">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Smart B2B Procurement & Trade Solutions for Modern Businesses
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              YUMI Trade helps organizations streamline sourcing, manage
              suppliers, and automate procurement workflows with reliable,
              scalable tools.Our platform facilitates trust-based commerce
              through comprehensive verification systems, secure payment
              handling, and seamless communication channels.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image src="/intro.png" alt="Hero Image" width={500} height={500} />
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-8 ">
            <h2 className="text-3xl font-bold text-gray-900">🎯 Our Mission</h2>
            <p className="text-lg text-black">
              To revolutionize B2B trade by providing a trusted platform where
              businesses can discover, negotiate, and transact with confidence,
              backed by robust verification processes and trade assurance
              mechanisms.
            </p>
          </div>
          <div className="mt-8 ">
            <h2 className="text-3xl font-bold text-gray-900">
              💡 Value Proposition
            </h2>
            <ol className="text-black text-lg">
              <li>
               <strong>For Suppliers: </strong> Build verified profiles, enhance market
                visibility, establish reputation through multi-dimensional
                ratings, and connect with qualified buyers worldwide
              </li>
              <li>
             <strong>For Buyers:</strong> Access vetted suppliers, secure payment transactions, make informed decisions through transparent ratings, and resolve disputes efficiently
              </li>
              <li><strong>For Platform Operators:</strong> Comprehensive management tools, automated workflows, advanced analytics, and revenue optimization.</li>
            </ol>

          </div>
        </div>
      </section>

      {/* 2. About Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            YUMI Trade is a B2B technology company providing procurement,
            supply-chain, and business transaction solutions. Our platform
            empowers businesses to manage vendors, analyze purchasing data, and
            execute secure digital trade processes.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <StatBlock value="5K+" label="Suppliers Connected" />
            <StatBlock value="20+" label="Industries Served" />
            <StatBlock value="99.9%" label="Platform Uptime" />
            <StatBlock
              value="🇰🇪"
              label="Based in Nairobi, Serving Africa & Beyond"
            />
          </div>
        </div>
      </section>

      {/* 3. Our Services / Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🛠️ Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Briefcase />}
              title="Supplier Management"
              description="Centralize all your suppliers and track engagement, compliance, and performance."
            />
            <ServiceCard
              icon={<Truck />}
              title="Procurement Automation"
              description="Automate RFQs, purchase orders, and approvals for efficient workflow."
            />
            <ServiceCard
              icon={<CheckCircle />}
              title="Trade Verification & Compliance"
              description="Ensure every transaction meets business and crucial regulatory standards."
            />
            <ServiceCard
              icon={<BarChart />}
              title="Analytics & Reporting"
              description="Advanced dashboards for spend analysis, forecasting, and data-driven decisions."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
         📊 Platform Capabilities
          </h2>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {features.map((section, index) => (
        <div
          key={index}
          className="
            bg-white p-6 rounded-xl shadow-sm border 
            hover:border-t-4 hover:border-t-blue-600 
            transition-all duration-300 
            cursor-pointer
          "
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {section.title}
          </h3>

          <ul className="space-y-2 text-gray-700">
            {section.items.map((item, idx) => (
              <li key={idx} className="text-sm leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
        </div>
      </section>

      {/* 5. Case Studies / Portfolio Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🧾 Our Portfolio & Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PortfolioCard
              title="Supplier Workflow System"
              description="Developed a digital workflow solution for supplier onboarding and compliance checks."
            />
            <PortfolioCard
              title="B2B Polling & Market Insights System"
              description="Created a polling platform helping businesses gather real-time market intelligence."
            />
            <PortfolioCard
              title="Order & Logistics Coordination Tool"
              description="Built tools for real-time order tracking and end-to-end supply-chain visibility."
            />
          </div>
        </div>
      </section>

      {/* 6. Why Businesses Choose YUMI Trade */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ⭐ Why Businesses Choose YUMI Trade
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-xl">
            <CheckListItem text="Trusted by SMEs and enterprises" />
            <CheckListItem text="Secure, encrypted transactions" />
            <CheckListItem text="Fast and simple onboarding" />
            <CheckListItem text="24/7 technical and trade support" />
            <CheckListItem text="Highly scalable cloud infrastructure" />
            <CheckListItem text="Dedicated local compliance focus" />
          </div>
        </div>
      </section>

      {/* 7. Contact / Business Info */}
      <section className="py-16 bg-blue-600 text-white" id="contact">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">
              We'd love to discuss how YUMI Trade can transform your B2B
              operations.
            </p>
            <div className="space-y-4">
              <p className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />{" "}
                <span className="font-bold">Email:</span>tradelinkim@gmail.com
              </p>
              <p className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5" />{" "}
                <span className="font-bold">Phone:</span>+254 7XX XXX XXX
              </p>
              <p className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />{" "}
                <span className="font-bold">Location:</span> Nairobi, Kenya
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-white p-8 rounded-lg shadow-2xl text-gray-800">
            <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full p-3 font-semibold rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition shadow-md"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} YUMI Trade. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <a
              href="/privacy"
              className="hover:text-white transition duration-200 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-white transition duration-200 text-sm"
            >
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition duration-200">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YUMITradeHomePage;

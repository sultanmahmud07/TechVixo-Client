"use client";

import Image from "next/image";
import Link from "next/link";
import mainImg from "@@/images/services/e-commerce-marketing/optimization.jpg";
import detailImg from "@@/images/services/e-commerce-marketing/main.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaTools,
  FaSearch,
  FaCartPlus,
  FaCheck,
  FaChartLine,
  FaBolt,
  FaRegCheckCircle,
  FaUserCheck,
} from "react-icons/fa";

const ECommerceOptimizationPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Product Page SEO",
      description: "We optimize descriptions copy and inject metadata, boosting keyword visibility.",
      icon: FaSearch
    },
    {
      id: 2,
      title: "Checkout UX Tweaks",
      description: "We reduce required form fields and add guest checkout options, decreasing dropouts.",
      icon: FaUserCheck
    },
    {
      id: 3,
      title: "LCP & Core Web Vitals",
      description: "We optimize product images and caching parameters, speeding up storefront load times.",
      icon: FaBolt
    },
    {
      id: 4,
      title: "Product Rich Schema",
      description: "We configure product schemas to display prices and reviews directly on search listings.",
      icon: FaCheck
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Store Performance Scan",
      description: "We run page speed diagnostics to isolate large assets and slow database scripts.",
      icon: FaBolt
    },
    {
      id: 2,
      title: "Checkout Friction Audits",
      description: "We analyze buyer drop-off metrics to clean up checkout checkout input steps.",
      icon: FaUserCheck
    },
    {
      id: 3,
      title: "Structured Schema Setup",
      description: "We inject Product schema scripts, mapping review counts and price lists.",
      icon: FaCheck
    },
    {
      id: 4,
      title: "Product SEO Rewriting",
      description: "We rewrite descriptions, mapping targeted buyer search terms naturally.",
      icon: FaSearch
    },
    {
      id: 5,
      title: "Cart Abandonment Automations",
      description: "We setup email triggers to target users who dropped from checkout sections.",
      icon: FaCartPlus
    },
    {
      id: 6,
      title: "Conversion (CRO) Reports",
      description: "We track checkout rate improvements weekly, tweaking store parameters accordingly.",
      icon: FaChartLine
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Accelerated Speeds",
      description: "We optimize images and scripts, minimizing page loading times below 2 seconds."
    },
    {
      id: 2,
      title: "Rich snippet Claims",
      description: "We verify schema structures, securing Google star-ratings display cards."
    },
    {
      id: 3,
      title: "Clean checkout UX",
      description: "We remove checkout account hurdles, allowing seamless guest purchase clicks."
    },
    {
      id: 4,
      title: "Attribution Funnels",
      description: "We configure GA4 funnels to track exact checkout drop-off coordinates."
    }
  ];

  const sections = [
    {
      title: "Minimize Cart Dropouts with Conversion (CRO) Audits",
      description: [
        "Getting buyers to add items to a cart is only half the battle. Cart abandonment rates exceed 70% globally. We audit your checkout UX, removing unnecessary form fields and resolving layout errors.",
        "By implementing guest checkout options, transparent shipping cost lists, and single-page checkout flows, we boost your purchase ratios."
      ],
      img: "/assets/images/services/e-commerce-marketing/optimization.jpg"
    },
    {
      title: "Speed Up Store Pages & Setup Product Schema",
      description: [
        "Every second of page load lag decreases conversions by 7%. We audit Shopify and WooCommerce scripts, deferring heavy CSS/JS code and compressing product graphics.",
        "Additionally, we verify product schema structures, ensuring your prices, reviews, and stock levels display in search listings."
      ],
      img: "/assets/images/services/e-commerce-marketing/main.jpg"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Why does checkout speed affect conversions?",
      answer: "Buyers demand instant interactions. A loading delay on cart or billing screens raises purchase hesitation, leading to page exits."
    },
    {
      id: 2,
      question: "What is product schema markup?",
      answer: "Product schema is structured code read by search bots. It displays price lists, stock statuses, and user reviews directly in search results, increasing clicks."
    },
    {
      id: 3,
      question: "How do you locate checkout bottlenecks?",
      answer: "We configure GA4 checkout conversion funnels. This tracks exactly which step (e.g. shipping options or payment inputs) caused buyers to exit."
    },
    {
      id: 4,
      question: "Do you configure Shopify apps or custom code?",
      answer: "We do both. We minimize heavy third-party app installations, substituting them with clean custom scripts to keep store load speeds high."
    }
  ];

  return (
    <div className="">
      
      {/* About Section */}
      <div className="py-6 md:pt-16 bg-[#F9F9FB]">
        <div className="main_container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 items-center">
            <div className="left_site">
              <h3 className="text-2xl md:text-4xl text-[#000000] font-bold leading-tight">
                Accelerate Store Conversions & Page Speeds with E-Commerce Optimization
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we turn e-commerce store visits into completed checkouts. We analyze core web vitals, configure product schemas, and resolve checkout friction.
                </p>
                <p>
                  We compile speed diagnostics, write product SEO descriptions, configure cart abandonment flows, and track checkout conversion rates weekly.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Start Store Audits
                </button>
              </Link>
            </div>
            <div className="right_site relative h-64 md:h-96 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={mainImg}
                alt="E-Commerce Optimization Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <ServiceClients />

      {/* Why Need Section */}
      <div className="my-6 md:my-14 bg-[#F8F9FA] py-12">
        <div className="main_container">
          <div className="top_title_design flex flex-col items-center">
            <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
              Key Optimization Benefits
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Optimize Core Web Vitals, Checkout UX, and Rich Schemas
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6">
            {facilities.map((facility, i) => {
              const FacilityIcon = facility.icon;
              return (
                <div key={i} className="need_card bg-white flex flex-col items-center gap-2 p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="service_icon bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-2">
                    <FacilityIcon className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-center text-base md:text-lg font-bold text-[#111204]">{facility.title}</h3>
                  <p className="text-center text-sm text-gray-600">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="my-6 md:my-14">
        <div className="main_container">
          <div className="top_title_design flex flex-col items-center">
            <h2 className="w-full md:w-3/4 text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
              Our Optimization Workflow
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we diagnose load delays, audit checkout inputs, map schemas, and monitor GA4 funnels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:gap-x-8 py-6">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={i} className="need_card bg-white flex flex-col gap-2 p-6 md:p-8 shadow-sm hover:shadow-md border border-gray-100 rounded-xl transition-all duration-300">
                  <div className="service_icon bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <StepIcon className="text-primary text-xl" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#111204]">0{step.id}. {step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Components Section */}
      <div className="py-8 md:py-16 my-5 md:my-10 bg-secondary text-white">
        <div className="main_container">
          <div className="flex flex-col gap-8">
            <div className="card_1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="right_site relative h-64 md:h-[350px] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={detailImg}
                  alt="Optimization components illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Store Optimization Strategy</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We audit server configurations and image files sizes to speed up product pages loading times. We write structured schema codes to secure pricing and reviews snippets in Google search directories.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We audit cart abandonment settings, launching automated recovery sequences to recapture lost conversions.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-4">
              {keyData.map((facility, i) => (
                <div key={i} className="key_card w-full flex gap-3">
                  <div className="key_icon pt-1 flex-shrink-0">
                    <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center">
                      <FaRegCheckCircle className="text-primary text-xs" />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="font-semibold mb-2 md:text-lg">{facility.title}</h3>
                    <p className="text-sm text-gray-300">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="main_container py-5 md:py-10">
        <div className="flex flex-col gap-8 md:gap-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col gap-6 md:gap-12 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="w-full md:w-2/5 relative h-64 md:h-96 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={section.img === "/assets/images/services/e-commerce-marketing/optimization.jpg" ? mainImg : detailImg}
                  alt="Optimization campaign detail image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full text-[#000000] md:w-3/5 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold my-3 text-secondary leading-tight">
                  {section.title}
                </h2>
                {section.description.map((item, idx) => (
                  <p className="text-sm md:text-base my-2 text-gray-600 leading-relaxed" key={idx}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="py-8 md:pt-16 bg-secondary text-white">
        <div className="main_container">
          <div className="top_title_design flex flex-col items-center">
            <h2 className="text-center text-3xl md:text-5xl font-bold text-white my-3 md:mb-5">
              FAQ&apos;s
            </h2>
            <p className="text-[#FFFFFFCC] text-center w-full md:w-2/5">
              Got questions about store speeds or product schemas? Read our answers below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 md:pt-10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`border border-gray-700 p-5 rounded-lg cursor-pointer transition ${activeFAQ === faq.id ? "bg-gray-800" : "bg-gray-900"}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex justify-between items-center">
                  <h4 className={`font-semibold ${activeFAQ === faq.id ? "text-primary" : "text-white"}`}>
                    0{faq.id}. {faq.question}
                  </h4>
                  <span className={`text-2xl ${activeFAQ === faq.id ? "text-primary" : "text-gray-400"}`}>
                    {activeFAQ === faq.id ? "×" : "+"}
                  </span>
                </div>
                {activeFAQ === faq.id && (
                  <p className="mt-1 md:mt-3 text-gray-300 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default ECommerceOptimizationPage;

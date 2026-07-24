"use client";

import Image from "next/image";
import Link from "next/link";
import mainImg2 from "@@/images/services/digital-marketing/ppc.jpg";
import mainImg from "@@/images/services/digital-marketing/google-service.jpg";
import detailImg1 from "@@/images/services/digital-marketing/ppc-data.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaSearchDollar,
  FaBullhorn,
  FaAd,
  FaChartLine,
  FaCheck,
  FaTools,
  FaCalculator,
  FaMousePointer,
  FaSync,
} from "react-icons/fa";

const PpcMarketingPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Instant Buyer Streams",
      description: "We deploy ads targeting ready-to-buy searchers, generating qualified calls immediately.",
      icon: FaMousePointer
    },
    {
      id: 2,
      title: "High-Intent Keywords",
      description: "We audit search query reports to focus budget only on terms with high purchase intent.",
      icon: FaSearchDollar
    },
    {
      id: 3,
      title: "Cost-Per-Click Control",
      description: "We configure maximum bid parameters, preventing ad networks from overcharging your clicks.",
      icon: FaCalculator
    },
    {
      id: 4,
      title: "Full Funnel Tracking",
      description: "We sync conversion tags directly with CRM systems to evaluate ad spend profitability.",
      icon: FaChartLine
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Competitor Bid Inspections",
      description: "We analyze competitor ad spending and identify high-value search terms they rely on.",
      icon: FaSearchDollar
    },
    {
      id: 2,
      title: "Negative Keyword Exclusion Lists",
      description: "We compile negative keyword sheets to prevent your ads from triggering on irrelevant searches.",
      icon: FaTools
    },
    {
      id: 3,
      title: "Multivariate Copy Writing",
      description: "We write multiple responsive search ad headlines to test user click-through rates.",
      icon: FaAd
    },
    {
      id: 4,
      title: "Landing Page Performance Audits",
      description: "We audit conversion path landing pages to ensure fast load speeds and form clarity.",
      icon: FaChartLine
    },
    {
      id: 5,
      title: "Custom Audience Syncing",
      description: "We setup tracking pixels to build custom retargeting lists for warm prospects.",
      icon: FaTools
    },
    {
      id: 6,
      title: "Bid Scaling & Optimizations",
      description: "We audit keyword quality scores, adjust bids, and optimize ad copy schedules weekly.",
      icon: FaSync
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Optimized Quality Scores",
      description: "We align keywords, ad copy, and landing page relevance to minimize click costs."
    },
    {
      id: 2,
      title: "Targeted Placement Plans",
      description: "We display ads only on highly relevant search partners and geographic target grids."
    },
    {
      id: 3,
      title: "Google Ads Verification",
      description: "We setup conversion linkers, verifying lead forms and call extensions track properly."
    },
    {
      id: 4,
      title: "Weekly Budget Sweeps",
      description: "We monitor keyword performance to reallocate budget from poor queries to high ROI keywords."
    }
  ];

  const sections = [
    {
      title: "Maximize ROI with Highly Targeted Search Campaigns",
      description: [
        "Pay Per Click (PPC) advertising is the fastest way to get your products in front of active buyers. Unlike organic search, paid campaigns place your website at the top of search listings instantly.",
        "We audit search volumes, negative queries, and bidding structures to structure campaigns that deliver qualified phone calls and form submissions."
      ],
      img: "/assets/images/services/digital-marketing/ppc.jpg"
    },
    {
      title: "Google Ads Quality Scores & Bid Optimizations",
      description: [
        "Search networks charge more for poorly optimized ads. We check your keyword-to-ad relevance, ensuring your Quality Scores remain high.",
        "By matching target keywords with compelling responsive headers and optimized landing pages, we lower your average Cost-Per-Click (CPC)."
      ],
      img: "/assets/images/services/digital-marketing/google-ads.jpg"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do you calculate PPC Cost-Per-Click?",
      answer: "CPC is defined by ad auction bid competitiveness, Quality Score, and ad rank parameters. We optimize quality scores to ensure you pay the lowest rates possible."
    },
    {
      id: 2,
      question: "What is a negative keyword list and why do we need it?",
      answer: "Negative keywords prevent your ads from showing for terms that are similar but irrelevant to your business (e.g. searching 'free services'), preventing wasted budget."
    },
    {
      id: 3,
      question: "How do we measure if PPC campaigns are profitable?",
      answer: "We configure conversion actions in Google Analytics and Google Tag Manager. This attributes every lead form or phone call back to the specific ad clicked."
    },
    {
      id: 4,
      question: "How often do you optimize bids and ad copies?",
      answer: "We run search term reports and adjust bidding parameters weekly, checking keyword match types and testing ad copy variations to improve performance."
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
                Capture High-Intent Lead Influxes with Google Paid Search Campaigns
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we build search marketing campaigns designed for maximum conversions. We focus our optimizations on CPA metrics rather than superficial clicks.
                </p>
                <p>
                  We audit match types, compile negative lists, optimize responsive text copy, and configure tag parameters to ensure positive ad spend return.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Start PPC Strategy Session
                </button>
              </Link>
            </div>
            <div className="right_site relative h-64 md:h-96 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={mainImg}
                alt="PPC Marketing Overview"
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
              Key PPC Benefits
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Optimize Ad Spend, Click Ratios, and Lead Inflow Volumes
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
              Our PPC Optimization Workflow
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we inspect competitors bids, configure keyword lists, and adapt campaign parameters.
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
                  src={detailImg1}
                  alt="PPC components illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Core PPC Configurations</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We audit target search term intent, configuring keyword lists to target ready-to-buy users. We deploy conversion tracking scripts so that leads are recorded accurately in your CRM dashboard.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We audit bid metrics, negative query parameters, and ad relevance to keep your CPA metrics low.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-4">
              {keyData.map((facility, i) => (
                <div key={i} className="key_card w-full flex gap-3">
                  <div className="key_icon pt-1 flex-shrink-0">
                    <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center">
                      <FaCheck className="text-primary text-xs" />
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
                  src={section.img}
                  alt="PPC campaign detail image"
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
              Got questions about bidding structures or Quality Scores? Read our answers below.
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

export default PpcMarketingPage;

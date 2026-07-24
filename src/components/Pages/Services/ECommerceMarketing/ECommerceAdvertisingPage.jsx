"use client";

import Image from "next/image";
import Link from "next/link";
import mainImg from "@@/images/services/e-commerce-marketing/advertising.jpg";
import detailImg from "@@/images/services/e-commerce-marketing/main.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaShoppingBag,
  FaSearchDollar,
  FaCheck,
  FaTools,
  FaChartLine,
  FaFacebookSquare,
  FaBullhorn,
  FaCheckCircle,
} from "react-icons/fa";

const ECommerceAdvertisingPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Google Shopping Feed",
      description: "We configure XML product feeds, verifying Merchant approvals and keywords bids.",
      icon: FaSearchDollar
    },
    {
      id: 2,
      title: "Social commerce Ads",
      description: "We launch dynamic catalog ads across Meta, TikTok, and Pinterest interfaces.",
      icon: FaFacebookSquare
    },
    {
      id: 3,
      title: "Dynamic Retargeting",
      description: "We retarget buyers who viewed product pages, displaying dynamic product carousels.",
      icon: FaShoppingBag
    },
    {
      id: 4,
      title: "Amazon Advertising",
      description: "We manage Amazon seller store bids, boosting organic sales search positions.",
      icon: FaBullhorn
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Bidding & Strategy Scopes",
      description: "We audit product margin layouts to define target cost-per-acquisition (CPA) bids.",
      icon: FaSearchDollar
    },
    {
      id: 2,
      title: "Merchant Center Syncing",
      description: "We connect store inventories, checking tax values, shipping tags, and image paths.",
      icon: FaTools
    },
    {
      id: 3,
      title: "Pixel Attribution Setup",
      description: "We configure tracking scripts to attribute sales conversions directly to specific ad campaigns.",
      icon: FaCheck
    },
    {
      id: 4,
      title: "Ad creative Designing",
      description: "We design custom ad banners, social grids copy, and short-form video assets.",
      icon: FaBullhorn
    },
    {
      id: 5,
      title: "Dynamic Carousel launches",
      description: "We deploy catalog ads to capture hot prospects who abandoned cart checkouts.",
      icon: FaShoppingBag
    },
    {
      id: 6,
      title: "ROAS Bids Optimizations",
      description: "We adjust CPC thresholds and keyword match exclusions daily, maximizing ad returns.",
      icon: FaChartLine
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Google Merchant Sweeps",
      description: "We coordinate product feed scans, clearing catalog disapproved items rapidly."
    },
    {
      id: 2,
      title: "Pixel tracking Audits",
      description: "We verify Facebook CAPI (Conversions API) settings to bypass browser tracking blockers."
    },
    {
      id: 3,
      title: "Custom Audience pools",
      description: "We compile buyers segments, targeting ad copies directly to high-spending users."
    },
    {
      id: 4,
      title: "Target Bidding sweeps",
      description: "We analyze target ROAS metrics, trimming budgets from low-performing keywords."
    }
  ];

  const sections = [
    {
      title: "Scale Catalog sales with Google Merchant & Shopping Ads",
      description: [
        "Google Shopping ads place your products directly in front of buyers searching for exact product names. We audit your product titles, description tags, and tax specifications, assuring Merchant Center health.",
        "By structuring bidding targets (tROAS) and optimizing search queries keywords, we maximize your visibility on shopping search consoles."
      ],
      img: "/assets/images/services/e-commerce-marketing/advertising.jpg"
    },
    {
      title: "Dynamic Social Retargeting & TikTok commerce Campaigns",
      description: [
        "Most store traffic leaves without purchasing. We deploy dynamic catalog retargeting campaigns on Meta and TikTok. This displays the exact products users viewed, recovering sales.",
        "We design eye-catching graphic formats and edit engaging social video creatives to boost ad click-through rates."
      ],
      img: "/assets/images/services/e-commerce-marketing/main.jpg"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How does Google Merchant Center sync store products?",
      answer: "We configure automated XML feed integrations that synchronize your Shopify or WooCommerce catalog prices, images, and stocks levels in real-time."
    },
    {
      id: 2,
      question: "What is Conversions API (CAPI) and why is it needed?",
      answer: "iOS and browser privacy blocks traditional cookie tracking. Meta Conversions API maps store purchase data directly from your server, verifying ad accuracy."
    },
    {
      id: 3,
      question: "How do you calculate return on ad spend (ROAS)?",
      answer: "ROAS is calculated by dividing total catalog sales revenue by total ad campaign spends. We optimize CPCs to keep this ratio highly profitable."
    },
    {
      id: 4,
      question: "Do you configure Amazon store ads?",
      answer: "Yes. We configure Sponsored Product search bids and Sponsored Brand banner copy campaigns within the Amazon Seller console."
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
                Scale Paid Store Conversions & ROAS with Dynamic E-Commerce Advertising
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we scale paid advertising campaigns for digital storefronts. We synchronize product catalogs, optimize Google Shopping bids, and build SMM retargeting.
                </p>
                <p>
                  We configure Merchant Center feeds, write ad copy creatives, audit tracking Conversions APIs, and adjust bidding thresholds daily.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Launch Product Ads
                </button>
              </Link>
            </div>
            <div className="right_site relative h-64 md:h-96 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={mainImg}
                alt="E-Commerce Advertising Overview"
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
              Key Advertising Benefits
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Optimize ROAS, Catalog Syncing, and Dynamic Retargeting
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
              Our Advertising Workflow
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we audit profit margins, resolve Merchant errors, setup Server CAPI codes, and scale dynamic ad copies.
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
                  alt="Advertising components illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Product Advertising Strategy</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We compile Merchant Center feed credentials, checking catalog image links and parameters. We design social carousel graphics, writing ad copy headlines and CTAs.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We verify conversions tracking scripts trigger on purchase forms, checking exact return on ad spend values daily.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-4">
              {keyData.map((facility, i) => (
                <div key={i} className="key_card w-full flex gap-3">
                  <div className="key_icon pt-1 flex-shrink-0">
                    <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center">
                      <FaCheckCircle className="text-primary text-xs" />
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
                  src={section.img === "/assets/images/services/e-commerce-marketing/advertising.jpg" ? mainImg : detailImg}
                  alt="Advertising campaign detail image"
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
              Got questions about Merchant Center configurations or dynamic pixels? Read our answers below.
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

export default ECommerceAdvertisingPage;

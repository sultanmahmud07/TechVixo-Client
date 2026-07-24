"use client";

import Image from "next/image";
import Link from "next/link";
import mainImg from "@@/images/services/e-commerce-marketing/main.jpg";
import optimizationImg from "@@/images/services/e-commerce-marketing/optimization.jpg";
import advertisingImg from "@@/images/services/e-commerce-marketing/advertising.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ClientTestimonial from "@/components/Pages/Home/Testimonial/Testimonial";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaCartPlus,
  FaSearchDollar,
  FaChartBar,
  FaShoppingBag,
  FaCheck,
  FaSearch,
  FaTools,
  FaUsersCog,
  FaChartLine,
} from "react-icons/fa";

const ECommerceMarketingPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Google Shopping Campaigns",
      description: "We optimize product merchant feeds, displaying your products on search screens.",
      icon: FaSearchDollar
    },
    {
      id: 2,
      title: "Cart Recovery Funnels",
      description: "We configure automated email drip sequences to recapture abandoned checkouts.",
      icon: FaCartPlus
    },
    {
      id: 3,
      title: "Conversion CRO Audits",
      description: "We optimize checkout screens and product filters to increase average basket values.",
      icon: FaChartBar
    },
    {
      id: 4,
      title: "Structured Schema Tagging",
      description: "We configure product schema metadata to display prices and review ratings in search results.",
      icon: FaCheck
    }
  ];

  const subServices = [
    {
      id: 1,
      name: "E-Commerce Optimization",
      icon: FaTools,
      description: "We optimize product page metadata structures, improve layout speeds, and tune cart checkout logic. By applying user behavioral research, we minimize checkout friction and boost conversion ratios.",
      img: optimizationImg
    },
    {
      id: 2,
      name: "E-Commerce Advertising",
      icon: FaShoppingBag,
      description: "We build high-converting paid ad sets across Google Shopping, Meta, and TikTok. By managing catalog connections and dynamic retargeting grids, we scale sales metrics.",
      img: advertisingImg
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Store Audits & Checkout Scans",
      description: "We review checkout layouts, cart friction, and website speed metrics to locate bottleneck areas.",
      icon: FaSearch
    },
    {
      id: 2,
      title: "Catalog & Merchant Syncing",
      description: "We configure Google Merchant Center logs, resolving feed errors and verify metadata links are clean.",
      icon: FaTools
    },
    {
      id: 3,
      title: "Dynamic Retargeting Setups",
      description: "We install Facebook/TikTok pixels to display catalog ads to users who viewed products.",
      icon: FaUsersCog
    },
    {
      id: 4,
      title: "Product SEO & Review Schema",
      description: "We inject rich snippet schemas, displaying catalog star-ratings directly on Google search cards.",
      icon: FaCheck
    },
    {
      id: 5,
      title: "Abandoned Checkout Recovery",
      description: "We build automated email and SMS notification flows to recapture warm checkout dropouts.",
      icon: FaCartPlus
    },
    {
      id: 6,
      title: "Weekly Performance Audits",
      description: "We review ROAS, average order value, conversion ratios, and compute bidding targets.",
      icon: FaChartLine
    }
  ];

  const tools = [
    { id: 1, title: "Google Merchant Center", description: "Configuring product feeds and search listings queries." },
    { id: 2, title: "Shopify & WooCommerce APIs", description: "Configuring schema markups, speed configurations, and checkout tags." },
    { id: 3, title: "Meta Catalog Manager", description: "Configuring dynamic product ads retargeting arrays." },
    { id: 4, title: "Google Analytics 4 E-commerce", description: "Tracking conversion rates, checkout drop-off steps, and buyer metrics." }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do you improve checkout conversion rates?",
      answer: "We reduce checkout form fields, implement guest-checkout shortcuts, resolve layout errors, and display trust tags prominently to build buyer confidence."
    },
    {
      id: 2,
      question: "Do you configure Google Shopping Merchant feeds?",
      answer: "Yes. We configure products tax guidelines, shipping parameters, image links, and schema definitions to assure listing approvals."
    },
    {
      id: 3,
      question: "What is dynamic retargeting and why is it needed?",
      answer: "Dynamic retargeting displays the exact products a buyer viewed on your site to them when they browse Facebook, Instagram, or TikTok, reminding them to finish checkout."
    },
    {
      id: 4,
      question: "How do you handle cart abandonment sequences?",
      answer: "We trigger a series of 3 automated emails over 24 hours, offering reminders, customer support, and strategic incentives to convert the visitor."
    }
  ];

  return (
    <div className="bg-[#FAF9FC]">
      
      {/* About Section */}
      <section className="py-12 md:py-20 bg-white border-b border-gray-100">
        <div className="main_container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                E-Commerce Marketing
              </h3>
              <h2 className="text-3xl md:text-5xl text-[#111204] font-bold leading-tight">
                Scale Store Conversions & Paid Catalog Sales
              </h2>
              <p className="text-sm md:text-base text-gray-600 my-6 leading-relaxed">
                We design comprehensive optimization and paid advertising campaigns for online stores. By auditing product SEO schemas, launching Google Shopping ads, and setting up abandonment sequences, we scale ROAS.
              </p>
              <Link href="/contact">
                <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow transition-all duration-300">
                  Discuss E-Commerce Growth
                </button>
              </Link>
            </div>
            <div className="relative h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={mainImg}
                alt="E-Commerce Marketing Overview"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceClients />

      {/* Facilities Section */}
      <section className="py-12 md:py-24 bg-white border-t border-b border-gray-100">
        <div className="main_container">
          <div className="top_title_design flex flex-col items-center pb-12">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary my-3">
              Why Partner with Digimatric?
            </h2>
            <p className="text-gray-500 text-center w-full md:w-1/2 leading-relaxed">
              We focus on catalog health, conversion metrics, and return on ad spend (ROAS).
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {facilities.map((fac, i) => {
              const FacIcon = fac.icon;
              return (
                <div key={i} className="p-6 bg-[#FAF9FC] border border-gray-50 rounded-2xl flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-2">
                    <FacIcon />
                  </div>
                  <h4 className="font-bold text-secondary text-base md:text-lg">{fac.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{fac.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SubServices Grid */}
      <section className="py-12 md:py-24">
        <div className="main_container">
          <div className="top_title_design flex flex-col items-center pb-12">
            <h3 className="sut_title">Our Offerings</h3>
            <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary my-3">
              E-Commerce Marketing Capabilities
            </h2>
            <p className="text-gray-500 text-center w-full md:w-3/5 leading-relaxed">
              Optimize checkout funnels, resolve feed errors, and launch dynamic catalog campaigns.
            </p>
          </div>
          <div className="flex flex-col gap-12 pt-6">
            {subServices.map((sub, idx) => {
              const SubIcon = sub.icon;
              return (
                <div
                  key={sub.id}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                    idx % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full lg:w-1/2 h-64 md:h-96 relative rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src={sub.img}
                      alt={sub.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl">
                      <SubIcon />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary leading-tight">
                      {sub.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {sub.description}
                    </p>
                    <Link href="/contact" className="mt-2">
                      <button className="bg-primary hover:bg-secondary text-white font-semibold py-2.5 px-6 rounded-lg text-sm shadow-sm transition">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-12 md:py-24 bg-white border-t border-b border-gray-100">
        <div className="main_container">
          <div className="top_title_design flex flex-col items-center pb-12">
            <h3 className="sut_title">Our Workflow</h3>
            <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary my-3">
              How We Scale Stores
            </h2>
            <p className="text-gray-500 text-center w-full md:w-3/5 leading-relaxed">
              We follow a metric-guided check, resolving merchant errors and optimization issues.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {steps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.id} className="p-6 md:p-8 bg-[#FAF9FC] border border-gray-50 rounded-2xl flex flex-col gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl">
                    <StepIcon />
                  </div>
                  <h4 className="font-bold text-secondary text-base md:text-lg">
                    0{step.id}. {step.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 md:py-24 bg-secondary text-white">
        <div className="main_container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-wider text-primary font-bold">Technology Stack</span>
              <h3 className="text-3xl font-extrabold">Merchant Tools</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We track sales attribution and shopping feed health using standard developer platforms.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tools.map((tool) => (
                <div key={tool.id} className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary mt-1 flex-shrink-0">
                    <FaCheck className="text-xs" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base mb-1">{tool.title}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientTestimonial />

      {/* FAQs */}
      <section className="py-12 md:py-24 bg-secondary text-white border-t border-gray-800">
        <div className="main_container">
          <div className="top_title_design flex flex-col items-center pb-12">
            <h2 className="text-center text-3xl md:text-5xl font-bold text-white my-3 md:mb-5">
              FAQ&apos;s
            </h2>
            <p className="text-gray-300 text-center w-full md:w-2/5">
              Have questions about product campaigns or shopping catalogs? Read our answers below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 md:pt-10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`border border-gray-750 p-5 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFAQ === faq.id ? "bg-gray-850" : "bg-gray-900"
                }`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex justify-between items-center">
                  <h4 className={`font-semibold ${activeFAQ === faq.id ? "text-primary" : "text-white"}`}>
                    0{faq.id}. {faq.question}
                  </h4>
                  <span className={`text-xl ${activeFAQ === faq.id ? "text-primary" : "text-gray-400"}`}>
                    {activeFAQ === faq.id ? "×" : "+"}
                  </span>
                </div>
                {activeFAQ === faq.id && (
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default ECommerceMarketingPage;

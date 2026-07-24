"use client";

import Image from "next/image";
import Link from "next/link";
import mainImg from "@@/images/services/digital-marketing/main.jpg";
import ppcImg from "@@/images/services/digital-marketing/ppc.jpg";
import smmImg from "@@/images/services/digital-marketing/smm.jpg";
import emailImg from "@@/images/services/digital-marketing/email.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ClientTestimonial from "@/components/Pages/Home/Testimonial/Testimonial";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaSearchDollar,
  FaUsers,
  FaEnvelope,
  FaBullhorn,
  FaAd,
  FaChartLine,
  FaCheck,
  FaTools,
  FaUsersCog,
  FaMailBulk,
  FaListOl,
} from "react-icons/fa";

const DigitalMarketingPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Data-Driven ROI",
      description: "We optimize campaigns for cost-per-acquisition (CPA) and positive ROI conversions.",
      icon: FaSearchDollar
    },
    {
      id: 2,
      title: "Advanced Demographics",
      description: "We locate buyers across networks, syncing custom audience pixels.",
      icon: FaUsersCog
    },
    {
      id: 3,
      title: "Automated Drip Funnels",
      description: "We program email flows to target users based on actions, improving retention.",
      icon: FaMailBulk
    },
    {
      id: 4,
      title: "Multi-Channel Tracking",
      description: "We build unified campaign dashboards checking organic, paid, and social actions.",
      icon: FaChartLine
    }
  ];

  const subServices = [
    {
      id: 1,
      name: "Pay Per Click (PPC) Marketing",
      icon: FaSearchDollar,
      description: "We scale lead acquisition using high-intent Google Search campaigns and YouTube dynamic ads. By auditing bidding parameters, negative keywords, and quality scores, we drive buyers.",
      img: ppcImg
    },
    {
      id: 2,
      name: "Social Media Advertising (SMM)",
      icon: FaUsers,
      description: "We build social marketing presence across Facebook, Instagram, and LinkedIn. We design custom creatives, program lookalike profiles, and target ads to engage users.",
      img: smmImg
    },
    {
      id: 3,
      name: "Email & Marketing Automation",
      icon: FaEnvelope,
      description: "We build email flows, customer onboarding sequences, and transactional receipts. Our drip campaigns keep your leads hot and improve conversion numbers.",
      img: emailImg
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Audience Profiling & Research",
      description: "We analyze competitor traffic patterns, audit search intent keywords, and build buyer persona maps.",
      icon: FaUsers
    },
    {
      id: 2,
      title: "Creative Concept & Copy Drafts",
      description: "We design ad copy variants, write compelling call-to-actions, and setup tracking tags.",
      icon: FaBullhorn
    },
    {
      id: 3,
      title: "Campaign Framework & Bid Launch",
      description: "We construct bidding strategies, group ad targets, and allocate budgets across platforms.",
      icon: FaAd
    },
    {
      id: 4,
      title: "A/B Multivariate Split Tests",
      description: "We test multiple layouts, keywords combinations, and landing page URLs to find high ROI options.",
      icon: FaTools
    },
    {
      id: 5,
      title: "Conversion Funnel Tuning",
      description: "We audit checkout screens, clear form friction, and optimize page load speeds.",
      icon: FaChartLine
    },
    {
      id: 6,
      title: "Continuous Scaled Reports",
      description: "We share clear performance analytics, outline key achievements, and adjust next bids budget.",
      icon: FaListOl
    }
  ];

  const tools = [
    { id: 1, title: "Google Ads Manager", description: "Configuring high-intent keyword search groups and YouTube display ads." },
    { id: 2, title: "Meta Ads Dashboard", description: "Designing lookalike audience segments and Facebook/Instagram catalogs." },
    { id: 3, title: "Mailchimp & HubSpot", description: "Setting up drip campaigns, marketing automation triggers, and customer log tags." },
    { id: 4, title: "Google Analytics 4", description: "Auditing multi-touch attribution metrics, landing pages speed, and goals conversions." }
  ];

  const faqs = [
    {
      id: 1,
      question: "How long does it take to see results from PPC ads?",
      answer: "PPC search campaigns launch immediately, meaning you can start receiving qualified calls and lead forms within 24 to 48 hours of campaign activation."
    },
    {
      id: 2,
      question: "How do you define advertising budgets?",
      answer: "We analyze average cost-per-click (CPC) rates in your industry, scoping a monthly budget that ensures your ads get sufficient exposure to hit conversion goals."
    },
    {
      id: 3,
      question: "Do you design the ad graphics and videos?",
      answer: "Yes. Our team includes creative designers who construct standard ad graphics, social banners, copy, and short-form video assets."
    },
    {
      id: 4,
      question: "How do you track campaign ROI?",
      answer: "We install Google Tag Manager tags, Meta pixels, and server-side APIs on your landing pages, allowing us to track exactly which ad generated each lead or purchase."
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
                Digital Marketing Category
              </h3>
              <h2 className="text-3xl md:text-5xl text-[#111204] font-bold leading-tight">
                Drive Scalable Growth & Sales Conversions
              </h2>
              <p className="text-sm md:text-base text-gray-600 my-6 leading-relaxed">
                At Digimatric, we substitute guesswork with data. We construct multi-channel PPC campaigns, social media ads, and email automation flows designed to drive high-intent leads and maximize ROI.
              </p>
              <Link href="/contact">
                <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow transition-all duration-300">
                  Discuss Marketing Strategy
                </button>
              </Link>
            </div>
            <div className="relative h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={mainImg}
                alt="Digital Marketing Overview"
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
              We focus on metrics that matter: customer acquisition costs, conversion ratios, and scalable sales growth.
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
            <h3 className="sut_title">Our Services</h3>
            <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary my-3">
              Comprehensive Marketing Capabilities
            </h2>
            <p className="text-gray-500 text-center w-full md:w-3/5 leading-relaxed">
              Deploy ads across search networks, SMM portals, and email pipelines with targeted creatives.
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
              How We Launch Campaigns
            </h2>
            <p className="text-gray-500 text-center w-full md:w-3/5 leading-relaxed">
              We follow a strict, data-guided setup check to ensure budget parameters deliver optimal conversions.
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
              <h3 className="text-3xl font-extrabold">Tools We Leverage</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We track campaigns using enterprise data platforms to ensure full visibility into leads pipeline conversions and web page clicks.
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
              Have questions about search bidding or social ads? Read our answers below.
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

export default DigitalMarketingPage;

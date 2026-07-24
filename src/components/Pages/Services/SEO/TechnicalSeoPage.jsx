"use client";

import Image from "next/image";
import Link from "next/link";
import img from "@@/images/services/seo/seo.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaTools,
  FaSitemap,
  FaBug,
  FaFileAlt,
  FaSearch,
  FaCogs,
  FaDatabase,
  FaServer,
  FaChevronRight,
  FaCheck,
} from "react-icons/fa";

const TechnicalSeoPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Core Web Vitals Boost",
      description: "We optimize Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) scores.",
      icon: FaTools
    },
    {
      id: 2,
      title: "XML Sitemaps & Schema",
      description: "We structure search listings using JSON-LD schema markup for rich snippets.",
      icon: FaSitemap
    },
    {
      id: 3,
      title: "Crawlability Optimizations",
      description: "We identify and resolve indexation bottlenecks, redirect loops, and server 404 logs.",
      icon: FaBug
    },
    {
      id: 4,
      title: "Robots.txt & Canonical Audits",
      description: "We prevent search bots from indexes of duplicate files, locking index parameters.",
      icon: FaFileAlt
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Log Audit & Indexation Checks",
      description: "We review Google Search Console logs to spot unindexed templates or crawler errors.",
      icon: FaSearch
    },
    {
      id: 2,
      title: "Site Architecture & Redirect Audits",
      description: "We streamline site folders and clear broken links to ensure crawlers budget is spent correctly.",
      icon: FaSitemap
    },
    {
      id: 3,
      title: "Core Speed Optimizations",
      description: "We compress heavy image files, minify coding assets (JS/CSS), and configure cloud caches.",
      icon: FaTools
    },
    {
      id: 4,
      title: "Schema Markup Custom Setup",
      description: "We inject rich snippets tags representing products, reviews, and businesses structure.",
      icon: FaDatabase
    },
    {
      id: 5,
      title: "Canonical Link Settings",
      description: "We define default URL references, avoiding search duplicate copy penalties.",
      icon: FaFileAlt
    },
    {
      id: 6,
      title: "Server & Security Configuration",
      description: "We audit SSL security logs, configure HTTP/2 layers, and clean server headers.",
      icon: FaServer
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Site Speed Boosts",
      description: "We check assets compilation sizes, compressing pages to ensure load time is under 2 seconds."
    },
    {
      id: 2,
      title: "Rich Snippets Marks",
      description: "We deploy product pricing and star review ratings tags into search query indexes."
    },
    {
      id: 3,
      title: "Clear Sitemap Paths",
      description: "We verify crawler bots read XML sitemaps cleanly, indexing revised files rapidly."
    },
    {
      id: 4,
      title: "Mobile Layout Syncs",
      description: "We test viewport parameters, ensuring layout flows render perfectly on mobile displays."
    }
  ];

  const sections = [
    {
      title: "Optimizing Your Technical Foundation for Search Engines",
      description: [
        "A beautiful website is useless if search engine spiders cannot crawl or index its pages. Our Technical SEO services focus on resolving backend coding issues, server configurations, and database bottlenecks that block search crawlers.",
        "We audit sitemaps, configure robots.txt specifications, and streamline site structures to ensure search engines index your key services rapidly."
      ],
      img: "/assets/images/services/seo/technical-seo.jpg"
    },
    {
      title: "Core Web Vitals & Page Speed Optimizations",
      description: [
        "User experience is a primary search ranking factor. Slow load times damage your positions and increase user bounce rates. We optimize page structures, compress media assets, and clean up render-blocking JavaScript files.",
        "We audit Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) scores, bringing your performance metrics into green boundaries."
      ],
      img: "/assets/images/services/seo/seo-audit.jpg"
    }
  ];

  const moreContent = [
    {
      title: "XML Sitemaps and Schema Settings",
      description: "We build XML sitemaps and configure rich schema markups (JSON-LD) to display detailed ratings, pricing, and locations directly in Google search lists."
    },
    {
      title: "Crawl Budget Audits",
      description: "We prevent search crawlers from wasting time on duplicate pages or admin folders, ensuring your fresh marketing content is indexed first."
    },
    {
      title: "SSL Security and Security Layers",
      description: "Google flags unsecured sites. We verify SSL setup parameters, clear database configurations, and set secure HTTP headers."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is Technical SEO and why is it important?",
      answer: "Technical SEO refers to optimizations on backend code and servers (like speed, sitemaps, SSL, and schema) that help search crawlers scan, understand, and index your website pages."
    },
    {
      id: 2,
      question: "How does page load speed affect search rankings?",
      answer: "Slow websites frustrate users, leading to higher bounce rates. Google ranks fast-loading sites higher to ensure searchers get a smooth, reliable experience."
    },
    {
      id: 3,
      question: "What is Schema Markup?",
      answer: "Schema markup is microdata code added to your pages. It helps search engines parse page context, letting them display rich snippets (like review stars or event dates) on results pages."
    },
    {
      id: 4,
      question: "How often should we audit Technical SEO parameters?",
      answer: "We recommend running detailed technical audits quarterly. As plugins update, images are uploaded, and developers edit code, crawl errors can accumulate."
    }
  ];

  return (
    <div className="">
      {/* About Section */}
      <div className="py-6 md:pt-16 bg-[#F9F9FB]">
        <div className="main_container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
            <div className="left_site">
              <h3 className="text-2xl md:text-4xl text-[#000000] font-bold leading-tight">
                Backend Site Optimizations to Help Search Engines Crawl and Index Your Content
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we resolve coding errors and server configurations. We configure your site's foundation to rank higher and load faster.
                </p>
                <p>
                  We audit sitemaps, set schema markups, speed up page renders, and clear crawl blocks, ensuring search crawlers read your marketing assets easily.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Book a Technical SEO Audit
                </button>
              </Link>
            </div>
            <div className="right_site">
              <Image
                width={600}
                height={400}
                src="/assets/images/services/seo/technical-seo.jpg"
                alt="Technical SEO about image"
                className="w-full h-auto object-cover rounded-xl"
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
              Key Technical Benefits
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Ensure Crawl Speed, Fast Loads, and Structured Rich Search Lists
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
              Our Technical SEO Pipeline
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we inspect, troubleshoot, and optimize your site's codebase and server configurations.
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
              <div className="right_site">
                <Image
                  width={600}
                  height={400}
                  src={img}
                  alt="Technical SEO components illustration"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Key Components of Technical SEO</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We optimize backend configurations to speed up page loads and clear crawl errors. We deploy structured schema markups so that star ratings, pricing, and locations display directly in search listings.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We audit server redirects, clean canonical tags, and implement security standards to keep search engines indexing your marketing content easily.
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
              <div className="w-full md:w-2/5">
                <Image
                  width={600}
                  height={400}
                  src={section.img}
                  alt="Technical SEO showcase"
                  className="w-full h-auto object-cover rounded-xl animate-fade-in"
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
        <div className="flex flex-col gap-6 py-12">
          {moreContent.map((content, i) => (
            <div key={i} className="w-full border-t border-gray-150 pt-6">
              <h2 className="text-2xl md:text-3xl font-bold my-2 text-secondary">
                {content.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {content.description}
              </p>
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
              Got questions about technical optimization? Read our answers below.
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
                  <h4 className={`font-semibold ${activeFAQ === faq.id ? "text-green-400" : "text-white"}`}>
                    {faq.id < 10 ? `0${faq.id}` : faq.id}. {faq.question}
                  </h4>
                  <span className={`text-2xl ${activeFAQ === faq.id ? "text-green-400" : "text-gray-400"}`}>
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

export default TechnicalSeoPage;

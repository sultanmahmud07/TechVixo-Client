"use client";

import Image from "next/image";
import Link from "next/link";
import mainImg from "@@/images/services/content-writing/seo-copy.jpg";
import detailImg from "@@/images/services/content-writing/main.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaPenNib,
  FaSearch,
  FaFileAlt,
  FaCheck,
  FaTools,
  FaChartLine,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

const CopywritingSeoContentPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Long-Form Blog Articles",
      description: "We write highly informative 1,500+ word articles that answer buyer search queries.",
      icon: FaFileAlt
    },
    {
      id: 2,
      title: "Landing Page Copywriting",
      description: "We draft conversion-oriented landing page copy that encourages signup clicks.",
      icon: FaPenNib
    },
    {
      id: 3,
      title: "Keyword & Tag Optimization",
      description: "We place keywords in meta descriptions, title tags, and image alt descriptions.",
      icon: FaSearch
    },
    {
      id: 4,
      title: "Original Writing Sweeps",
      description: "We run all articles through Copyscape checks to guarantee 100% plagiarism-free content.",
      icon: FaCheck
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Competitor Content Auditing",
      description: "We analyze high-ranking competitor blog pages to spot content structures gaps.",
      icon: FaSearch
    },
    {
      id: 2,
      title: "Header Hierarchy Structuring",
      description: "We configure outline parameters, maps H1, H2, and H3 tags to keyword intents.",
      icon: FaFileAlt
    },
    {
      id: 3,
      title: "First Draft Copywriting",
      description: "Our writers draft highly readable paragraphs, weaving target keywords naturally.",
      icon: FaPenNib
    },
    {
      id: 4,
      title: "Internal Link Configuration",
      description: "We inject context-rich links linking older blog files to service pages.",
      icon: FaTools
    },
    {
      id: 5,
      title: "Editorial Proofing Scans",
      description: "Our editors review tone consistency, check passive voice, and clear errors.",
      icon: FaCheck
    },
    {
      id: 6,
      title: "Search Crawl Verification",
      description: "We check GSC logs to ensure the updated sitemaps are parsed and indexed.",
      icon: FaChartLine
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Intent-Based Writing",
      description: "We map keywords to searcher intents, driving buyers instead of generic traffic."
    },
    {
      id: 2,
      title: "High Readability Ratings",
      description: "We style paragraphs with short sentences, hitting high Flesch-Kincaid marks."
    },
    {
      id: 3,
      title: "Structured Schema Support",
      description: "We write copy supporting FAQ schema markups, claiming Google search snippets."
    },
    {
      id: 4,
      title: "Monthly Conversion Audits",
      description: "We evaluate landing pages CTR logs, refining headers text to boost lead volumes."
    }
  ];

  const sections = [
    {
      title: "Write Highly Informative Blogs to Capture Search traffic",
      description: [
        "Search engines rank websites that publish comprehensive, unique content consistently. Our SEO Content services focus on writing articles that answer searcher queries and build domain authority.",
        "We audit search volume, keyword difficulty, and intent groups, writing original guides that claim page-one positions safely."
      ],
      img: "/assets/images/services/content-writing/seo-copy.jpg"
    },
    {
      title: "Conversion-Focused landing Page Copywriting",
      description: [
        "Attracting traffic is only half the battle. Your landing page copy must explain your service's value propositions in seconds. We write high-converting headers, client value propositions, and checkout scripts.",
        "We audit user scroll patterns, cleaning up layout friction to convert organic visits into qualified leads."
      ],
      img: "/assets/images/services/content-writing/main.jpg"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do you select keywords for SEO articles?",
      answer: "We analyze monthly search volumes, keyword difficulty (KD), and competitor rankings. We prioritize long-tail keywords that display clear purchase intent."
    },
    {
      id: 2,
      question: "Do you write technical B2B SaaS guides?",
      answer: "Yes. Our writers are trained to compose detailed B2B software guides, integrating code blocks, API specifications, and architecture diagrams if required."
    },
    {
      id: 3,
      question: "Will you edit our current underperforming articles?",
      answer: "Yes. We run content audits to identify thin copy, updating heading structures and keyword maps to reclaim lost organic rankings."
    },
    {
      id: 4,
      question: "Do you configure meta descriptions in our CMS?",
      answer: "Yes. We deliver ready-to-publish drafts containing optimized meta titles, descriptions, and header formats, or publish them directly in your CMS."
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
                Scale Organic Traffic & Sales Leads with Search-Optimized Content
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we compile copywriting grids aligned with search algorithms. We research keyword traffic patterns, drafting high-converting copy that ranks.
                </p>
                <p>
                  We configure H1/H2 header hierarchies, write meta description tags, clean alt parameters, and audit content indexation status weekly.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Start Content Campaign
                </button>
              </Link>
            </div>
            <div className="right_site relative h-64 md:h-96 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={mainImg}
                alt="Copywriting Campaign Overview"
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
              Key Copywriting Benefits
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Optimize Search Rankings, Readability Scores, and Conversion CTRs
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
              Our Content Creation Pipeline
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we audit competitors keywords, map outline headers, write drafts, and verify search indexation.
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
                  alt="Copywriting components illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">SEO Copywriting Elements</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We compile detailed intent keywords lists, structuring copy headings to answer search queries. We deploy internal link patterns to direct page authority throughout your site structure.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We verify meta description tags, indexing canonical tags, and mobile layout files to ensure zero indexing bottlenecks.
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
                  src={section.img === "/assets/images/services/content-writing/seo-copy.jpg" ? mainImg : detailImg}
                  alt="Copywriting campaign detail image"
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
              Got questions about search intents or turnaround times? Read our answers below.
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

export default CopywritingSeoContentPage;

"use client";

import Image from "next/image";
import Link from "next/link";
import img from "@@/images/services/seo/seo.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaClipboardCheck,
  FaChartLine,
  FaLink,
  FaBookOpen,
  FaSearch,
  FaFileAlt,
  FaCheck,
} from "react-icons/fa";

const SeoAuditsStrategyPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Comprehensive Health Audits",
      description: "We audit website crawl errors, speed gaps, and layout code compliance.",
      icon: FaClipboardCheck
    },
    {
      id: 2,
      title: "Competitor Keyword Gaps",
      description: "We evaluate competitor ranking positions to spot valuable keyword opportunities.",
      icon: FaChartLine
    },
    {
      id: 3,
      title: "Backlink Profile Auditing",
      description: "We analyze link profiles, clean toxic links, and verify domain authority.",
      icon: FaLink
    },
    {
      id: 4,
      title: "12-Month SEO Roadmapping",
      description: "We map out content publication plans and authority acquisition steps.",
      icon: FaBookOpen
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Deep Site Auditing Crawls",
      description: "We run crawls using enterprise tools to index all site pages and log code metrics.",
      icon: FaSearch
    },
    {
      id: 2,
      title: "Competitor Analysis & Keyword Gaps",
      description: "We scrape competitor traffic streams and locate keywords they rank for that you lack.",
      icon: FaChartLine
    },
    {
      id: 3,
      title: "Link Profile & Toxicity Audits",
      description: "We audit incoming link networks, flag toxic backlinks, and configure disavow documents.",
      icon: FaLink
    },
    {
      id: 4,
      title: "SEO Copy & Content Analysis",
      description: "We audit current blog pages, locate thin copy, and draft text revisions maps.",
      icon: FaFileAlt
    },
    {
      id: 5,
      title: "12-Month Strategic Roadmaps",
      description: "We compile comprehensive roadmaps linking keywords targets, content, and links.",
      icon: FaBookOpen
    },
    {
      id: 6,
      title: "Strategy Alignment & Execution Kickoff",
      description: "We host alignment meetings with your editors and technical leads to launch campaigns.",
      icon: FaClipboardCheck
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Complete Health Logs",
      description: "We inspect crawler block logs, sitemap formats, and server headers to ensure health."
    },
    {
      id: 2,
      title: "Competitor Strategy Scans",
      description: "We analyze high-ranking competitors to copy their content structures and link networks."
    },
    {
      id: 3,
      title: "Toxic Link Audits",
      description: "We sweep backlink sources to clear bad spam links, avoiding Google search penalties."
    },
    {
      id: 4,
      title: "Actionable Content Roadmaps",
      description: "We write clear editorial schedules targeting keywords to expand search market footprints."
    }
  ];

  const sections = [
    {
      title: "Data-Driven Auditing to Eliminate Search Blockers",
      description: [
        "Unplanned SEO campaigns waste money and yield poor returns. Our SEO Audits & Strategy services focus on identifying structural crawl blocks, ranking gaps, and bad link profiles before writing new copy.",
        "We crawl every page, evaluate metadata formats, and check server response metrics to isolate and resolve ranking bottlenecks."
      ],
      img: "/assets/images/services/seo/seo-audit.jpg"
    },
    {
      title: "Competitor Keyword Gaps & Strategic Planning",
      description: [
        "Your competitors are already ranking for valuable terms in your industry. We scrape their search listings to locate high-intent keywords they occupy.",
        "We convert these insights into a 12-month content publication roadmap, scheduling optimized pages that systematically claim organic market share."
      ],
      img: "/assets/images/services/seo/technical-seo.jpg"
    }
  ];

  const moreContent = [
    {
      title: "Comprehensive SEO Health Audits",
      description: "We inspect your website's coding, indexing status, mobile layout formats, and load times to provide an actionable list of fixes."
    },
    {
      title: "Competitor Gap Inspections",
      description: "We analyze keyword targets of your top-ranking competitors, drafting plans to create superior resources and capture their traffic."
    },
    {
      title: "Long-Term Content & Authority Mappings",
      description: "SEO takes time. We plan 12 months of high-intent article writing and link building to ensure sustainable domain authority growth."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What does an SEO Health Audit include?",
      answer: "Our audit covers technical indexing issues, page load speeds, mobile responsiveness, on-page metadata tags, keyword gap analysis, and toxic backlink checks."
    },
    {
      id: 2,
      question: "How do you analyze competitor keywords?",
      answer: "We leverage enterprise tools like Ahrefs and Semrush to scrape competitor rankings. This exposes high-traffic keywords they rank for that your site is currently missing."
    },
    {
      id: 3,
      question: "What is a toxic backlink and how do you resolve it?",
      answer: "Toxic backlinks are low-quality or spam links pointing to your site. They can trigger Google search penalties. We resolve them by compiling disavow lists and submitting them to Google."
    },
    {
      id: 4,
      question: "How long does it take to compile an SEO audit?",
      answer: "A comprehensive SEO health and competitor audit typically takes 2 to 3 weeks of data crawls, analysis, and strategic roadmap planning."
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
                Diagnose Website Blockers and Build a 12-Month SEO Content & Backlink Roadmap
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we substitute guesswork with data. We audit your site's codebase, link profile, and competitor positions to map out a clear path to page-one rankings.
                </p>
                <p>
                  We run deep crawler scans, evaluate keyword traffic gaps, check incoming link toxicity, and schedule high-intent content timelines to boost organic leads.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Get Your SEO Roadmap
                </button>
              </Link>
            </div>
            <div className="right_site">
              <Image
                width={600}
                height={400}
                src="/assets/images/services/seo/seo-audit.jpg"
                alt="SEO Audit about image"
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
              Why Run an SEO Audit?
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Uncover Ranking Bottlenecks and Draft a Successful, Data-Backed Strategy
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
              Our SEO Audits & Strategy Steps
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we inspect your pages, study competitor moves, and draft content roadmap cycles.
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
                  alt="Audit components illustration"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Key Components of Our SEO Audits</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We crawl site directories to highlight indexing issues, metadata formatting bugs, and viewport mobile scale glitches.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We analyze high-ranking competitors to discover their target keywords, compiling an actionable 12-month campaign content schedule.
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
                  alt="SEO Audit showcase"
                  className="w-full h-auto object-cover rounded-xl"
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
              Have questions about competitive audits or roadmaps? Read our answers below.
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

export default SeoAuditsStrategyPage;

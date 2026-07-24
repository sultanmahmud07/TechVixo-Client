"use client";

import Image from "next/image";
import Link from "next/link";
import mainImg from "@@/images/services/content-writing/main.jpg";
import seoCopyImg from "@@/images/services/content-writing/seo-copy.jpg";
import campaignImg from "@@/images/services/content-writing/campaign.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ClientTestimonial from "@/components/Pages/Home/Testimonial/Testimonial";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaPenNib,
  FaFileAlt,
  FaEnvelope,
  FaBullhorn,
  FaCheck,
  FaSearch,
  FaChartLine,
  FaGlobe,
  FaTools,
} from "react-icons/fa";

const ContentWritingPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Conversion Copywriting",
      description: "We write landing page copy that highlights user benefits, reducing checkout bounce rates.",
      icon: FaPenNib
    },
    {
      id: 2,
      title: "SEO Keyword Mapping",
      description: "We place high-traffic keywords into H1, H2, and meta tags naturally to guide crawlers.",
      icon: FaSearch
    },
    {
      id: 3,
      title: "Multichannel Campaigns",
      description: "We compile email drip scripts, outbound cold copy, and product sales decks.",
      icon: FaEnvelope
    },
    {
      id: 4,
      title: "Plagiarism-Free Content",
      description: "Every article passes Copyscape sweeps and editorial reviews prior to delivery.",
      icon: FaCheck
    }
  ];

  const subServices = [
    {
      id: 1,
      name: "Copywriting & SEO Content",
      icon: FaFileAlt,
      description: "We compose long-form blog articles, landing page copy, and product descriptions tailored for search rankings. By focusing on intent mapping and readability structures, we turn visitors into buyers.",
      img: seoCopyImg
    },
    {
      id: 2,
      name: "Campaign Content",
      icon: FaBullhorn,
      description: "We design high-converting email sequences, sales deck copy, and outbound messaging sheets. Our localized and targeted copy aligns directly with your active advertising campaign goals.",
      img: campaignImg
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Brand Voice Alignment",
      description: "We review your brand guidelines, target demographics, and operational goals to establish copywriting rules.",
      icon: FaUsersCog
    },
    {
      id: 2,
      title: "Keyword & Scoping Scans",
      description: "We crawl competitor keywords listings to locate content gaps and high-traffic search terms.",
      icon: FaSearch
    },
    {
      id: 3,
      title: "Detailed Article Outlining",
      description: "We outline heading hierarchies, target links, and product references for approval.",
      icon: FaFileAlt
    },
    {
      id: 4,
      title: "Draft Copywriting Cycles",
      description: "Our writers compile detailed content drafts, adding structured lists and code snippets if required.",
      icon: FaPenNib
    },
    {
      id: 5,
      title: "Editorial Proofing & Sweeps",
      description: "We scan drafts for grammar errors, check plagiarism logs, and verify keyword mapping rules.",
      icon: FaCheck
    },
    {
      id: 6,
      title: "Sitemap Publish & Auditing",
      description: "We publish content to directories, monitoring sitemap crawl status and conversion ratios.",
      icon: FaChartLine
    }
  ];

  const tools = [
    { id: 1, title: "Surfer SEO & Clearscope", description: "Auditing keyword densities, semantic context terms, and headings relevance scores." },
    { id: 2, title: "Copyscape & Grammarly Premium", description: "Verifying original copywriting profiles, clearing passive voice, and scanning plagiarism." },
    { id: 3, title: "Google Search Console Logs", description: "Tracking organic click-through ratios (CTR), landing page impressions, and keyword positions." },
    { id: 4, title: "HubSpot & Mailchimp Integrations", description: "Syncing email drip copy parameters and lead capture landing pages checkmarks." }
  ];

  const faqs = [
    {
      id: 1,
      question: "How does SEO content writing differ from regular copywriting?",
      answer: "SEO content writing integrates specific target keywords, structured heading hierarchies, and metadata queries to help search engine spiders index pages, while copywriting focuses on direct conversions."
    },
    {
      id: 2,
      question: "Do you write long-form whitepapers and e-books?",
      answer: "Yes. Our team drafts comprehensive e-books, whitepapers, and guides that B2B SaaS companies rely on for lead magnet campaigns."
    },
    {
      id: 3,
      question: "How do you maintain consistency in brand voice?",
      answer: "We compile detailed style sheets and tone guidelines (covering vocabulary constraints, syntax rules, and persona targets) before writing."
    },
    {
      id: 4,
      question: "What is your content turnaround time?",
      answer: "Standard SEO articles (1,500 words) are delivered within 3 to 5 business days, including editorial proofing and plagiarism sweeps."
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
                Content Writing Category
              </h3>
              <h2 className="text-3xl md:text-5xl text-[#111204] font-bold leading-tight">
                Engage Customers & Scale Search Traffic
              </h2>
              <p className="text-sm md:text-base text-gray-600 my-6 leading-relaxed">
                We craft high-converting copywriting and search-optimized blog posts designed to drive leads. By blending search intent mapping with engaging storytelling, we turn cold crawlers into active buyers.
              </p>
              <Link href="/contact">
                <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow transition-all duration-300">
                  Discuss Content Strategy
                </button>
              </Link>
            </div>
            <div className="relative h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={mainImg}
                alt="Content Writing Overview"
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
              We focus on brand alignment, search visibility, and original, high-converting copy.
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
              Content Writing Capabilities
            </h2>
            <p className="text-gray-500 text-center w-full md:w-3/5 leading-relaxed">
              Scale blog assets, launch product copywriting, and program campaign email flows.
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
              How We Create Content
            </h2>
            <p className="text-gray-500 text-center w-full md:w-3/5 leading-relaxed">
              We align our writers on brand voice, keyword logs, and detailed heading hierarchies.
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
              <h3 className="text-3xl font-extrabold">SEO Editors Tools</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We verify density parameters, reading metrics, and crawl stats using modern editor platforms.
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
              Have questions about SEO writing or content roadmaps? Read our answers below.
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

// Add standard mock/placeholder component to resolve RegExp icons references
const FaUsersCog = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

export default ContentWritingPage;

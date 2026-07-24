"use client";

import Image from "next/image";
import Link from "next/link";
import mainImg from "@@/images/services/link-building/technical.jpg";
import detailImg from "@@/images/services/link-building/server-rack.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaSitemap,
  FaLink,
  FaTools,
  FaSearch,
  FaFileAlt,
  FaGlobe,
  FaCheck,
  FaChartLine,
  FaBug,
} from "react-icons/fa";

const TechnicalLinkAcquisitionPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Broken Link Reclamation",
      description: "We locate broken links on target blogs, offering your relevant pages as default replacements.",
      icon: FaBug
    },
    {
      id: 2,
      title: "Competitor Replication",
      description: "We scrape competitor link networks to copy their high-value contextual backlinks placements.",
      icon: FaSearch
    },
    {
      id: 3,
      title: "Diverse Link Profile",
      description: "We acquire citations and niche edits, creating a natural backlink mix that passes search audits.",
      icon: FaSitemap
    },
    {
      id: 4,
      title: "Niche Contextual Edits",
      description: "We secure link updates inside pre-existing published articles, gaining immediate index value.",
      icon: FaLink
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Broken Link Audit Scans",
      description: "We run crawlers across high-authority blogs, identifying broken 404 links within relevant copy.",
      icon: FaBug
    },
    {
      id: 2,
      title: "Competitor Link Footprints",
      description: "We identify domains linking to your top three competitor keywords rankings.",
      icon: FaSearch
    },
    {
      id: 3,
      title: "Contextual Edit Outreach",
      description: "We contact publishers, requesting they replace broken links or thin tags with your revised guides.",
      icon: FaEnvelope
    },
    {
      id: 4,
      title: "Local Citations Auditing",
      description: "We compile geo-targeted profiles on directories, securing consistent local citations.",
      icon: FaGlobe
    },
    {
      id: 5,
      title: "Anchor Profile Maintenance",
      description: "We map out target anchors, preventing search crawlers from raising over-optimization flags.",
      icon: FaTools
    },
    {
      id: 6,
      title: "Indexation Verification Logs",
      description: "We scan incoming backlinks weekly to verify search engine bots crawled and indexed the changes.",
      icon: FaChartLine
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Data-Driven Audits",
      description: "We run deep crawler scans to inspect sitemaps, link structures, and redirect parameters."
    },
    {
      id: 2,
      title: "Link Toxicity Sweeps",
      description: "We flag spam links and disavow harmful domains, keeping search index filters clean."
    },
    {
      id: 3,
      title: "Anchor Text Mappings",
      description: "We configure generic, branded, and keyword anchor text ratios to prevent over-optimization."
    },
    {
      id: 4,
      title: "Continuous Link Checks",
      description: "We monitor live links status, verifying redirect chains (301) do not lock crawling paths."
    }
  ];

  const sections = [
    {
      title: "Broken Link Reclamation & Contextual Niche Edits",
      description: [
        "Technical Link Acquisition focuses on reclaiming link value from broken internet files. We run diagnostic crawlers on target domains, spotting broken 404 links within relevant resources.",
        "By contacting site managers and offering your clean landing pages as replacements, we secure highly authoritative backlinks without writing new articles."
      ],
      img: "/assets/images/services/link-building/technical.jpg"
    },
    {
      title: "Competitor Backlink Audits & Citations Mapping",
      description: [
        "Your top competitors are already ranking due to established link profiles. We audit their backlink sources, isolating directories and blog networks where they maintain a presence.",
        "We replicate their high-value links, building a secure, diversified backlink profile that passes Google search audits."
      ],
      img: "/assets/images/services/link-building/server-rack.jpg"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is broken link reclamation and is it effective?",
      answer: "Yes. Webmasters dislike having broken links (404s) on their sites. By locating them and offering your high-quality content as a replacement, you secure backlinks easily."
    },
    {
      id: 2,
      question: "What are contextual niche edits?",
      answer: "Niche edits refer to inserting your target link into a pre-existing, pre-indexed article that already maintains search rankings and traffic."
    },
    {
      id: 3,
      question: "How do you audit competitor backlinks?",
      answer: "We use tools like Ahrefs to analyze competitor link sources. This highlights directories, review blogs, and corporate sites where you can also gain links."
    },
    {
      id: 4,
      question: "What is an anchor text ratio and why must we track it?",
      answer: "Google flags websites that use exact-match keywords for all links. We maintain a natural balance of branded terms, URLs, and partial phrases to avoid penalties."
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
                Audit Competitor Backlinks & Reclaim broken Links with Technical Link Acquisition
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we build search authority using advanced web scanning. We locate crawler redirects, reclaim broken links, and configure target directories.
                </p>
                <p>
                  We audit incoming backlinks toxicity, check sitemaps formats, and adjust keyword anchors to secure positive domain rating growth.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Launch Technical Link Audits
                </button>
              </Link>
            </div>
            <div className="right_site relative h-64 md:h-96 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={mainImg}
                alt="Technical Link Acquisition Overview"
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
              Key Technical Benefits
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Optimize Crawl Budgets, Indexation Speeds, and Anchor Profiles
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
              Our Technical Link Approach
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we audit broken 404 links, replicate competitor backlinks, and monitor target indexation schedules.
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
                  alt="Technical components illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Technical Link Parameters</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We scan sitemaps redirect configurations to ensure backlinks pass equity smoothly. We run backlink audit sweeps to isolate toxic referrals, preparing clean disavow documents.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We maintain structured anchor mapping ratios, securing natural search crawls and domain authority growth.
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
                  src={section.img === "/assets/images/services/link-building/technical.jpg" ? mainImg : detailImg}
                  alt="Technical campaign detail image"
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
              Got questions about broken links or competitor audits? Read our answers below.
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

// Add standard mock/placeholder component to resolve RegExp envelope icons reference
const FaEnvelope = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

export default TechnicalLinkAcquisitionPage;

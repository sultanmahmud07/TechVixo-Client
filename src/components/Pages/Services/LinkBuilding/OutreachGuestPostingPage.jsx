"use client";

import Image from "next/image";
import Link from "next/link";
import mainImg from "@@/images/services/link-building/outreach.jpg";
import detailImg from "@@/images/services/link-building/guest-writing.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaEnvelope,
  FaGlobe,
  FaFileAlt,
  FaCheck,
  FaTools,
  FaSearch,
  FaChartLine,
  FaExchangeAlt,
} from "react-icons/fa";

const OutreachGuestPostingPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Permanent Link Placements",
      description: "We coordinate with blog owners to guarantee that your guest post links remain active permanently.",
      icon: FaCheck
    },
    {
      id: 2,
      title: "Strict Niche Relevance",
      description: "We pitch only to sites matching your vertical, avoiding spammy cross-category networks.",
      icon: FaGlobe
    },
    {
      id: 3,
      title: "Natural Contextual Anchors",
      description: "Our copywriters weave target keywords naturally into editorial paragraphs to ensure ranking trust.",
      icon: FaFileAlt
    },
    {
      id: 4,
      title: "Digital PR Exposure",
      description: "We reach out to high-authority publications to secure brand mentions and referral traffic.",
      icon: FaEnvelope
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Blogger Profile Scouring",
      description: "We filter thousands of target blogs, reviewing domain rating, organic traffic, and spam scores.",
      icon: FaSearch
    },
    {
      id: 2,
      title: "Personalized Pitch Copywriting",
      description: "We write highly personalized pitch drafts for editors, increasing reply rates significantly.",
      icon: FaEnvelope
    },
    {
      id: 3,
      title: "Content Concept Approvals",
      description: "We pitch topic concepts that align with the publisher's readers and your keywords objectives.",
      icon: FaRegLightbulb
    },
    {
      id: 4,
      title: "B2B Guest Copywriting",
      description: "Our writers compose premium, informational articles, integrating your target link naturally.",
      icon: FaFileAlt
    },
    {
      id: 5,
      title: "Blogger Publication Checks",
      description: "We verify the article goes live correctly with search bots follow tags intact.",
      icon: FaCheck
    },
    {
      id: 6,
      title: "Crawl Indexation Monitoring",
      description: "We check Google's index console to ensure the revised pages are crawled and recorded rapidly.",
      icon: FaChartLine
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "100% Manual Pitching",
      description: "We send real emails, building long-term networks with active industry publishers."
    },
    {
      id: 2,
      title: "Verified Real Traffic",
      description: "We check Ahrefs logs, avoiding sites that have dropped traffic or display penalty charts."
    },
    {
      id: 3,
      title: "Follow Link Tags",
      description: "We secure standard do-follow link setups, passing crawl equity to boost domain authority."
    },
    {
      id: 4,
      title: "Unique Content Assets",
      description: "We write original articles, passing Copyscape plagiarism checks prior to publication submissions."
    }
  ];

  const sections = [
    {
      title: "Acquire High-Authority B2B Guest Posts",
      description: [
        "In modern SEO, B2B guest posting is the gold standard for acquiring authoritative backlinks. By contributing informative, unique content to high-ranking industry blogs, you earn contextual link trust.",
        "We handle the entire pipeline: from blogger prospecting and email pitching, to article drafting and live verification. This guarantees you earn secure, permanent do-follow links."
      ],
      img: "/assets/images/services/link-building/outreach.jpg"
    },
    {
      title: "Personalized Outreach vs. Automated Spam",
      description: [
        "Google's search filters detect and penalize low-quality link schemes. We reject automated email blasting. We verify email logs manually, contacting editors with custom value propositions.",
        "This manual blogger outreach approach ensures our guest posts are accepted on real, high-traffic websites that pass actual search value."
      ],
      img: "/assets/images/services/link-building/guest-writing.jpg"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Are guest post backlinks safe from search penalties?",
      answer: "Yes. Because our guest articles are written manually and published on real blogs with organic traffic, they comply with search engine guidelines."
    },
    {
      id: 2,
      question: "What metrics do you evaluate before pitching?",
      answer: "We check Domain Rating (DR), Monthly Organic Search Traffic (minimum 1,000+ monthly visits), Spam Score, and historical traffic trajectory logs."
    },
    {
      id: 3,
      question: "Do you write the guest articles?",
      answer: "Yes. Our internal B2B copywriting team drafts high-quality, original content that satisfies the target blogger's strict editorial guidelines."
    },
    {
      id: 4,
      question: "What anchor text strategy do you recommend?",
      answer: "We recommend a balanced mix of branded terms, exact match keywords, and partial phrase anchors to ensure the link profile remains organic."
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
                Scale B2B Guest Posting & Manual blogger Outreach Campaigns
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we coordinate manual link outreach campaigns. We write highly informative articles that place target link anchors in front of prospective buyers.
                </p>
                <p>
                  We audit blogger traffic charts, pitch niche-specific topics, and write premium copy to secure natural backlinks.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Launch Guest Post Campaigns
                </button>
              </Link>
            </div>
            <div className="right_site relative h-64 md:h-96 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={mainImg}
                alt="Outreach Campaign Overview"
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
              Key Outreach Benefits
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Optimize Niche Relevance, Anchor Ratios, and Link Permanence
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
              Our Outreach Timeline
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we prospect directories, pitch editors, write guest posts, and verify live placements.
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
                  alt="Outreach components illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Blogger Outreach Strategy</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We compile blogger target profiles lists, filtering directories using strict DR parameters. We write B2B guest posts that pass duplicate content checkers, integrating links contextually.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We verify follows indexing rules, securing permanent search crawler points to pass domain authority equity.
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
                  src={section.img === "/assets/images/services/link-building/outreach.jpg" ? mainImg : detailImg}
                  alt="Outreach campaign detail image"
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
              Got questions about anchor parameters or DR metrics? Read our answers below.
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

// Add standard mock/placeholder component to resolve RegExp lightbulb icons reference if it is not imported
const FaRegLightbulb = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a3 3 0 1 0-3-3M12 12.75a3 3 0 1 1 3-3m-3 6.75H9.75M12 19.5a.75.75 0 0 1-.75-.75V18h1.5v.75a.75.75 0 0 1-.75.75Z" />
  </svg>
);

export default OutreachGuestPostingPage;

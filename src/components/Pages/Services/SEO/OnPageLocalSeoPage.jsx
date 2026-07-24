"use client";

import Image from "next/image";
import Link from "next/link";
import img from "@@/images/services/seo/seo.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaEdit,
  FaGlobe,
  FaFileAlt,
  FaLink,
  FaCheck,
} from "react-icons/fa";

const OnPageLocalSeoPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Google Maps Domination",
      description: "We optimize Google Business Profiles (GBP) to rank you in local Map Pack results.",
      icon: FaMapMarkerAlt
    },
    {
      id: 2,
      title: "On-Page Keyword Tuning",
      description: "We map target keywords directly to titles, headers, image alt descriptions, and copy.",
      icon: FaSearch
    },
    {
      id: 3,
      title: "Meta Tag Optimization",
      description: "We write meta titles and meta descriptions that maximize user click-through rates.",
      icon: FaEdit
    },
    {
      id: 4,
      title: "NAP Citation Audits",
      description: "We verify Name, Address, and Phone consistency across directories to establish trust.",
      icon: FaGlobe
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Local Keyword Audits & Maps Scans",
      description: "We identify search terms containing local modifiers and map them to targeted service pages.",
      icon: FaSearch
    },
    {
      id: 2,
      title: "Google Business Profile Optimizing",
      description: "We verify categories, upload photos, list services, and configure review answers on your profile.",
      icon: FaMapMarkerAlt
    },
    {
      id: 3,
      title: "Header Hierarchy & Content Tuning",
      description: "We structure body copy using chronological H1, H2, and H3 hierarchies, adding keyword relevance.",
      icon: FaEdit
    },
    {
      id: 4,
      title: "Meta Data & Alt Tags Updates",
      description: "We clean site metadata tags and write descriptive alt tags for all your visual assets.",
      icon: FaFileAlt
    },
    {
      id: 5,
      title: "Local Directory Citations",
      description: "We build consistent profile listings on directories, reinforcing geographic footprint signals.",
      icon: FaGlobe
    },
    {
      id: 6,
      title: "Internal Link Restructuring",
      description: "We link relevant blog files to service pages to distribute page authority throughout the site.",
      icon: FaLink
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Local Pack Presence",
      description: "We configure map listings to place your business inside the local 3-pack search dashboard."
    },
    {
      id: 2,
      title: "High Click-Through Rates",
      description: "We craft meta tag descriptions to improve user clicks and attract qualified organic visitors."
    },
    {
      id: 3,
      title: "Localized Landing Pages",
      description: "We build landing pages targeting suburbs or cities, expanding your service footprint."
    },
    {
      id: 4,
      title: "Review Acquisition Guides",
      description: "We deploy systems to accumulate positive reviews, boosting ranking authority on Google Maps."
    }
  ];

  const sections = [
    {
      title: "Rank High in Local Search Results & Google Maps Pack",
      description: [
        "If you run a business serving local neighborhoods, ranking in Google Maps Pack is a requirement. Our Local SEO services focus on optimizing Google Business Profiles and directory citations.",
        "We audit name, address, and phone number (NAP) consistency across directories, building authority to put your services in front of ready-to-buy local customers."
      ],
      img: "/assets/images/services/seo/local-seo.jpg"
    },
    {
      title: "ON-Page Code Tuning & Keyword Placement",
      description: [
        "Search engine bots evaluate your page's words to index your content for search terms. We tune your website copy, meta tags, and header hierarchies.",
        "We write detailed page metadata descriptions, clean internal link architectures, and write descriptive image alt tags, aligning your copy with search intent."
      ],
      img: "/assets/images/services/seo/technical-seo.jpg"
    }
  ];

  const moreContent = [
    {
      title: "Google Business Profile Optimizations",
      description: "We optimize your profile by listing service items, answering customer queries, and sharing reviews, signals that Google reads to boost local search rankings."
    },
    {
      title: "Keyword Research & Target Mapping",
      description: "We bypass guesswork. We map high-intent local keywords directly to your landing pages, ensuring your site attracts buyers, not just visitors."
    },
    {
      title: "Directory Citation Cleanups",
      description: "We sweep online directories to correct outdated addresses or phone numbers, reinforcing geographic data signals for search crawlers."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is Google Local Map Pack and how do we enter it?",
      answer: "The Local Pack refers to the map-based dashboard showing three business listings for queries with local intent. We enter it by optimizing your Google Business Profile, building local citations, and gaining reviews."
    },
    {
      id: 2,
      question: "How long does it take to see results from Local SEO?",
      answer: "Local SEO adjustments generally display faster than national campaigns. Many local businesses see increased map visibility and customer calls within 30 to 90 days."
    },
    {
      id: 3,
      question: "Why is Name, Address, Phone (NAP) consistency important?",
      answer: "Inconsistent addresses across directory sites confuse search crawlers and damage trust. Clean NAP logs verify that your business is real and active."
    },
    {
      id: 4,
      question: "Can you optimize on-page copy without changing our design?",
      answer: "Yes. On-page SEO edits focus on meta tags, alt descriptions, header HTML structures, and copy updates, keeping your interface and design elements intact."
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
                Capture Ready-to-Buy Local Customers with On-Page & Google Map Optimizations
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we place your business in front of nearby buyers. We align your website's content and map presence with local search intents.
                </p>
                <p>
                  We optimize Google Business Profiles, resolve metadata crawl errors, clean header formatting, and write local copy to drive inquiries.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Grow Your Local Presence
                </button>
              </Link>
            </div>
            <div className="right_site">
              <Image
                width={600}
                height={400}
                src="/assets/images/services/seo/local-seo.jpg"
                alt="Local SEO about image"
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
              Key Local Benefits
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Optimize Search Listings, Maps Visibility, and Local Sales Influxes
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
              Our Local SEO Roadmap
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we construct local keywords maps, optimize business profiles, and align on-page tags.
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
                  alt="On-Page components illustration"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Key Elements of On-Page & Local SEO</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We optimize Google Business Profiles and local directory citations to boost ranking authority in search Map Pack results.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We adjust website metadata tags, write descriptive image alt logs, clean headers, and audit internal link structures to match search crawlers criteria.
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
                  alt="On-Page and Local SEO showcase"
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
              Have questions about maps pack or metadata optimization? Read our answers below.
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

export default OnPageLocalSeoPage;

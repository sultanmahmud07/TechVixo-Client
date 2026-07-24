"use client";

import Image from "next/image";
import Link from "next/link";
import mainImg from "@@/images/services/content-writing/campaign.jpg";
import detailImg from "@@/images/services/content-writing/seo-copy.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaBullhorn,
  FaEnvelope,
  FaFileAlt,
  FaCheck,
  FaTools,
  FaChartLine,
  FaCheckCircle,
  FaLanguage,
  FaHandshake,
} from "react-icons/fa";

const CampaignContentPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Email Drip Automation",
      description: "We write automated email flows that convert cold signups into recurring paying users.",
      icon: FaEnvelope
    },
    {
      id: 2,
      title: "Outbound Marketing Copy",
      description: "We compile engaging cold outbound email templates that secure calls bookings.",
      icon: FaBullhorn
    },
    {
      id: 3,
      title: "Sales Pitch Collaterals",
      description: "We write compelling B2B pitch decks, business cards, and printable brochures.",
      icon: FaFileAlt
    },
    {
      id: 4,
      title: "Translation & Localization",
      description: "We translate and adapt your marketing materials to target local cultural audiences.",
      icon: FaLanguage
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Campaign Scope Discovery",
      description: "We review your active advertising channels, conversion goals, and user demographic targets.",
      icon: FaHandshake
    },
    {
      id: 2,
      title: "Tone & Voice Styling",
      description: "We establish writing guidelines matching your company persona, ensuring brand consistency.",
      icon: FaTools
    },
    {
      id: 3,
      title: "Copy Draft Iterations",
      description: "We write first drafts for email subjects, sales copy cards, and outbound pitch scripts.",
      icon: FaPenNib
    },
    {
      id: 4,
      title: "A/B Subject Line Tests",
      description: "We draft multiple variations of email headings and CTA texts to split test click ratios.",
      icon: FaBullhorn
    },
    {
      id: 5,
      title: "Pixel Attribution Integration",
      description: "We verify email links contain tracking codes, monitoring exact sales attribution.",
      icon: FaCheck
    },
    {
      id: 6,
      title: "Performance Scans & Tweaks",
      description: "We monitor campaign click-through and reply logs, adapting copy to raise metrics.",
      icon: FaChartLine
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "High Reply Ratios",
      description: "We write cold outbound scripts that avoid generic sales speak, boosting responses."
    },
    {
      id: 2,
      title: "Nurturing Funnel Logs",
      description: "We configure sequences that educate leads gradually, lowering sales cycle bottlenecks."
    },
    {
      id: 3,
      title: "Accurate Localizations",
      description: "We translate campaign materials, keeping brand value intact across regions."
    },
    {
      id: 4,
      title: "Attribution Tracking",
      description: "We label outbound URL links to trace customer actions in Google Analytics."
    }
  ];

  const sections = [
    {
      title: "Automate Sales Nurturing with Email Drip Campaigns",
      description: [
        "Email marketing maintains the highest ROI of any digital acquisition channel. Our Campaign Content services focus on writing email drips that guide users through onboarding steps.",
        "We draft welcome sequences, product feature highlight campaigns, and shopping cart recovery templates that turn passive subscribers into loyal buyers."
      ],
      img: "/assets/images/services/content-writing/campaign.jpg"
    },
    {
      title: "Scale Cold Outbound Sales Pipelines",
      description: [
        "Reaching B2B decision makers requires personalized outbound copywriting. We reject dry, generic templates. We research executive pain points, writing high-response cold pitches.",
        "We structure follow-up templates and LinkedIn outreach cards, building your calendar logs with qualified sales meetings."
      ],
      img: "/assets/images/services/content-writing/seo-copy.jpg"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do you prevent marketing emails from landing in spam folders?",
      answer: "We avoid spam-trigger words, balance text-to-image ratios, and check domain SPF/DKIM/DMARC setups, assuring high email deliverability parameters."
    },
    {
      id: 2,
      question: "What outbound email platforms do you support?",
      answer: "We draft copy compatible with all leading outbound CRMs, including HubSpot, Mailchimp, Lemlist, and Apollo.io."
    },
    {
      id: 3,
      question: "Do you write localization content for multiple countries?",
      answer: "Yes. We translate and adapt landing page copy, brochures, and ads to match localized regional dialects and consumer behaviors."
    },
    {
      id: 4,
      question: "Can you help write B2B sales decks?",
      answer: "Yes. We compose persuasive text, headings layouts, and customer case study slides for your sales presentations."
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
                Accelerate Conversions & Sales Pipelines with Targeted Campaign Content
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we craft campaign copy designed to drive direct sales. We build automated onboarding email funnels, cold outbound pitches, and sales deck slides.
                </p>
                <p>
                  We draft subject variations, audit links attribution parameters, write localization copies, and audit campaign click-through rates.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Start Campaign Strategy
                </button>
              </Link>
            </div>
            <div className="right_site relative h-64 md:h-96 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={mainImg}
                alt="Campaign Content Overview"
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
              Key Campaign Benefits
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Optimize Email Open Ratios, Outbound Response Volumes, and Localizations
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
              Our Copywriting Workflow
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we review campaign objectives, draft subject headlines variations, test links, and audit responses logs.
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
                  alt="Campaign components illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Campaign Content Setup</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We compile customized email subject variations, A/B testing user click-through rates. We write B2B outbound cold pitches to highlight product value propositions contextually.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We translate brochures, localizing files to maintain consistent brand representation across regions.
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
                  src={section.img === "/assets/images/services/content-writing/campaign.jpg" ? mainImg : detailImg}
                  alt="Campaign campaign detail image"
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
              Got questions about email filters or localization parameters? Read our answers below.
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

// Add standard mock/placeholder component to resolve RegExp pen-nib icons references if it is not imported
const FaPenNib = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.83 19.689a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
  </svg>
);

export default CampaignContentPage;

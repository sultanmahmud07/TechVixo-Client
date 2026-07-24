"use client";

import Image from "next/image";
import Link from "next/link";
import mainImg from "@@/images/services/link-building/main.jpg";
import outreachImg from "@@/images/services/link-building/outreach.jpg";
import technicalImg from "@@/images/services/link-building/technical.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ClientTestimonial from "@/components/Pages/Home/Testimonial/Testimonial";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaLink,
  FaGlobe,
  FaEnvelope,
  FaFileAlt,
  FaCrown,
  FaBullhorn,
  FaSitemap,
  FaTools,
  FaSearch,
  FaCheck,
  FaChartLine,
} from "react-icons/fa";

const LinkBuildingPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Domain Authority Boost",
      description: "We secure backlinks from high-DR websites, boosting search trust parameters.",
      icon: FaCrown
    },
    {
      id: 2,
      title: "Targeted Referral Traffic",
      description: "We publish guest features on niche-specific blogs that direct interested buyers to your site.",
      icon: FaGlobe
    },
    {
      id: 3,
      title: "Contextual Anchor Tuning",
      description: "We place links inside high-quality articles, aligning anchor text keywords with search terms.",
      icon: FaLink
    },
    {
      id: 4,
      title: "Safe White-Hat Placements",
      description: "We build links manually through personalized emails, keeping your site compliant with Google terms.",
      icon: FaCheck
    }
  ];

  const subServices = [
    {
      id: 1,
      name: "Outreach & Guest Posting",
      icon: FaEnvelope,
      description: "We pitch custom B2B guest posts and PR articles directly to niche editors and publishers. By securing permanent context-rich homepage placements, we inject link value into your landing pages.",
      img: outreachImg
    },
    {
      id: 2,
      name: "Technical Link Acquisition",
      icon: FaSitemap,
      description: "We run broken link reclamations, scrape competitor backlink footprints, and deploy local citations. This creates a clean, diversified link profile that resists search algorithm changes.",
      img: technicalImg
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Backlink Auditing & Cleaning",
      description: "We analyze your site's current link profile, disavow low-quality spam URLs, and verify root authority stats.",
      icon: FaSearch
    },
    {
      id: 2,
      title: "Competitor Backlink Profiling",
      description: "We scrape competitor link networks to locate active forums, directories, and blogs they rely on.",
      icon: FaLink
    },
    {
      id: 3,
      title: "Editor & Blogger Outreach",
      description: "We run customized email pitching sequences, building relationships with high-authority editors in your space.",
      icon: FaEnvelope
    },
    {
      id: 4,
      title: "Editorial Copy & Content Writing",
      description: "Our copywriting team writes highly informative B2B guest articles that naturally integrate your target links.",
      icon: FaFileAlt
    },
    {
      id: 5,
      title: "Contextual Link Insertions",
      description: "We publish custom content on target blogs, verifying sitemap crawls index the revised URLs.",
      icon: FaGlobe
    },
    {
      id: 6,
      title: "Weekly Performance Audits",
      description: "We monitor target link statuses, verify indexation parameters, and track domain rating (DR) changes.",
      icon: FaChartLine
    }
  ];

  const tools = [
    { id: 1, title: "Ahrefs & Semrush Databases", description: "Auditing domain authority parameters, page rankings keywords, and links toxicities." },
    { id: 2, title: "Hunter.io & VoilaNorbert", description: "Verifying corporate email addresses of editors and blog managers." },
    { id: 3, title: "Buzzstream & Pitchbox Systems", description: "Managing personalized email sequences and outreach pipelines at scale." },
    { id: 4, title: "Google Search Console Logs", description: "Monitoring incoming backlinks indexation status and crawling crawl-budgets." }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is Domain Rating (DR) and why does it matter?",
      answer: "Domain Rating is a metric from 0 to 100 that measures a website's backlink profile strength. High-DR links pass more search authority to your site, boosting rankings."
    },
    {
      id: 2,
      question: "How long does it take for backlinks to affect rankings?",
      answer: "Search engine crawler bots typically index fresh links within 2 to 6 weeks. You generally see positive ranking improvements within 60 to 90 days."
    },
    {
      id: 3,
      question: "Do you use automated link-building tools?",
      answer: "No. Automated link generation tools trigger spam filters and Google manual penalties. We execute 100% manual white-hat blogger outreach to protect your brand."
    },
    {
      id: 4,
      question: "Are guest post links permanent?",
      answer: "Yes. We coordinate with publishers to ensure links are integrated contextually and remain permanent features in the site's directory."
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
                Link Building Services
              </h3>
              <h2 className="text-3xl md:text-5xl text-[#111204] font-bold leading-tight">
                Build Authority & Boost Google Page Rankings
              </h2>
              <p className="text-sm md:text-base text-gray-600 my-6 leading-relaxed">
                We design manual outreach and high-authority guest posting campaigns. By acquiring white-hat backlinks from niche-relevant blogs, we boost your domain rating and organic search positions.
              </p>
              <Link href="/contact">
                <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow transition-all duration-300">
                  Discuss Outreach Strategy
                </button>
              </Link>
            </div>
            <div className="relative h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={mainImg}
                alt="Link Building Overview"
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
              We focus on B2B metrics: authority indexation, clean anchor footprints, and link metrics.
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
              Link Acquisition Capabilities
            </h2>
            <p className="text-gray-500 text-center w-full md:w-3/5 leading-relaxed">
              Secure contextual guest posting features and clean technical backlinks profiles manually.
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
              How We Build Quality Links
            </h2>
            <p className="text-gray-500 text-center w-full md:w-3/5 leading-relaxed">
              We coordinate manual blogger campaigns to secure link rankings safely.
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
              <h3 className="text-3xl font-extrabold">Link Audit Tools</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We verify blogger links using enterprise databases, keeping toxic networks off your domain.
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
              Have questions about domain authority or anchor texts? Read our answers below.
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

export default LinkBuildingPage;

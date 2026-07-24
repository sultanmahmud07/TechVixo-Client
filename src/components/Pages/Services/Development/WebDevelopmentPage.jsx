"use client";

import Image from "next/image";
import Link from "next/link";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaLaptopCode,
  FaFileCode,
  FaSearchDollar,
  FaServer,
  FaRocket,
  FaTasks,
  FaCheck,
  FaCogs,
  FaCodeBranch
} from "react-icons/fa";

const WebDevelopmentPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Interactive SPAs & SSR",
      description: "We develop blazing-fast single page applications (SPAs) and server-side rendered (SSR) web portals using React and Next.js.",
      icon: FaLaptopCode
    },
    {
      id: 2,
      title: "Headless CMS Integration",
      description: "Empower your content creators with modern headless CMS setups (Strapi, Sanity) for flexible, secure, and fast publishing.",
      icon: FaFileCode
    },
    {
      id: 3,
      title: "Clean API & Services Integration",
      description: "We securely integrate third-party payment gateways, CRM connections, and analytics scripts to extend platform functions.",
      icon: FaCogs
    },
    {
      id: 4,
      title: "Responsive & SEO Optimized",
      description: "Every website is crafted with tailwind styling to look exceptional on all screens, while adhering to strict Core Web Vitals guidelines.",
      icon: FaSearchDollar
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Requirements Gathering & Wireframing",
      description: "We map out web pages, user flows, database structures, and pick the perfect tech stack configurations.",
      icon: FaTasks
    },
    {
      id: 2,
      title: "Frontend Scaffolding & Theme Setups",
      description: "Our developers translate design sheets into clean, accessible HTML/CSS/React layouts with reusable UI controls.",
      icon: FaLaptopCode
    },
    {
      id: 3,
      title: "Backend API Engineering & DB Setup",
      description: "We set up fast database schemas, custom route controls, auth validation, and API hooks using Node.js.",
      icon: FaServer
    },
    {
      id: 4,
      title: "Rigorous QA & Core Web Vitals Audits",
      description: "We analyze site speeds, run cross-browser accessibility diagnostics, and audit contrast balances.",
      icon: FaCheck
    },
    {
      id: 5,
      title: "Secure Server Deployment & DNS Launch",
      description: "We launch the live builds on reliable CDN architectures (Vercel, AWS, Cloudflare) with automated SSL certs.",
      icon: FaRocket
    },
    {
      id: 6,
      title: "Continuous CI/CD & Maintenance",
      description: "We set up automated testing scripts using GitHub Actions, ensuring zero-downtime updates and updates.",
      icon: FaCodeBranch
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Ultra-Fast Page Load Times",
      description: "We optimize code bundle sizes, leverage static file generation, and implement image optimization for LCP boosts."
    },
    {
      id: 2,
      title: "SEO-Ready Page Hierarchies",
      description: "We design structures with clean HTML5 semantics, structured metadata, schema markups, and auto-generated sitemaps."
    },
    {
      id: 3,
      title: "Flexible Content Management",
      description: "Take control of your content with easy-to-use admin panels that require zero coding to add, edit, or delete items."
    },
    {
      id: 4,
      title: "Production Security Standards",
      description: "We integrate CSRF protections, HTTPS validations, SQL-injection prevention, and token-based user sign-ins."
    }
  ];

  const sections = [
    {
      title: "High-Performance Frontends Tailored to Your Users",
      description: [
        "In a busy digital marketplace, delay of even a second can cost you users. We engineer custom client-side systems designed to react instantly. By utilizing Next.js static rendering and server-side components, we ensure that your landing pages render immediately, keeping bounce rates low and conversions high.",
        "Our layouts are modular, using standard Tailwind styling rules to translate beautifully onto all screen types, from wide-screen monitors to compact hand-held mobile devices."
      ],
      img: "/assets/images/services/development/frontend.jpg"
    },
    {
      title: "Secure Backends and Database Integrity",
      description: [
        "Behind every great user experience lies a robust database. We architect structured SQL schemas and scalable REST/GraphQL API controllers designed for speed and security. We guarantee data isolation, robust caching layers, and clear, documented endpoints.",
        "Whether you are building a custom CRM dashboard or launching an e-commerce platform, our backend systems are engineered to handle high-concurrency spikes without breaking."
      ],
      img: "/assets/images/services/development/backend.jpg"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do you optimize website loading speeds?",
      answer: "We leverage Next.js static site generation (SSG), lazy-load heavy assets, enable server compression, optimize bundle sizes, and deliver resources through globally distributed CDNs like Vercel and Cloudflare."
    },
    {
      id: 2,
      question: "Can you build custom e-commerce web applications?",
      answer: "Yes. We build custom React/Next.js store frontends integrated with payment services like Stripe and headless APIs, or develop tailored themes on Shopify and WooCommerce depending on your operational scale."
    },
    {
      id: 3,
      question: "Will my website be SEO-friendly?",
      answer: "Absolutely. Our web applications include semantic HTML tags, clean heading hierarchies, fast loading metrics (LCP/INP), auto-generated sitemaps, robots.txt routing, and customizable page metadata."
    },
    {
      id: 4,
      question: "What CMS platforms do you support?",
      answer: "We work with popular headful CMS like WordPress, as well as headless solutions such as Strapi, Sanity, Contentful, and custom-built admin panels using Node.js and SQL."
    }
  ];

  return (
    <div className="">
      {/* About Section */}
      <div className="py-6 md:pt-16 bg-[#F9F9FB]">
        <div className="main_container">
          <div className="flex flex-col-reverse md:flex-row items-center gap-3 md:gap-8">
            <div className="left_site w-full md:w-3/5">
              <h3 className="text-2xl md:text-4xl text-[#000000] font-bold">
                Empower Your Online Brand with Custom Web Development
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  A modern website is the core of your digital identity. At Digimatric, we build web systems that go beyond basic content templates—we engineer high-performance platforms that align with your workflows, convert users, and grow with your scale.
                </p>
                <p>
                  By leveraging technologies like Next.js, Node.js, and PostgreSQL, we build platforms that excel in load speed, data security, and ease of content management.
                </p>
              </div>
              <Link href="/contact" className="pt-2 md:pt-6 hidden md:block">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-medium">
                  Get a Free Consult
                </button>
              </Link>
            </div>
            <div className="right_site w-full md:w-2/5">
              <Image
                width={600}
                height={400}
                src="/assets/images/services/development/web-development.jpg"
                alt="Web development illustration"
                className="w-full rounded-lg shadow-md object-cover h-64 md:h-80"
              />
            </div>
          </div>
        </div>
      </div>

      <ServiceClients />

      {/* Facilities Grid */}
      <div className="my-5 md:my-14">
        <div className="main_container">
          <h3 className="sut_title">WEB SERVICES</h3>
          <div className="top_title_design flex flex-col items-center">
            <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
              How Our Web Engineering Boosts Your Success
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 pt-3 md:pt-6">
            {facilities.map((facility, i) => {
              const IconComp = facility.icon;
              return (
                <div key={i} className="facility_card flex flex-col items-center justify-start gap-1 p-4 border border-[#F1F1F1] rounded-lg shadow-sm hover:shadow-md transition bg-white">
                  <div className="service_icon w-12 md:w-16 h-12 md:h-16 flex items-center justify-center bg-primary/10 rounded-xl text-primary text-2xl md:text-3xl mb-2">
                    <IconComp />
                  </div>
                  <h3 className="text-center text-sm md:text-base font-bold text-[#111204] mt-2">{facility.title}</h3>
                  <p className="text-center text-xs md:text-sm text-[#111204CC] mt-1">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us / Key Components */}
      <section className="bg-secondary py-10 md:py-16 my-5 md:my-14 text-white">
        <div className="main_container">
          <h3 className="sut_title_white text-center uppercase text-white">Key Components</h3>
          <div className="top_title_design flex flex-col items-center">
            <h2 className="text-center text-2xl md:text-4xl font-bold my-3 md:my-5">
              Engineered for Speed, Scalability, and Ease
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5 my-4 pt-6 md:pt-10">
            {keyData.map((item, i) => (
              <div key={i} className="facility_card border border-primary flex flex-col items-center justify-start gap-2 p-5 rounded-lg bg-secondary/50">
                <div className="service_icon w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full text-primary text-xl mb-2">
                  <FaCheck />
                </div>
                <h3 className="text-center font-semibold my-2 text-white text-base md:text-lg">{item.title}</h3>
                <p className="text-center text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <div className="py-5 md:py-10">
        <div className="main_container flex flex-col gap-10 md:gap-20">
          {sections.map((section, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-5 md:gap-16 items-center`}>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl md:text-3xl font-bold text-[#111204] mb-4">{section.title}</h3>
                <div className="flex flex-col gap-3 text-sm md:text-base text-[#111204CC] leading-relaxed">
                  {section.description.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src={section.img}
                  alt={section.title}
                  width={600}
                  height={400}
                  className="w-full rounded-lg shadow-sm object-cover h-64 md:h-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Process */}
      <div className="my-5 md:my-10 md:mt-16 bg-[#F9F9FB] py-10">
        <div className="main_container">
          <div className="top_title_design flex flex-col items-center">
            <h3 className="sut_title">Process</h3>
            <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3">
              Our Web Development Workflow
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-4/5">
              We leverage an agile, iterative pipeline to design, build, test, and ship modern web products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-5 md:py-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="process_card bg-white p-5 rounded-lg border border-[#EBEBEB] hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary font-bold text-2xl">0{step.id}</span>
                    <div className="bg-primary/10 p-2 rounded text-primary text-lg">
                      <Icon />
                    </div>
                  </div>
                  <h4 className="text-[#111204] text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-[#111204CC] leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
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
              Got questions about web engineering? We have answers.
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

export default WebDevelopmentPage;

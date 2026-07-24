"use client";

import Image from "next/image";
import Link from "next/link";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaDatabase,
  FaLink,
  FaServer,
  FaShieldAlt,
  FaProjectDiagram,
  FaUserCog,
  FaTasks,
  FaCheck,
  FaCodeBranch
} from "react-icons/fa";

const CustomSoftwarePage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Enterprise ERP & CRM",
      description: "We build custom internal tools to manage inventories, automate employee workflows, and track client interactions.",
      icon: FaUserCog
    },
    {
      id: 2,
      title: "Secure API Gateways",
      description: "We code custom API structures (GraphQL, REST) to connect third-party networks and unify databases safely.",
      icon: FaLink
    },
    {
      id: 3,
      title: "Legacy Modernization",
      description: "Migrate out-of-date desktop clients or legacy PHP/Python models into secure, web-native systems.",
      icon: FaCodeBranch
    },
    {
      id: 4,
      title: "Database Engineering",
      description: "We optimize database schemas (SQL/NoSQL) with custom indexes, partitions, and replication to prevent data lags.",
      icon: FaDatabase
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Business Process Mapping",
      description: "We study your company operations, mapping out user actions, data lifecycles, and system integrations.",
      icon: FaTasks
    },
    {
      id: 2,
      title: "Database Design & UML Blueprinting",
      description: "We design database schemas and map out service architectures before writing core modules.",
      icon: FaProjectDiagram
    },
    {
      id: 3,
      title: "Core Service Integration & Coding",
      description: "Our back-end developers build security middleware, data processing pipelines, and REST route controllers.",
      icon: FaServer
    },
    {
      id: 4,
      title: "Data Migration & Stress Testing",
      description: "We write secure migration scripts to move your legacy data into new databases, validating data integrity.",
      icon: FaCheck
    },
    {
      id: 5,
      title: "Cloud Provisioning & Encryption",
      description: "We deploy systems onto virtual private clouds (VPCs) with strict firewalls and database isolations.",
      icon: FaShieldAlt
    },
    {
      id: 6,
      title: "Post-Launch SLA Support",
      description: "We perform automated server health checks, regular package upgrades, and data backup verifications.",
      icon: FaCodeBranch
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Encrypted Data Transmission",
      description: "We secure database records and system communications using TLS 1.3 and advanced AES-256 standards."
    },
    {
      id: 2,
      title: "Detailed Audit Logging",
      description: "Every document change, auth attempt, and record delete is logged to allow tracking of internal system actions."
    },
    {
      id: 3,
      title: "Granular Role Permissions",
      description: "We enforce role-based access control (RBAC), securing pages so users can only view their authorized modules."
    },
    {
      id: 4,
      title: "Seamless SaaS Integrations",
      description: "We hook your software up with systems like Stripe, Salesforce, HubSpot, and QuickBooks using standard APIs."
    }
  ];

  const sections = [
    {
      title: "Modernizing Legacy Systems Safely",
      description: [
        "Running your company on obsolete software increases technical debt and exposes you to vulnerabilities. We specialize in legacy system modernization, translating old code bases into modular, cloud-ready architectures.",
        "We design secure database extraction pipelines to migrate your legacy customer databases and operational records into clean, relational models without causing server downtime or data corruption."
      ],
      img: "/assets/images/services/development/system-safe.jpg"
    },
    {
      title: "Custom CRM & ERP Tailored to Your Workflows",
      description: [
        "Generic off-the-shelf software forces you to change your workflows to match their design. We build tools that conform to how your company actually operates.",
        "We design interfaces to help your operators input data quickly, track client communication histories, generate PDF sales reports, and automate notification alerts, boosting productivity."
      ],
      img: "/assets/images/services/development/erp.jpg"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do you analyze complex business processes?",
      answer: "We schedule deep-dive discovery workshops with your team. We outline workflows, design data diagrams, define user permissions, and establish technical milestones in a detailed scoping document before development begins."
    },
    {
      id: 2,
      question: "Can you guarantee that data will not be lost during legacy migration?",
      answer: "Yes. We complete data migration runs on isolated staging copies, verifying integrity with strict validation scripts. We only shift production traffic after confirming that all database records align perfectly."
    },
    {
      id: 3,
      question: "What security standards do you implement for internal tools?",
      answer: "We implement OAuth2 authentication, secure password hashing, role-based access controls (RBAC), CSRF protection, SSL certifications, and host databases on Vpc networks with restricted ports."
    },
    {
      id: 4,
      question: "Do you build custom API gateways?",
      answer: "Yes. We develop custom API layers to connect internal databases with external mobile apps, third-party software, or legacy accounting systems."
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
                Bespoke Software Architectures to Automate Your Business
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  Off-the-shelf software templates often fail to capture the nuances of your business. At Digimatric, we design and build bespoke platforms that align with your operational processes.
                </p>
                <p>
                  From custom ERP/CRM tools to legacy code migrations, secure API gateways, and database tuning, we build systems that simplify workflows and scale.
                </p>
              </div>
              <Link href="/contact" className="pt-2 md:pt-6 hidden md:block">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-medium">
                  Discuss Your Architecture
                </button>
              </Link>
            </div>
            <div className="right_site w-full md:w-2/5">
              <Image
                width={600}
                height={400}
                src="/assets/images/services/development/customize-software.jpg"
                alt="Custom software development illustration"
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
          <h3 className="sut_title">CUSTOM SERVICES</h3>
          <div className="top_title_design flex flex-col items-center">
            <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
              How Custom Software Solves Operational Bottlenecks
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

      {/* Key Features */}
      <section className="bg-secondary py-10 md:py-16 my-5 md:my-14 text-white">
        <div className="main_container">
          <h3 className="sut_title_white text-center uppercase text-white">System Security</h3>
          <div className="top_title_design flex flex-col items-center">
            <h2 className="text-center text-2xl md:text-4xl font-bold my-3 md:my-5">
              Enterprise Integration Features
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
              Our System Engineering Pipeline
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-4/5">
              We leverage rigorous system engineering blueprints to construct stable, enterprise software products.
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
              Have questions about custom software layouts? See our answers below.
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

export default CustomSoftwarePage;

"use client";

import Image from "next/image";
import Link from "next/link";
import img from "@@/images/services/pm/planning.png";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ServiceFAQ from "@/components/Pages/Services/Categories/ServiceFAQ";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaShieldAlt,
  FaCoins,
  FaComments,
  FaNetworkWired,
  FaClipboardCheck,
  FaFileInvoice,
  FaTasks,
  FaCheck,
} from "react-icons/fa";

const ProjectPlanningPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Detailed Scoping Workshops",
      description: "We work directly with your stakeholders to outline software features, preventing unplanned expansions.",
      icon: FaSearch
    },
    {
      id: 2,
      title: "Interactive Gantt Timelines",
      description: "We map out target milestones, deliverable dates, and team tasks onto clear, visual calendar schedules.",
      icon: FaCalendarAlt
    },
    {
      id: 3,
      title: "Resource & Budget Mapping",
      description: "We allocate operational developer hours and track engineering budgets to avoid financial surprises.",
      icon: FaCoins
    },
    {
      id: 4,
      title: "Proactive Risk Assessment",
      description: "We flag system integrations, hardware dependencies, and security variables early to build mitigation plans.",
      icon: FaShieldAlt
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Discovery & Alignment Calls",
      description: "We align on business goals, product vision, targeted user actions, and core timeline constraints.",
      icon: FaComments
    },
    {
      id: 2,
      title: "Work Breakdown Structure (WBS)",
      description: "We divide the software architecture into concrete tasks, modules, and sub-components.",
      icon: FaNetworkWired
    },
    {
      id: 3,
      title: "Gantt Scheduling & Dependency Mapping",
      description: "We configure milestone calendars, mapping chronological logic and critical developer path arrays.",
      icon: FaCalendarAlt
    },
    {
      id: 4,
      title: "Risk Management Matrix",
      description: "We flag third-party software risks and draft clear alternative paths to guarantee delivery schedules.",
      icon: FaShieldAlt
    },
    {
      id: 5,
      title: "Budget Profiling & Estimation",
      description: "We estimate engineering costs and outline developer hour profiles for absolute financial clarity.",
      icon: FaFileInvoice
    },
    {
      id: 6,
      title: "Backlog Handover & Initializer Run",
      description: "We transfer scoping tasks onto active Jira backlogs, ready to populate coding sprint pipelines.",
      icon: FaClipboardCheck
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Milestone-Driven Tracking",
      description: "We link payments and releases directly to verifiable milestone sign-offs, keeping targets aligned."
    },
    {
      id: 2,
      title: "Detailed Specs Docs",
      description: "We compile comprehensive software requirements specifications (SRS) for your developer teams."
    },
    {
      id: 3,
      title: "Adaptive Agile Handshake",
      description: "Our scoping blueprints translate easily into active Scrum/Kanban repositories for fast launch steps."
    },
    {
      id: 4,
      title: "Transparent Asset Sharing",
      description: "You retain access to Gantt charts, scoping whiteboards, risk documents, and developer backlog maps."
    }
  ];

  const sections = [
    {
      title: "Reducing Software Delivery Risk Early",
      description: [
        "Up to 70% of software project friction stems from poorly scoped requirements. At Digimatric, we eliminate ambiguity from day one. Our project planning services focus on translating your abstract business vision into structured development tasks.",
        "We host interactive scoping calls to map system data layouts, define user boundaries, and establish absolute milestone success metrics, protecting your investment from scope drift."
      ],
      img: "/assets/images/services/pm/planning.png"
    },
    {
      title: "Timeline Scoping & Resource Management",
      description: [
        "A project timeline is only as reliable as the resource model behind it. We map chronological paths against real developer availability, ensuring that designers and back-end/front-end teams sync without bottleneck delays.",
        "We build active Gantt roadmaps that flag critical-path integrations, letting your product owners make informed strategy edits and coordinate market launch timings."
      ],
      img: "/assets/images/services/pm/planning_budget.png"
    }
  ];

  const moreContent = [
    {
      title: "Interactive Scoping Workshops",
      description: "We organize scoping workshops using collaborative whiteboards, cataloging every user click and data profile to build a comprehensive work plan."
    },
    {
      title: "Detailed Requirement Specs (SRS)",
      description: "Avoid developer misunderstandings. We write detailed software requirement sheets defining system rules, API constraints, and database formats."
    },
    {
      title: "Milestone Scheduling & Release Mapping",
      description: "We package feature pipelines into verifiable milestone targets, organizing deliverables logically to guarantee staging previews."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Why is detailed scoping necessary before coding?",
      answer: "Detailed scoping prevents scope drift, aligns expectations between clients and developers, helps calculate precise budgets, and allows mapping logical chronological delivery paths."
    },
    {
      id: 2,
      question: "How do you estimate development hours and timeline lengths?",
      answer: "We break requirements into a Work Breakdown Structure (WBS). Our technical architects estimate relative complexity using story points, mapping them against developer velocity history."
    },
    {
      id: 3,
      question: "Can we modify requirements mid-way through planning?",
      answer: "Yes. In agile planning, adjustments are managed via the product backlog. We estimate the new request and swap it with items of equal weight, maintaining budget alignment."
    },
    {
      id: 4,
      question: "What deliverables do we get after the planning phase?",
      answer: "You receive a complete software requirements specification (SRS) document, interactive Gantt roadmap schedules, risk assessment charts, and a structured Jira developer backlog."
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
                Establish Clear Software Scopes, Timelines, and Budgets Before You Code
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we turn project ambiguity into a structured technical map. We believe that detailed planning and requirements scoping is the cornerstone of predictable delivery.
                </p>
                <p>
                  We draft comprehensive requirements, map developer resource allocations, identify third-party API dependencies, and configure milestone roadmaps, guaranteeing budget control.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Book a Planning Session
                </button>
              </Link>
            </div>
            <div className="right_site">
              <Image
                width={600}
                height={400}
                src="/assets/images/services/pm/planning_about.png"
                alt="Project Planning about image"
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
              Why Project Scoping is Critical
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Prevent Scope Drift and Ensure On-Budget Delivery with Meticulous Technical Blueprints
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6">
            {facilities.map((facility, i) => {
              const FacilityIcon = facility.icon;
              return (
                <div key={i} className="need_card bg-white flex flex-col items-center gap-2 p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="service_icon bg-[#2ECC711A] w-16 h-16 rounded-xl flex items-center justify-center mb-2">
                    <FacilityIcon className="text-[#2ECC71] text-2xl" />
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
              Our Project Scoping Pipeline
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              We guide you through a step-by-step discovery process to turn visual requirements into developer-ready backlogs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:gap-x-8 py-6">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={i} className="need_card bg-white flex flex-col gap-2 p-6 md:p-8 shadow-sm hover:shadow-md border border-gray-100 rounded-xl transition-all duration-300">
                  <div className="service_icon bg-[#2ECC711A] w-12 h-12 rounded-xl flex items-center justify-center">
                    <StepIcon className="text-[#2ECC71] text-xl" />
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
                  alt="Project Planning components illustration"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Key Components of Our Planning Services</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We map chronological schedules and allocate resources to prevent team idle time. We ensure technical leads review third-party APIs and system dependencies to document risks.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    You receive complete access to Gantt charts, scoping backlogs, requirements documents, and resource logs, maintaining transparency throughout.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-4">
              {keyData.map((facility, i) => (
                <div key={i} className="key_card w-full flex gap-3">
                  <div className="key_icon pt-1 flex-shrink-0">
                    <div className="bg-[#2ECC711A] w-8 h-8 rounded-lg flex items-center justify-center">
                      <FaCheck className="text-[#2ECC71] text-xs" />
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
                  alt="Project Planning showcase"
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
              Got questions about scoping and timelines? Review our answers.
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

export default ProjectPlanningPage;

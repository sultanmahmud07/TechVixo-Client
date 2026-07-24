"use client";

import Image from "next/image";
import Link from "next/link";
import img from "@@/images/services/pm/qa.png";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ServiceFAQ from "@/components/Pages/Services/Categories/ServiceFAQ";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaClipboardCheck,
  FaBug,
  FaFileAlt,
  FaShieldAlt,
  FaComments,
  FaSearch,
  FaCogs,
  FaPlay,
  FaCheck,
} from "react-icons/fa";

const QualityAssurancePage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Functional & Smoke Testing",
      description: "We verify that every button, input form, user profile, and checkout funnel operates according to scope guidelines.",
      icon: FaClipboardCheck
    },
    {
      id: 2,
      title: "Regression & CI Audits",
      description: "We configure automated test cases to verify that code changes or updates do not break existing software features.",
      icon: FaCogs
    },
    {
      id: 3,
      title: "Cross-Device Verification",
      description: "We test code compatibility across Chrome, Safari, Firefox, iOS, and Android to guarantee layout stability.",
      icon: FaSearch
    },
    {
      id: 4,
      title: "Performance & Stress Testing",
      description: "We run API stress scripts to evaluate load capacity, checking server behaviors under concurrent traffic spikes.",
      icon: FaShieldAlt
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Test Planning & Strategy Scoping",
      description: "We analyze functional specs to design test plans, cataloging test scenarios and target parameters.",
      icon: FaComments
    },
    {
      id: 2,
      title: "Manual Usability Diagnostics",
      description: "QA engineers execute step-by-step user actions, finding visual styling errors or system input issues.",
      icon: FaSearch
    },
    {
      id: 3,
      title: "Automated Integration Testing",
      description: "We write test scripts using tools like Playwright and Jest to check data transmission between backend APIs.",
      icon: FaPlay
    },
    {
      id: 4,
      title: "Security & Vulnerability Audits",
      description: "We test authentication layers, database permission boundaries, and run scripts to check security loopholes.",
      icon: FaShieldAlt
    },
    {
      id: 5,
      title: "Bug Reporting & Ticket Tracking",
      description: "We document bugs inside Jira with detailed reproduction steps, browser profiles, and error console logs.",
      icon: FaBug
    },
    {
      id: 6,
      title: "Staging Release & Final QA Sign-off",
      description: "We perform final sanity checks on staging environments, certifying the release candidate for deployment.",
      icon: FaFileAlt
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "98% Code Coverage Target",
      description: "We configure back-end pipelines to test critical business logic branches automatically before builds compile."
    },
    {
      id: 2,
      title: "Detailed Bug Reports",
      description: "Developers receive clear console logs, network recordings, and UI screenshot references to resolve issues fast."
    },
    {
      id: 3,
      title: "API Performance Metrics",
      description: "We check server response latencies, database connections, and cache hit ratios during traffic spike simulations."
    },
    {
      id: 4,
      title: "Comprehensive Security Scans",
      description: "We test against standard vulnerabilities like SQL injection, CSRF validation, and broken session auths."
    }
  ];

  const sections = [
    {
      title: "Zero Production Bugs, Maximum Client Trust",
      description: [
        "Releasing software with unresolved errors damages user retention and compromises operational stability. We run structured testing workflows to eliminate bugs before launch. Our QA experts identify visual misalignments, data issues, and security vulnerabilities early in the cycle.",
        "We coordinate closely with developers to make sure bug tickets are resolved and re-verified, ensuring your final product is secure and stable."
      ],
      img: "/assets/images/services/pm/qa_automation.png"
    },
    {
      title: "Automated Regression for Long-Term Scale",
      description: [
        "As your application codebase grows, manual testing alone becomes slow and expensive. We write automated regression suites that check your critical features in minutes. Every git pull request triggers test cycles, identifying integration breaks instantly.",
        "This continuous test automation keeps your software development team velocity high while guaranteeing zero regressions during cloud updates."
      ],
      img: "/assets/images/services/pm/qa.png"
    }
  ];

  const moreContent = [
    {
      title: "Manual Usability Auditing",
      description: "Our QA specialists explore your software manually, checking that gestures, navigation menus, and form inputs match the design specs."
    },
    {
      title: "CI/CD Automated Test Suites",
      description: "We construct end-to-end testing scripts that execute automatically during build runs, blocking buggy updates from staging."
    },
    {
      title: "API & Load Stress Diagnostics",
      description: "We run simulated request loads to test database response speeds and cloud server limits, preparing your platform for traffic spikes."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Why is QA integrated into every agile sprint?",
      answer: "Integrating QA sprint-by-sprint prevents bugs from accumulating. It is cheaper to resolve small coding errors during the sprint than to troubleshoot system bugs right before launch."
    },
    {
      id: 2,
      question: "What is the difference between manual and automated testing?",
      answer: "Manual testing is executed by QA specialists to check usability, visual layouts, and edge-case gestures. Automated testing uses scripts to run repetitive functional tests, verifying regressions quickly."
    },
    {
      id: 3,
      question: "Will you check security configurations of APIs?",
      answer: "Yes. Our QA process includes testing authentication tokens (JWT), verifying role permissions, and running checks to prevent SQL injections or cross-site scripting."
    },
    {
      id: 4,
      question: "How do you log and prioritize identified bugs?",
      answer: "We log bugs in Jira with screenshot details, error stack traces, and console warnings. We prioritize them as Critical, Major, or Minor depending on how they affect usability."
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
                Rigorous Quality Assurance & Testing to Guarantee Flawless Software Launches
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we treat software quality as a requirement. We believe that systematic manual checks and automated testing are essential to deliver stable user experiences.
                </p>
                <p>
                  We compile test strategies, execute regression scripts, run cross-browser compatibility diagnostics, and test APIs, ensuring your platform is secure and fast.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Schedule a QA Audit
                </button>
              </Link>
            </div>
            <div className="right_site">
              <Image
                width={600}
                height={400}
                src="/assets/images/services/pm/qa_automation.png"
                alt="Quality Assurance about image"
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
              Why Custom QA is Necessary
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Eliminate Production Failures and Deliver a Stable, High-Performance Software Product
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
              Our Quality Assurance Workflow
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we build test plans, configure automated scripts, track bugs, and verify stability.
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
                  alt="QA components illustration"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Key Components of Our QA Services</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We construct automated testing suites to check critical business logic. We compile detailed bug reports with step-by-step console logs to ensure fast resolutions.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We track latencies under simulated request loads, run security scripts, and check database permissions to keep your application fast and secure.
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
                  alt="QA showcase"
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
              Have questions about software testing and quality control? Read our answers below.
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

export default QualityAssurancePage;

"use client";

import Image from "next/image";
import Link from "next/link";
import img from "@@/images/services/pm/agile_board.png";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ServiceFAQ from "@/components/Pages/Services/Categories/ServiceFAQ";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaSync,
  FaTasks,
  FaChartLine,
  FaUsers,
  FaComments,
  FaSlidersH,
  FaCogs,
  FaChalkboardTeacher,
  FaClipboardList,
  FaCheck,
} from "react-icons/fa";

const AgileDevelopmentPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Iterative Sprint Execution",
      description: "We deploy working code in 2-week sprint windows, maintaining speed and steady progress.",
      icon: FaSync
    },
    {
      id: 2,
      title: "Prioritized Backlogs",
      description: "We groom backlogs continuously to ensure developer teams build high-value features first.",
      icon: FaTasks
    },
    {
      id: 3,
      title: "Team Velocity Tracking",
      description: "We record relative story point histories to calculate exact release dates and timeline targets.",
      icon: FaChartLine
    },
    {
      id: 4,
      title: "Active Stakeholder Demos",
      description: "We demonstrate deployable software build versions at the end of each sprint cycle for review.",
      icon: FaUsers
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Sprint Planning Session",
      description: "We pull highly ranked user stories from the backlog and commit to concrete features for the 2-week cycle.",
      icon: FaComments
    },
    {
      id: 2,
      title: "Active Coding & Daily Syncs",
      description: "Developers work on tasks, sharing blockers and coordinates on 15-minute daily standup calls.",
      icon: FaSync
    },
    {
      id: 3,
      title: "Continuous Code Reviews",
      description: "All branch updates are reviewed by technical architects to guarantee compliance with clean coding standards.",
      icon: FaCogs
    },
    {
      id: 4,
      title: "Staging Deployment & Demos",
      description: "We push verified code updates onto live staging links, showcasing features to product owners.",
      icon: FaChalkboardTeacher
    },
    {
      id: 5,
      title: "Sprint Retrospective Reviews",
      description: "We review bottlenecks and developer processes at the close of every sprint to optimize speed.",
      icon: FaClipboardList
    },
    {
      id: 6,
      title: "Backlog Tuning & Re-priorities",
      description: "We update requirements and re-index tasks, prep-scaffolding cards for upcoming sprint periods.",
      icon: FaSlidersH
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Burndown Velocity Metrics",
      description: "We leverage analytical charts to monitor sprint progress, detecting and resolving delays instantly."
    },
    {
      id: 2,
      title: "Automated Staging Builds",
      description: "We configure automated pipelines so staging URLs sync with git merge steps dynamically."
    },
    {
      id: 3,
      title: "Granular Jira Workspaces",
      description: "All tickets are mapped with story points, labels, descriptions, and QA validation criteria."
    },
    {
      id: 4,
      title: "Iterative Feedback Loops",
      description: "Your team review inputs are integrated sprint-by-sprint, keeping the software aligned with operations."
    }
  ];

  const sections = [
    {
      title: "Maximize Feature Velocity and Speed-to-Market",
      description: [
        "Traditional waterfall plans often lead to long wait times and misaligned outputs. We run Agile-Scrum sprints to release active code. By dividing scopes into 2-week milestones, we verify deliverables continuously, ensuring you stay in full control.",
        "Our developers and project managers coordinate to clear dependencies early, allowing your business to shift focus, test assumptions, and launch sections fast."
      ],
      img: "/assets/images/services/pm/agile_ci.png"
    },
    {
      title: "Scrum & Kanban Agile Tracking Dashboards",
      description: [
        "Transparency is a requirement, not an option. We manage all user stories, coding tasks, and bugs on real-time Scrum and Kanban boards. You have direct access to check statuses, review comments, and evaluate burndown rates.",
        "We balance developer workloads, prevent bottlenecks, and optimize team velocity, making software development predictable and transparent."
      ],
      img: "/assets/images/services/pm/pm-main.png"
    }
  ];

  const moreContent = [
    {
      title: "Bi-Weekly Sprint Execution",
      description: "We build code in iterative sprints, ensuring you receive a functional, testable software version every two weeks."
    },
    {
      title: "Jira Backlog Refinement & Scoping",
      description: "We keep requirements clear and up-to-date. Our managers prioritize user stories to keep developer goals aligned."
    },
    {
      title: "Continuous Feedback Integration",
      description: "We host sprint retros and demo sessions to integrate your feedback, avoiding misalignments before deployment."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is the difference between Scrum and Kanban?",
      answer: "Scrum organizes development into fixed 2-week sprints with defined goals and committed tasks. Kanban is a continuous flow model best suited for support, maintenance, or bug resolutions where tasks are completed as they arrive."
    },
    {
      id: 2,
      question: "How do we review the features built in each sprint?",
      answer: "At the end of every sprint, we host a live demo call to click through features. We also provide a secure staging link where you can test the updates at your convenience."
    },
    {
      id: 3,
      question: "Can we change priorities or add features mid-sprint?",
      answer: "To maintain velocity, active sprint scopes are locked once started. However, new features or priority edits are added to the backlog and pulled into the next sprint cycle during the planning meeting."
    },
    {
      id: 4,
      question: "Who participates in the daily standup meetings?",
      answer: "Our project managers, developers, and QA engineers join daily 15-minute standup calls. Your product owners are always welcome to join, though it is not required."
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
                Iterative Development Sprints that Deliver Functional Code Every Two Weeks
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we eliminate the wait times of traditional software cycles. We run Agile Scrum pipelines designed to ship testable features predictably.
                </p>
                <p>
                  By organizing work into 2-week iterations, refining backlogs continuously, and hosting regular demo reviews, we ensure our output matches your goals.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Launch an Agile Sprint
                </button>
              </Link>
            </div>
            <div className="right_site">
              <Image
                width={600}
                height={400}
                src="/assets/images/services/pm/agile_board.png"
                alt="Agile Development about image"
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
              Why Agile Sprints Work
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Accelerate Software Delivery and Boost Team Velocity with Structured Agile Sprints
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
              Our Agile Sprint Workflow
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we coordinate development tasks and maintain transparent progress from backlog planning to code deployment.
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
                  alt="Agile components illustration"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Key Components of Our Agile Pipeline</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We manage tasks transparently on Jira boards, tracking developer story points and team velocity. We deploy all verified builds to cloud staging servers automatically.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We maintain structured communication, alignment, and feedback loops to prevent scope errors and keep timelines predictable.
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
                  alt="Agile showcase"
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
              Got questions about sprint cycles and coordination? Read our answers below.
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

export default AgileDevelopmentPage;

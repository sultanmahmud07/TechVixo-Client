"use client";

import Link from "next/link";
import {
  FaComments,
  FaProjectDiagram,
  FaPalette,
  FaLaptopCode,
  FaBug,
  FaRocket,
  FaShieldAlt,
  FaSync,
  FaEye,
  FaBolt,
  FaCheck,
} from "react-icons/fa";

const Process = () => {
  const processData = [
    {
      id: 1,
      title: "Discovery & Empathy Mapping",
      description: "We start by listening. Through collaborative workshops, we define your business goals, map user journeys, and establish key performance metrics (KPIs) to align development with your vision.",
      icon: FaComments,
      keyTitle: "Key Objectives:",
      keys: [
        "Define clear project scope boundaries.",
        "Map user personas and journey paths.",
        "Agree on target timeline and KPI metrics."
      ]
    },
    {
      id: 2,
      title: "Research & Planning Roadmap",
      description: "Our technical architects analyze industry trends, crawl competitor sites, and map API dependencies. We convert these inputs into structured product roadmap logs and timeline Gantt charts.",
      icon: FaProjectDiagram,
      keyTitle: "Key Deliverables:",
      keys: [
        "Competitor analysis & keyword gaps maps.",
        "Database entity diagrams and API specs.",
        "12-month development release roadmaps."
      ]
    },
    {
      id: 3,
      title: "Design & UX/UI Architecture",
      description: "We craft visually stunning, intuitive visual interfaces. By compiling clean wireframes and interactive clickable prototypes early, we allow you to review flows before writing code.",
      icon: FaPalette,
      keyTitle: "Design Outputs:",
      keys: [
        "Clickable low-fidelity wireframe maps.",
        "Custom design systems and typography rules.",
        "High-fidelity mobile and desktop screens."
      ]
    },
    {
      id: 4,
      title: "Agile Build & Code Execution",
      description: "Our development team brings designs to life using modern tech stacks. We write clean, semantic code in bi-weekly Scrum sprints, deploying updates to staging URLs continuously.",
      icon: FaLaptopCode,
      keyTitle: "Engineering focus:",
      keys: [
        "Modular React/Next.js frontend coding.",
        "Secure backend REST/GraphQL API connections.",
        "Automated CI/CD staging environment deployments."
      ]
    },
    {
      id: 5,
      title: "Quality Assurance & Stress Audits",
      description: "Before release, we run testing routines: manual layout checks across browser resolutions, automated code integration tests, security audits, and backend request stress scripts.",
      icon: FaBug,
      keyTitle: "Testing checkmarks:",
      keys: [
        "Cross-browser and viewport layout passes.",
        "Security scans checking for injections or loops.",
        "Load stress analysis under peak concurrent users."
      ]
    },
    {
      id: 6,
      title: "Launch & Growth Optimizations",
      description: "We launch your product securely, configuring server parameters and CDN routing. Post-launch, we check database logs, audit conversions, and optimize code parameters continuously.",
      icon: FaRocket,
      keyTitle: "Post-Launch support:",
      keys: [
        "24/7 cloud server latency tracking.",
        "SEO conversion audits and meta tags tunings.",
        "Feature updates backlog prioritization."
      ]
    }
  ];

  const standards = [
    {
      id: 1,
      title: "Security First Standards",
      description: "We encrypt databases, configure firewalls, and audit credentials to guarantee absolute user safety.",
      icon: FaShieldAlt
    },
    {
      id: 2,
      title: "Agile Sprint Delivery",
      description: "We work in structured sprints, delivering functional demos every two weeks for review.",
      icon: FaSync
    },
    {
      id: 3,
      title: "Total Progress Transparency",
      description: "You retain direct access to Jira backlog cards, Figma files, and git code pipelines.",
      icon: FaEye
    },
    {
      id: 4,
      title: "Performance Optimization",
      description: "We compile fast, clean code, optimizing page files to load in under two seconds.",
      icon: FaBolt
    }
  ];

  return (
    <div className="bg-[#FAF9FC]">
      {/* Intro Header Section */}
      <section className="py-12 md:py-20 bg-white border-b border-gray-100">
        <div className="main_container">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl text-[#111204] font-bold leading-tight">
                How We Deliver Modern Digital Products
              </h2>
              <p className="text-sm md:text-base text-gray-600 my-4 md:my-6 leading-relaxed">
                At Digimatric, we turn technical complexity into structured sprint roadmaps. We believe a successful build starts with an empathy-driven scoping call and ends with continuous code optimizations.
              </p>
              <Link href="/contact">
                <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow transition">
                  Start Your Project
                </button>
              </Link>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {standards.map((std, i) => {
                const StdIcon = std.icon;
                return (
                  <div key={i} className="p-4 md:p-6 bg-[#FAF9FC] border border-gray-100 rounded-xl flex flex-col gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-lg">
                      <StdIcon />
                    </div>
                    <h4 className="font-bold text-secondary text-sm md:text-base">{std.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{std.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Steps Section */}
      <section className="py-12 md:py-24">
        <div className="main_container">
          <div className="top_title_design flex flex-col items-center pb-12">
            <h3 className="sut_title">Our Process Phases</h3>
            <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary my-3">
              Step-by-Step Delivery Pipeline
            </h2>
            <p className="text-gray-600 text-center w-full md:w-3/5">
              From requirement definition to coding and post-launch auditing, we manage every release parameter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {processData.map((item, i) => {
              const StepIcon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl">
                          <StepIcon />
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-secondary">{item.title}</h4>
                      </div>
                      <span className="text-4xl md:text-6xl font-bold text-primary/10">0{i + 1}</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <h5 className="font-bold text-secondary text-sm md:text-base mb-3">{item.keyTitle}</h5>
                    <ul className="flex flex-col gap-2">
                      {item.keys.map((key, idx) => (
                        <li className="flex items-start gap-2 text-xs md:text-sm text-gray-600" key={idx}>
                          <FaCheck className="text-primary mt-1 text-xs flex-shrink-0" />
                          <span>{key}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
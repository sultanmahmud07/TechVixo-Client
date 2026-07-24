"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import StudiesTab from "./StudiesTab";
import img1 from "@@/images/home/case-studies/left-logo/1.png";
import img2 from "@@/images/home/case-studies/left-logo/2.png";
import img3 from "@@/images/home/case-studies/left-logo/3.png";
import img4 from "@@/images/home/case-studies/left-logo/4.png";

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabData = [
    { id: 1, name: "Spotify", logo: img1 },
    { id: 2, name: "Zoom", logo: img2 },
    { id: 3, name: "Amazon", logo: img3 },
    { id: 4, name: "Adobe", logo: img4 },
  ];

  const caseStudiesData = {
    1: {
      client: "Spotify",
      logo: img1,
      title: "E-Commerce Headless Overhaul",
      description: "Spotify needed to optimize checkout performance on their global merchandise store. We decoupled the front-facing layout, serving catalog views from edge caches.",
      achieved: "In 6 months, we achieved:",
      stat1: { value: "40", unit: "K", label: "active shoppers during product drops" },
      stat2: { value: "56", unit: "%", label: "increase in checkout process speed" },
      readLink: "/case-studies/spotify-headless-overhaul"
    },
    2: {
      client: "Zoom",
      logo: img2,
      title: "SaaS Back-End Scalability",
      description: "Zoom needed to deploy real-time telemetry tracking dashboards to monitor latency anomalies. We restructured their database query logic and API gateway nodes.",
      achieved: "In 4 months, we achieved:",
      stat1: { value: "99.99", unit: "%", label: "system uptime during peak concurrent traffic" },
      stat2: { value: "35", unit: "%", label: "reduction in backend database query delays" },
      readLink: "/case-studies/zoom-backend-scalability"
    },
    3: {
      client: "Amazon",
      logo: img3,
      title: "AWS Cloud Infrastructure Migration",
      description: "AWS logistics partner required migration of core inventory tracking pipelines to serverless environments. We configured automated auto-scaling and cloud caches.",
      achieved: "In 3 months, we achieved:",
      stat1: { value: "15", unit: "x", label: "faster asset downloads across regional ports" },
      stat2: { value: "40", unit: "%", label: "decrease in monthly cloud compute overheads" },
      readLink: "/case-studies/aws-infrastructure-migration"
    },
    4: {
      client: "Adobe",
      logo: img4,
      title: "Design Systems & Component Library",
      description: "Adobe design partners needed to compile a unified, accessible component library. We coded responsive React UI templates compliant with visual WCAG standards.",
      achieved: "In 5 months, we achieved:",
      stat1: { value: "120", unit: "+", label: "reusable modular React components built" },
      stat2: { value: "65", unit: "%", label: "faster product release engineering cycles" },
      readLink: "/case-studies/adobe-design-systems"
    }
  };

  const currentCase = caseStudiesData[activeTab];

  return (
    <div className="mb-10 md:mb-20 bg-[#FAF9FC] py-12 md:py-16 rounded-3xl border border-gray-100 shadow-sm">
      <div className="main_container">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-12">
          
          {/* Left Sidebar Tabs (Green Background) */}
          <div className="case_studies_left py-6 px-4 md:py-8 rounded-2xl bg-secondary lg:col-span-2 flex flex-col justify-between shadow-md">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 text-center md:text-left">
                Featured Case Studies
              </h3>
              <h2 className="text-center md:text-left text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Case <span className="text-primary">Studies</span>
              </h2>
            </div>
            <StudiesTab
              tabData={tabData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-4 flex flex-col justify-between p-2 md:p-6">
            
            {/* Header Quote */}
            <div className="top_item pb-6 md:pb-10 text-right">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-1">
                From Concept To Market
              </span>
              <h3 className="text-lg md:text-xl font-bold text-secondary">
                We Engineer Projects For <span className="text-primary">Superior Performance</span>
              </h3>
            </div>

            {/* Description & Client Logo Block */}
            <div className="center_item py-4 border-t border-b border-gray-100 my-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-24 h-24 bg-primary rounded-2xl p-4 shadow-sm">
                  <Image
                    width={96}
                    height={32}
                    src={currentCase.logo}
                    alt={`${currentCase.client} Logo`}
                    className="object-contain filter brightness-100"
                  />
                </div>
                <div className="h-0.5 w-24 bg-primary/20 hidden md:block"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold text-secondary">{currentCase.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{currentCase.description}</p>
                <span className="text-xs font-semibold text-gray-400 mt-2 block">
                  {currentCase.achieved}
                </span>
              </div>
            </div>

            {/* Statistics */}
            <div className="center_item my-4 py-4 grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <h4 className="flex items-baseline text-primary font-black text-5xl md:text-7xl">
                  <span>{currentCase.stat1.value}</span>
                  <span className="text-2xl md:text-4xl ml-1 font-bold">{currentCase.stat1.unit}</span>
                </h4>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-2 leading-relaxed">
                  {currentCase.stat1.label}
                </p>
              </div>
              <div className="flex flex-col">
                <h4 className="flex items-baseline text-primary font-black text-5xl md:text-7xl">
                  <span>{currentCase.stat2.value}</span>
                  <span className="text-2xl md:text-4xl ml-1 font-bold">{currentCase.stat2.unit}</span>
                </h4>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-2 leading-relaxed">
                  {currentCase.stat2.label}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <Link href={currentCase.readLink} className="w-full">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-xl shadow-sm hover:shadow transition-all duration-300 text-sm"
                >
                  <span>Read {currentCase.client} Case Study</span>
                  <FaArrowCircleRight />
                </button>
              </Link>
              <Link href="/contact" className="w-full">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 border-2 border-secondary hover:bg-secondary hover:text-white text-secondary font-bold py-3 px-6 rounded-xl transition-all duration-300 text-sm"
                >
                  <span>Start Your Project</span>
                  <FaArrowCircleRight />
                </button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
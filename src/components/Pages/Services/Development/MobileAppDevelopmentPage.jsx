"use client";

import Image from "next/image";
import Link from "next/link";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaMobileAlt,
  FaAppStoreIos,
  FaGooglePlay,
  FaCloudDownloadAlt,
  FaUserCheck,
  FaSync,
  FaTasks,
  FaCheck,
  FaBug
} from "react-icons/fa";

const MobileAppDevelopmentPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "iOS & Android Development",
      description: "We code custom interfaces optimized specifically for Swift/Objective-C on iOS and Kotlin/Java on Android.",
      icon: FaAppStoreIos
    },
    {
      id: 2,
      title: "Cross-Platform Frameworks",
      description: "Reduce time-to-market using high-performance Flutter and React Native setups that compile native binaries.",
      icon: FaMobileAlt
    },
    {
      id: 3,
      title: "Offline Storage & Sync",
      description: "We configure local database caching (SQLite, Room, Realm) so your application runs smoothly offline.",
      icon: FaSync
    },
    {
      id: 4,
      title: "App Store Launch & Support",
      description: "We handle compliance steps, build signing, submission reviews, and deploy your apps onto App Store and Play Store.",
      icon: FaGooglePlay
    }
  ];

  const steps = [
    {
      id: 1,
      title: "User Journeys & UI Storyboarding",
      description: "We design every interaction flow, screen transition, and micro-gesture to fit touch interactions.",
      icon: FaTasks
    },
    {
      id: 2,
      title: "Cross-Platform SDK Scaffolding",
      description: "We set up core code repositories in Flutter/React Native, configuring native bridging modules.",
      icon: FaMobileAlt
    },
    {
      id: 3,
      title: "State Management & API Syncing",
      description: "We implement robust state containers (Redux, Bloc) and link them to secure cloud endpoints.",
      icon: FaSync
    },
    {
      id: 4,
      title: "Vulnerability Scanning & Bug Hunting",
      description: "We test native builds on physical iOS/Android devices to locate performance lags or memory leaks.",
      icon: FaBug
    },
    {
      id: 5,
      title: "Staging Distributions & Play Tests",
      description: "We distribute alpha/beta versions via TestFlight and Google Play Console for internal stakeholder review.",
      icon: FaUserCheck
    },
    {
      id: 6,
      title: "Store Submission & Launch Management",
      description: "We prepare screenshots, drafts, and compliance audits to safely clear store review policies.",
      icon: FaCloudDownloadAlt
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Fluid Animations & Gestures",
      description: "Our mobile apps render at high frame rates (60/120fps) with smooth swipe gestures and natural slide transitions."
    },
    {
      id: 2,
      title: "Robust Local Encryption",
      description: "We secure user sessions using native Keychain/Keystore architectures and database encryptions."
    },
    {
      id: 3,
      title: "Intelligent Push Messaging",
      description: "We integrate Firebase and Apple APNs to send customized push notifications that boost daily active users."
    },
    {
      id: 4,
      title: "Real-time Crash Auditing",
      description: "We hook up crash reporting systems (Crashlytics) to instantly locate errors occurring in live deployments."
    }
  ];

  const sections = [
    {
      title: "Single Codebase, Native Android & iOS Speeds",
      description: [
        "In the modern mobile landscape, deploying separate native codebases can double your development cost. We build cross-platform apps using Flutter and React Native that compile directly into native ARM processor code. This ensures graphics, lists, and camera interactions execute with native speed.",
        "Your business benefits from a unified codebase, reducing ongoing maintenance costs while assuring updates launch on both stores simultaneously."
      ],
      img: "/assets/images/services/development/mobile-app.jpg"
    },
    {
      title: "Reliable Offline Architecture and Data Syncing",
      description: [
        "Mobile users are constantly moving through dead zones. We engineer offline-first apps using local caching databases. Users can continue browsing catalogs, modifying profiles, or generating reports offline. Once connection is restored, the application syncs data back to your database.",
        "This seamless sync logic prevents data loss and maintains user trust in low-connectivity areas."
      ],
      img: "/assets/images/services/development/mobile-database.jpg"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Do you build native apps or cross-platform apps?",
      answer: "We develop both. We generally recommend cross-platform frameworks (Flutter/React Native) for most business applications to save budget. However, if your project needs heavy GPU processing, custom bluetooth integrations, or complex sensor calculations, we build native Swift and Kotlin apps."
    },
    {
      id: 2,
      question: "What is the advantage of using cross-platform frameworks like Flutter?",
      answer: "It allows sharing up to 90% of the codebase across iOS and Android, which reduces development time by 40%, slashes maintenance overhead, and ensures unified layout alignment across devices."
    },
    {
      id: 3,
      question: "Will you help deploy our application to the stores?",
      answer: "Yes. We manage the deployment process, including provisioning profile configs, app signing, store listing drafts, uploading build binaries, and addressing store review feedback."
    },
    {
      id: 4,
      question: "How do you handle mobile app updates and maintenance?",
      answer: "We support ongoing mobile maintenance. Minor UI updates can often be deployed instantly using OTA (Over-The-Air) update methods. Major logic edits are submitted to store review pipelines to keep pace with new iOS/Android OS updates."
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
                Deploy Beautiful, High-Performance Mobile Applications
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  A premium mobile app connects your business directly to the user&apos;s pocket. At Digimatric, we engineer mobile applications that are responsive, secure, and load instantly.
                </p>
                <p>
                  From offline data architectures to native platform APIs (camera, geolocation, push messaging), we deliver apps that users love to browse and interact with daily.
                </p>
              </div>
              <Link href="/contact" className="pt-2 md:pt-6 hidden md:block">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-medium">
                  Discuss Your App Concept
                </button>
              </Link>
            </div>
            <div className="right_site w-full md:w-2/5">
              <Image
                width={600}
                height={400}
                src="/assets/images/services/development/androait.jpg"
                alt="Mobile app development illustration"
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
          <h3 className="sut_title">MOBILE SERVICES</h3>
          <div className="top_title_design flex flex-col items-center">
            <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
              Why Custom Mobile Engineering Propels Your Platform
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

      {/* Key Components */}
      <section className="bg-secondary py-10 md:py-16 my-5 md:my-14 text-white">
        <div className="main_container">
          <h3 className="sut_title_white text-center uppercase text-white">Key Features</h3>
          <div className="top_title_design flex flex-col items-center">
            <h2 className="text-center text-2xl md:text-4xl font-bold my-3 md:my-5">
              Mobile Core Implementations
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
              Our Mobile Engineering Lifecycle
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-4/5">
              We leverage an agile SDLC pipeline specifically optimized for mobile deployments.
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
              Have questions about mobile application development? Read our answers below.
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

export default MobileAppDevelopmentPage;

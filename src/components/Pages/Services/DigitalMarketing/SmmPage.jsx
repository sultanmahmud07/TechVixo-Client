"use client";

import Image from "next/image";
import Link from "next/link";
import mainImg from "@@/images/services/digital-marketing/social-media-marketing.jpg";
import mainImg2 from "@@/images/services/digital-marketing/engage-buyer.jpg";
import detailImg1 from "@@/images/services/digital-marketing/smm-creatives.jpg";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import { useState } from "react";
import {
  FaUsers,
  FaShareAlt,
  FaBullhorn,
  FaChartLine,
  FaCheck,
  FaTools,
  FaHeart,
  FaRegLightbulb,
  FaThumbsUp,
} from "react-icons/fa";

const SmmPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Lookalike Target Syncs",
      description: "We deploy advertising pixels to build lookalike segments of your highest-paying buyers.",
      icon: FaUsers
    },
    {
      id: 2,
      title: "Vibrant Social Graphics",
      description: "Our design team compiles custom social templates, images, and videos representing your brand.",
      icon: FaRegLightbulb
    },
    {
      id: 3,
      title: "Interactive Funnels",
      description: "We set target workflows, guiding social searchers from initial awareness to checkout screens.",
      icon: FaShareAlt
    },
    {
      id: 4,
      title: "Organic Engagement",
      description: "We monitor user interactions and post schedules, building brand trust and local reputation.",
      icon: FaThumbsUp
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Buyer Persona Research",
      description: "We locate target customer demographics and interests, mapping out customized ad strategies.",
      icon: FaUsers
    },
    {
      id: 2,
      title: "Graphic Concept Designing",
      description: "We compile ad creative grids, styling visual formats for Instagram, Facebook, and LinkedIn.",
      icon: FaRegLightbulb
    },
    {
      id: 3,
      title: "Campaign Target Mapping",
      description: "We configure interest groups, target exclusions, and pixel integrations on ad dashboards.",
      icon: FaTools
    },
    {
      id: 4,
      title: "A/B Creative Split Testing",
      description: "We run multivariant tests comparing visual styles, headlines, and call-to-actions to raise ROI.",
      icon: FaBullhorn
    },
    {
      id: 5,
      title: "Retargeting Loop Setup",
      description: "We capture bounced users via dynamic catalogs, boosting click-through-rates and conversion ratios.",
      icon: FaShareAlt
    },
    {
      id: 6,
      title: "Monthly Progress Reports",
      description: "We audit acquisition metrics, click costs, and budget allocations in detailed reports.",
      icon: FaChartLine
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Brand Loyalty Boosts",
      description: "We design engaging posts that stimulate discussions, building long-term customer affinity."
    },
    {
      id: 2,
      title: "Multi-Channel Scaling",
      description: "We maintain consistent brand styling across Instagram feed panels and LinkedIn cards."
    },
    {
      id: 3,
      title: "Pixel Integration Audits",
      description: "We verify analytics pixels trigger correctly on checkout forms, tracking social purchases."
    },
    {
      id: 4,
      title: "Continuous Ad Tweaks",
      description: "We adjust target bids and swap graphics daily to prevent ad fatigue bottlenecks."
    }
  ];

  const sections = [
    {
      title: "Reach Thousands of Engaged Buyers on Major Networks",
      description: [
        "Social media platforms contain massive volumes of consumer demographic data. Our Social Media Marketing (SMM) services focus on targeting buyers based on exact interests, behaviors, and career titles.",
        "We build creative ad grids and SMM campaigns on Facebook, Instagram, and LinkedIn that generate inquiries and build brand reputation."
      ],
      img: "/assets/images/services/digital-marketing/smm.jpg"
    },
    {
      title: "Social Creative Designing & Funnels Building",
      description: [
        "Social media users scroll fast. Your graphics need to capture user attention in less than two seconds. We design eye-catching visual layouts and record targeted short video assets.",
        "We build structured multi-step social funnels, capturing cold user attention before retargeting warm buyers with dynamic product offers."
      ],
      img: "/assets/images/services/digital-marketing/smm-creatives.jpg"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Which social media platforms should my business target?",
      answer: "We analyze where your target buyers dwell. B2B software companies typically see high ROI on LinkedIn, while retail brands capture buyers on Instagram and Facebook."
    },
    {
      id: 2,
      question: "What is an advertising pixel and why is it needed?",
      answer: "An advertising pixel is a script block added to your site. It tracks user behaviors, enabling ad platforms to optimize ad delivery for actions like cart checkouts."
    },
    {
      id: 3,
      question: "Do you manage regular page posts or just paid ads?",
      answer: "We do both. We structure paid acquisition ad sets to drive sales leads, alongside organic content calendars to build brand authority and trust."
    },
    {
      id: 4,
      question: "How do you avoid ad fatigue in campaigns?",
      answer: "Ad fatigue occurs when users see the same ad repeatedly. We prevent this by checking frequency metrics and swapping in fresh graphics and copywriting headers weekly."
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
                Accelerate Customer Acquisition & Brand Trust with Social Media Marketing
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5 text-[#111204CC]">
                <p>
                  At Digimatric, we turn social scrolls into customer pipeline leads. We design high-converting visual creative formats and configure custom lookalike audiences.
                </p>
                <p>
                  We audit tracking tags, program retargeting funnels, deploy organic content posts, and audit SMM spend ratios to ensure scalable marketing growth.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Grow Your Social Channels
                </button>
              </Link>
            </div>
            <div className="right_site relative h-64 md:h-96 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={mainImg}
                alt="Social Media Marketing Overview"
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
              Key Social SMM Benefits
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Optimize User Interactions, Target Pixels, and Influx Volumes
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
              Our Social Media Strategy
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              How we build creative copy templates, deploy pixels segments, and optimize custom funnels.
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
                  src={detailImg1}
                  alt="SMM components illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Core Social Configurations</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    We compile interest targeting pools and pixel codes to capture high-value prospective buyer demographics. We deploy retargeting ad campaigns to convert users who bounced from checkout screens.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    We maintain structured posting schedules across channels, building organic client reputation and user interactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-4">
              {keyData.map((facility, i) => (
                <div key={i} className="key_card w-full flex gap-3">
                  <div className="key_icon pt-1 flex-shrink-0">
                    <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center">
                      <FaCheck className="text-primary text-xs" />
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
                  src={section.img === "/assets/images/services/digital-marketing/smm.jpg" ? mainImg2 : detailImg1}
                  alt="SMM campaign detail image"
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
              Got questions about custom target pixels or ad formats? Read our answers below.
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

export default SmmPage;

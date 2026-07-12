"use client";
import StartProject from "@/components/Pages/Home/StartProject/StartPorjcet";
import { useState } from "react";

const ServiceFAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What is search engine optimization (SEO)?",
      answer: "SEO stands for Search Engine Optimization. It is the process of optimizing website elements, speed, and content to rank higher in search engine results pages (SERPs) for targeted keywords, generating free organic traffic."
    },
    {
      id: 2,
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term investment. While technical optimizations can show initial index improvements within a few weeks, substantial traffic increases and keyword ranking boosts typically take 3 to 6 months."
    },
    {
      id: 3,
      question: "What is the difference between On-Page and Off-Page SEO?",
      answer: "On-page SEO refers to optimizations performed directly on your website (e.g. content formatting, image alt text, meta headings, site speed). Off-page SEO refers to actions taken outside your website (e.g. link building, brand building)."
    },
    {
      id: 4,
      question: "Why is local SEO important?",
      answer: "Local SEO optimizes your digital footprint for localized searches (e.g. 'near me' searches). It helps rank your Google Business Profile and local landing pages, bringing direct local customers to your business."
    },
    {
      id: 5,
      question: "Do you offer post-optimization support?",
      answer: "Yes! SEO requires continuous optimization, backlink checks, and strategy refinement to stay ahead of search engine algorithm changes and competitors."
    }
  ];

  return (
    <div className="py-8 md:pt-16 bg-secondary mt-3 md:mt-10">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-white my-3 md:mb-5">
            FAQ&apos;s
          </h2>
          <p className="text-[#FFFFFFCC] text-center w-full md:w-2/5">
            Got questions? Check out our FAQ section for answers to common queries.
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
                <p className="mt-1 md:mt-3 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-5 md:pt-10">
        <StartProject></StartProject>
      </div>
    </div>
  );
};

export default ServiceFAQ;

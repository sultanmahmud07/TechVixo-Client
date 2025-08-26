"use client"
import Image from "next/image";
import icon from "@@/images/home/faq/faq-icon.png";
import { useState } from "react";
import StartProject from "../StartProject/StartPorjcet";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What services does Digimatric provide?",
      answer:
        "Digimatric offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      id: 2,
      question: "How can Digimatric help my business?",
      answer: "We provide tailored solutions to enhance your digital presence and streamline operations.",
    },
    {
      id: 3,
      question: "What industries does Digimatric work with?",
      answer: "We work with industries such as healthcare, finance, retail, education, and more.",
    },
    {
      id: 4,
      question: "How long does it take to complete a project with Digimatric?",
      answer: "The duration varies depending on project scope and requirements.",
    },
    {
      id: 5,
      question: "Do you offer ongoing support and maintenance after the project is completed?",
      answer: "Yes, we provide ongoing support and maintenance tailored to your needs.",
    },
    {
      id: 6,
      question: "Can you work with existing design or development frameworks?",
      answer: "Absolutely, we can integrate with your current frameworks.",
    },
    {
      id: 7,
      question: "How involved will I be in the project development process?",
      answer: "We ensure active client involvement to align the project with your vision.",
    },
    {
      id: 8,
      question: "Can you help with website or app maintenance and updates?",
      answer: "Yes, we offer comprehensive maintenance and update services.",
    },
  ];
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Toggle active FAQ
  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="py-8 md:pt-16 bg-secondary mt-3 md:mt-10">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-white my-3 md:mb-5">
            FAQ&apos;s
          </h2>
          <p className='text-[#FFFFFFCC] text-center w-full md:w-2/5'>Got questions? Check out our FAQ section for answers to common queries.

          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 md:pt-10">
          {faqs?.map((faq) => (
            <div
              key={faq.id}
              className={`border border-gray-700 p-5 rounded-lg cursor-pointer transition ${activeFAQ === faq.id ? "bg-gray-800" : "bg-gray-900"
                }`}
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex justify-between items-center">
                <h4
                  className={`font-semibold ${activeFAQ === faq.id ? "text-green-400" : "text-white"
                    }`}
                >
                  {faq.id < 10 ? `0${faq.id}` : faq.id}. {faq.question}
                </h4>
                <span
                  className={`text-2xl ${activeFAQ === faq.id ? "text-green-400" : "text-gray-400"
                    }`}
                >
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

export default FAQ;

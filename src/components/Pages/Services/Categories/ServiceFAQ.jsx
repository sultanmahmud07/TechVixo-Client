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
      question: "What services does DigiMatric provide?",
      answer: "We offer various digital design services, including UX/UI design, web development, mobile app development, branding & identity, and more, all focused on delivering tailored solutions that meet your business objectives."
    },
    {
      id: 2,
      question: "How can DigiMatric help my business?",
      answer: "DigiMatric can help your business by improving your digital presence with effective UX/UI design, responsive websites, and brand-building strategies that drive engagement and increase conversions."
    },
    {
      id: 3,
      question: "What industries does DigiMatric work with?",
      answer: "We work with various industries, including e-commerce, healthcare, finance, education, and real estate. Our experience in these sectors allows us to tailor our design solutions to meet the specific needs of each industry, ensuring the best results for your business."
    },
    {
      id: 4,
      question: "Do you offer ongoing support and maintenance after completing the project?",
      answer: "Yes! DigiMatric offers post-launch maintenance and support services to ensure that your website or app continues to perform optimally and remains up to date with new features and updates. You can rest assured that we will be there for you even after the project is completed."
    },
    {
      id: 5,
      question: "Can you work with existing design or development frameworks?",
      answer: "Absolutely! We can integrate with existing design or development frameworks and collaborate with your team to enhance your setup."
    },
    {
      id: 6,
      question: "How involved will I be in the project development process?",
      answer: "We believe in strong collaboration. You, as our client, will be involved in every key decision throughout the design process, ensuring the project aligns with your vision and business goals."
    },
    {
      id: 7,
      question: "Can you help with website or app maintenance and updates?",
      answer: "DigiMatric offers comprehensive maintenance and update services to ensure your digital presence remains secure, up-to-date, and performing at its best."
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

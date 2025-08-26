"use client"
import StartProject from "@/components/Pages/Home/StartProject/StartPorjcet";
import { useState } from "react";

const ServiceFAQ = ({data}) => {

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
          {data?.map((faq) => (
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

export default ServiceFAQ;

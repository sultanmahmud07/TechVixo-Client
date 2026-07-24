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
      question: "What frameworks and databases do you prioritize?",
      answer: "We primarily utilize React and Next.js for high-performance frontend interfaces, Node.js and Python for secure backend systems, and PostgreSQL and MongoDB for databases. We pick the most suitable technology stack based on your specific scaling and architectural needs."
    },
    {
      id: 2,
      question: "Will our organization own the source code and repository?",
      answer: "Yes, 100%. Upon the successful delivery of the software and settlement of invoice terms, all intellectual property (IP) rights, code repositories, and deployable assets are transferred entirely to your organization."
    },
    {
      id: 3,
      question: "How do you manage feature requests and scope changes?",
      answer: "We employ Agile development practices. New features or modifications are added to the product backlog. We collaborate to prioritize these features and schedule them into upcoming sprints, preventing timeline delays."
    },
    {
      id: 4,
      question: "Do you offer post-launch maintenance and technical support?",
      answer: "Yes. We offer dedicated maintenance agreements covering ongoing cloud server optimization, library updates, security patch installs, database backups, and prompt emergency troubleshooting."
    },
    {
      id: 5,
      question: "How do we monitor project development progress?",
      answer: "We provide complete roadmap visibility via Jira boards and host bi-weekly sprint reviews. Additionally, we set up a staging server so you can test features and click through the live builds at any stage of development."
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
            Have questions about our development pipelines? Check our answers to common questions below.
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
      <div className="pt-5 md:pt-10">
        <StartProject></StartProject>
      </div>
    </div>
  );
};

export default ServiceFAQ;

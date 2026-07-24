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
      question: "What project management frameworks do you follow?",
      answer: "We primarily utilize Agile-Scrum methodologies for active product development sprints, and Kanban models for ongoing support or ticket maintenance. We tailor this process based on your internal organizational requirements."
    },
    {
      id: 2,
      question: "How often will we receive project progress updates?",
      answer: "You will have real-time dashboard visibility on our Jira/Trello boards. Additionally, we host weekly or bi-weekly sprint reviews where our team demonstrates active deliverables on a staging link."
    },
    {
      id: 3,
      question: "What collaboration tools will we need access to?",
      answer: "We will invite your stakeholders into our Slack channels, Jira task boards, and Confluence wiki spaces. If you prefer to use your own internal enterprise toolings, our managers can operate directly inside your environment."
    },
    {
      id: 4,
      question: "How do you manage changes in project requirements?",
      answer: "Any requirement modifications are logged in our product backlog. We estimate their relative complexity (story points) and collaborate to prioritize them in the next sprint planning, adjusting the launch roadmap."
    },
    {
      id: 5,
      question: "How do you coordinate with our internal technical teams?",
      answer: "We set up clear communication protocols. Our managers coordinate with your internal tech leads to align code branching conventions, security checklist reviews, and cloud deployment pipelines."
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
            Got questions about our management pipelines? Review our answers to common questions.
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

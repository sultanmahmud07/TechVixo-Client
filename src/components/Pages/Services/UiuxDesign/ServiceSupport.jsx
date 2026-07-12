"use client";
import Image from "next/image";
import { BsCheck2Circle } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";

const ServiceSupport = () => {
  const data = {
    title: "Why Choose Us For Your UI/UX Design",
    description: "At Digimatric, we are dedicated to providing exceptional digital solutions that elevate your business. Here’s why we are the right choice for your brand:",
    tabData: [
      {
        id: 1,
        name: "Expertise You Can Trust",
        description: "With years of experience in UI/UX design, digital marketing, and web development, our team is equipped to deliver innovative solutions that meet your business needs. We have worked with businesses across various industries, ensuring a proven track record of success. Our commitment to staying updated with the latest industry trends and technologies ensures that you receive cutting-edge strategies tailored for impactful results.",
        logo: "/assets/images/services/details-image/support/1.png"
      },
      {
        id: 2,
        name: "Results-Driven Approach",
        description: "We focus on delivering measurable outcomes that contribute to your business's growth. From increasing website traffic to generating qualified leads and boosting conversion rates, every project we undertake is designed to maximize your ROI. Our custom solutions are aligned with your unique goals, ensuring that every effort directly impacts your bottom line.",
        logo: "/assets/images/services/details-image/support/1.png"
      },
      {
        id: 3,
        name: "Seamless Collaboration",
        description: "We believe in building strong partnerships with our clients. By working closely with you to understand your challenges and objectives, we create solutions that truly reflect your vision. Our transparent communication ensures you’re always informed at every stage of the project, while timely updates and feedback loops guarantee a smooth and collaborative experience.",
        logo: "/assets/images/services/details-image/support/1.png"
      },
      {
        id: 4,
        name: "End-to-End Solutions",
        description: "As a full-service digital marketing agency, we offer comprehensive solutions to meet all your needs under one roof. From strategy development and creative design to implementation and ongoing support, we handle everything. Our flexible pricing plans make our services accessible to businesses of all sizes. Plus, we provide ongoing maintenance and updates to ensure your digital platforms remain optimized and perform at their best.",
        logo: "/assets/images/services/details-image/support/1.png"
      }
    ]
  };

  const [activeTab, setActiveTab] = useState(data.tabData[0]);

  const handleTabActive = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-5 md:my-16">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
            {data.title}
          </h2>
          <p className="text-[#111204CC] text-center w-full md:w-1/2">
            {data.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 my-5 md:mt-10">
          <div className="service_support_left w-full md:w-1/4">
            {data.tabData.map((tab) => (
              <p
                key={tab.id}
                onClick={() => handleTabActive(tab)}
                className={`studies_tab font-semibold capitalize p-3 md:p-5 cursor-pointer border-b-4 ${activeTab.id === tab.id ? "border-primary bg-[#1cf7741e]" : " border-white"}`}
              >
                {tab.name}
              </p>
            ))}
          </div>
          <div className="w-full md:w-3/4">
            {activeTab && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 bg-white p-3 md:p-5 rounded shadow">
                <div className="ll">
                  <h5 className="text-xl md:text-2xl font-semibold text-primary my-2 flex items-center gap-3">
                    <span><BsCheck2Circle /></span> {activeTab.name}
                  </h5>
                  <p className="text-[#111204CC] text-sm md:text-base mb-4">{activeTab.description}</p>
                  <Link href={"/contact"}>
                    <button type="button" className="mt-2 md:mt-3 bg-primary transition hover:bg-secondary hover:text-white rounded shadow p-2 px-4 text-white">
                      Send me proposal
                    </button>
                  </Link>
                </div>
                <div className="ll flex items-center">
                  <Image
                    width={600}
                    height={400}
                    src={activeTab.logo}
                    alt={activeTab.name}
                    className="w-full rounded-md object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSupport;

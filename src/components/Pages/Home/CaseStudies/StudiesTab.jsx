"use client";

import Image from "next/image";

const StudiesTab = ({ tabData, activeTab, setActiveTab }) => {
  return (
    <div className="py-5 md:py-8 flex flex-col gap-2 md:gap-4">
      {tabData.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`studies_tab flex justify-center items-center p-4 md:p-6 cursor-pointer border-t-2 md:border-t-0 md:border-l-4 transition-all duration-300 ${
            activeTab === tab.id
              ? "border-primary bg-white/10"
              : "border-transparent bg-transparent hover:bg-white/5"
          }`}
        >
          <div className="w-24 md:w-32 flex items-center justify-center opacity-75 hover:opacity-100 transition">
            <Image
              width={128}
              height={40}
              src={tab.logo}
              alt={tab.name || "Client Logo"}
              className="object-contain max-h-8 md:max-h-10 filter brightness-100"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudiesTab;
"use client";
import { useState } from "react";
import DisplayWorks from "./ShowWorks/ShowWorks";

const MainWorkTab = ({ worksData }) => {
      const [activeTab, setActiveTab] = useState(worksData[0]);
// console.log(worksData)
      return (
            <div className="show_work">
                  <div className="tab_section flex flex-wrap items-center justify-center  py-2 md:py-5">
                        {worksData?.map((tab, i) => (
                              <p key={i}
                                    onClick={() => setActiveTab(tab)} // Set active tab on click
                                    className={`text-center text-sm uppercase md:text-base p-1 rounded px-3 cursor-pointer ${activeTab.category === tab.category ? "bg-primary text-white" : "text-[#443F34]"
                                          }`}
                              >
                                    {tab.category}
                              </p>
                        ))}
                  </div>
                  <div className="ll">
                     {
                        activeTab?.category ?
                        <DisplayWorks activeTab={activeTab}></DisplayWorks>
                        :
                        <p className="text-2xl font-semibold text-center text-gray-400">Select service</p>
                     }
                  </div>
            </div>
      );
};

export default MainWorkTab;

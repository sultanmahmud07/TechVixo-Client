"use client"
import Image from 'next/image'
import { BsCheck2Circle } from "react-icons/bs";
import { useState } from 'react'
import Link from 'next/link'

const ServiceSupport = ({ data }) => {
      const [activeTab, setActiveTab] = useState(data?.tabData[0]);
      const tab = 1
      const handleTabActive = (tab) => {
            setActiveTab(tab)

      }
      return (
            <div className="my-5 md:my-16">
                  <div className="main_container">
                        <div className="top_title_design flex flex-col items-center">
                              <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
                                    {data?.title}
                              </h2>
                              <p className='text-[#111204CC] text-center w-full md:w-1/2'>
                                    {data?.description}
                              </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-5 my-5 md:mt-10">
                              <div className="service_support_left w-full md:w-1/4">
                                    {data?.tabData?.map((tab) => (
                                          <p
                                                key={tab.id}
                                                onClick={() => handleTabActive(tab)} // Set active tab on click
                                                className={`studies_tab font-semibold capitalize p-3 md:p-5 cursor-pointer border-b-4 ${activeTab.id === tab.id ? "border-primary bg-[#1cf7741e]" : " border-white"
                                                      }`}
                                          >
                                                {tab.name}
                                          </p>
                                    ))}
                              </div>
                              <div className=" w-full md:w-3/4">
                                    {
                                          activeTab &&
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 bg-white p-3 md:p-5 rounded shadow">
                                                <div className="ll">
                                                      <h5 className='text-xl md:text-2xl font-semibold text-primary my-2 flex items-center gap-3'><span><BsCheck2Circle /></span> {activeTab.name}</h5>
                                                      <p>{activeTab.description}</p>
                                                      <Link href={"/contact"} type="button" className=" mt-2 md:mt-3 bg-primary transition hover:bg-secondary hover:text-white rounded shadow p-2 px-4">
                                                            Send me proposal
                                                      </Link>
                                                </div>
                                                <div className="ll">
                                                      <Image
                                                            width={600}
                                                            height={400}
                                                            src={activeTab?.logo}
                                                            alt={"image"}
                                                            className="w-full rounded-md"
                                                      />
                                                </div>
                                          </div>
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default ServiceSupport
import Image from 'next/image'
import image from "@@/images/services/category/technology.png";

const ToolsAndTechnology = ({ }) => {

      const data = [
            {
                  id: 1,
                  title: "Google Search Console & Google Analytics",
                  description: "Conduct keyword research, backlink analysis, and competitive research for data-driven strategies"
            },
            {
                  id: 1,
                  title: "Google Search Console & Google Analytics",
                  description: "Conduct keyword research, backlink analysis, and competitive research for data-driven strategies"
            },
            {
                  id: 1,
                  title: "Google Search Console & Google Analytics",
                  description: "Conduct keyword research, backlink analysis, and competitive research for data-driven strategies"
            },
            {
                  id: 1,
                  title: "Google Search Console & Google Analytics",
                  description: "Conduct keyword research, backlink analysis, and competitive research for data-driven strategies"
            },
            {
                  id: 1,
                  title: "Google Search Console & Google Analytics",
                  description: "Conduct keyword research, backlink analysis, and competitive research for data-driven strategies"
            },
            {
                  id: 1,
                  title: "Google Search Console & Google Analytics",
                  description: "Conduct keyword research, backlink analysis, and competitive research for data-driven strategies"
            },
      ]
      return (
            <div className='my-5 md:my-10 '>
                  <div className="main_container">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                              <div className="left_image hidden md:block w-full md:w-2/5">
                                    <Image
                                          src={image}
                                          alt="tools and technology image"
                                          width={600}
                                          height={800}
                                          className="w-full "
                                    />
                              </div>
                              <div className="right_site w-full md:w-3/5">
                                    <div className="top_title pb-5 md:pb-10">
                                          <h2 className="text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5 ">
                                                Tools & Technologies We Use
                                          </h2>
                                          <p className='text-[#111204CC] font-medium my-2'>At Digimatric, we leverage industry-leading SEO tools to ensure accuracy, efficiency, and measurable growth in your search engine rankings.</p>
                                    </div>
                                    <div className="grid grid-cols-1 py-5 md:pt-10 md:grid-cols-2 gap-3 md:gap-5 md:gap-y-10">
                                          {
                                                data?.map((process, i) => {
                                                      return (
                                                            <div key={i} className="process_card flex flex-col gap-2">
                                                                  <div className="number">
                                                                        <span className='text-primary font-normal text-2xl md:text-4xl'>0{i + 1}</span>
                                                                  </div>
                                                                  <h4 className='text-base md:text-lg font-semibold text-[#111204]'>{process?.title}</h4>
                                                                  <p className='text-sm md:text-base'>{process?.description}</p>

                                                            </div>
                                                      )
                                                })
                                          }
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default ToolsAndTechnology;
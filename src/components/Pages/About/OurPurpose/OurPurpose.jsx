

const OurPurpose = () => {
      const ourPurposeData = [
            {
                  id: 1,
                  title: "Our Mission",
                  description: "Our mission is to deliver digital solutions that meet and exceed expectations. We aim to help businesses achieve their growth targets and establish strong, lasting connections in the digital space.",
            },
            {
                  id: 1,
                  title: "Our Vision",
                  description: "We envision a world where technology empowers creativity and innovation. Our goal is to become a global leader in digital transformation, delivering lasting value to businesses and individuals worldwide. By constantly pushing the boundaries of innovation, we aim to shape a better, more connected digital future.",
            },
      ]
      return (
            <div className='my-5 md:my-10 '>
                  <div className="main_container">
                        <div className="top_title_design flex flex-col items-center">
                              <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
                                    Our Purpose
                              </h2>
                              <p className='text-[#111204CC] text-center w-full md:w-3/4'>At DigiMatric, our purpose is simple yet profound: to create digital solutions that genuinely make a difference. We are passionate about using innovation and collaboration to solve problems, enhance experiences, and bring ideas to life. We don’t just aim to help businesses and individuals grow—we aspire to inspire them to thrive in an ever-evolving digital world. Our mission is to be the bridge that connects our clients to their goals, enabling them to succeed and excel.</p>
                              {/* <p className='text-[#111204CC] text-center w-full md:w-3/4'>We don’t just aim to help businesses and individuals grow—we aspire to inspire them to thrive in an ever-evolving digital world. Our mission is to be the bridge that connects our clients to their goals, enabling them to succeed and excel.</p> */}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-0 py-2 md:py-6">
                              {
                                    ourPurposeData?.map((item, i) => {
                                          return (
                                                <div key={i} className={`${i == 0 ? "md:border-r border-black md:pr-10" : "md:pl-10"} md:pb-5`}>
                                                      <h4 className="text-[#232323] my-2 md:my-3 text-xl md:text-2xl">{item.title}</h4>
                                                      <p className='text-[#111204CC]  '>{item.description}</p>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </div>
            </div>
      )
}

export default OurPurpose
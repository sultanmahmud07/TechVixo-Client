import img1 from "@@/images/about/cards/1.png";
import img2 from "@@/images/about/cards/2.png";
import Image from "next/image";

const AboutCards = () => {
      const aboutData = [
            {
                  id: 1,
                  title: "Serving Consumers",
                  description1: "We focus on improving our customers' digital experience. We design our solutions with the user in mind, ensuring seamless and satisfying interactions. We're here to meet the needs of today's consumers by delivering reliable and easy-to-use services.",
                  description2: "We are here to meet the modern consumer’s needs by providing services that are as easy to use as they are impactful. With DigiMatric, the digital world becomes simpler, more accessible, and more enjoyable.",
                  link: "https://www.saudelevator.com.bd.luxury",
                  img: img1,
                  keys: {
                        title: "What Sets Us Apart:",
                        list: [
                              "Intuitive and user-centric designs that make every interaction effortless.",
                              "Reliable services that deliver consistent value to our customers.",
                              "A commitment to enhancing the digital experience for all, regardless of technical background.",
                        ]
                  }
            },
            {
                  id: 1,
                  title: "Empowering Businesses",
                  description1: "Whether you’re a small startup looking to make your mark or a well-established company aiming for the next big milestone, DigiMatric is your partner in growth. We leverage the latest strategies and technologies to help businesses unlock their potential.",
                  description2: "By tailoring our services to meet your unique needs, we ensure your business stays ahead of the competition. With DigiMatric, you’re not just keeping up—you’re leading the way.",
                  link: "https://www.saudelevator.com.bd.luxury",
                  img: img2,
                  keys: {
                        title: "Our Business Solutions Include",
                        list: [
                              "Digital Marketing: From SEO to PPC campaigns, we drive targeted traffic and generate leads.",
                              "Web Development: We build responsive, high-performing websites that create lasting impressions.",
                              "E-commerce Solutions: Scale your online store with advanced tools and strategies.",
                              // "Brand Identity: Establish a compelling brand that resonates with your audience.",
                        ]
                  }
            }
      ]
      return (
            <div className="my-5 md:my-10">
                  <div className="main_container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
                              {
                                    aboutData?.map((service, i) => {
                                          return (
                                                <div key={i} className="flex flex-col gap-2 md:gap-3">
                                                      <div className="w-full">
                                                            <Image
                                                                  src={service.img}
                                                                  alt="service-icon"
                                                                  width={600}
                                                                  height={400}
                                                                  className="w-full"
                                                            />
                                                      </div>
                                                      <h4 className=" text-[#282828] text-xl md:text-2xl font-semibold capitalize">
                                                            {service?.title}
                                                      </h4>
                                                      <p className="text-sm md:text-base">
                                                            {service?.description1}
                                                      </p>
                                                      <div className="keys">
                                                <p  className='font-semibold my-2 text-[#111204]'>{service.keys.title}</p>
                                                <ul className='flex flex-col gap-1 list-disc pl-4'>
                                                     {
                                                      service?.keys?.list?.map((key, i) => {
                                                            return(
                                                                  <li className='text-sm text-black' key={i}>{key}</li>
                                                            )
                                                      })
                                                     }
                                                </ul>
                                              </div>
                                              <p className="text-sm md:text-base">
                                                            {service?.description2}
                                                      </p>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </div>
            </div>
      )
}

export default AboutCards
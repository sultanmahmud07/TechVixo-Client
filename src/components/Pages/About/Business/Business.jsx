import Image from "next/image"
import aboutImg from "@@/images/about/business.png"
import Link from "next/link"

const Business = () => {
      return (
            <div className="py-6 md:py-16">
                  <div className="main_container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
                              <div className="left_site flex flex-col gap-2">
                                    <h3 className="text-2xl md:text-4xl my-2 md:my-4 text-[#000000] font-bold">Our Business</h3>
                                    <p className="">DigiMatric takes pride in being a trusted partner for businesses and consumers alike. By fusing creativity, expertise, and cutting-edge technology, we craft digital solutions that are not only innovative but also practical and results-oriented.
                                    </p>
                                    <p className="">We understand that a business&apos;s success is measured by its ability to adapt, grow, and meet the evolving needs of its audience. That’s why our solutions are designed to do more than support growth they fuel it. We ensure your business thrives in an increasingly competitive market by aligning our strategies with your unique goals.
                                    </p>
                                    <p className="">From improving operational efficiency to amplifying your online presence, DigiMatric is here to turn your vision into reality.
                                    </p>
                                    <Link href="/contact" className="p2-4 md:pt-6">
                                          <button className="bg-primary  text-sm py-3 px-7 hover:text-white  hover:bg-secondary transition rounded">
                                                Lets Talk
                                          </button>
                                    </Link>
                              </div>
                              <div className="right_site">
                                    <Image
                                          width={600}
                                          height={400}
                                          src={aboutImg}
                                          alt={"service-image"}
                                          className="w-full rounded md:rounded-2xl"
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Business;
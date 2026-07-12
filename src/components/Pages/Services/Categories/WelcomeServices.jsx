import Image from "next/image"
import Link from "next/link"
import image from "@@/images/services/category/welcom-category.png"

const WelcomeServices = () => {
      return (
            <div className="py-6 md:pt-16">
                  <div className="main_container">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-3 md:gap-8">
                              <div className="left_site w-full md:w-3/5">
                                    <h3 className="text-2xl md:text-4xl text-[#000000] font-bold">
                                          Transform Your Website into a Robust Professional Communication Tool
                                    </h3>
                                    <div className="flex flex-col gap-2 py-2 md:pt-5">
                                          <p className="">Your website is more than just a digital presence; it is your brand&apos;s most visible and valuable salesperson. From the moment visitors land on your site, they begin forming opinions about your business. Every detail—from the design to the user experience (UX), copy, mobile performance, and page load speeds—must instill trust and confidence.</p>
                                          <p className="">At DigiMatric, we specialize in transforming websites into high-performing, visually stunning platforms that reflect the quality of your business. We optimize your digital presence to ensure you:</p>
                                    </div>
                                    <Link href="/contact" className="p2-4 md:pt-6 hidden md:block">
                                          <button className="bg-primary  text-sm py-3 px-7 hover:text-white  hover:bg-secondary transition rounded">
                                                Lets Talk
                                          </button>
                                    </Link>
                              </div>
                              <div className="right_site w-full md:w-2/5">
                                    <Image
                                          width={600}
                                          height={400}
                                          src={image}
                                          alt={"service-image"}
                                          className="w-full"
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default WelcomeServices;

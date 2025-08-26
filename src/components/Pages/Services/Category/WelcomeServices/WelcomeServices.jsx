import Image from "next/image"
import Link from "next/link"
import image from "@@/images/services/category/welcom-category.png"

const WelcomeServices = ({data}) => {

      return (
            <div className="py-6 md:pt-16">
                  <div className="main_container">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-3 md:gap-8">
                              <div className="left_site w-full md:w-3/5">
                                    <h3 className="text-2xl md:text-4xl text-[#000000] font-bold">SEO Services: Drive Organic Growth & Dominate Search Rankings</h3>
                                    <div className="flex flex-col gap-2 py-2 md:pt-5">
                                          {/* {
                                                data?.description.map((pera, i) => {
                                                      return (
                                                            <p className="" key={i}>{pera}</p>

                                                      )
                                                })
                                          } */}
                                          <p className="">In today’s competitive digital landscape, having a website isn’t enough—you need to ensure it ranks at the top of search results to attract potential customers. Search Engine Optimization (SEO) is the key to achieving this.</p>
                                          <p className="">In today’s competitive digital landscape, having a website isn’t enough—you need to ensure it ranks at the top of search results to attract potential customers. Search Engine Optimization (SEO) is the key to achieving this.</p>
                                          <p className="">In today’s competitive digital landscape, having a website isn’t enough—you need to ensure it ranks at the top of search results to attract potential customers. Search Engine Optimization (SEO) is the key to achieving this.</p>
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
                                          src={data?.img || image}
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
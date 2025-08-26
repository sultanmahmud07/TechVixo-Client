import Image from "next/image";
import img from "@@/images/services/category/key-img.png";
import icon from "@@/images/services/details-image/check-icon.svg";

const KeyComponentsAndTools = ({data}) => {
      const keyData = [
            {
                id: 1
            },
            {
                id: 1
            },
            {
                id: 1
            },
            {
                id: 1
            },
        ]
      return (
            <div className="py-8 md:py-16 my-5 md:my-10 bg-secondary text-white">
                  <div className="main_container">
                        <div className="flex flex-col gap-3 md:gap-5">
                              <div className="card_1 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
                                    <div className="right_site">
                                          <Image
                                                width={600}
                                                height={400}
                                                src={img}
                                                alt={"service-image"}
                                                className="w-full"
                                          />
                                    </div>
                                    <div className="left_site">
                                          <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Key Components of Our Local Services</h3>
                                          <div className="flex flex-col gap-2 py-2 md:pt-5">
                                                {
                                                      data?.item1?.description.map((pera, i) => {
                                                            return (
                                                                  <p className="" key={i}>{pera}</p>

                                                            )
                                                      })
                                                }
                                          </div>
                                    </div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3 my-4">
                    {
                        keyData?.map((facility, i) => {
                            return (
                                <div key={i} className="key_card w-full flex gap-2">
                                           <div className="key_icon w-40 pt-1">
                                               <Image
                                                   src={icon}
                                                   alt="service key icon"
                                                   width={50}
                                                   height={50}
                                                   className="w-full"
                                               />
                                           </div>
                                          <div className="">
                                          <h3 className="font-semibold mb-2 md:text-lg">{"Local Citations & NAP Consistency"}</h3>
                                          <p className="text-sm">{"Local citations—mentions of your business on various local directories—are an essential part of local SEO. At Digimatric, we ensure your NAP (Name, Address, and Phone number) is consistent across all directories and listings"}</p>
                                          </div>
                                       </div>
                            )
                        })
                    }
                </div>
                        </div>
                  </div>
            </div>
      )
}

export default KeyComponentsAndTools;
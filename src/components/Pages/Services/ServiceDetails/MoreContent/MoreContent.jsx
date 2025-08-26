import Image from "next/image";

const MoreContent = ({ data }) => {
const moreContent = [
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
            <div className="main_container py-5 md:py-10">
                  <div className="flex flex-col gap-3 md:gap-5">
                        {data?.map((section, index) => {

                              return (
                                    <div
                                          key={index}
                                          className={`flex flex-col gap-3 md:gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                                }`}
                                    >
                                          {/* Image */}
                                          <div className="w-full md:w-2/5">
                                                <Image
                                                      width={600}
                                                      height={400}
                                                      src={section?.img}
                                                      alt={"service-images"}
                                                      className="w-full h-auto object-cover"
                                                />
                                          </div>
                                          {/* Text */}
                                          <div className="w-full text-[#000000] md:w-3/5 flex flex-col justify-center">
                                                <h2 className="text-2xl md:text-3xl font-bold my-2 md:my-3 text-secondary">
                                                      {section.title}
                                                </h2>
                                                {section?.description.map((item, idx) => (
                                                      <p className="text-sm md:text-base" key={idx}>
                                                            {item}
                                                      </p>
                                                ))}
                                          </div>
                                    </div>
                              );
                        })}
                  </div>
                  <div className="flex flex-col gap-3 md:gap-5 py-10">
                 {
                  moreContent?.map((content, i) => {
                        return(
                              <div key={i} className="w-full">
                              <h2 className="text-2xl md:text-4xl font-bold my-2 md:my-3 text-secondary">
                              Online Reputation Management & Reviews
                              </h2>
                              <p className="text-sm md:text-base">
                                         Customer reviews are a powerful tool for improving your business local rankings and trustworthiness. At Digimatric, we help businesses actively manage their online reputation to ensure they appear credible and reliable in local search results. Positive reviews not only enhance visibility but also serve as social proof, influencing potential customers decisions. Reviews on Google, Yelp, and other industry-specific platforms play a major role in driving more local traffic to your business.To encourage positive reviews, we implement strategies that make it easy for satisfied customers to leave feedback. This includes sending follow-up emails or text messages with review prompts, integrating review request buttons on your website, and using tools that automate review generation. Consistent positive reviews help boost your rankings in Google’s Local Pack, improving your business visibility in local searches.Equally important is how you handle negative reviews. We guide our clients on how to respond to negative feedback in a professional and constructive manner, addressing concerns and offering solutions. A well-crafted response can turn a dissatisfied customer into a loyal one, demonstrating your commitment to customer satisfaction.
                                    </p>
                        </div>
                        )
                  })
                 }
                  </div>
            </div>
      );
};

export default MoreContent;

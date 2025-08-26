import Link from 'next/link'

const Process = () => {
      const processData = [
            {
                  id: 1,
                  title: "Understanding Your Goals",
                  description: "We start by listening to your needs and objectives. Through consultations and brainstorming sessions, we gain a thorough understanding of your business and digital goals. This helps us outline a clear roadmap to success.",
                  keyTitle: "Key Highlights:",
                  keys: [
                        "Identify target audience and business goals.",
                        "Align on project vision and key performance indicators (KPIs).",
                  ],
                  link: ""
            },
            {
                  id: 1,
                  title: "Comprehensive Research and Planning",
                  description: "Our team conducts in-depth research to assess industry trends, analyze competitors, and identify opportunities. Using data-driven insights, we craft a customized strategy tailored to your business objectives.",
                  keyTitle: "Key Tools and Insights:",
                  keys: [
                        "Competitor analysis and keyword research.",
                        "SEO strategies, PPC campaigns, and branding recommendations.",
                        "STools: Site Explorer, Backlink Analysis, Keyword Research 2.0.",
                  ],
                  link: ""
            },
            {
                  id: 1,
                  title: "Creative Planning and Design",
                  description: "For design-focused projects, we create visually stunning and user-friendly concepts. Our UX/UI designers ensure your brand identity is represented effectively while enhancing functionality and user experience.",
                  keyTitle: "Key Deliverables:",
                  keys: [
                        "UX/UI design tailored to business goals.",
                        "Branding solutions that balance creativity and functionality.",
                  ],
                  link: ""
            },
            {
                  id: 1,
                  title: "Build and Execution",
                  description: "With strategies and designs in place, our development team brings your vision to life. We develop responsive websites, mobile apps, and implement digital marketing campaigns across platforms like Google Ads and social media.",
                  keyTitle: "Key Highlights:",
                  keys: [
                        "Responsive web design and progressive mobile apps.",
                        "Multi-platform digital marketing campaigns.",
                  ],
                  link: ""
            },
            {
                  id: 1,
                  title: "Testing and Quality Assurance",
                  description: "Before any launch, we conduct rigorous testing to ensure every detail is perfect. This includes technical SEO audits, campaign performance analysis, and user experience evaluations to guarantee flawless delivery.",
                  keyTitle: "Key Insights:",
                  keys: [
                        "Technical SEO and website performance testing.",
                        "Metrics analysis for marketing campaigns.",
                  ],
                  link: ""
            },
            {
                  id: 1,
                  title: " Launch and Continuous Optimization",
                  description: "Once the project goes live, we don’t stop there. We continuously monitor performance, optimize campaigns, and adapt to ensure maximum ROI. Our goal is to keep delivering measurable and impactful results for your business.",
                  keyTitle: "Key Focus Areas:",
                  keys: [
                        "E-commerce SEO and PPC campaign optimization.",
                        "Performance tracking and ROI-driven adjustments.",
                  ],
                  link: ""
            },
      ]
      return (
        <section className='py-5 md:py-10'>
              <div className="main_container">
              <div className="flex flex-col gap-4 md:gap-8">
                  <div className="flex flex-col gap-3 md:gap-5 my-3">
                        <h2 className="text-xl md:text-3xl text-[#111204] font-semibold capitalize">
                              At Digimatric
                        </h2>
                        <p className="text-sm md:text-base">
                        At Digimatric, we believe that success begins with a well-structured and client-focused process. Whether it’s digital marketing, web development, or SEO services, our goal is to deliver exceptional results through a collaborative and streamlined approach. Here’s an overview of our process:
                        </p>
                        <Link
                              href={`/services`}
                        >
                              <button type="button" className="inline-block text-sm shadow md:shadow-md bg-secondary p-2 px-3 md:px-10 rounded-md text-[#FFFFFF]">Here are overview of our process:</button>
                        </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:py-5 md:gap-10">
                        {
                              processData?.map((item, i) => {
                                    return (
                                          <div key={i} className='border-t border-white'>
                                                <div className="top flex items-center gap-2 md:gap-5">
                                                      <span className='text-primary font-semibold text-5xl md:text-8xl'>0{i + 1}</span>
                                                      <h6 className='text-xl text-[#111204]'>{item.title}</h6>
                                                </div>
                                                <p className='text-sm md:text-base py-2 md:pt-4'>{item.description}</p>
                                              <div className="keys">
                                                <p  className='font-semibold my-2 text-[#111204]'>{item.keyTitle}</p>
                                                <ul className='flex flex-col gap-1 list-disc pl-3'>
                                                     {
                                                      item?.keys?.map((key, i) => {
                                                            return(
                                                                  <li className='text-sm text-black' key={i}>{key}</li>
                                                            )
                                                      })
                                                     }
                                                </ul>
                                              </div>
                                          </div>
                                    )
                              })
                        }
                  </div>
            </div>
          </div>
        </section>
      )
}

export default Process
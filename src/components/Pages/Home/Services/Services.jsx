import img1 from '@@/images/home/service/1.png'
import img2 from '@@/images/home/service/2.png'
import img3 from '@@/images/home/service/3.png'
import img4 from '@@/images/home/service/4.png'
import img5 from '@@/images/home/service/5.png'
import img6 from '@@/images/home/service/6.png'
import { FaArrowCircleRight } from "react-icons/fa";
import ServiceCard from './ServiceCard'
import Link from 'next/link'

const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: "Digital Marketing",
            des: "We specialize in data-driven digital marketing that delivers measurable results. Our comprehensive strategies are built to reach your target audience, increase conversions, and enhance your online presence.",
            icon: img1,
            link: "/digital-marketing"
        },
        {
            id: 1,
            title: "Search Engine Optimization-SEO",
            des: "Our SEO services are designed to improve your website’s ranking on Google and other search engines. We optimize your site for organic growth, ensuring you attract quality traffic and maximize visibility.",
            icon: img2,
            link: "/search-engine-optimization-seo"
        },
        {
            id: 1,
            title: "Development",
            des: "Digimatric is committed to delivering custom development solutions for web and mobile platforms. From responsive websites to scalable mobile apps, we ensure that your digital infrastructure is ready for the future.",
            icon: img3,
            link: "/development"
        },
        {
            id: 1,
            title: "Design",
            des: "Our design team focuses on creating stunning, user-centric designs that engage and convert. Whether you need UI/UX design, branding, or web design, our team will deliver creative solutions that reflect your brand’s values.",
            icon: img4,
            link: "/design"
        },
        {
            id: 1,
            title: "Social Media Marketing",
            des: "With social media marketing, we help your business connect with a broader audience on platforms like Facebook, Instagram, LinkedIn, and Twitter. Our approach builds brand loyalty and enhances customer engagement.",
            icon: img5,
            link: "/digital-marketing/social-media-marketing"
        },
        {
            id: 1,
            title: "Content Writing",
            des: "Create meaningful connections with your audience through SEO content writing, copywriting, and content marketing strategies. We craft compelling narratives that resonate with your target market while boosting your search engine rankings.",
            icon: img6,
            link: "/content-writing"
        }
    ]
    return (
        <div className='my-5 md:my-10 pt-8 md:pt-8'>
            <div className="main_container">
                <div className="top_title_design flex flex-col items-center">
                    <h2 className="text-center text-3xl md:text-5xl font-bold text-[#111204] my-3 md:my-5">
                        Our Service
                    </h2>
                    <p className='text-[#111204CC] text-center w-full md:w-1/2'>At Digimatric, we provide a full suite of digital marketing services designed to boost your brand&apos;s visibility and performance across all platforms.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 pt-3 md:pt-6">
                    {
                        servicesData?.map((service, i) => {
                            return (
                                <ServiceCard key={i} service={service}></ServiceCard>
                            )
                        })
                    }
                </div>
                <div className="flex items-center justify-center pt-3">
                    <Link href={"/services"}>
                        <button type="button" className="flex items-center gap-2 md:mt-5 bg-primary hover:bg-secondary hover:text-white rounded shadow p-2 px-4">
                            <span>Load More</span>
                            <span><FaArrowCircleRight /></span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Services
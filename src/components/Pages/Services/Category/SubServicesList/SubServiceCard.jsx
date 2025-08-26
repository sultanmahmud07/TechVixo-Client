import generateSlug from "@/components/Shared/generateSlug";
import Image from "next/image";
import Link from "next/link";
import icon from "@@/images/services/category/service/service-image.png";
import { FaArrowCircleRight } from "react-icons/fa";


const SubServiceCard = ({ service, category }) => {
    const { service_name, service_icon } = service;
    const categorySlug = generateSlug("llllll");
    const serviceSlag = generateSlug("service_name")
    return (
        <div className="service_card rounded-md shadow gap-2 bg-white p-3 md:p-5 h-full">
            <div className="service_icon w-full">
                <Image
                    src={icon}
                    alt="service image"
                    width={400}
                    height={300}
                    className="w-full"
                />
            </div>
            <h4 className="text-xl md:text-2xl text-primary my-2 pt-2">{service_name || "Local SEO"}</h4>
            <p>{"What is Local SEO? Local SEO is designed to help businesses increase visibility in geo-targeted search results. If you own a local business, optimizing for “near me” searches ensures that potential customers find you quickly..."}</p>
            <Link href={`/${serviceSlag}`}>
             <button type="button" className="flex items-center gap-2 mt-3 md:mt-5 bg-primary hover:bg-secondary hover:text-white rounded shadow p-2 px-4">
                                   <span>Load More</span>
                                   <span><FaArrowCircleRight /></span>
                               </button>
            </Link>
        </div>
    )
}

export default SubServiceCard
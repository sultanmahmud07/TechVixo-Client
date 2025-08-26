import Image from "next/image";
import icon from "@@/images/services/category/why-need-service-icon.svg";


const WhyNeedCard = ({ facility }) => {
    const { service_name, service_icon } = facility;
    return (
        <div className="need_card bg-white flex flex-col items-center  gap-1 p-2 md:p-3 border border-primary shadow md:shadow-lg">
            <div className="service_icon bg-[#2ECC711A] w-16 md:w-20 p-3">
                <Image
                    src={icon}
                    alt="service facility icon"
                    width={200}
                    height={200}
                    className="w-full"
                />
            </div>
            <h3 className="text-center text-base md:text-lg font-bold text-[#111204]">{service_name || "Higher Conversion Rates"}</h3>
            <p className="text-center text-sm">{"Local searches often reflect a higher purchase intent, meaning users who search for local services are more likely to take action—whether that’s making a phone call, visiting your store, or completing a purchase online. Local SEO puts you in front of people who are already looking for services in your area, leading to higher conversion rates."}</p>
        </div>
    )
}

export default WhyNeedCard
import Image from "next/image";
import icon from "@@/images/services/category/why-need-service-icon.svg";


const WorkCard = ({ facility }) => {
    const { service_name, service_icon } = facility;
    return (
        <div className="need_card bg-white flex flex-col  gap-2 md:gap-3 p-3 md:p-6 md:py-8 shadow md:shadow-lg rounded-md md:rounded-xl">
            <div className="service_icon bg-[#2ECC711A] w-12 md:w-14 p-3">
                <Image
                    src={icon}
                    alt="service facility icon"
                    width={200}
                    height={200}
                    className="w-full"
                />
            </div>
            <h3 className="text-base md:text-lg font-bold text-[#111204]">{service_name || "Website Audit and Analysis"}</h3>
            <p className="text-sm">{"We assess your current site’s performance, including its SEO structure, mobile compatibility, and user experience to identify areas of improvement."}</p>
        </div>
    )
}

export default WorkCard
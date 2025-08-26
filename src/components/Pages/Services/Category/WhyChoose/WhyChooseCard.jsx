import Image from "next/image";
import icon from "@@/images/services/category/facilities/choose-icon.svg";


const WhyChooseCard = ({ facility }) => {
    const { service_name, service_icon } = facility;
    return (
        <div className="facility_card border border-primary flex flex-col items-center justify-center gap-2 p-2 md:p-5">
            <div className="service_icon w-12 md:w-14">
                <Image
                    src={icon}
                    alt="service facility icon"
                    width={200}
                    height={200}
                    className="w-full"
                />
            </div>
            <h3 className="text-center font-semibold my-2">{service_name || "I Expertise and Proven Track Record"}</h3>
            <p className="text-center text-sm">{"With years of experience in SEO, we have helped businesses across industries achieve top rankings on Google. Our team stays updated with the latest algorithm changes to ensure compliance with Google’s best practices."}</p>
        </div>
    )
}

export default WhyChooseCard
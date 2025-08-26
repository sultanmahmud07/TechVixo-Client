import Image from "next/image";
import icon from "@@/images/services/category/facilities/facility-icon.svg";


const ServiceFacility = ({ facility }) => {
    const { service_name, service_icon } = facility;
    return (
        <div className="facility_card flex flex-col items-center justify-center gap-1 p-2">
            <div className="service_icon w-20 md:w-24">
                <Image
                    src={icon}
                    alt="service facility icon"
                    width={200}
                    height={200}
                    className="w-full"
                />
            </div>
            <h3 className="text-center text-lg font-bold text-[#111204]">{service_name || "Increases Online Visibility"}</h3>
            <p className="text-center">{"Higher rankings lead to more organic traffic"}</p>
        </div>
    )
}

export default ServiceFacility
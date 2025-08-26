import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const WorkCard = ({ service }) => {
    const { img } = service;
    return (
        <div className="h-full">
            <h6 className="bg-white text-lg p-4 md:p-6 mb-2 text-[#111204] font-semibold capitalize">
                {service?.title}
            </h6>
            <div className="w-full">
                <Image
                    src={img[0]}
                    alt="service-icon"
                    width={200}
                    height={200}
                    className="w-full"
                />
            </div>
            <div className="flex flex-col gap-3 pt-2 md:gap-5 my-3">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <h4 className=" text-[#111204CC] font-semibold capitalize">
                            {service?.name}
                        </h4>
                        <Link
                            href={`/services/${service?.link}`}
                        >
                            <button type="button" className="inline-block text-sm shadow md:shadow-md bg-secondary p-2  rounded-md text-[#FFFFFF]">{service?.link}</button>
                        </Link>
                    </div>
                    <Link
                    target="blank"
                            href={`${service?.link}`}
                        >
                            <button type="button" className="inline-block text-xl md:text-2xl font-bold shadow md:shadow-md bg-secondary p-2  rounded-md text-primary"><GoArrowUpRight /></button>
                        </Link>
                </div>

                <p className="text-sm md:text-base">
                    {service?.description}
                </p>
            </div>
        </div>
    )
}

export default WorkCard
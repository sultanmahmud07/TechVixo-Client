import Image from "next/image";
import serviceIcon from "@@/images/services/service-icon.svg";
import Link from "next/link";
import generateSlug from "@/components/Shared/generateSlug";

const ServiceCategory = ({ data }) => {
  const { category_id, button, category_name, description, services } = data;
const  slug = generateSlug(data?.category_name)
  // console.log("serviceData:", slug)
  return (
    <div>
      <div className="flex flex-col gap-3 md:gap-5 my-3">
        <h2 className="text-2xl md:text-3xl text-[#111204] font-semibold capitalize">
          {category_name}
        </h2>
        <p className="text-sm md:text-base">
          {description}
        </p>
        <Link
          href={`/services/${slug}`}
        >
          <button type="button" className="inline-block text-sm shadow md:shadow-md bg-secondary p-2 px-3 md:px-10 rounded-md text-[#FFFFFF]">{button}</button>
        </Link>
      </div>
      <div className="service_list flex flex-col gap-5 md:gap-8 my-3 md:my-10">
        {
          services?.map((service, i) => {
            return (
              <div key={i} className="service_s">
                <h4 className="text-[#111204CC] text-md md:text-xl font-semibold capitalize">
                  {service?.service_name}
                </h4>
                <div className="service_item grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 my-3 md:my-5">
                  {
                    service?.sub_services?.map((item, i) => {
                      return (
                        <div key={i} className="service_item bg-white p-2 md:p-4 rounded">
                         <div className="bg-[#00a31613] w-16 rounded flex items-center justify-center p-4">
                         <Image
                            width={100}
                            src={serviceIcon}
                            alt={item?.title}
                            className="w-full"
                          />
                         </div>
                          <h6
                            style={
                              {
                                fontWeight: 500
                              }
                            } className="text-[#111204CC] text-sm my-2">
                            {item?.title}
                          </h6>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ServiceCategory;

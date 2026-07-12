import Image from "next/image";

const ServiceFacilities = () => {
  const facilities = [
    {
      id: 1,
      title: "Increases Online Visibility",
      description: "Higher rankings lead to more organic traffic",
      icon: "/assets/images/services/category/design/icon/1.svg"
    },
    {
      id: 2,
      title: "Increases Online Visibility",
      description: "Higher rankings lead to more organic traffic",
      icon: "/assets/images/services/category/design/icon/2.svg"
    },
    {
      id: 3,
      title: "Increases Online Visibility",
      description: "Higher rankings lead to more organic traffic",
      icon: "/assets/images/services/category/design/icon/3.svg"
    },
    {
      id: 4,
      title: "Increases Online Visibility",
      description: "Higher rankings lead to more organic traffic",
      icon: "/assets/images/services/category/design/icon/1.svg"
    }
  ];

  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        <h3 className="sut_title text-center uppercase">SEO HELPS</h3>
        <div className="top_title_design flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
            How SEO Helps Businesses Grow Online
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 pt-3 md:pt-6">
          {facilities.map((facility, i) => (
            <div key={i} className="facility_card flex flex-col items-center justify-center gap-1 p-2">
              <div className="service_icon w-16 md:w-20">
                <Image
                  src={facility.icon}
                  alt={facility.title}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <h3 className="text-center text-sm md:text-lg font-bold text-[#111204] mt-2">{facility.title}</h3>
              <p className="text-center text-xs md:text-sm text-[#111204CC]">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFacilities;

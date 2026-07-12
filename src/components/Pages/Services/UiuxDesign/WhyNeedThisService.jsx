import Image from "next/image";
import icon from "@@/images/services/category/why-need-service-icon.svg";

const WhyNeedThisService = () => {
  const facilities = [
    {
      id: 1,
      title: "Deliver Exceptional UX",
      description: "Craft intuitive, seamless user experiences that keep visitors engaged, minimize user friction, and reduce bounce rates."
    },
    {
      id: 2,
      title: "Aesthetic Visual Appeal",
      description: "Create modern, visually stunning interfaces that align with your brand guidelines and establish immediate user trust."
    },
    {
      id: 3,
      title: "Drive Higher Conversions",
      description: "Optimize component placement, navigation patterns, and call-to-actions to turn visitors into leads and customers."
    },
    {
      id: 4,
      title: "Responsive Across Devices",
      description: "Ensure flawless design scaling, accessibility, and loading speeds on smartphones, tablets, and desktops."
    }
  ];

  return (
    <div className="my-6 md:my-14">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
            Why Your Business Needs UX Design
          </h2>
          <p className="text-[#111204CC] text-center w-full md:w-1/2">
            Increase Your Search Rankings and Drive More Targeted Traffic
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 pt-3 md:pt-6">
          {facilities.map((facility, i) => (
            <div key={i} className="need_card bg-white flex flex-col items-center gap-1 p-2 md:p-3 border border-primary shadow md:shadow-lg">
              <div className="service_icon bg-[#2ECC711A] w-16 md:w-20 p-3">
                <Image
                  src={icon}
                  alt={facility.title}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <h3 className="text-center text-base md:text-lg font-bold text-[#111204]">{facility.title}</h3>
              <p className="text-center text-sm">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyNeedThisService;

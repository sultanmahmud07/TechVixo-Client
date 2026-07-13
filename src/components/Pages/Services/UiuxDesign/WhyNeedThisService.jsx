import { FaUserCheck, FaMagic, FaChartLine, FaMobileAlt } from "react-icons/fa";

const WhyNeedThisService = () => {
  const facilities = [
    {
      id: 1,
      title: "Deliver Exceptional UX",
      description: "Craft intuitive, seamless user experiences that keep visitors engaged, minimize user friction, and reduce bounce rates.",
      icon: FaUserCheck
    },
    {
      id: 2,
      title: "Aesthetic Visual Appeal",
      description: "Create modern, visually stunning interfaces that align with your brand guidelines and establish immediate user trust.",
      icon: FaMagic
    },
    {
      id: 3,
      title: "Drive Higher Conversions",
      description: "Optimize component placement, navigation patterns, and call-to-actions to turn visitors into leads and customers.",
      icon: FaChartLine
    },
    {
      id: 4,
      title: "Responsive Across Devices",
      description: "Ensure flawless design scaling, accessibility, and loading speeds on smartphones, tablets, and desktops.",
      icon: FaMobileAlt
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
          {facilities.map((facility, i) => {
            const FacilityIcon = facility.icon;
            return (
              <div key={i} className="need_card bg-white flex flex-col items-center gap-1 p-4 border border-primary shadow md:shadow-lg rounded-xl">
                <div className="service_icon bg-[#2ECC711A] w-16 h-16 rounded-xl flex items-center justify-center mb-2">
                  <FacilityIcon className="text-[#2ECC71] text-2xl" />
                </div>
                <h3 className="text-center text-base md:text-lg font-bold text-[#111204]">{facility.title}</h3>
                <p className="text-center text-sm">{facility.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyNeedThisService;

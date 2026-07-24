import { FaChartLine, FaCoins, FaUserCheck, FaAward } from "react-icons/fa";

const ServiceFacilities = () => {
  const facilities = [
    {
      id: 1,
      title: "Organic Traffic Growth",
      description: "Higher search visibility brings in steady, unpaid visitors to your website.",
      icon: FaChartLine
    },
    {
      id: 2,
      title: "High Intent Leads & ROI",
      description: "Reach customers who are actively searching for your products and services.",
      icon: FaCoins
    },
    {
      id: 3,
      title: "Optimized User Experience",
      description: "Clean structures, fast load speeds, and readable copy satisfy both users and crawlers.",
      icon: FaUserCheck
    },
    {
      id: 4,
      title: "Brand Authority & Trust",
      description: "Page-one rankings establish trust, positioning your business as an industry leader.",
      icon: FaAward
    }
  ];

  return (
    <div className="my-5 md:my-14 bg-[#F8F9FA] py-12 rounded-xl">
      <div className="main_container">
        <h3 className="sut_title text-center uppercase">SEO HELPS</h3>
        <div className="top_title_design flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
            How SEO Helps Businesses Grow Online
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6">
          {facilities.map((facility, i) => {
            const FacilityIcon = facility.icon;
            return (
              <div key={i} className="facility_card bg-white flex flex-col items-center gap-2 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="service_icon bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-2">
                  <FacilityIcon className="text-primary text-2xl" />
                </div>
                <h3 className="text-center text-base md:text-lg font-bold text-[#111204] mt-2">{facility.title}</h3>
                <p className="text-center text-xs md:text-sm text-[#111204CC] leading-relaxed">{facility.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceFacilities;

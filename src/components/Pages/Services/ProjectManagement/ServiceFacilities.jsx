import Image from "next/image";

const ServiceFacilities = () => {
  const facilities = [
    {
      id: 1,
      title: "Scope Drift Control",
      description: "Meticulous requirement analysis and scope validation keep budgets and milestones strictly on track.",
      icon: "/assets/images/services/category/design/service-icon/1.png"
    },
    {
      id: 2,
      title: "Optimized Team Velocity",
      description: "Intelligent resource mapping ensures designers and engineers collaborate with high operational efficiency.",
      icon: "/assets/images/services/category/design/service-icon/2.png"
    },
    {
      id: 3,
      title: "Full Project Visibility",
      description: "Interactive roadmap Gantts and Kanban boards provide real-time updates on completed features.",
      icon: "/assets/images/services/category/design/service-icon/3.png"
    },
    {
      id: 4,
      title: "Launch Risk Mitigation",
      description: "Proactive bottleneck identification and early QA diagnostics ensure smooth production deployments.",
      icon: "/assets/images/services/category/design/service-icon/1.png"
    }
  ];

  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        <h3 className="sut_title text-center uppercase">MANAGEMENT HELPS</h3>
        <div className="top_title_design flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
            How Agile Project Coordination Delivers Success
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 pt-3 md:pt-6">
          {facilities.map((facility, i) => (
            <div key={i} className="facility_card flex flex-col items-center justify-start gap-1 p-3 border border-[#F1F1F1] rounded-lg shadow-sm hover:shadow-md transition bg-white">
              <div className="service_icon w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mb-2">
                <Image
                  src={facility.icon}
                  alt={facility.title}
                  width={100}
                  height={100}
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="text-center text-sm md:text-base font-bold text-[#111204] mt-2">{facility.title}</h3>
              <p className="text-center text-xs md:text-sm text-[#111204CC] mt-1">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFacilities;

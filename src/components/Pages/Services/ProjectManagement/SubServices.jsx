import Link from "next/link";
import { FaArrowCircleRight, FaCalendarAlt, FaSync, FaClipboardCheck } from "react-icons/fa";

const SubServices = () => {
  const services = [
    {
      id: 1,
      name: "Project Planning & Scoping",
      icon: FaCalendarAlt,
      slug: "project-planning-and-scoping",
      description: "We define concrete software boundaries. Through detailed scoping, UML diagramming, Gantt planning, and resource configurations, we establish a robust project blueprint before writing code."
    },
    {
      id: 2,
      name: "Agile Scrum Master Coordination",
      icon: FaSync,
      slug: "agile-development",
      description: "We implement efficient Agile pipelines. By conducting scrum sprint plans, backlog updates, daily review syncing, and sprint retros, we ensure fast and transparent release cycles."
    },
    {
      id: 3,
      name: "QA Coordination & Test Plans",
      description: "We manage project deliverables testing. We coordinate with dedicated engineers to organize manual usability checks, system-wide smoke runs, and regression tests.",
      icon: FaClipboardCheck,
      slug: "quality-assurance-and-testing"
    }
  ];

  return (
    <div className="my-10 md:my-14">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h3 className="sut_title">Services</h3>
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
            Our Management Core Competencies
          </h2>
          <p className="text-[#111204CC] text-center w-full md:w-3/5">
            At Digimatric, we turn technical ambiguity into scheduled sprints, clear checklists, and stable, deployable software.
          </p>
        </div>
        <div className="py-5 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const ServiceIcon = service.icon;
            return (
              <div key={i} className="service_card rounded-md shadow border border-[#F1F1F1] bg-white p-3 md:p-5 h-full flex flex-col justify-between hover:shadow-lg transition">
                <div>
                  <div className="service_icon w-full h-44 rounded overflow-hidden flex items-center justify-center mb-4 bg-primary/10">
                    <ServiceIcon className="text-primary text-6xl" />
                  </div>
                  <h4 className="text-xl md:text-2xl text-primary my-2 pt-2">{service.name}</h4>
                  <p className="text-[#111204CC] text-sm md:text-base mb-4 leading-relaxed">{service.description}</p>
                </div>
                <Link href={`/project-management/${service.slug}`}>
                  <button type="button" className="flex items-center gap-2 mt-3 bg-primary hover:bg-secondary hover:text-white rounded shadow p-2 px-4 text-white transition">
                    <span>Explore Service</span>
                    <span><FaArrowCircleRight /></span>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubServices;

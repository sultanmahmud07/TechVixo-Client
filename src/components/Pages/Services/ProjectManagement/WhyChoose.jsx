import Image from "next/image";
import icon from "@@/images/services/category/facilities/choose-icon.svg";

const WhyChoose = () => {
  const data = [
    {
      id: 1,
      title: "Agile Scrum Master Certifications",
      description: "Our certified coordinators manage sprints utilizing proven agile methodologies that eliminate operational bottlenecks."
    },
    {
      id: 2,
      title: "Complete Tooling Integration",
      description: "We configure Jira, Confluence, Figma, and Slack workspaces for your project, facilitating seamless real-time reporting."
    },
    {
      id: 3,
      title: "Risk Assessment Matrices",
      description: "We identify third-party API dependencies, hardware, and server constraints early to bypass delivery delays."
    },
    {
      id: 4,
      title: "Continuous Deliverable Testing",
      description: "We coordinate with QA teams to execute sprint-by-sprint testing, ensuring every demo is functional and stable."
    }
  ];

  return (
    <section className="bg-secondary py-10 md:py-16 my-5 md:my-14 text-white">
      <div className="main_container">
        <h3 className="sut_title_white text-center uppercase text-white">Why choose</h3>
        <div className="top_title_design flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold my-3 md:my-5">
            Why Partner with Digimatric for Project Management
          </h2>
          <p className="text-center w-full md:w-3/5 text-gray-300">
            We convert architectural complexities into organized task lists, keeping your product roadmap transparent, predictable, and fast.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5 my-4 pt-6 md:pt-10">
          {data.map((facility, i) => (
            <div key={i} className="facility_card border border-primary flex flex-col items-center justify-start gap-2 p-4 md:p-6 rounded-lg bg-secondary/50">
              <div className="service_icon w-12 md:w-14 h-12 md:h-14 flex items-center justify-center">
                <Image
                  src={icon}
                  alt={facility.title}
                  width={100}
                  height={100}
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="text-center font-semibold my-2 text-white text-base md:text-lg">{facility.title}</h3>
              <p className="text-center text-sm text-gray-300 leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

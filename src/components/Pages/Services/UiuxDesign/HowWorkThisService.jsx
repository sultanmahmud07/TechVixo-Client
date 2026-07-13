import {
  FaSearchPlus,
  FaSitemap,
  FaClone,
  FaHandPointer,
  FaPalette,
  FaRegCheckCircle,
} from "react-icons/fa";

const HowWorkThisService = () => {
  const steps = [
    {
      id: 1,
      title: "User Research & Analysis",
      description: "We conduct surveys, interviews, and competitor analysis to define user personas and map out clear customer journeys.",
      icon: FaSearchPlus
    },
    {
      id: 2,
      title: "Information Architecture",
      description: "We build logical content hierarchies and navigation blueprints, ensuring that users can find information with minimum clicks.",
      icon: FaSitemap
    },
    {
      id: 3,
      title: "Wireframing & Structural Layouts",
      description: "We design structural wireframes and interactive prototypes, validating interaction patterns before adding visual design styles.",
      icon: FaClone
    },
    {
      id: 4,
      title: "Interactive Prototyping",
      description: "We build clickable prototypes that simulate actual product behavior, facilitating review and alignment on screen connections.",
      icon: FaHandPointer
    },
    {
      id: 5,
      title: "Aesthetic Visual UI Design",
      description: "We draft beautiful, high-fidelity layouts, selecting color schemes, typography, and custom icons that express your brand's style.",
      icon: FaPalette
    },
    {
      id: 6,
      title: "Usability Testing & Hand-off",
      description: "We test the prototypes with real users to identify design bottlenecks, refining interactions and preparing code-ready style guides.",
      icon: FaRegCheckCircle
    }
  ];

  return (
    <div className="my-6 md:my-14">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h2 className="w-full md:w-3/4 text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
            How Digimatric’s UI/UX Design Services Work (Overview)
          </h2>
          <p className="text-[#111204CC] text-center w-full md:w-5/6">
            At Digimatric, we employ a structured, user-centric process to build beautiful, high-performing products. From initial idea to final layout handoff, we prioritize usability and business goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 md:gap-x-8 py-3 md:py-6 md:pt-9">
          {steps.map((step, i) => {
            const StepIcon = step.icon;
            return (
              <div key={i} className="need_card bg-white flex flex-col gap-2 md:gap-3 p-6 md:p-8 shadow md:shadow-lg rounded-xl">
                <div className="service_icon bg-[#2ECC711A] w-12 h-12 rounded-xl flex items-center justify-center">
                  <StepIcon className="text-[#2ECC71] text-xl" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#111204]">0{step.id}. {step.title}</h3>
                <p className="text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWorkThisService;

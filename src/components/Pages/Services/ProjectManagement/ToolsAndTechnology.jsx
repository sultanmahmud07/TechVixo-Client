import Image from "next/image";
import image from "@@/images/services/pm/pm-tools.png";

const ToolsAndTechnology = () => {
  const tools = [
    {
      id: 1,
      title: "Jira Software Boards",
      description: "Our primary hub for active Scrum tracking, backlog organization, bug logging, and team velocity calculations."
    },
    {
      id: 2,
      title: "Confluence Workspaces",
      description: "Where we compile scoping blueprints, functional specification documents, meeting logs, and API roadmaps."
    },
    {
      id: 3,
      title: "Slack & Microsoft Teams",
      description: "Configured with custom triggers to alert managers immediately upon pull requests, staging builds, or critical bugs."
    },
    {
      id: 4,
      title: "Figma Collaborative Boards",
      description: "Where we review interface frames, wireframe grids, and UX pathways directly alongside developers."
    },
    {
      id: 5,
      title: "Miro Empathy Whiteboards",
      description: "Used to run brainstorming sessions, draft user journey flowcharts, and sketch structural page hierarchies."
    },
    {
      id: 6,
      title: "GitHub Developer Mappings",
      description: "We map git branch check-ins directly to active tickets, ensuring codebase commits relate to scoped milestones."
    }
  ];

  return (
    <div className="my-5 md:my-10">
      <div className="main_container">
        <div className="flex flex-col md:flex-row gap-5 md:gap-16">
          <div className="left_image hidden md:block w-full md:w-2/5">
            <Image
              src={image}
              alt="tools and technology image"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-lg shadow-sm"
            />
          </div>
          <div className="right_site w-full md:w-3/5">
            <div className="top_title pb-5 md:pb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
                Project Management Tooling Ecosystem
              </h2>
              <p className="text-[#111204CC] font-medium my-2">
                We implement industry-standard collaboration tools to ensure seamless data flows, transparency, and rapid iteration paths.
              </p>
            </div>
            <div className="grid grid-cols-1 py-5 md:pt-10 md:grid-cols-2 gap-3 md:gap-5 md:gap-y-10">
              {tools.map((tool, i) => (
                <div key={i} className="process_card flex flex-col gap-2">
                  <div className="number">
                    <span className="text-primary font-normal text-2xl md:text-4xl">0{tool.id}</span>
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-[#111204]">{tool.title}</h4>
                  <p className="text-sm md:text-base leading-relaxed text-[#111204CC]">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndTechnology;

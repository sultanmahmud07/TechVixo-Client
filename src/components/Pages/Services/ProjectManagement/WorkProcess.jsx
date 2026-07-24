import Image from "next/image";
import image1 from "@@/images/services/pm/planning.png";
import image2 from "@@/images/services/pm/qa.png";

const WorkProcess = () => {
  const data = [
    {
      id: 1,
      image: image1,
      processList: [
        {
          id: 1,
          title: "Initiation & Requirement Mapping",
          description: "We host alignment meetings with your key stakeholders to draft product features, define priority roadmaps, and write detailed functional scopes."
        },
        {
          id: 2,
          title: "Jira Workspace Setup & Story Estimation",
          description: "We configure the agile tracker boards, write complete developer stories, allocate relative story points, and establish project sprint calendars."
        }
      ]
    },
    {
      id: 2,
      image: image2,
      processList: [
        {
          id: 3,
          title: "Active Sprint Cycles & Standup Syncs",
          description: "We manage developers and designers in 2-week sprint windows, hosting brief daily check-ins to locate and resolve technical dependencies or blockers."
        },
        {
          id: 4,
          title: "Sprint Demos, Retros & Deployment",
          description: "We present a clickable staging build at the close of every sprint, gather user feedback, and coordinate secure deployments."
        }
      ]
    }
  ];

  return (
    <div className="my-5 md:my-10 md:mt-16">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h3 className="sut_title">management process</h3>
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3">
            How We Coordinate Projects
          </h2>
          <p className="text-[#111204CC] text-center w-full md:w-4/5">
            We follow strict Agile-Scrum processes to guarantee absolute timeline transparency, clean release branches, and on-time launches.
          </p>
        </div>
        <div className="flex flex-col gap-5 md:gap-14 py-5 md:py-12">
          {data.map((section, i) => (
            <div key={i} className={`section_1 flex flex-col-reverse ${i === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:items-center gap-5 md:gap-10`}>
              <div className="left_list w-full md:w-1/2 flex flex-col gap-5 md:gap-8">
                {section.processList.map((process, idx) => (
                  <div key={idx} className="process_card flex gap-2 md:gap-4">
                    <div className="number">
                      <span className="text-primary font-bold text-2xl md:text-4xl">0{process.id}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-[#111204] text-md md:text-2xl font-semibold">{process.title}</h4>
                      <p className="text-sm md:text-base leading-relaxed text-[#111204CC]">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="right_image w-full md:w-1/2">
                <Image
                  src={section.image}
                  alt="Management process illustration"
                  width={600}
                  height={500}
                  className="w-full md:w-5/6 mx-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;

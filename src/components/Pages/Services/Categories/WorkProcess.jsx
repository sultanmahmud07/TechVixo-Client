import Image from "next/image";
import image1 from "@@/images/services/category/process-img-1.png";
import image2 from "@@/images/services/category/process-img-2.png";

const WorkProcess = () => {
  const data = [
    {
      id: 1,
      image: image1,
      processList: [
        {
          id: 1,
          title: "Discovery & User Research",
          description: "We begin with in-depth research to understand your target audience, define user personas, and align designs with user behaviors and requirements."
        },
        {
          id: 2,
          title: "Wireframing & Prototyping",
          description: "We create skeletal wireframes and interactive prototypes, planning the layout and user flow before jumping into the visual styling."
        }
      ]
    },
    {
      id: 2,
      image: image2,
      processList: [
        {
          id: 3,
          title: "User Interface (UI) Design",
          description: "We design beautiful, high-fidelity interfaces, picking color palettes, custom typography, and icons that convey your brand values."
        },
        {
          id: 4,
          title: "Usability Testing & Refinement",
          description: "We test the interactive prototypes with real users to identify design bottlenecks, refining interactions to ensure maximum ease-of-use."
        }
      ]
    }
  ];

  return (
    <div className="my-5 md:my-10 md:mt-16">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h3 className="sut_title">design process</h3>
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3">
            How We Work
          </h2>
          <p className="text-[#111204CC] text-center w-full md:w-4/5">
            We follow a structured, collaborative design process to transform concepts into pixel-perfect user experiences.
          </p>
        </div>
        <div className="flex flex-col gap-5 md:gap-14 py-5 md:py-12">
          {data.map((section, i) => (
            <div key={i} className={`section_1 flex flex-col-reverse ${i === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:items-center gap-5 md:gap-10`}>
              <div className="left_list w-full md:w-1/2 flex flex-col gap-5 md:gap-11">
                {section.processList.map((process, idx) => (
                  <div key={idx} className="process_card flex gap-2 md:gap-4">
                    <div className="number">
                      <span className="text-primary font-bold text-2xl md:text-4xl">0{process.id}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-[#111204] text-md md:text-2xl">{process.title}</h4>
                      <p className="text-sm md:text-base">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="right_image w-full md:w-1/2">
                <Image
                  src={section.image}
                  alt="design process image"
                  width={600}
                  height={500}
                  className="w-full md:w-5/6 mx-auto"
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

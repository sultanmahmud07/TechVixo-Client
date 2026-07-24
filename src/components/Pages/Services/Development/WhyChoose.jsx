import Image from "next/image";
import icon from "@@/images/services/category/facilities/choose-icon.svg";

const WhyChoose = () => {
  const data = [
    {
      id: 1,
      title: "Full-Stack Software Competency",
      description: "Our engineers are experts across the entire technology stack—from pixel-perfect responsive frontends to heavy-duty microservice architectures."
    },
    {
      id: 2,
      title: "Strict Quality Assurance & Testing",
      description: "We prevent bugs from reaching production by integrating end-to-end integration testing, unit test workflows, and QA cycles in our pipeline."
    },
    {
      id: 3,
      title: "Agile SDLC & Transparency",
      description: "We divide project scopes into 2-week iterations, offering complete roadmap visibility, regular sprint reviews, and deployable staging builds."
    },
    {
      id: 4,
      title: "Post-Launch Technical Support",
      description: "Our work doesn't end at deployment. We offer ongoing maintenance agreements to handle server security upgrades, backups, and feature requests."
    }
  ];

  return (
    <section className="bg-secondary py-10 md:py-16 my-5 md:my-14 text-white">
      <div className="main_container">
        <h3 className="sut_title_white text-center uppercase text-white">Why choose</h3>
        <div className="top_title_design flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold my-3 md:my-5">
            Why Partner with Digimatric for Development
          </h2>
          <p className="text-center w-full md:w-3/5 text-gray-300">
            We don&apos;t just write lines of code. We architect solutions designed to solve real business challenges, streamline work operations, and scale.
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

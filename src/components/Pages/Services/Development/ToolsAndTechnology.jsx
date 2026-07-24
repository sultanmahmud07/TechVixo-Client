import Image from "next/image";
import image from "@@/images/services/development/technology.jpg";

const ToolsAndTechnology = () => {
  const tools = [
    {
      id: 1,
      title: "React & Next.js Frameworks",
      description: "We build fast, responsive, and search-optimized user interfaces leveraging modern rendering paradigms like server-side rendering (SSR)."
    },
    {
      id: 2,
      title: "Node.js & Python Backends",
      description: "We develop secure, asynchronous web servers and RESTful microservices capable of parsing complex business logic and processes."
    },
    {
      id: 3,
      title: "Flutter & React Native SDKs",
      description: "We deploy beautiful, high-fidelity mobile applications targeting iOS and Android with single, maintainable codebases."
    },
    {
      id: 4,
      title: "PostgreSQL & NoSQL Schemas",
      description: "We design robust, indexed relational and document databases focused on high data integrity and sub-second query executions."
    },
    {
      id: 5,
      title: "AWS, Vercel & Docker Cloud",
      description: "We containerize applications using Docker and set up autoscale cloud hosting environments on AWS and Vercel with CDN capabilities."
    },
    {
      id: 6,
      title: "CI/CD & GitHub Actions",
      description: "We eliminate deployment friction by automating testing pipelines and build checks before pushing to production servers."
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
                Modern Technologies We Leverage
              </h2>
              <p className="text-[#111204CC] font-medium my-2">
                At Digimatric, we select mature, industry-standard languages and cloud providers to ensure that your application is fast, secure, and maintainable.
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

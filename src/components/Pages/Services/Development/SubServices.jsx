import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const SubServices = () => {
  const services = [
    {
      id: 1,
      name: "Web Development",
      icon: "/assets/images/services/category/design/service-icon/1.png",
      slug: "web-development",
      description: "We engineer fast, secure, and SEO-friendly web platforms. Leveraging modern frameworks like React and Next.js alongside headless CMS databases, we create responsive applications that drive user engagement and business efficiency."
    },
    {
      id: 2,
      name: "Mobile App Development",
      icon: "/assets/images/services/category/design/service-icon/2.png",
      slug: "mobile-app-development",
      description: "Our mobile engineers specialize in creating native iOS and Android apps, as well as cross-platform native interfaces using Flutter and React Native. We deliver seamless gestures, high frame rates, and reliable offline capabilities."
    },
    {
      id: 3,
      name: "Custom Software & APIs",
      icon: "/assets/images/services/category/design/service-icon/3.png",
      slug: "custom-software-development",
      description: "For business operations requiring bespoke solutions, we build secure CRM/ERP software, custom API integrations, and robust database systems. We design systems to automate operations and connect legacy tools."
    }
  ];

  return (
    <div className="my-10 md:my-14">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h3 className="sut_title">Services</h3>
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
            Our Development Core Competencies
          </h2>
          <p className="text-[#111204CC] text-center w-full md:w-3/5">
            At Digimatric, we turn technical complexity into clean user interfaces and high-performance server architectures tailored to your goals.
          </p>
        </div>
        <div className="py-5 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="service_card rounded-md shadow border border-[#F1F1F1] bg-white p-3 md:p-5 h-full flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <div className="service_icon w-full h-44 rounded overflow-hidden flex items-center justify-center mb-4 bg-gray-50">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={400}
                    height={300}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-primary my-2 pt-2">{service.name}</h4>
                <p className="text-[#111204CC] text-sm md:text-base mb-4 leading-relaxed">{service.description}</p>
              </div>
              <Link href={`/contact?interest=${service.slug}`}>
                <button type="button" className="flex items-center gap-2 mt-3 bg-primary hover:bg-secondary hover:text-white rounded shadow p-2 px-4 text-white transition">
                  <span>Get in Touch</span>
                  <span><FaArrowCircleRight /></span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubServices;

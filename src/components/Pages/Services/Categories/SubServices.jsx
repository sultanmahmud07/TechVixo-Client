import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const SubServices = () => {
  const services = [
    {
      id: 1,
      name: "UI & UX Design",
      icon: "/assets/images/home/service/1.png",
      slug: "ui-ux-design",
      description: "Our UX/UI design process focuses on crafting intuitive, user-friendly experiences that drive engagement. We use wireframes, prototypes, and usability testing to ensure a seamless interface."
    },
    {
      id: 2,
      name: "Branding and Identity",
      icon: "/assets/images/home/service/3.png",
      slug: "branding-and-identity",
      description: "Your brand is your business&apos;s personality. We establish a consistent identity with logo design, color schemes, typography, and clear brand guidelines to help you stand out."
    }
  ];

  return (
    <div className="my-10 md:my-14">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h3 className="sut_title">Services</h3>
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
            Our Comprehensive Design Services
          </h2>
          <p className="text-[#111204CC] text-center w-full md:w-3/5">
            At Digimatric, we offer a full spectrum of design services that combine creativity with technology to enhance your online presence.
          </p>
        </div>
        <div className="py-5 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="service_card rounded-md shadow gap-2 bg-white p-3 md:p-5 h-full flex flex-col justify-between">
              <div>
                <div className="service_icon w-16 h-16 bg-[#00a31613] rounded flex items-center justify-center p-3 mb-4">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={100}
                    height={100}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-primary my-2 pt-2">{service.name}</h4>
                <p className="text-[#111204CC] text-sm md:text-base mb-4">{service.description}</p>
              </div>
              <Link href={`/design/${service.slug}`}>
                <button type="button" className="flex items-center gap-2 mt-3 bg-primary hover:bg-secondary hover:text-white rounded shadow p-2 px-4 text-white">
                  <span>Load More</span>
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

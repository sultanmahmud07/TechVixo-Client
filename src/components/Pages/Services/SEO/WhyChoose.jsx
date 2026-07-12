import Image from "next/image";
import icon from "@@/images/services/category/facilities/choose-icon.svg";

const WhyChoose = () => {
  const data = [
    {
      id: 1,
      title: "Expertise and Proven Track Record",
      description: "With years of experience in SEO, we have helped businesses across industries achieve top rankings on Google. Our team stays updated with the latest algorithm changes to ensure compliance with Google's best practices."
    },
    {
      id: 2,
      title: "Expertise and Proven Track Record",
      description: "With years of experience in SEO, we have helped businesses across industries achieve top rankings on Google. Our team stays updated with the latest algorithm changes to ensure compliance with Google's best practices."
    },
    {
      id: 3,
      title: "Expertise and Proven Track Record",
      description: "With years of experience in SEO, we have helped businesses across industries achieve top rankings on Google. Our team stays updated with the latest algorithm changes to ensure compliance with Google's best practices."
    },
    {
      id: 4,
      title: "Expertise and Proven Track Record",
      description: "With years of experience in SEO, we have helped businesses across industries achieve top rankings on Google. Our team stays updated with the latest algorithm changes to ensure compliance with Google's best practices."
    }
  ];

  return (
    <section className="bg-secondary py-10 md:py-16 my-5 md:my-14 text-white">
      <div className="main_container">
        <h3 className="sut_title_white text-center uppercase text-white">Why choose</h3>
        <div className="top_title_design flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold my-3 md:my-5">
            Why Choose Our SEO Services
          </h2>
          <p className="text-center w-full md:w-3/5">
            At Digimatric, we provide a full suite of digital marketing services designed to boost your brand&apos;s visibility and performance across all platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5 my-4 pt-6 md:pt-10">
          {data.map((facility, i) => (
            <div key={i} className="facility_card border border-primary flex flex-col items-center justify-center gap-2 p-3 md:p-5">
              <div className="service_icon w-12 md:w-14">
                <Image
                  src={icon}
                  alt={facility.title}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <h3 className="text-center font-semibold my-2">{facility.title}</h3>
              <p className="text-center text-sm text-gray-300">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

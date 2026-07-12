import ServiceCaseCard from "./ServiceCaseCard";

const ServiceCaseStudies = () => {
  const caseStudies = [
    {
      title: "Developing A Secure Hub for Property Management Excellence",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: "/assets/images/case-studies/7.png",
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: ""
    },
    {
      title: "Developing A Secure Hub for Property Management Excellence",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: "/assets/images/case-studies/8.png",
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: ""
    },
    {
      title: "Developing A Secure Hub for Property Management Excellence",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: "/assets/images/case-studies/9.png",
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: ""
    }
  ];

  return (
    <div className="my-5 md:my-10 pb-4 md:pb-10">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
            Our Case Studies
          </h2>
          <p className="text-[#111204CC] text-center w-full md:w-2/5">
            We help our clients grow their bottom-line with clear and professional websites.
          </p>
        </div>
        <div className="grid grid-cols-2 pt-3 md:pt-6 md:grid-cols-3 gap-2 md:gap-6 md:gap-y-8">
          {caseStudies.map((blog, i) => (
            <ServiceCaseCard key={i} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCaseStudies;

import img7 from "@@/images/case-studies/7.png";
import img8 from "@@/images/case-studies/8.png";
import img9 from "@@/images/case-studies/9.png";
import ServiceCaseCard from "./ServiceCaseCard";

const ServiceCaseStudies = ({data}) => {
  
  return (
    <div className="my-5 md:my-10 pb-4 md:pb-10">
      <div className="main_container">
      <div className="top_title_design flex flex-col items-center">
                    <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
                        Our Case Studies
                    </h2>
                    <p className='text-[#111204CC] text-center w-full md:w-2/5'>We help our clients grow their bottom-line with clear and professional websites.</p>
                </div>
        <div className="grid grid-cols-2 pt-3 md:pt-6 md:grid-cols-3 gap-2 md:gap-6 md:gap-y-8">
          {data?.map((blog, i) => {
            return <ServiceCaseCard key={i} blog={blog}></ServiceCaseCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCaseStudies;

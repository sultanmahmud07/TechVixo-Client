import Link from "next/link";
import { FaArrowCircleRight, FaMapMarkerAlt, FaCogs, FaLink } from "react-icons/fa";

const SubServices = () => {
  const services = [
    {
      id: 1,
      name: "Local SEO",
      icon: FaMapMarkerAlt,
      slug: "local-seo",
      description: "What is Local SEO? Local SEO is designed to help businesses increase visibility in geo-targeted search results. If you own a local business, optimizing for &quot;near me&quot; searches ensures that potential customers find you quickly..."
    },
    {
      id: 2,
      name: "Technical SEO",
      icon: FaCogs,
      slug: "technical-seo",
      description: "What is Technical SEO? Technical SEO refers to website and server optimizations that help search engine spiders crawl and index your site more effectively (to help improve organic rankings)."
    },
    {
      id: 3,
      name: "Off-page SEO",
      icon: FaLink,
      slug: "off-page-seo",
      description: "What is Off-page SEO? Off-page SEO actions taken outside of your own website to impact your rankings within search engine results pages (SERPs) like backlink building."
    }
  ];

  return (
    <div className="my-10 md:my-14">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h3 className="sut_title">Service</h3>
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
            Our Comprehensive SEO Service
          </h2>
          <p className="text-[#111204CC] text-center w-full md:w-3/5">
            At Digimatric, we provide a full suite of digital marketing services designed to boost your brand&apos;s visibility and performance across all platforms.
          </p>
        </div>
        <div className="py-5 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const ServiceIcon = service.icon;
            return (
              <div key={i} className="service_card rounded-md shadow border border-[#F1F1F1] bg-white p-3 md:p-5 h-full flex flex-col justify-between hover:shadow-lg transition">
                <div>
                  <div className="service_icon w-full h-44 rounded overflow-hidden flex items-center justify-center mb-4 bg-primary/10">
                    <ServiceIcon className="text-primary text-6xl" />
                  </div>
                  <h4 className="text-xl md:text-2xl text-primary my-2 pt-2">{service.name}</h4>
                  <p className="text-[#111204CC] text-sm md:text-base mb-4 leading-relaxed">{service.description}</p>
                </div>
                <Link href={`/services/search-engine-optimization-seo/${service.slug}`}>
                  <button type="button" className="flex items-center gap-2 mt-3 bg-primary hover:bg-secondary hover:text-white rounded shadow p-2 px-4 text-white transition">
                    <span>Load More</span>
                    <span><FaArrowCircleRight /></span>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubServices;

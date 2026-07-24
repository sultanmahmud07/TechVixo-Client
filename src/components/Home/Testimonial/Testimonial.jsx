import img1 from "@@/images/home/testimonial/1.png";
import client1 from "@@/images/home/client/1.png";
import client2 from "@@/images/home/client/2.png";
import client3 from "@@/images/home/client/3.png";
import TestimonialSlider from "./TestimonialSlider";

const ClientTestimonial = () => {
  const testimonialData = [
    {
      id: 1,
      img: img1,
      client: client1,
      name: "Sarah Jenkins",
      post: "CTO of RetailSpace E-Commerce",
      title: "Next.js speed optimization brought page loads down to 0.9s!",
      des: "Digimatric completely overhauled our headless Shopify storefront. The load time drop directly boosted our sales conversion rates by 34%, and search bots are crawling our marketing categories faster than ever."
    },
    {
      id: 2,
      img: img1,
      client: client2,
      name: "David Kovic",
      post: "Product Director at HealthCare 360",
      title: "The agile coordination and scrum cycles were seamless.",
      des: "Digimatric delivered our core dashboard widgets on schedule, coordinating automated testing sequences in CI/CD chains. Retrospectives and backlog reports were extremely clear and direct."
    },
    {
      id: 3,
      img: img1,
      client: client3,
      name: "Aris Thorne",
      post: "Founder of SaaS-Hub Systems",
      title: "Our organic search traffic and leads doubled in 90 days.",
      des: "Their Technical SEO audit cleared crawl errors we struggled with for months. Digimatric restructured our page canonical meta tags and header markup, claiming #1 rankings on highly competitive search terms."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#FAF9FC]">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Testimonial</p>
          <h2 className="w-full md:w-3/5 text-center text-3xl md:text-5xl font-extrabold text-[#111204] leading-tight">
            Customers Are Our Highest Priority
          </h2>
          <p className="text-gray-500 text-center w-full md:w-2/5 mt-3 text-sm md:text-base leading-relaxed">
            Your feedback shapes our commitment to engineering excellence and beautiful interface delivery.
          </p>
        </div>
        <TestimonialSlider testimonialData={testimonialData} />
      </div>
    </section>
  );
};

export default ClientTestimonial;

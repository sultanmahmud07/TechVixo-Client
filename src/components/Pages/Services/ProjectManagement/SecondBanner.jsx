import Link from "next/link";

const SecondBanner = () => {
  return (
    <section id="service_category_second_banner" className="py-10 md:py-16 my-5 md:my-14 text-white">
      <div className="main_container">
        <div className="left_content w-full md:w-3/5">
          <div className="top_title_design">
            <h2 className="text-2xl md:text-4xl font-bold my-3 md:my-5 leading-tight">
              Bring Order and Speed to Your Software Deliveries!
            </h2>
            <p className="leading-relaxed text-gray-200">
              At Digimatric, we eliminate the complexity of development management. We establish clear roadmap sprint targets, set up transparent task updates, and organize team collaboration to bring your product to launch.
            </p>
            <Link href="/contact" className="inline-block mt-3 md:mt-5">
              <button type="button" className="bg-primary hover:bg-green-600 rounded shadow p-3 px-6 text-white font-medium transition">
                Book a Scoping Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondBanner;

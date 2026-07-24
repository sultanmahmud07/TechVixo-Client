import Link from "next/link";

const SecondBanner = () => {
  return (
    <section id="service_category_second_banner" className="py-10 md:py-16 my-5 md:my-14 text-white">
      <div className="main_container">
        <div className="left_content w-full md:w-3/5">
          <div className="top_title_design">
            <h2 className="text-2xl md:text-4xl font-bold my-3 md:my-5 leading-tight">
              Let&apos;s Architect Your Custom Software Product!
            </h2>
            <p className="leading-relaxed text-gray-200">
              At Digimatric, we focus on engineering robust platforms that streamline your business workflows and delight your users. Whether you require a high-concurrency SaaS application, a custom API gateway, or a native mobile app, our engineering team has the expertise to deliver it on schedule.
            </p>
            <Link href="/contact" className="inline-block mt-3 md:mt-5">
              <button type="button" className="bg-primary hover:bg-green-600 rounded shadow p-3 px-6 text-white font-medium transition">
                Request a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondBanner;

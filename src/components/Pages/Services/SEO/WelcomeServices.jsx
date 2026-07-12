import Image from "next/image";
import Link from "next/link";

const WelcomeServices = () => {
  return (
    <div className="py-6 md:py-16 bg-[#F9F9FB]">
      <div className="main_container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 items-center">
          <div className="left_site">
            <h2 className="text-2xl md:text-5xl text-[#111204] font-bold leading-tight">
              SEO Services: Drive Organic Growth & Dominate Search Rankings
            </h2>
            <div className="flex flex-col gap-3 py-3 md:py-6 text-[#111204CC]">
              <p>
                In today&apos;s competitive digital landscape, having a website isn&apos;t enough—you need to ensure it ranks at the top of search results to attract potential customers. Search Engine Optimization (SEO) is the key to achieving this.
              </p>
              <p>
                In today&apos;s competitive digital landscape, having a website isn&apos;t enough—you need to ensure it ranks at the top of search results to attract potential customers. Search Engine Optimization (SEO) is the key to achieving this.
              </p>
              <p>
                In today&apos;s competitive digital landscape, having a website isn&apos;t enough—you need to ensure it ranks at the top of search results to attract potential customers. Search Engine Optimization (SEO) is the key to achieving this.
              </p>
            </div>
            <Link href="/contact" className="mt-2 block">
              <button className="bg-primary text-sm py-3 px-8 hover:text-white hover:bg-secondary transition rounded text-white font-medium">
                Lets Talk
              </button>
            </Link>
          </div>
          <div className="right_site">
            <Image
              width={600}
              height={400}
              src="/assets/images/services/details-image/about-service.png"
              alt="SEO services welcome illustration"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeServices;

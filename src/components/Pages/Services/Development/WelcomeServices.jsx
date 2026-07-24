import Image from "next/image";
import Link from "next/link";

const WelcomeServices = () => {
  return (
    <div className="py-6 md:py-16 bg-[#F9F9FB]">
      <div className="main_container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 items-center">
          <div className="left_site">
            <h2 className="text-2xl md:text-5xl text-[#111204] font-bold leading-tight">
              Development Services: Build Scalable, Secure & High-Performance Software
            </h2>
            <div className="flex flex-col gap-3 py-3 md:py-6 text-[#111204CC]">
              <p>
                In a digital-first economy, off-the-shelf software solutions often fall short. To drive real efficiency and growth, your business needs robust, custom-engineered digital systems. Our development team designs and builds high-quality software that is secure, fast, and fully tailored to your operational workflows.
              </p>
              <p>
                From clean code and enterprise-grade system architectures to seamless integrations and clean user interfaces, we ensure that every solution we build is future-proof. Whether it is a web portal, a cross-platform mobile app, or a complex API backend, we deliver systems that scale effortlessly.
              </p>
              <p>
                At Digimatric, we fuse industry-standard coding conventions with agile methodologies. This ensures rapid feature releases, complete codebase transparency, and high quality assurance at every release stage.
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
              src="/assets/images/services/development/development-banner.jpg"
              alt="Development services welcome illustration"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeServices;

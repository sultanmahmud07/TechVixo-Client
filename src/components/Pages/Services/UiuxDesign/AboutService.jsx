import Image from "next/image";
import Link from "next/link";

const AboutService = () => {
  return (
    <div className="py-6 md:pt-16">
      <div className="main_container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
          <div className="left_site">
            <h3 className="text-2xl md:text-4xl text-[#000000] font-bold">
              Streamlining Every Stage, from Development to Deployment, Ensuring Efficiency, and Delivering Exceptional Results
            </h3>
            <div className="flex flex-col gap-2 py-2 md:pt-5">
              <p>At DigiMatric, we have a team of experts whose exceptional user experience (UX) design is the cornerstone of a successful digital product.</p>
              <p>From initial development and testing to final deployment, our Team ensures that every stage is carefully optimized to deliver seamless, intuitive, high-performance solutions that exceed user expectations.</p>
            </div>
            <Link href="/contact" className="p2-4 md:pt-6">
              <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white">
                Lets Talk
              </button>
            </Link>
          </div>
          <div className="right_site">
            <Image
              width={600}
              height={400}
              src="/assets/images/services/details-image/about-service.png"
              alt="UI/UX design about image"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutService;

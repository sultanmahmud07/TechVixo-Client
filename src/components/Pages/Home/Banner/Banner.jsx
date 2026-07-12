import Link from "next/link";
import Clients from "../Clients/Clients";

const Banner = () => {

  return (
    <div id="banner" className="relative z-10 bg-[#111204]">
      {/* Animated background container */}
      <div className="absolute inset-0 overflow-hidden z-0 banner_bg_animated"></div>
      <div className="main_container relative z-10">
        <div className="banner_content flex flex-col justify-center text-white gap-5 md:gap-7 items-center">
          <h1 className="text-3xl md:text-7xl pt-20 leading-[40px] md:leading-[80px] font-bold text-center capitalize md:w-4/5">The Digital Marketing Agency for Your  <span className="text-primary">Success</span></h1>
          <p className="w-3/4 md:w-3/4 text-center text-[#FFFFFFCC]">Welcome to Digimatric, your results-driven digital marketing agency focused on innovation and growth. We help businesses scale through effective strategies, professional design, and data-backed solutions that drive results.
          </p>
          <Link href="/contact">
            <button className="bg-primary p-3 text-sm font-semibold md:p-3 text-black hover:text-white  hover:bg-secondary hover:border transition rounded">Book A Meeting</button>
          </Link>
          <p className="banner_text_design mt-3 md:mt-6 text-sm">TRUSTED BY AMAZING BRANDS</p>
        </div>
      </div>
      <Clients></Clients>
    </div>
  );
};

export default Banner;

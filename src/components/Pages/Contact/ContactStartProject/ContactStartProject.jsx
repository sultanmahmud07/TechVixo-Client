import Image from "next/image";
import icon from "@@/images/home/faq/faq-icon.png";

const ContactStartProject = () => {

  return (
    <div className="start_project_design py-7 md:py-14 my-5 md:my-10">
      <div className="main_container">
        <div className="flex flex-col gap-3 md:gap-5 items-center">
          <Image
            src={icon}
            alt="faq-icon"
            width={400}
            height={400}
            className="w-14 md:w-16"
          />
          <h4 className="text-center text-2xl md:text-3xl font-bold text-[#111204]">
            Thank you for your Interest in DigiMatric.
          </h4>
          <p className=' text-center text-sm md:text-base w-full md:w-3/4'>Senior experts. On-demand requests. Fast
            We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.
          </p>
          <button type="button" className="text-sm md:text-lg border-2 border-primary bg-primary hover:bg-white hover:text-black rounded shadow p-2 px-4">
            Start Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactStartProject;

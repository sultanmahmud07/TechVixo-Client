import Image from "next/image";
import Link from "next/link";

const WelcomeServices = () => {
  return (
    <div className="py-6 md:py-16 bg-[#F9F9FB]">
      <div className="main_container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 items-center">
          <div className="left_site">
            <h2 className="text-2xl md:text-5xl text-[#111204] font-bold leading-tight">
              Project Management: Orchestrating Predictable Software Deliveries
            </h2>
            <div className="flex flex-col gap-3 py-3 md:py-6 text-[#111204CC]">
              <p>
                Building digital products is complex. Without structured scopes, clear communication channels, and rigorous timeline tracking, software projects frequently suffer from scope drift and delivery delays. Our project management team serves as the bridge between your business goals and our engineering output.
              </p>
              <p>
                We leverage Scrum and Kanban agile methodologies to divide complex scopes into transparent sprint cycles. By running regular planning meetings, daily standups, and retrospective reviews, we keep your stakeholders informed at every build phase.
              </p>
              <p>
                At Digimatric, we focus on delivery predictability. We mitigate operational risks, optimize resources, and enforce QA checkmarks, ensuring your software launches on schedule and within budget.
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
              height={600}
              src="/assets/images/services/pm/pm-main.png"
              alt="Project management welcome illustration"
              className="w-full rounded-lg shadow-md object-cover h-64 md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeServices;

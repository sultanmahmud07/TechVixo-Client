import WebDevelopmentPage from "@/components/Pages/Services/Development/WebDevelopmentPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Web Development Services - Digimatric",
  description: "Digimatric engineers lightning-fast, secure, and responsive web portals and SaaS platforms using modern frameworks like React and Next.js.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Web Development"
        description="We build fast, secure, and SEO-optimized web systems. Leveraging modern paradigms like Server-Side Rendering (SSR) and custom CMS APIs, we deliver solutions that drive user retention and operational efficiency."
      ></SharedBanner>
      <WebDevelopmentPage></WebDevelopmentPage>
    </div>
  );
};

export default page;

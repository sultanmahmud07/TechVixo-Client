import ContentWritingPage from "@/components/Pages/Services/ContentWriting/ContentWritingPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Content Writing Services - Digimatric",
  description: "Engage your customers and scale search traffic with data-driven copywriting, SEO blog posts, automated email drips, and outbound pitch collateral campaigns.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Content Writing"
        description="Connect with readers and search bots. We compose SEO long-form articles, landing page copy templates, and customer email onboarding scripts."
      ></SharedBanner>
      <ContentWritingPage></ContentWritingPage>
    </div>
  );
};

export default page;

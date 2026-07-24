import SeoAuditsStrategyPage from "@/components/Pages/Services/SEO/SeoAuditsStrategyPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "SEO Audits & Strategy Services - Digimatric",
  description: "Digimatric runs site audits crawls, maps competitor keywords gaps, disavows toxic links, and drafts 12-month campaign roadmaps to sustain page-one rankings.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="SEO Audits & Strategy"
        description="Banish marketing guesswork. We crawl your directories to find crawler blocks, audit competitor keyword opportunities, and schedule long-term content and authority growth campaigns."
      ></SharedBanner>
      <SeoAuditsStrategyPage></SeoAuditsStrategyPage>
    </div>
  );
};

export default page;

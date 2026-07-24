import PpcMarketingPage from "@/components/Pages/Services/DigitalMarketing/PpcMarketingPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Pay Per Click (PPC) Marketing Services - Digimatric",
  description: "Digimatric audits search keyword CPC bids, writes responsive search ad copy, compiles negative keyword lists, and drives high-intent traffic.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Pay Per Click (PPC) Marketing"
        description="Drive instant high-intent traffic. We audit bid CPCs parameters, exclude wasted query match types, A/B test responsive search headings, and secure positive CPA metrics."
      ></SharedBanner>
      <PpcMarketingPage></PpcMarketingPage>
    </div>
  );
};

export default page;

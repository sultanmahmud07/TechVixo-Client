import ECommerceAdvertisingPage from "@/components/Pages/Services/ECommerceMarketing/ECommerceAdvertisingPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "E-Commerce Advertising Services - Digimatric",
  description: "Digimatric syncs Merchant XML feeds, designs social dynamic ads carousel, installs server CAPI codes, and optimizes tROAS bids thresholds daily.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="E-Commerce Advertising"
        description="Scale paid order conversion volumes. We configure Merchant feeds catalog maps, draft visual ads grids, setup conversion tracking codes, and optimize ROAS bids targets."
      ></SharedBanner>
      <ECommerceAdvertisingPage></ECommerceAdvertisingPage>
    </div>
  );
};

export default page;

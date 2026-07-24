import ECommerceMarketingPage from "@/components/Pages/Services/ECommerceMarketing/ECommerceMarketingPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "E-Commerce Marketing Services - Digimatric",
  description: "Scale your store sales with data-driven e-commerce marketing, Merchant Center catalog optimization, paid social ads, and cart recovery funnels.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="E-Commerce Marketing"
        description="Optimize checkout funnels and catalog health. We setup Merchant inventories, launch Google Shopping bids, and build social retargeting ads."
      ></SharedBanner>
      <ECommerceMarketingPage></ECommerceMarketingPage>
    </div>
  );
};

export default page;

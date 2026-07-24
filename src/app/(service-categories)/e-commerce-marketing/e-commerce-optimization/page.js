import ECommerceOptimizationPage from "@/components/Pages/Services/ECommerceMarketing/ECommerceOptimizationPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "E-Commerce Optimization Services - Digimatric",
  description: "Digimatric audits store loading speeds, optimizes checkout input friction, configures Rich Snippets schema, and runs cart abandonment flows.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="E-Commerce Optimization"
        description="Clean checkout friction. We audit core web vitals speed, write product schema codes, configure product page metadata, and launch recovery triggers."
      ></SharedBanner>
      <ECommerceOptimizationPage></ECommerceOptimizationPage>
    </div>
  );
};

export default page;

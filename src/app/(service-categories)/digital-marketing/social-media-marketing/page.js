import SmmPage from "@/components/Pages/Services/DigitalMarketing/SmmPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Social Media Marketing (SMM) Services - Digimatric",
  description: "Digimatric setups target custom pixels, designs creative ad graphic templates, runs lookalike demographic segments, and configures SMM sales funnels.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Social Media Marketing"
        description="Overhaul your social brand visibility. We configure tracking pixel codes, style eye-catching Instagram/Facebook panels, run split A/B tests, and build retargeting SMM funnels."
      ></SharedBanner>
      <SmmPage></SmmPage>
    </div>
  );
};

export default page;

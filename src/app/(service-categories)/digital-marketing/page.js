import DigitalMarketingPage from "@/components/Pages/Services/DigitalMarketing/DigitalMarketingPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Digital Marketing Services - Digimatric",
  description: "Drive scalable growth with data-driven PPC marketing, paid social media campaigns, automated email funnels, and conversion rate optimizations.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Digital Marketing"
        description="Banish marketing guesswork. We build multi-channel PPC campaigns, paid social profiles segments, and email onboarding automation drip templates."
      ></SharedBanner>
      <DigitalMarketingPage></DigitalMarketingPage>
    </div>
  );
};

export default page;

import CampaignContentPage from "@/components/Pages/Services/ContentWriting/CampaignContentPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Campaign Content Services - Digimatric",
  description: "Digimatric drafts automated welcome onboarding drips, outbound sales pitches templates, B2B pitch decks text, and localization files.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Campaign Content"
        description="Nurture outbound prospects. We compose onboarding welcome email flows, personalize cold outbound pitches, and write localized collateral brochures."
      ></SharedBanner>
      <CampaignContentPage></CampaignContentPage>
    </div>
  );
};

export default page;

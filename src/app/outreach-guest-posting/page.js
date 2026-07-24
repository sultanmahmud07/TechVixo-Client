import OutreachGuestPostingPage from "@/components/Pages/Services/LinkBuilding/OutreachGuestPostingPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Outreach & Guest Posting Services - Digimatric",
  description: "Acquire high-authority contextual backlinks manually with Digimatric B2B blogger outreach, personalized pitches, and original guest posting content campaigns.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Outreach & Guest Posting"
        description="Manual editorial placements. We compile personalized blogger pitches, compose original guest post articles, and secure permanent contextual do-follow links."
      ></SharedBanner>
      <OutreachGuestPostingPage></OutreachGuestPostingPage>
    </div>
  );
};

export default page;

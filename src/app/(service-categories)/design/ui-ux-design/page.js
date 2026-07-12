import UiuxDesignPage from "@/components/Pages/Services/UiuxDesign/UiuxDesignPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "UI & UX Design - Digimatric",
  description: "At DigiMatric, we have a team of experts whose exceptional user experience (UX) design is the cornerstone of a successful digital product.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="User Experience (UX) Design"
        description="At DigiMatric, we have a team of experts whose exceptional user experience (UX) design is the cornerstone of a successful digital product. From initial development and testing to final deployment,"
      ></SharedBanner>
      <UiuxDesignPage></UiuxDesignPage>
    </div>
  );
};

export default page;
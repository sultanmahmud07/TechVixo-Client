import LinkBuildingPage from "@/components/Pages/Services/LinkBuilding/LinkBuildingPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Link Building Services - Digimatric",
  description: "Boost your website's domain authority and search visibility with manual white-hat link-building, blogger outreach, guest posting, and digital PR.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Link Building"
        description="Boost your website's authority and visibility with strategic link-building services."
      ></SharedBanner>
      <LinkBuildingPage></LinkBuildingPage>
    </div>
  );
};

export default page;

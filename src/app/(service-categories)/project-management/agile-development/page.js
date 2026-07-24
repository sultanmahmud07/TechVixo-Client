import AgileDevelopmentPage from "@/components/Pages/Services/ProjectManagement/AgileDevelopmentPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Agile Development Services - Digimatric",
  description: "Digimatric runs organized Scrum sprints, grooms backlog queues, hosts demo reviews, and balances developer workloads for fast software delivery.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Agile Scrum Master Sprints"
        description="Release working features continuously. We run structured 2-week agile sprints, hold standups to clear blockers, and host review demos to keep stakeholders aligned."
      ></SharedBanner>
      <AgileDevelopmentPage></AgileDevelopmentPage>
    </div>
  );
};

export default page;

import ProjectPlanningPage from "@/components/Pages/Services/ProjectManagement/ProjectPlanningPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Project Planning & Scoping Services - Digimatric",
  description: "Digimatric aligns functional specs, schedules milestone calendars, maps resource budgets, and mitigates dependency risks before coding begins.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Project Planning & Scoping"
        description="We define clear boundaries. By hosting requirement discovery calls, drafting UML diagrams, and scheduling resources, we keep projects predictably on schedule."
      ></SharedBanner>
      <ProjectPlanningPage></ProjectPlanningPage>
    </div>
  );
};

export default page;

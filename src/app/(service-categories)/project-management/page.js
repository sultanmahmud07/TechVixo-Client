import ProjectManagementPage from "@/components/Pages/Services/ProjectManagement/ProjectManagementPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Project Management Services - Digimatric",
  description: "Digimatric's project management team coordinates timelines, estimates story points, mitigates risks, and guides Agile Scrum sprints to ship on-budget software.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Project Management"
        description="We coordinate complexity. Our project managers leverage Scrum and Kanban agile methodologies, clear story point allocations, and detailed scoping parameters to ensure predictable, on-time releases."
      ></SharedBanner>
      <ProjectManagementPage></ProjectManagementPage>
    </div>
  );
};

export default page;

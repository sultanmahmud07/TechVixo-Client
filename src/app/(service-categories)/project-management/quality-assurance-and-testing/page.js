import QualityAssurancePage from "@/components/Pages/Services/ProjectManagement/QualityAssurancePage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Quality Assurance & Testing Services - Digimatric",
  description: "Digimatric run manual smoke checks, automated integration suites, security tests, and page speed diagnostics to guarantee bug-free software.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Quality Assurance & Testing"
        description="Ship code with confidence. We write automated regression suites, perform usability checks across screen resolutions, and audit security layers to protect your brand."
      ></SharedBanner>
      <QualityAssurancePage></QualityAssurancePage>
    </div>
  );
};

export default page;

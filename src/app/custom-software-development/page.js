import CustomSoftwarePage from "@/components/Pages/Services/Development/CustomSoftwarePage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Custom Software Development Services - Digimatric",
  description: "Digimatric engineers custom CRM/ERP software, legacy integrations, database architectures, and API frameworks tailored to your specific operations.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Custom Software & APIs"
        description="Optimize your business systems. We engineer custom ERP/CRM tools, secure API integrations, and robust database architectures designed to streamline operations and eliminate operational bottlenecks."
      ></SharedBanner>
      <CustomSoftwarePage></CustomSoftwarePage>
    </div>
  );
};

export default page;

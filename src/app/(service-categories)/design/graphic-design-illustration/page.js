import GraphicDesignPage from "@/components/Pages/Services/GraphicDesign/GraphicDesignPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Graphic Design - Digimatric",
  description: "Bespoke digital illustrations, social media graphics, print templates, and banner ads to scale your advertising campaigns.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Graphic Design & Illustration"
        description="At DigiMatric, we design custom digital graphics, vector layouts, packaging, and print assets optimized to capture audience engagement, drive conversions, and grow your brand."
      ></SharedBanner>
      <GraphicDesignPage></GraphicDesignPage>
    </div>
  );
};

export default page;

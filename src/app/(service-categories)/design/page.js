import DesignCategoryPage from "@/components/Pages/Services/Categories/DesignCategoryPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Design Services - Digimatric",
  description: "Digimatric's design services focus on creating stunning, user-centric designs that captivate your audience and elevate your brand.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Design"
        description="Digimatric's design services focus on creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is about aesthetics and creating seamless, intuitive user experiences."
      ></SharedBanner>
      <DesignCategoryPage></DesignCategoryPage>
    </div>
  );
};

export default page;
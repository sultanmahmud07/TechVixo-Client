import DevelopmentPage from "@/components/Pages/Services/Development/DevelopmentPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Development Services - Digimatric",
  description: "Digimatric's engineering team builds robust, secure, and scalable digital solutions by leveraging modern frameworks and engineering best practices.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Development"
        description="Digimatric's development services focus on building robust, high-performance web applications, mobile apps, and custom software. We combine solid engineering with agile delivery to bring your ideas to life."
      ></SharedBanner>
      <DevelopmentPage></DevelopmentPage>
    </div>
  );
};

export default page;

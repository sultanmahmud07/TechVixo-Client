import MobileAppDevelopmentPage from "@/components/Pages/Services/Development/MobileAppDevelopmentPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Mobile App Development Services - Digimatric",
  description: "Digimatric develops high-fidelity native and cross-platform mobile apps for iOS and Android using Flutter and React Native.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Mobile App Development"
        description="Connect with your users on the go. We build highly responsive mobile applications using Swift, Kotlin, Flutter, and React Native, prioritizing smooth layouts and reliable offline performance."
      ></SharedBanner>
      <MobileAppDevelopmentPage></MobileAppDevelopmentPage>
    </div>
  );
};

export default page;

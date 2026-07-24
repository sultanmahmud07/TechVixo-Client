import OnPageLocalSeoPage from "@/components/Pages/Services/SEO/OnPageLocalSeoPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "On-Page & Local SEO Services - Digimatric",
  description: "Digimatric optimizes Google Business Profiles, runs local citation campaigns, adjusts website meta tags, and structures page headers to capture nearby buyers.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="On-Page & Local SEO"
        description="Drive targeted organic foot traffic. We tune metadata tags, configure header tags hierarchies, clean alt attributes, and map local search intents to place you in Google Maps Pack."
      ></SharedBanner>
      <OnPageLocalSeoPage></OnPageLocalSeoPage>
    </div>
  );
};

export default page;

import SEOPage from "@/components/Pages/Services/SEO/SEOPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Search Engine Optimization (SEO) Services - Digimatric",
  description: "Drive sustainable growth with expert digital marketing and search engine optimization (SEO) services tailored to your goals.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Search Engine Optimization (SEO)"
        description="Drive sustainable growth with expert digital marketing and search engine optimization (SEO) services tailored to your goals."
      ></SharedBanner>
      <SEOPage></SEOPage>
    </div>
  );
};

export default page;

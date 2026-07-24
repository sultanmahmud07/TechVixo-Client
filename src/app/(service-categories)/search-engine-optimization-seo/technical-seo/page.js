import TechnicalSeoPage from "@/components/Pages/Services/SEO/TechnicalSeoPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Technical SEO Services - Digimatric",
  description: "Digimatric audits site speeds, resolves crawler errors, configures schema markups, and optimizes Core Web Vitals to boost organic rankings.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Technical SEO"
        description="Build a robust backend foundation. We identify crawlers bottlenecks, optimize XML sitemaps, compress visual assets, and secure pages to guarantee crawling speed."
      ></SharedBanner>
      <TechnicalSeoPage></TechnicalSeoPage>
    </div>
  );
};

export default page;

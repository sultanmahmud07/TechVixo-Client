import TechnicalLinkAcquisitionPage from "@/components/Pages/Services/LinkBuilding/TechnicalLinkAcquisitionPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Technical Link Acquisition Services - Digimatric",
  description: "Digimatric audits broken link reclamations, replicates competitor backlink profiles, cleans toxic referrals, and builds structured local citations.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Technical Link Acquisition"
        description="Reclaim search equity. We crawl target domains to find broken links, replicate competitor backlink sources, and build consistent directory citations profiles."
      ></SharedBanner>
      <TechnicalLinkAcquisitionPage></TechnicalLinkAcquisitionPage>
    </div>
  );
};

export default page;

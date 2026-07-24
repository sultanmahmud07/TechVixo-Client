import CopywritingSeoContentPage from "@/components/Pages/Services/ContentWriting/CopywritingSeoContentPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Copywriting & SEO Content Services - Digimatric",
  description: "Digimatric crawls high-ranking competitor pages, maps outline headers, structures keyword densities, and publishes conversion-oriented landing page copy.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Copywriting & SEO Content"
        description="Drive buyer traffic. We audit competitor content, map target H1/H2 keywords headings, write readable B2B posts, and configure schema snippets."
      ></SharedBanner>
      <CopywritingSeoContentPage></CopywritingSeoContentPage>
    </div>
  );
};

export default page;

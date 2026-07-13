import BrandingAndIdentityPage from "@/components/Pages/Services/BrandingAndIdentity/BrandingAndIdentityPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

export const metadata = {
  title: "Branding & Identity - Digimatric",
  description: "Personalized Logo Design and Brand Identity Services for Unique Branding and Permanent Impact.",
};

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Branding & Identity Design"
        description="At DigiMatric, we build custom brand systems, guidelines, and visual assets designed to captivate your audience, drive immediate trust, and lay the foundation for permanent business impact."
      ></SharedBanner>
      <BrandingAndIdentityPage></BrandingAndIdentityPage>
    </div>
  );
};

export default page;

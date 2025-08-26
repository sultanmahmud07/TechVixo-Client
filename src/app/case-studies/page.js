import CaseStudies from "@/components/Pages/CaseStudies/CaseStudies";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";
export const metadata = {
  title: 'Case Studies - Digimatric',
  description: 'Best digital agency in Dhaka Bangladesh',
}
const page = () => {

    return (
        <div className="">
        <TopGap></TopGap>
        <SharedBanner
        title="Why Explore Our Case Studies?"
        description="Our case studies highlight the transformative impact of our expertise in digital marketing, web development, SEO services, and e-commerce marketing. They demonstrate our commitment to:"
      ></SharedBanner>
      <CaseStudies></CaseStudies>
        </div>
    )
}

export default page;
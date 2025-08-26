import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";
export const metadata = {
  title: 'Career - Digimatric',
  description: 'Best digital agency in Dhaka Bangladesh',
}
const page = () => {

    return (
        <div className="">
           <TopGap></TopGap>
           <SharedBanner
        title="Join Our Team at Digimatric"
        description="Explore insightful articles, tips, and stories about education, travel, and success to guide your journey abroad"
      ></SharedBanner>
        </div>
    )
}

export default page;
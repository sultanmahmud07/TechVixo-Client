import Blogs from "@/components/Pages/Blog/Blogs";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";
export const metadata = {
    title: 'Blog - Digimatric',
    description: 'Best digital agency in Dhaka Bangladesh',
  }
const page = () => {

    return (
        <div className="">
            <TopGap></TopGap>
            <SharedBanner
                title="Blog"
                description="Explore insightful articles, tips, and stories about education, travel, and success to guide your journey abroad"
            ></SharedBanner>
            <Blogs></Blogs>
        </div>
    )
}

export default page;
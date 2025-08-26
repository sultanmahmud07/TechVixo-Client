import BlogDetails from "@/components/Pages/Blog/BlogDetails/BlogDetails";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import slugToText from "@/components/Shared/slugToText";
import TopGap from "@/components/Shared/TopGap/TopGap";

const page = ({ params }) => { 
  const blogTitle = slugToText(params?.slag);

    return (
        <div className="">
            <TopGap></TopGap>
            <SharedBanner
                title={blogTitle}
                description="Explore insightful articles, tips, and stories about education, travel, and success to guide your journey abroad"
            ></SharedBanner>
            <BlogDetails></BlogDetails>
        </div>
    )
}

export default page;
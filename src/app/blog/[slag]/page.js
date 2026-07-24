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
                description="Read insightful articles, tips, and guides on software development, UI/UX designs, and search optimization strategies from Digimatric tech experts."
            ></SharedBanner>
            <BlogDetails title={blogTitle}></BlogDetails>
        </div>
    )
}

export default page;
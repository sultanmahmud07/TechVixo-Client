import BlogDetails from "@/components/Pages/Blog/BlogDetails/BlogDetails";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import StartProject from "@/components/Pages/Home/StartProject/StartPorjcet";
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
            Case Studies Details Page
            <ContactForm></ContactForm>
        </div>
    )
}

export default page;
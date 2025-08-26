import ContactFAQ from "@/components/Pages/Contact/ContactFaq/ContactFaq";
import ContactStartProject from "@/components/Pages/Contact/ContactStartProject/ContactStartProject";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";
export const metadata = {
    title: 'Contact - Digimatric',
    description: 'Best digital agency in Dhaka Bangladesh',
  }
const page = () => {

    return (
        <div className="">
            <TopGap></TopGap>
            <SharedBanner
                title="Contact Us"
                description="Explore insightful articles, tips, and stories about education, travel, and success to guide your journey abroad"
            ></SharedBanner>
            <ContactForm></ContactForm>
            <ContactFAQ></ContactFAQ>
            <ContactStartProject></ContactStartProject>
        </div>
    )
}

export default page;
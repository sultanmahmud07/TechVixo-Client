import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import OurWorks from "@/components/Pages/Home/OurWorks/OurWorks";
import StartProject from "@/components/Pages/Home/StartProject/StartPorjcet";
import OurWorkPage from "@/components/Pages/OurWorks/OurWorksPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";
export const metadata = {
  title: 'Works - Digimatric',
  description: 'Best digital agency in Dhaka Bangladesh',
}
const page = () => {

  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Our Works"
        description="Unveil a portfolio of beautifully designed and strategically executed digital projects that demonstrate our creativity and proficiency"
      ></SharedBanner>
      <OurWorkPage></OurWorkPage>
      <StartProject></StartProject>
      <ContactForm></ContactForm>
    </div>
  )
}

export default page;
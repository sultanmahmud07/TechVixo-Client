import About from "@/components/Pages/About/About"
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm"
import StartProject from "@/components/Pages/Home/StartProject/StartPorjcet"
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner"
import TopGap from "@/components/Shared/TopGap/TopGap"
export const metadata = {
  title: 'About - Digimatric',
  description: 'Best digital agency in Dhaka Bangladesh',
}

const page = () => {
  return (
    <div className="">
       <TopGap></TopGap>
       <SharedBanner
        title="About Us"
        description="we're passionate about helping businesses and individuals succeed by delivering innovative digital solutions. Our team is not just dedicated but obsessed with creating high-quality services that drive actual results, making the digital journey more manageable and impactful."
      ></SharedBanner>
      <About></About>
      <StartProject></StartProject>
      <ContactForm></ContactForm>
    </div>
  )
}

export default page
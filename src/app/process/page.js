import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm"
import StartProject from "@/components/Pages/Home/StartProject/StartPorjcet"
import Process from "@/components/Pages/Process/Process"
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner"
import TopGap from "@/components/Shared/TopGap/TopGap"

export const metadata = {
  title: 'Process - Digimatric',
  description: 'Best digital agency in Dhaka Bangladesh',
}
const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Our Process"
        description="We believe that success begins with a well-structured and client-focused process. Whether it’s digital marketing, web development, or SEO services, our goal is to deliver exceptional results through a collaborative and streamlined approach. Here’s an overview of our process:"
      ></SharedBanner>
      <Process></Process>
      <StartProject></StartProject>
      <ContactForm></ContactForm>
    </div>
  )
}

export default page
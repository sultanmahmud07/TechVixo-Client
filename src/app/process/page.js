import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm"
import StartProject from "@/components/Pages/Home/StartProject/StartPorjcet"
import Process from "@/components/Pages/Process/Process"
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner"
import TopGap from "@/components/Shared/TopGap/TopGap"

export const metadata = {
  title: 'Our Process & Agile Development Methodology - Digimatric',
  description: 'Learn about Digimatric\'s structured agile-scrum software development process. From discovery scoping and wireframing to code execution, QA testing, and launch.',
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
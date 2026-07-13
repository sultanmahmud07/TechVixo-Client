import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm"
import StartProject from "@/components/Pages/Home/StartProject/StartPorjcet"
import ServicesPage from "@/components/Pages/Services/ServicesPage"
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner"
import TopGap from "@/components/Shared/TopGap/TopGap"
import servicesData from "@/lib/servicesDB.json";

export const metadata = {
  title: 'Service - Digimatric',
  description: 'Best digital agency in Dhaka Bangladesh',
}
const page = async () => {
  return (
    <div>
      <TopGap></TopGap>
      <SharedBanner
        title="Our Services"
        description="Elevate your brand with our cutting-edge digital solutions to captivate and connect with your audience."
      ></SharedBanner>
      <ServicesPage services={servicesData}></ServicesPage>
      <StartProject></StartProject>
      <ContactForm></ContactForm>
    </div>
  )
}

export default page
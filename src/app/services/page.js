import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm"
import StartProject from "@/components/Pages/Home/StartProject/StartPorjcet"
import ServicesPage from "@/components/Pages/Services/ServicesPage"
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner"
import TopGap from "@/components/Shared/TopGap/TopGap"
import getServices from "@/lib/getServices"

export const metadata = {
  title: 'Service - Digimatric',
  description: 'Best digital agency in Dhaka Bangladesh',
}
const page = async () => {
  const services = await getServices();
  // const services = null;
  // console.log("serviceDAta:", services)
  return (
    <div>
      <TopGap></TopGap>
      <SharedBanner
        title="Our Services"
        description="Elevate your brand with our cutting-edge digital solutions to captivate and connect with your audience."
      ></SharedBanner>
      <ServicesPage services={services}></ServicesPage>
      <StartProject></StartProject>
      <ContactForm></ContactForm>
    </div>
  )
}

export default page
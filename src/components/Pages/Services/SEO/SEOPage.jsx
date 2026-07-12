import WelcomeServices from "./WelcomeServices";
import ServiceFacilities from "./ServiceFacilities";
import WhyChoose from "./WhyChoose";
import SubServices from "./SubServices";
import SecondBanner from "./SecondBanner";
import WorkProcess from "./WorkProcess";
import ToolsAndTechnology from "./ToolsAndTechnology";
import ServiceFAQ from "./ServiceFAQ";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ClientTestimonial from "@/components/Pages/Home/Testimonial/Testimonial";

const SEOPage = () => {
  return (
    <div>
      <WelcomeServices />
      <ServiceFacilities />
      <WhyChoose />
      <SubServices />
      <SecondBanner />
      <WorkProcess />
      <ToolsAndTechnology />
      <ServiceClients />
      <ClientTestimonial />
      <ServiceFAQ />
    </div>
  );
};

export default SEOPage;

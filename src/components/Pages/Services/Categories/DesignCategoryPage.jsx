import SubServices from "./SubServices";
import ServiceFAQ from "./ServiceFAQ";
import WelcomeServices from "./WelcomeServices";
import ServiceFacilities from "./ServiceFacilities";
import WhyChoose from "./WhyChoose";
import SecondBanner from "./SecondBanner";
import WorkProcess from "./WorkProcess";
import ToolsAndTechnology from "./ToolsAndTechnology";
import ServiceClients from "../Category/ServiceClients/ServiceClients";
import ClientTestimonial from "../../Home/Testimonial/Testimonial";

const DesignCategoryPage = () => {
  return (
    <div>
      <WelcomeServices></WelcomeServices>
      <ServiceFacilities></ServiceFacilities>
      <WhyChoose></WhyChoose>
      <SubServices></SubServices>
      <SecondBanner></SecondBanner>
      <WorkProcess></WorkProcess>
      <ToolsAndTechnology></ToolsAndTechnology>
      <ServiceClients></ServiceClients>
      <ClientTestimonial></ClientTestimonial>
      <ServiceFAQ></ServiceFAQ>
    </div>
  );
};

export default DesignCategoryPage;

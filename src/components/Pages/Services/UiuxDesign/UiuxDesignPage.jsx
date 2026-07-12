import AboutService from "./AboutService";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import WhyNeedThisService from "./WhyNeedThisService";
import HowWorkThisService from "./HowWorkThisService";
import KeyComponentsAndTools from "./KeyComponentsAndTools";
import MoreContent from "./MoreContent";
import ServiceFAQ from "@/components/Pages/Services/Categories/ServiceFAQ";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";

const UiuxDesignPage = () => {
  return (
    <div className="">
      <AboutService />
      <ServiceClients />
      <WhyNeedThisService />
      <HowWorkThisService />
      <KeyComponentsAndTools />
      <MoreContent />
      <ServiceFAQ />
      <ContactForm />
    </div>
  );
};

export default UiuxDesignPage;

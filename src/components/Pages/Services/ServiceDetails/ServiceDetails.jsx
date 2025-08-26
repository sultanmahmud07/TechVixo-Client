import ContactForm from "../../Home/ContactForm/ContactForm";
import ServiceFAQ from "../Category/ServiceFAQ/ServicesFAQ";
import AboutService from "./AboutService/AboutService"
import HowWorkThisService from "./HowWork/HowWorkThisService";
import MoreContent from "./MoreContent/MoreContent";
import PriceStart from "./PriceStart/PriceStart";
import ServiceCaseStudies from "./ServiceCaseStudies/ServiceCaseStudies";
import ServiceClients from "./ServiceClients/ServiceClients";
import ServiceMoreDetail from "./KeyComponetsAndTools/KeyComponetsAndTools";
import WhyNeedThisService from "./WhyNeedThisService/WhyNeedThisService";
import KeyComponentsAndTools from "./KeyComponetsAndTools/KeyComponetsAndTools";

const ServiceDetails = async ({ data }) => {
      // console.log("Service Details Data: ", data)
      return (
            <div className="">
                  {data?.about && <AboutService data={data?.about}></AboutService>}
                  <ServiceClients></ServiceClients>
                 <WhyNeedThisService data={data?.whyChoose}></WhyNeedThisService>
                 <HowWorkThisService data={data?.whyChoose}></HowWorkThisService>
                 <KeyComponentsAndTools data={data?.serviceMoreDetails}></KeyComponentsAndTools>
                  {data?.moreContent && <MoreContent data={data?.moreContent}></MoreContent>}
                  {/* {data?.priceStart && <PriceStart data={data?.priceStart}></PriceStart>} */}
                  {/* {data?.caseStudies && <ServiceCaseStudies data={data?.caseStudies}></ServiceCaseStudies>} */}
                 <ServiceFAQ data={data?.serviceFAQ}></ServiceFAQ>
                  <ContactForm></ContactForm>
            </div>
      )
}

export default ServiceDetails;
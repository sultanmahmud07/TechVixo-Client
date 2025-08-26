// "use client"
import SubServices from './SubServicesList/SubServices';
import ServiceFAQ from './ServiceFAQ/ServicesFAQ';
import WelcomeServices from './WelcomeServices/WelcomeServices';
import ServiceFacilities from './ServiceFacilities/ServiceFacilities';
import WhyChoose from './WhyChoose/WhyChoose';
import SecondBanner from './SecoundBanner/SecoundBanner';
import WorkProcess from './WorkProcess/WorkProcess';
import ToolsAndTechnology from './ToolsAndTechnology/ToolsAndTechnology';
import ServiceClients from './ServiceClients/ServiceClients';
import ClientTestimonial from '../../Home/Testimonial/Testimonial';

const ServiceCategoryPage = ({ data }) => {
  // console.log("Service Data: ", data)
  return (
    <div>
      <WelcomeServices data={data?.welcomeSection}></WelcomeServices>
      <ServiceFacilities data={data?.welcomeSection}></ServiceFacilities>
      <WhyChoose data={data}></WhyChoose>
      <SubServices data={data}></SubServices>
      <SecondBanner data={data}></SecondBanner>
      <WorkProcess data={data?.aboutServices}></WorkProcess>
      <ToolsAndTechnology data={data?.aboutServices}></ToolsAndTechnology>
      <ServiceClients data={data?.aboutServices}></ServiceClients>
      <ClientTestimonial data={data?.aboutServices}></ClientTestimonial>
      {data?.serviceFAQ && <ServiceFAQ data={data?.serviceFAQ}></ServiceFAQ>}
    </div>
  )
}

export default ServiceCategoryPage;
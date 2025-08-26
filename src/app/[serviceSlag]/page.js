import ServiceDetails from "@/components/Pages/Services/ServiceDetails/ServiceDetails";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap"
import getServiceByServiceName from "@/lib/getServiceByServiceName";
import notFound from "@@/404-error.png"
import Image from "next/image";


const page = async ({ params }) => {
  const data = await getServiceByServiceName(params?.slag);
  // const data = null;
  // console.log(data)
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title={data?.title}
        description={data?.description}
      ></SharedBanner>
       <ServiceDetails data={data}></ServiceDetails>
    </div>
  )
}

export default page
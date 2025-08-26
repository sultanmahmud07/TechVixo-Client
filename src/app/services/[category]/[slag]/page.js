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
      {
        data ?
          <ServiceDetails data={data}></ServiceDetails>
          :
          <div className="flex items-center justify-center py-10 md:pt-24">
            <Image
              width={400}
              height={400}
              src={notFound}
              alt={"not-found-image"}
              className="w-32 md:w-40"
            />
          </div>
      }
    </div>
  )
}

export default page
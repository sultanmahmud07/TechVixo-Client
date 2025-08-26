import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import ServiceCategoryPage from "@/components/Pages/Services/Category/ServiceCategoryPage";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner"
import TopGap from "@/components/Shared/TopGap/TopGap"
import getServiceByCategory from "@/lib/getServiceByCategory";


const page = async ({ params }) => {
  const data = await getServiceByCategory(params?.category);
  // console.log(data)

  return (
    <>
      {data?.category_name ?
        <div className="">
          <TopGap></TopGap>
          <SharedBanner
            title={data?.category_name}
            description={data?.description}
          ></SharedBanner>
          <ServiceCategoryPage data={data}></ServiceCategoryPage>
          <ContactForm></ContactForm>
        </div>
        :
        <div className="flex items-center justify-center h-72 bg-secondary">
          <h5 className="text-xl md:text-3xl text-gray-400 font-bold">No Data Founded!</h5>
        </div>
      }
    </>
  )
}

export default page
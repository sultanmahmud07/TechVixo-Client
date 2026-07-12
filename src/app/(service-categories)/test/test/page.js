import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner"
import TopGap from "@/components/Shared/TopGap/TopGap"
export const metadata = {
  title: 'About - Digimatric',
  description: 'Best digital agency in Dhaka Bangladesh',
}

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Testing Title"
        description="Testing Description"
      ></SharedBanner>
      <p>Hello tewstign</p>
    </div>
  )
}

export default page
import ClientTestimonial from "@/components/Pages/Home/Testimonial/Testimonial";
import TestimonialsView from "@/components/Pages/Testimonials/TestimonialsView";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";
export const metadata = {
    title: 'Testimonial - Digimatric',
    description: 'Best digital agency in Dhaka Bangladesh',
  }
const page = () => {

    return (
        <div className="">
       <TopGap></TopGap>
       <SharedBanner
        title="Testimonials"
        description="Explore insightful articles, tips, and stories about education, travel, and success to guide your journey abroad"
      ></SharedBanner>
      <TestimonialsView></TestimonialsView>
       {/* <ClientTestimonial></ClientTestimonial> */}
        </div>
    )
}

export default page;
import ClientTestimonial from "@/components/Pages/Home/Testimonial/Testimonial";
import TestimonialsView from "@/components/Pages/Testimonials/TestimonialsView";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";
export const metadata = {
  title: 'Client Reviews & Testimonials - Digimatric',
  description: 'See what our clients say about Digimatric\'s software development, UI/UX design, and SEO services. Read real success reviews from tech founders and CTOs.',
}

const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Client Testimonials"
        description="Discover how we partner with CTOs, tech founders, and marketing directors to build high-performance software applications, optimize maps search rankings, and scale cloud databases."
      ></SharedBanner>
      <TestimonialsView></TestimonialsView>
    </div>
  )
}

export default page;
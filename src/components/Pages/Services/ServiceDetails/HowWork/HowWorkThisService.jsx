import WorkCard from "./WorkCard"
import WhyNeedCard from "./WorkCard"

const HowWorkThisService = () => {
const data = [
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 1
    },
]
    return (
        <div className='my-6 md:my-14'>
            <div className="main_container">
                <div className="top_title_design flex flex-col items-center">
                    <h2 className="w-full md:w-3/4 text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
                    How Digimatric’s Local SEO Services Work (Overview)
                    </h2>
                    <p className='text-[#111204CC] text-center w-full md:w-5/6'>At Digimatric, we employ proven Local SEO strategies to help your business dominate local search rankings and connect with your ideal customers in your geographic area. Our step-by-step approach begins with a thorough audit of your website and online presence. From there, we tailor a Local SEO plan that aligns with your business goals, industry needs, and competitive landscape. This ensures that every action we take is strategically aimed at achieving the best possible outcomes for your business. Our process includes:
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 md:gap-x-8 py-3 md:py-6 md:pt-9">
                    {
                        data?.map((facility, i) => {
                            return (
                                <WorkCard key={i} facility={facility}></WorkCard>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HowWorkThisService;
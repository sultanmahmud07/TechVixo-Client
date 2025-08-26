import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
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
]
    return (
        <section className='bg-secondary py-10 md:py-16 my-5 md:my-14 text-white'>
            <div className="main_container">
                <h3 className='sut_title_white text-center uppercase text-white'>Why choose</h3>
                <div className="top_title_design flex flex-col items-center">
                    <h2 className="text-center text-2xl md:text-4xl font-bold my-3 md:my-5">
                    Why Choose Our SEO Services
                    </h2>
                    <p className='text-center w-full md:w-3/5'>At Digimatric, we provide a full suite of digital marketing services designed to boost your brand&apos;s visibility and performance across all platforms.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5 my-4 pt-6 md:pt-10">
                    {
                        data?.map((facility, i) => {
                            return (
                                <WhyChooseCard key={i} facility={facility}></WhyChooseCard>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
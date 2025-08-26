
import SubServiceCard from './SubServiceCard'

const SubServices = () => {
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
        <div className='my-10 md:my-14'>
            <div className="main_container">
                <div className="top_title_design flex flex-col items-center">
                <h3 className='sut_title'>Service</h3>
                    <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
                    Our Comprehensive SEO Service
                    </h2>
                    <p className='text-[#111204CC] text-center w-full md:w-3/5'>At Digimatric, we provide a full suite of digital marketing services designed to boost your brand&apos;s visibility and performance across all platforms.
                    </p>
                </div>
                <div className="py-5 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {
                        data?.map((service, i) => {
                            return (
                                <SubServiceCard key={i} category={data} service={service}></SubServiceCard>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SubServices
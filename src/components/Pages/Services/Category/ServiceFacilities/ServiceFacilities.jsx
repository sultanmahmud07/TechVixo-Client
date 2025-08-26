import ServiceFacility from './ServiceFacility'

const ServiceFacilities = () => {
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
        <div className='my-5 md:my-14'>
            <div className="main_container">
                <h3 className='sut_title'>SEO HELPS</h3>
                <div className="top_title_design flex flex-col items-center">
                    <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
                    How SEO Helps Businesses Grow Online
                    </h2>
                    {/* <p className='text-[#111204CC] text-center w-full md:w-1/2'>At Digimatric, we provide a full suite of digital marketing services designed to boost your brand&apos;s visibility and performance across all platforms.
                    </p> */}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 pt-3 md:pt-6">
                    {
                        data?.map((facility, i) => {
                            return (
                                <ServiceFacility key={i} facility={facility}></ServiceFacility>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServiceFacilities
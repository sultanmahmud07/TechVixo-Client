import Image from 'next/image'
import img1 from '@@/images/services/category/WeServe/1.png'
import img2 from '@@/images/services/category/WeServe/2.png'
import img3 from '@@/images/services/category/WeServe/3.png'
import img4 from '@@/images/services/category/WeServe/4.png'
import img5 from '@@/images/services/category/WeServe/5.png'

const ServiceClients = () => {
    const data = [
        {
            id: 1,
            img: img1
        },
        {
            id: 1,
            img: img2
        },
        {
            id: 1,
            img: img3
        },
        {
            id: 1,
            img: img4
        },
        {
            id: 1,
            img: img5
        },
    ]
    return (
        <div className='w-full bg-[#010202] p-8  md:px-14 my-8 md:my-10'>
            <div className="main_container">
                <h2 className="text-2xl text-center md:text-4xl font-bold text-white my-3 md:my-5 ">
                Industries We Serve
                </h2>
                <div className="grid grid-cols-5 gap-3 md:gap-10 items-center md:py-6">
                    {
                        data.map((item, i) => {
                            return (
                                <div key={i} className='md:px-5'>
                                    <Image
                                        src={item?.img}
                                        alt="logo"
                                        width={300}
                                        height={200}
                                        className="w-full"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServiceClients
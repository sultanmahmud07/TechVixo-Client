import Image from 'next/image'
import img1 from '@@/images/home/client/1.png'
import img2 from '@@/images/home/client/2.png'
import img3 from '@@/images/home/client/3.png'
import img4 from '@@/images/home/client/4.png'
import img5 from '@@/images/home/client/5.png'

const ServiceClients = () => {
const data = [
{
    img: img1
},
{
    img: img2
},
{
    img: img3
},
{
    img: img4
},
{
    img: img5
},
]
    return (
        <div className='w-full my-10 bg-[#222222] p-8 md:py-12 md:px-14'>
            <div className="main_container">
                <div className="grid grid-cols-5 gap-3 md:gap-10 items-center">
                    {
                        data?.map((item, i) => {
                            return (
                                <div key={i} className=''>
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
import Image from "next/image";

const ServiceFacilities = () => {
    const facilities = [
        {
            id: 1,
            title: "Deliver an Exceptional User Experience (UX)",
            icon: "/assets/images/services/category/design/icon/1.svg"
        },
        {
            id: 2,
            title: "Ensure Smooth, Efficient Operations",
            icon: "/assets/images/services/category/design/icon/2.svg"
        },
        {
            id: 3,
            title: "Drive more online leads, conversions, and sales.",
            icon: "/assets/images/services/category/design/icon/3.svg"
        }
    ];

    return (
        <div className="my-5 md:my-14">
            <div className="main_container">
                <h3 className="sut_title">DESIGN HELPS</h3>
                <div className="top_title_design flex flex-col items-center">
                    <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
                        When your website is performing and looking its best, you will:
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 pt-3 md:pt-6">
                    {facilities.map((facility, i) => (
                        <div key={i} className="facility_card flex flex-col items-center justify-center gap-1 p-2">
                            <div className="service_icon w-20 md:w-24">
                                <Image
                                    src={facility.icon}
                                    alt={facility.title}
                                    width={200}
                                    height={200}
                                    className="w-full"
                                />
                            </div>
                            <h3 className="text-center text-lg font-bold text-[#111204]">{facility.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceFacilities;

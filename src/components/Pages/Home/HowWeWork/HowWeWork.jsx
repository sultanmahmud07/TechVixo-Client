import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { BiRevision } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
const HowWeWork = () => {
  const one = <BsFillRocketTakeoffFill />;
  const two = <LiaHourglassStartSolid />;
  const three = <BiRevision />;
  const four = <IoMdContacts />
  const data = [
    {
      id: 1,
      title: "Dedicated Team",
      icon: one,
      des: "Build your dream team at a fraction of the cost. Get unlimited design requests with our subscription-based service."
    },
    {
      id: 1,
      title: "Fast Turnaround",
      icon: two,
      des: "Receive your designs in just a few days with constant updates."
    },
    {
      id: 1,
      title: "On-Demand Design",
      icon: three,
      des: "Submit as many design tasks as you need without worrying about extra fees."
    },
    {
      id: 1,
      title: "No Lock-in Contracts",
      icon: four,
      des: "Pay a flat monthly fee with no surprise charges. You’re in control."
    },
  ]
  return (
    <div className='main_container py-3'>
      <h6 className='text-primary'>How We Work</h6>
      <div className="top_section grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
        <div className="top_left">
          <h2 className="text-3xl md:text-5xl font-semibold text-white my-3 md:my-5">
            Build a dedicated team for a fraction of the usual
            cost
          </h2>
        </div>
        <div className="top_right">
          <p className='text-[#FFFFFFCC] text-xl py-2 md:py-5'>We believe in creating tailored solutions for every client. Here&apos;s how we work at Digimatric:
          </p>
          <button type="button" className=" mt-2 md:mt-3 bg-primary hover:bg-secondary hover:text-white rounded shadow p-2 px-4">
            See Pricing
          </button>
        </div>
      </div>
      <div className="bottom_section pt-8 md:pt-20 grid grid-cols-1 md:grid-cols-4 gap-5">
        {
          data?.map((item, i) => {
            return (
              <div key={i} className="w-full flex flex-col gap-2 md:gap-4 text-white">
                <div className="flex justify-center items-center text-3xl md:text-4xl rounded-full md:w-20 md:h-20 w-14 h-14 bg-primary text-black">
                  {item.icon}
                </div>
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-[#FFFFFFCC]">{item.des}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default HowWeWork;
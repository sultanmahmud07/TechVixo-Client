import WorkCard from '../WorkCard'
import Link from 'next/link'

const DisplayWorks = ({ activeTab }) => {
 
  // console.log(activeTab)
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col gap-3 md:gap-5 my-3">
        <h2 className="text-xl md:text-3xl text-[#111204] font-semibold capitalize">
          {activeTab?.category}
        </h2>
        <p className="text-sm md:text-base">
          {activeTab?.description}
        </p>
        <Link
          href={`/services/${activeTab?.link}`}
        >
          <button type="button" className="inline-block text-sm shadow md:shadow-md bg-secondary p-2 px-3 md:px-10 rounded-md text-[#FFFFFF]"> Our design services include:</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
        {
          activeTab?.projects?.map((service, i) => {
            return (
              <WorkCard
                key={i}
                service={service}
              ></WorkCard>
            )
          })
        }
      </div>
    </div>
  )
}

export default DisplayWorks
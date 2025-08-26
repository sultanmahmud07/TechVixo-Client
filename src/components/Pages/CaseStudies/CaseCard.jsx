import generateSlug from "@/components/Shared/generateSlug"
import Image from "next/image"
import Link from "next/link"
import { FaArrowCircleRight } from "react-icons/fa";


const CaseCard = ({ blog }) => {
  const slag = generateSlug(blog?.title)
  return (
    <div className="relative">
      <div className="case_img  w-full">
        <Image
          width={400}
          src={blog?.img}
          alt={blog?.title}
          className="w-full h-full rounded-md"
        />
      </div>
     <div className="absolute top-0 left-0  w-full h-full p-2 md:p-4">
     <div className=" w-full h-full md:pb-9 flex items-center justify-end flex-col gap-2 md:gap-5 p-2 md:p-4 border border-white">
        <h4 className="text-white md:my-2 text-base md:text-2xl font-semibold capitalize text-center">{blog?.title}</h4>
        <Link href={`/case-studies/${slag}`} className="flex text-xs md:text-sm items-center gap-0 md:gap-2 md:mt-5 bg-primary rounded text-black p-2 md:px-4">
        <span>VIEW CASE STUDY</span>
            <span><FaArrowCircleRight /></span>
        </Link>
      </div>
     </div>
    </div>
  )
}

export default CaseCard
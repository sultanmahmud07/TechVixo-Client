import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ data }) => {
  const { name, post, title, des, img, client } = data;
  return (
    <div className="px-5 md:px-32 my-4 md:my-6">
      <div className="testimonial_card flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 bg-white p-6 md:p-12 rounded-2xl relative shadow-md border border-gray-50 hover:shadow-lg transition-all duration-300">
        
        {/* Quote watermark icon */}
        <div className="absolute top-8 right-12 text-gray-100 text-6xl pointer-events-none hidden md:block">
          <FaQuoteLeft />
        </div>

        {/* Left Side: Testimonial content */}
        <div className="left_t_content w-full md:w-2/3 flex flex-col gap-4 text-left">
          
          {/* Client Logo */}
          <div className="w-24 md:w-28 opacity-85 hover:opacity-100 transition">
            <Image
              width={112}
              height={40}
              src={client}
              alt="Client Brand Logo"
              className="object-contain"
            />
          </div>

          {/* Golden Stars Rating */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
          </div>

          {/* Testimonial text */}
          <div className="flex flex-col gap-2">
            <h4 className="text-[#14142B] text-lg md:text-xl font-bold leading-snug">
              "{title}"
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {des}
            </p>
          </div>

          {/* User details */}
          <div className="pt-2 border-t border-gray-50 mt-2">
            <span className="block text-secondary font-bold text-sm md:text-base">{name}</span>
            <span className="text-xs text-gray-400 font-medium">{post}</span>
          </div>

        </div>

        {/* Right Side: Circular Avatar image */}
        <div className="right_img w-28 md:w-1/3 flex justify-center">
          <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md ring-4 ring-primary/10">
            <Image
              src={img}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialCard;

import Image from "next/image";
import img from "@@/images/services/category/key-img.png";
import { FaCheck } from "react-icons/fa";

const KeyComponentsAndTools = () => {
  const keyData = [
    {
      id: 1,
      title: "Responsive Layouts",
      description: "We ensure that screens load beautifully and scale smoothly on mobile, tablet, and desktop viewports."
    },
    {
      id: 2,
      title: "Aesthetic Visual Style",
      description: "We establish typography rules, consistent spacing, and color palettes that fit your brand identity."
    },
    {
      id: 3,
      title: "Component Libraries",
      description: "We design reusable button sets, input controls, navigation menus, and widgets for clean engineering handoff."
    },
    {
      id: 4,
      title: "Usability Validation",
      description: "Our clickable mockups allow validating screen connections and interactions before writing single lines of code."
    }
  ];

  return (
    <div className="py-8 md:py-16 my-5 md:my-10 bg-secondary text-white">
      <div className="main_container">
        <div className="flex flex-col gap-3 md:gap-5">
          <div className="card_1 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
            <div className="right_site">
              <Image
                width={600}
                height={400}
                src={img}
                alt="UX/UI components illustration"
                className="w-full"
              />
            </div>
            <div className="left_site flex flex-col justify-center">
              <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Key Components of Our UX/UI Services</h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5">
                <p className="text-sm md:text-base text-gray-300">
                  At DigiMatric, we focus on user research, UI style consistency, and interactive designs to build state-of-the-art web products. We ensure every user touchpoint is highly optimized for usability and performance.
                </p>
                <p className="text-sm md:text-base text-gray-300">
                  By building pixel-perfect prototypes and maintaining structured design systems, we streamline the handoff to frontend engineers, saving time and resources.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3 my-4">
            {keyData.map((facility, i) => (
              <div key={i} className="key_card w-full flex gap-3">
                <div className="key_icon pt-1 flex-shrink-0">
                  <div className="bg-[#2ECC711A] w-8 h-8 rounded-lg flex items-center justify-center">
                    <FaCheck className="text-[#2ECC71] text-xs" />
                  </div>
                </div>
                <div className="">
                  <h3 className="font-semibold mb-2 md:text-lg">{facility.title}</h3>
                  <p className="text-sm text-gray-300">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyComponentsAndTools;

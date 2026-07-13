"use client";

import Image from "next/image";
import Link from "next/link";
import img from "@@/images/services/category/key-img.png";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ServiceFAQ from "@/components/Pages/Services/Categories/ServiceFAQ";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import {
  FaCrown,
  FaShieldAlt,
  FaHeart,
  FaTasks,
  FaSearch,
  FaPenNib,
  FaPalette,
  FaBriefcase,
  FaBook,
  FaCloudUploadAlt,
  FaCheck,
} from "react-icons/fa";

const BrandingAndIdentityPage = () => {
  const facilities = [
    {
      id: 1,
      title: "Establish Visual Authority",
      description: "Define a unique, memorable logo and brand style that stands out from competitors and commands market presence.",
      icon: FaCrown
    },
    {
      id: 2,
      title: "Build Immediate Trust",
      description: "A professional and cohesive brand image instills immediate credibility and confidence in your prospects.",
      icon: FaShieldAlt
    },
    {
      id: 3,
      title: "Cultivate Brand Loyalty",
      description: "Consistency across all marketing collaterals ensures a reliable customer connection and long-term retention.",
      icon: FaHeart
    },
    {
      id: 4,
      title: "Unified Brand Guidelines",
      description: "Establish crystal-clear rules for colors, typography, and graphics, making marketing scaling a seamless process.",
      icon: FaTasks
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Discovery & Brand Strategy",
      description: "We dive deep into your company values, target demographics, and competitors to map out your brand's unique positioning.",
      icon: FaSearch
    },
    {
      id: 2,
      title: "Logo & Brand Core Design",
      description: "We brainstorm and mock up core logo options, experimenting with visual symbols and wordmarks that express your essence.",
      icon: FaPenNib
    },
    {
      id: 3,
      title: "Color Palette & Typography",
      description: "We curate a tailored color system and typeface hierarchy to elicit the right emotional response and ensure readability.",
      icon: FaPalette
    },
    {
      id: 4,
      title: "Marketing Collateral Design",
      description: "We design premium business cards, letterheads, social media templates, and packaging aligned with the new visual system.",
      icon: FaBriefcase
    },
    {
      id: 5,
      title: "Brand Guideline Creation",
      description: "We compile an extensive brand style guide document specifying the spacing, usage rules, and do's and don'ts for your assets.",
      icon: FaBook
    },
    {
      id: 6,
      title: "Asset Delivery & Support",
      description: "We hand over high-resolution, print-ready, and digital formats of all assets, providing long-term support for your brand launch.",
      icon: FaCloudUploadAlt
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "Cohesive Visual System",
      description: "We link every asset to a central guideline to make sure all brand applications match perfectly."
    },
    {
      id: 2,
      title: "Vector Scalability",
      description: "All logos and illustrations are delivered in vector formats (SVG, AI, EPS) for pixel-perfect printing."
    },
    {
      id: 3,
      title: "Custom Templates",
      description: "We equip your marketing team with editable Canva, Figma, or Photoshop templates for rapid publishing."
    },
    {
      id: 4,
      title: "Market Relevance",
      description: "We research current design trends to build a brand identity that feels modern, premium, and future-proof."
    }
  ];

  const sections = [
    {
      title: "Aligning Brand Strategy with Business Goals",
      description: [
        "A beautiful logo is useless if it does not communicate the right message to your target customer. At DigiMatric, we treat branding as a strategic business asset that bridges the gap between your services and consumer perception.",
        "We help you define a strong tone of voice, visual symbols, and identity guidelines that express the high quality of work you do, ensuring your brand leaves a lasting footprint."
      ],
      img: "/assets/images/services/details-image/design/ui-ux/1.png"
    },
    {
      title: "Consistent Identity Across All Channels",
      description: [
        "From your website to your social media graphics, print advertisements, and packaging, a uniform presence increases revenue. We design cohesive styles that ensure your brand is instantly recognizable.",
        "We build templates that enable quick creation of branded assets while preventing layout drift, keeping your visual identity premium and aligned."
      ],
      img: "/assets/images/services/details-image/design/ui-ux/2.png"
    }
  ];

  const moreContent = [
    {
      title: "Custom Logo Design & Symbolism",
      description: "The logo is the centerpiece of your brand. We design logos that are simple, distinct, memorable, and adaptable across digital screens and print materials."
    },
    {
      title: "Brand Typography & Font Hierarchies",
      description: "Typefaces communicate personality. We curate font combinations that establish professional tone, visual order, and perfect legibility across all platforms."
    },
    {
      title: "Premium Stationery & Collaterals",
      description: "Enhance your business communications with custom-designed business cards, corporate letterheads, email signatures, presentation decks, and brochures."
    }
  ];

  return (
    <div className="">
      {/* About Section */}
      <div className="py-6 md:pt-16">
        <div className="main_container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
            <div className="left_site">
              <h3 className="text-2xl md:text-4xl text-[#000000] font-bold leading-tight">
                Crafting Distinctive Brand Identities That Fuel Growth, Command Attention, and Build Lasting Loyalty
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5">
                <p>
                  At DigiMatric, we know that your brand is much more than just a logo. It is the visual expression of your company's core values, mission, and dedication to quality.
                </p>
                <p>
                  We build custom brand systems, guidelines, and visual assets designed to captivate your audience, drive immediate trust, and lay the foundation for permanent business impact.
                </p>
              </div>
              <Link href="/contact" className="inline-block mt-4 md:mt-6">
                <button className="bg-primary text-sm py-3 px-7 hover:text-white hover:bg-secondary transition rounded text-white font-semibold">
                  Lets Talk
                </button>
              </Link>
            </div>
            <div className="right_site">
              <Image
                width={600}
                height={400}
                src="/assets/images/services/details-image/about-service.png"
                alt="Branding and identity about image"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <ServiceClients />

      {/* Why Need Section */}
      <div className="my-6 md:my-14 bg-[#F8F9FA] py-12">
        <div className="main_container">
          <div className="top_title_design flex flex-col items-center">
            <h2 className="text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
              Why Your Business Needs Brand Identity
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Transform Your Marketing and Create a Lasting Impression with a Consistent Visual Brand
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6">
            {facilities.map((facility, i) => {
              const FacilityIcon = facility.icon;
              return (
                <div key={i} className="need_card bg-white flex flex-col items-center gap-2 p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="service_icon bg-[#2ECC711A] w-16 h-16 rounded-xl flex items-center justify-center mb-2">
                    <FacilityIcon className="text-[#2ECC71] text-2xl" />
                  </div>
                  <h3 className="text-center text-base md:text-lg font-bold text-[#111204]">{facility.title}</h3>
                  <p className="text-center text-sm text-gray-600">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="my-6 md:my-14">
        <div className="main_container">
          <div className="top_title_design flex flex-col items-center">
            <h2 className="w-full md:w-3/4 text-center text-2xl md:text-4xl font-bold text-[#111204] my-3 md:my-5">
              How Digimatric’s Branding Services Work
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              Our structured process ensures that your visual identity matches your target goals, combining discovery, high-end styling, and extensive style guides.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:gap-x-8 py-6">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={i} className="need_card bg-white flex flex-col gap-2 p-6 md:p-8 shadow-sm hover:shadow-md border border-gray-100 rounded-xl transition-all duration-300">
                  <div className="service_icon bg-[#2ECC711A] w-12 h-12 rounded-xl flex items-center justify-center">
                    <StepIcon className="text-[#2ECC71] text-xl" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#111204]">0{step.id}. {step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Components Section */}
      <div className="py-8 md:py-16 my-5 md:my-10 bg-secondary text-white">
        <div className="main_container">
          <div className="flex flex-col gap-8">
            <div className="card_1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="right_site">
                <Image
                  width={600}
                  height={400}
                  src={img}
                  alt="Branding components illustration"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Key Components of Our Brand Services</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    At DigiMatric, we build design systems, consistent grids, and digital templates to establish a reliable voice. We ensure every corporate touchpoint is highly optimized for brand consistency.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    By scaling vector layouts and compiling comprehensive asset guidelines, we prepare your brand to launch smoothly across all global markets.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-4">
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

      {/* More Content Section */}
      <div className="main_container py-5 md:py-10">
        <div className="flex flex-col gap-8 md:gap-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col gap-6 md:gap-12 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="w-full md:w-2/5">
                <Image
                  width={600}
                  height={400}
                  src={section.img}
                  alt="Branding design showcase"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="w-full text-[#000000] md:w-3/5 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold my-3 text-secondary leading-tight">
                  {section.title}
                </h2>
                {section.description.map((item, idx) => (
                  <p className="text-sm md:text-base my-2 text-gray-600 leading-relaxed" key={idx}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 py-12">
          {moreContent.map((content, i) => (
            <div key={i} className="w-full border-t border-gray-150 pt-6">
              <h2 className="text-2xl md:text-3xl font-bold my-2 text-secondary">
                {content.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {content.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ServiceFAQ />
      <ContactForm />
    </div>
  );
};

export default BrandingAndIdentityPage;

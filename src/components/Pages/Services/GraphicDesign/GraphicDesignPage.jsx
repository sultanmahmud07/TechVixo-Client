"use client";

import Image from "next/image";
import Link from "next/link";
import img from "@@/images/services/category/key-img.png";
import ServiceClients from "@/components/Pages/Services/Category/ServiceClients/ServiceClients";
import ServiceFAQ from "@/components/Pages/Services/Categories/ServiceFAQ";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import {
  FaEye,
  FaPaintBrush,
  FaBullhorn,
  FaFileImage,
  FaComments,
  FaClipboardList,
  FaRegLightbulb,
  FaLayerGroup,
  FaSync,
  FaPrint,
  FaCheck,
} from "react-icons/fa";

const GraphicDesignPage = () => {
  const facilities = [
    {
      id: 1,
      title: "Enhance Brand Visibility",
      description: "Eye-catching social graphics, vector illustrations, and print materials designed to capture instant consumer interest.",
      icon: FaEye
    },
    {
      id: 2,
      title: "Professional Artwork",
      description: "Delivering beautiful, high-resolution digital artwork created by design specialists to project a premium company image.",
      icon: FaPaintBrush
    },
    {
      id: 3,
      title: "High-Converting Ads",
      description: "Visual banner ads built to drive high user engagement, optimize clicks, and scale advertising campaigns.",
      icon: FaBullhorn
    },
    {
      id: 4,
      title: "Diverse Asset Formats",
      description: "Full suite of digital design files optimized for both online platforms and offset/digital physical printing.",
      icon: FaFileImage
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Client Creative Briefing",
      description: "We align on the creative objectives, branding guidelines, dimensional specs, and visual style preferences.",
      icon: FaComments
    },
    {
      id: 2,
      title: "Ideation & Draft Layouts",
      description: "We brainstorm design concepts, drafting raw layout ideas and visual mockups for your consideration.",
      icon: FaRegLightbulb
    },
    {
      id: 3,
      title: "High-Fidelity Rendering",
      description: "We compile illustration assets, render graphics, and layout print materials using advanced vector/pixel tools.",
      icon: FaLayerGroup
    },
    {
      id: 4,
      title: "Review & Iterations",
      description: "We refine color balances, contrast, typography alignments, and spacing based on your review feedback.",
      icon: FaSync
    },
    {
      id: 5,
      title: "Print & Screen Preflighting",
      description: "We perform pre-press checks (CMYK, bleed boundaries) and screen optimization (RGB, file compression) for flawless output.",
      icon: FaPrint
    },
    {
      id: 6,
      title: "Final Handoff & Assets Package",
      description: "We deliver full print-ready PDFs, high-res PNGs, raw vector files (AI, PSD, Figma), and social templates.",
      icon: FaClipboardList
    }
  ];

  const keyData = [
    {
      id: 1,
      title: "High Resolution Output",
      description: "All digital assets are delivered in crystal-clear high resolutions (300 DPI for prints, Web-optimized for screens)."
    },
    {
      id: 2,
      title: "Strict Grid Alignment",
      description: "We utilize precise grid structures and visual hierarchies to keep content readable and aesthetically balanced."
    },
    {
      id: 3,
      title: "Fully Editable Layers",
      description: "Source files are perfectly organized with structured, labeled layers, making future edits simple for your team."
    },
    {
      id: 4,
      title: "Multi-Platform Formats",
      description: "Custom template files formatted correctly for Instagram, Facebook, LinkedIn, YouTube, and display ad platforms."
    }
  ];

  const sections = [
    {
      title: "Eye-Catching Visuals for Modern Marketing",
      description: [
        "In a fast-paced digital world, users scroll past generic images in milliseconds. Our graphic design services focus on custom, high-impact vector artwork and layouts designed to disrupt their feed.",
        "We build graphic designs that tell a story, support call-to-actions, and increase conversion rates on Facebook, Google, and your website."
      ],
      img: "/assets/images/services/details-image/design/ui-ux/1.png"
    },
    {
      title: "Print Media and Promotional Collaterals",
      description: [
        "Physical touchpoints require the same attention to detail as digital screens. We design corporate brochures, banners, product packaging, and trade show displays that look premium and project authority.",
        "We handle the technical setup (bleed marks, color profiles) so that what you see on the screen matches perfectly with what comes out of the printer."
      ],
      img: "/assets/images/services/details-image/design/ui-ux/2.png"
    }
  ];

  const moreContent = [
    {
      title: "Custom Vector Illustration",
      description: "Avoid generic stock illustrations. We create bespoke digital artwork, characters, and iconography that represent your unique brand style."
    },
    {
      title: "Social Media Banner & Post Graphics",
      description: "Keep your profiles looking active and professional with custom templates for social campaigns, cover photos, and thumbnails."
    },
    {
      title: "Corporate Marketing & Advertising Material",
      description: "Get bespoke layouts for flyers, brochures, presentation slides, display ads, and email banners designed to convert viewers into leads."
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
                Designing High-Impact Visuals, Digital Illustrations, and Marketing Materials That Elevate Your Brand
              </h3>
              <div className="flex flex-col gap-2 py-2 md:pt-5">
                <p>
                  At DigiMatric, we turn abstract ideas into stunning visual reality. We believe that professional graphic design is a powerful business tool that commands consumer attention.
                </p>
                <p>
                  We design custom digital graphics, vector layouts, packaging, and print assets optimized to capture audience engagement, drive conversions, and grow your brand.
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
                alt="Graphic Design about image"
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
              Why Your Business Needs Graphic Design
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-1/2">
              Maximize Audience Retention and Build Customer Engagement with Professional Visual Assets
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
              How Digimatric’s Graphic Design Services Work
            </h2>
            <p className="text-[#111204CC] text-center w-full md:w-5/6">
              Our structured process ensures that your graphic assets match your target layout files, combining drafting, refinement, and pre-flight checks.
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
                  alt="Graphic Design components illustration"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="left_site flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-[#FFFFFF] font-bold">Key Components of Our Graphic Services</h3>
                <div className="flex flex-col gap-3 py-3">
                  <p className="text-sm md:text-base text-gray-300">
                    At DigiMatric, we focus on custom digital graphics, vector layouts, packaging, and print assets optimized to capture audience engagement. We ensure visual style consistency across all platforms.
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
                  alt="Graphic Design showcase"
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

export default GraphicDesignPage;

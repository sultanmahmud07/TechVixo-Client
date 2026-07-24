import Image from "next/image";

const MoreContent = () => {
  const sections = [
    {
      title: "User Research & Empathy Mapping",
      description: [
        "Understanding user psychology and target demographics is the cornerstone of any successful digital interface. At Digimatric, we run user research cycles to define behavioral patterns, outline user personas, and map out custom empathy charts.",
        "We convert these insights into logical interaction frameworks, ensuring that your digital product solves real user problems and eliminates navigation friction from the first click."
      ],
      img: "/assets/images/services/design/uiux-research.png"
    },
    {
      title: "Interactive Wireframes & Flow Blueprints",
      description: [
        "Before diving into colors and visual elements, we outline the structural skeleton of your software. Wireframing lets us define page information hierarchies, user pathways, and call-to-action positions.",
        "Our interactive clickable prototypes simulate true user experiences, allowing your stakeholders to review menus, input forms, and page transitions early in the design phase."
      ],
      img: "/assets/images/services/design/uiux-wireframes.png"
    },
    {
      title: "High-Fidelity UI Design & Style Libraries",
      description: [
        "We translate approved blueprints into beautiful, modern user interfaces. We curate tailored color schemes, professional font hierarchies, and custom icon sets that elevate your corporate identity.",
        "We build reusable design systems and component libraries (buttons, modals, input elements) to accelerate front-end coding while guaranteeing complete visual styling consistency."
      ],
      img: "/assets/images/services/design/uiux-visual.png"
    }
  ];

  const moreContent = [
    {
      title: "User-Centered Interaction Design",
      description: "Interaction design focuses on creating engaging interfaces with logical behaviors and actions. We ensure that menus, buttons, forms, and transitions feel natural and intuitive to use."
    },
    {
      title: "Responsive Grid Layouts & Scaling",
      description: "With the rise of diverse screen resolutions, having highly responsive layouts is essential. We design adaptive layouts that scale gracefully from watches to ultra-wide desktop monitors."
    },
    {
      title: "Typography and Clear Visual Hierarchies",
      description: "Typography, line height, font sizing, and visual weights are crucial for readability. We curate cohesive font systems that establish a clear order of information on the page."
    },
    {
      title: "Accessibility (a11y) & Contrast Checking",
      description: "We follow WCAG standards, designing high-contrast color palettes, accessible input fields, keyboard-navigable components, and screen-reader-friendly layouts."
    }
  ];

  return (
    <div className="main_container py-5 md:py-10">
      <div className="flex flex-col gap-6 md:gap-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col gap-5 md:gap-10 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Image */}
            <div className="w-full md:w-2/5">
              <Image
                width={600}
                height={400}
                src={section.img}
                alt="UI/UX design showcase"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            {/* Text */}
            <div className="w-full text-[#000000] md:w-3/5 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold my-2 md:my-3 text-secondary">
                {section.title}
              </h2>
              {section.description.map((item, idx) => (
                <p className="text-sm md:text-base my-1" key={idx}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 md:gap-5 py-10">
        {moreContent.map((content, i) => (
          <div key={i} className="w-full">
            <h2 className="text-2xl md:text-4xl font-bold my-2 md:my-3 text-secondary">
              {content.title}
            </h2>
            <p className="text-sm md:text-base">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreContent;

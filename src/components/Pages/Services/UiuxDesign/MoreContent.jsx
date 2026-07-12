import Image from "next/image";

const MoreContent = () => {
  const sections = [
    {
      title: "Meet Your Social Media Management Agency",
      description: [
        "You probably didn’t get into business with the expectation that you’d have to manage multiple social media pages in addition to your day-to-day operations. We get it, which is why we offer SEO-driven social media management service that keeps your social media presence going strong without taking away from everything else that you need to get done.",
        "Strategic social media marketing is built on the belief that your content should not be overly sales-focused. While it is essential to build brand awareness and promote your products and services, engaging your audience with interactive content and community-building activities can be a much more effective social media strategy than simply posting about what you sell."
      ],
      img: "/assets/images/services/details-image/design/ui-ux/1.png"
    },
    {
      title: "Your website is your brand&apos;s most visible.",
      description: [
        "Visitors judge whether or not they trust your business from the moment they land on your site. Power Digital transforms your website into a powerful, professional communication tool that reflects the premium quality of work you do. Visitors judge whether or not they trust your business from the moment they land on your site.",
        "Visitors judge whether or not they trust your business from the moment they land on your site. Power Digital transforms your website into a powerful."
      ],
      img: "/assets/images/services/details-image/design/ui-ux/2.png"
    },
    {
      title: "Your website is your brand&apos;s most visible.",
      description: [
        "Visitors judge whether or not they trust your business from the moment they land on your site. Power Digital transforms your website into a powerful, professional communication tool that reflects the premium quality of work you do. Visitors judge whether or not they trust your business from the moment they land on your site.",
        "Visitors judge whether or not they trust your business from the moment they land on your site. Power Digital transforms your website into a powerful. Visitors judge whether or not they trust your business from the moment they land on your site. Power Digital transforms your website into a powerful, professional communication tool that reflects the premium quality of work you do. Visitors judge whether or not they trust your business from the moment they land on your site."
      ],
      img: "/assets/images/services/details-image/design/ui-ux/3.png"
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

import Image from "next/image";
import aws from "@@/images/about/supplier/aws.jpg";
import gcp from "@@/images/about/supplier/gcp.jpg";
import vercel from "@@/images/about/supplier/vercel.jpg";
import shopify from "@@/images/about/supplier/shopify.jpg";

const OurSupplier = () => {
  const data = [
    {
      id: 1,
      title: "Amazon Web Services (AWS)",
      description: "As our primary enterprise cloud infrastructure provider, AWS supplies us with secure Virtual Private Clouds (VPCs), high-performance relational databases, scalable EC2 compute clusters, and cloud storage solutions. This allows us to architect zero-downtime, fully redundant backends that handle massive volumes of concurrent request traffic smoothly.",
      img: aws
    },
    {
      id: 2,
      title: "Google Cloud Platform (GCP)",
      description: "GCP serves as our technical anchor for data intelligence and search engine syncing. We leverage Google Cloud's advanced Machine Learning APIs, BigQuery data analytics suites, and serverless compute pipelines. Google Cloud's globally distributed network helps us integrate real-time user insights and search telemetry into business applications.",
      img: gcp
    },
    {
      id: 3,
      title: "Vercel Hosting & Next.js Sprints",
      description: "Vercel is our frontend delivery platform. By utilizing Vercel's Edge Networks and optimized Next.js runtime compile environments, we ensure that client web interfaces are fast and SEO friendly. Vercel's automated git integrations allow our teams to run rapid preview cycles, accelerating overall launch velocity.",
      img: vercel
    },
    {
      id: 4,
      title: "Shopify Commerce Infrastructure",
      description: "For e-commerce scaling, Shopify supplies us with a robust transactional core. We build headless commerce experiences using Shopify's Storefront API, inventory synchronization logs, secure checkout checkmarks, and integrated payment gateways. This guarantees complete retail safety, scalability, and performance.",
      img: shopify
    }
  ];

  return (
    <section className="my-10 md:my-20 md:pb-10 bg-white py-12 rounded-2xl border border-gray-100 shadow-sm">
      <div className="main_container">
        <h3 className="text-3xl text-center md:text-5xl my-4 md:mb-12 text-[#111204] font-bold leading-tight">
          Our Enterprise Infrastructure & Technology Suppliers
        </h3>
        <div className="flex flex-col gap-8 md:gap-16 pt-5">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col gap-6 md:gap-12 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    width={600}
                    height={400}
                    src={item.img}
                    alt={item.title}
                    className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-sm"
                  />
                </div>
                <div className="w-full text-[#111204] md:w-1/2 flex flex-col justify-center">
                  <h4 className="text-2xl md:text-3xl font-bold my-3 text-secondary leading-tight">
                    {item.title}
                  </h4>
                  <p className="my-2 md:my-4 text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurSupplier;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import slugToText from "@/components/Shared/slugToText";
import TopGap from "@/components/Shared/TopGap/TopGap";
import {
  FaCheckCircle,
  FaCalendarAlt,
  FaBuilding,
  FaTools,
  FaExternalLinkAlt,
  FaProjectDiagram,
  FaGlobe,
} from "react-icons/fa";
import img from "@@/images/case-studies/1.png";

const CaseStudyDetailsPage = () => {
  const params = useParams();
  const caseTitle = slugToText(params?.slag || "Project Case Study");

  const metrics = [
    { label: "Uptime Validation", value: "99.99%" },
    { label: "Conversion Rate", value: "+45%" },
    { label: "LCP Page Speed", value: "0.8s" },
    { label: "Server Cost", value: "-35%" }
  ];

  const milestones = [
    {
      title: "Empathy Workshops & Requirements Discovery",
      desc: "Conducted collaborative sessions to define database entities, user flows, and milestone metrics."
    },
    {
      title: "Interactive Wireframes & Component Libraries",
      desc: "Designed detailed visual states, clickable low-fidelity flows, and reusable visual UI styles."
    },
    {
      id: 3,
      title: "Agile Coding Sprints & DevOps Syncs",
      desc: "Built features in bi-weekly scrum cycles, integrating automated playwright tests in CI/CD chains."
    },
    {
      title: "Technical SEO Audits & Production Deploy",
      desc: "Optimized server responses, compiled canonical indexing rules, and set cache configs."
    }
  ];

  return (
    <div className="bg-[#FAF9FC]">
      <TopGap />
      <SharedBanner
        title={caseTitle}
        description="Discover how Digimatric helped scale systems architectures, optimize UX performance, and claim page-one ranking positions."
      />

      <section className="py-12 md:py-20">
        <div className="main_container">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Side: Case Study Story (2/3 width) */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              
              {/* Main Image */}
              <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden relative shadow-sm">
                <Image
                  src={img}
                  alt="Case Study Showcase Image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Project Overview */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary">Project Overview</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  In today's digital landscape, legacy software systems and unoptimized interfaces directly result in user drop-offs and lost revenue. In this case study, we outline how Digimatric partnered with the client to overhaul their platform infrastructure.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Through detailed requirements scoping, iterative design sprints, and modern Next.js server rendering, we delivered a fast, secure, and highly scalable software platform that aligns perfectly with their corporate goals.
                </p>
              </div>

              {/* The Challenge */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary">The Challenge</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  The client's previous platform suffered from severe performance bottlenecks, leading to slow page load speeds (averaging 5.2 seconds). This resulted in an increased bounce rate and a drop in organic rankings. Additionally, legacy database architectures and lack of caching created server overhead issues during high concurrent traffic hours.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Furthermore, the user interface lacked a cohesive design system, creating navigation friction for users trying to complete checkouts and registration steps.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((metric, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center">
                    <span className="block text-2xl md:text-3xl font-bold text-primary mb-1">{metric.value}</span>
                    <span className="text-xs md:text-sm text-gray-500 font-medium">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Our Solution & Delivery Process */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary">Our Solution & Approach</h2>
                <div className="flex flex-col gap-5">
                  {milestones.map((milestone, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="text-primary mt-1 text-lg flex-shrink-0">
                        <FaCheckCircle />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-bold text-secondary text-base md:text-lg">{milestone.title}</h4>
                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{milestone.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Side: Case Metadata Sidebar (1/3 width) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-6 sticky top-24">
                <h3 className="text-xl md:text-2xl font-bold text-secondary pb-3 border-b border-gray-100">
                  Project Details
                </h3>

                {/* Metadata Fields */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <FaBuilding />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 uppercase font-bold tracking-wider">Client</span>
                      <span className="text-sm font-semibold text-secondary">Alpha Logistics Corp</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <FaGlobe />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 uppercase font-bold tracking-wider">Industry</span>
                      <span className="text-sm font-semibold text-secondary">Retail & Supply Chain</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <FaCalendarAlt />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 uppercase font-bold tracking-wider">Timeline</span>
                      <span className="text-sm font-semibold text-secondary">12 Weeks Sprints</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <FaProjectDiagram />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 uppercase font-bold tracking-wider">Services</span>
                      <span className="text-sm font-semibold text-secondary">Next.js Web App, UI/UX Design, Technical SEO</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="block text-xs text-gray-400 uppercase font-bold tracking-wider mb-2">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "Postgres", "AWS", "Tailwind", "Node.js"].map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <Link href="/contact" className="mt-4">
                  <button className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 text-sm">
                    <span>Discuss Similar Project</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </button>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default CaseStudyDetailsPage;
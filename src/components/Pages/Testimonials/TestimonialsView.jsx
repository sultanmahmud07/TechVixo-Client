import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TestimonialsView = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      post: "CTO at RetailSpace E-Commerce",
      rating: 5,
      avatarBg: "bg-blue-100 text-blue-600",
      content: "Digimatric completely overhauled our headless Shopify storefront. The Next.js speed optimization brought page load times down to 0.9s, which directly led to a 34% boost in sales conversions."
    },
    {
      id: 2,
      name: "David Kovic",
      post: "Product Director at HealthCare 360",
      rating: 5,
      avatarBg: "bg-green-100 text-green-600",
      content: "Working with the Scrum team at Digimatric was seamless. They delivered core telemetry dashboards inside our tight 3-month roadmap, coordinating QA checks at every step."
    },
    {
      id: 3,
      name: "Aris Thorne",
      post: "Founder of SaaS-Hub Systems",
      rating: 5,
      avatarBg: "bg-purple-100 text-purple-600",
      content: "Their Technical SEO audit cleared crawl errors we struggled with for months. Our organic search leads doubled in less than 90 days, bringing high-intent traffic."
    },
    {
      id: 4,
      name: "Elena Rostova",
      post: "Creative Lead at Finnovate Bank",
      rating: 5,
      avatarBg: "bg-red-100 text-red-600",
      content: "Their UI/UX design wireframes and custom design system allowed us to align our mobile app and desktop screens perfectly. Excellent attention to details!"
    },
    {
      id: 5,
      name: "Marcus Vance",
      post: "CEO of AgriTech Local",
      rating: 5,
      avatarBg: "bg-yellow-100 text-yellow-600",
      content: "Thanks to their Local SEO & GBP maps packing strategies, we are now ranking #1 in 'near me' search queries across three major regional markets."
    },
    {
      id: 6,
      name: "Kenji Takahashi",
      post: "VP of Engineering at CyberShield",
      rating: 5,
      avatarBg: "bg-indigo-100 text-indigo-600",
      content: "We hired their QA team to write stress testing scripts. They verified database concurrency under heavy load prior to our public launch, identifying key locks."
    },
    {
      id: 7,
      name: "Rhea Desai",
      post: "Operations Lead at ShipFast Logistics",
      rating: 5,
      avatarBg: "bg-pink-100 text-pink-600",
      content: "Their custom software integrations with our legacy supplier database streamlined order tracking, reducing operational manual checks by 25%."
    },
    {
      id: 8,
      name: "Sophia Martinez",
      post: "Marketing Manager at LuxeBranding",
      rating: 5,
      avatarBg: "bg-teal-100 text-teal-600",
      content: "Digimatric delivered marketing print assets and vector icons that perfectly captured our brand identity guidelines. The creative design is outstanding."
    },
    {
      id: 9,
      name: "Tariq Benson",
      post: "Director of EdTech Learn",
      rating: 5,
      avatarBg: "bg-orange-100 text-orange-600",
      content: "The agile development sprints and back-end API architecture they setup enabled us to launch our student dashboard app two weeks ahead of schedule."
    }
  ];

  // Distribute items across columns for a natural masonry feel
  const column1 = [testimonials[0], testimonials[3], testimonials[6]];
  const column2 = [testimonials[1], testimonials[4], testimonials[7]];
  const column3 = [testimonials[2], testimonials[5], testimonials[8]];

  const renderColumn = (colData) => (
    <div className="flex flex-col gap-6">
      {colData.map((item) => (
        <div
          key={item.id}
          className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group"
        >
          <div className="absolute top-6 right-6 text-gray-100 group-hover:text-primary/10 transition-colors duration-300 text-4xl pointer-events-none">
            <FaQuoteLeft />
          </div>

          <div className="stars flex gap-1 mb-4">
            {[...Array(item.rating)].map((_, idx) => (
              <FaStar key={idx} className="text-yellow-400 text-sm" />
            ))}
          </div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            "{item.content}"
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${item.avatarBg}`}>
              {item.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <h5 className="font-bold text-secondary text-sm md:text-base">{item.name}</h5>
              <span className="text-xs text-gray-400 font-medium">{item.post}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-12 md:py-24 bg-[#FAF9FC]">
      <div className="main_container">
        
        {/* Statistics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
            <span className="block text-3xl md:text-4xl font-extrabold text-primary mb-1">150+</span>
            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-bold">Successful Projects</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
            <span className="block text-3xl md:text-4xl font-extrabold text-primary mb-1">99%</span>
            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-bold">Client Retention</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
            <span className="block text-3xl md:text-4xl font-extrabold text-primary mb-1">4.9/5</span>
            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-bold">Average Rating</span>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderColumn(column1)}
          {renderColumn(column2)}
          {renderColumn(column3)}
        </div>

      </div>
    </div>
  );
};

export default TestimonialsView;
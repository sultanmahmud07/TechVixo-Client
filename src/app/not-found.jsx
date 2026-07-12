import Link from "next/link";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="py-20 md:py-36 relative overflow-hidden flex items-center justify-center text-white px-4 md:px-8 bg-secondary">
      {/* Background Decorative Glowing Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/25 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-green-500/15 blur-3xl -z-10 animate-pulse delay-700"></div>

      <div className="max-w-2xl text-center flex flex-col items-center z-10">
        {/* Animated 404 text with gradient */}
        <h1 className="text-[110px] md:text-[160px] font-extrabold leading-none tracking-tighter bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent select-none animate-bounce">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-3 tracking-tight">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-[#FFFFFFCC] text-base md:text-lg mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link href="/">
            <button className="flex items-center gap-2 bg-primary hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5">
              <FaHome />
              <span>Back to Home</span>
            </button>
          </Link>
          <Link href="/contact">
            <button className="flex items-center gap-2 border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              <span>Contact Support</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

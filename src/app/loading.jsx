import Spinner from "@/components/Shared/Spinner";
import TopGap from "@/components/Shared/TopGap/TopGap";


const Loading = () => {
  return (
    <div className="ll">
      <TopGap></TopGap>
      <div className="flex bg-[#ffffff4f] items-center justify-center min-h-[calc(100vh-400px)]">
        <Spinner />
      </div>
    </div>
  );
};

export default Loading;


import Charts from "@/components/Charts";
import StatsCards from "@/components/StatsCards";
import TopBar from "@/components/TopBar";

const Index = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <TopBar />
      <StatsCards />
      <Charts />
    </div>
  );
};

export default Index;

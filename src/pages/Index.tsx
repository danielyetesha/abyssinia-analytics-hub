
import Charts from "@/components/Charts";
import StatsCards from "@/components/StatsCards";
import TopBar from "@/components/TopBar";
import type { DashboardType } from "@/types/dashboard";

const Index = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <TopBar />
      <StatsCards type="apollo" />
      <Charts type="apollo" />
    </div>
  );
};

export default Index;

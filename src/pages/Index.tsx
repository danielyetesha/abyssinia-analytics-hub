
import type { DashboardType } from "@/types/dashboard";
import Charts from "@/components/Charts";
import StatsCards from "@/components/StatsCards";
import TopBar from "@/components/TopBar";

interface IndexProps {
  activeTab: DashboardType;
}

const Index = ({ activeTab }: IndexProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <TopBar />
      <StatsCards type={activeTab} />
      <Charts type={activeTab} />
    </div>
  );
};

export default Index;

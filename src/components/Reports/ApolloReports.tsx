
import { DashboardType } from "@/App";
import Charts from "@/components/Charts";
import StatsCards from "@/components/StatsCards";

interface ApolloReportsProps {
  type: DashboardType;
}

const ApolloReports = ({ type }: ApolloReportsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <StatsCards type={type} />
      <Charts type={type} />
    </div>
  );
};

export default ApolloReports;

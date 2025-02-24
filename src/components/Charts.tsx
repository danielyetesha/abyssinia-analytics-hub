
import type { DashboardType } from "@/App";
import { CardBankingCharts } from "./reports/CardReports";
import { MobileBankingCharts } from "./reports/MobileReports";
import ApolloReports from "./reports/ApolloReports";

interface ChartsProps {
  type: DashboardType;
}

const Charts = ({ type }: ChartsProps) => {
  const renderDashboard = () => {
    switch(type) {
      case "card":
        return <CardBankingCharts />;
      case "mobile":
        return <MobileBankingCharts />;
      case "apollo":
      default:
        return <ApolloReports />;
    }
  };

  return renderDashboard();
};

export default Charts;

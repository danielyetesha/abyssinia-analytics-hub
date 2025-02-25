import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { DashboardType } from "../App";

interface StatsCardsProps {
  type: DashboardType;
}

const StatsCards = ({ type }: StatsCardsProps) => {
  const stats = {
    apollo: [
      { title: "Total Revenue", value: "$45,231.89", className: "md:col-span-2" },
      { title: "Subscriptions", value: "+2350" },
      { title: "Sales", value: "+12,234" },
      { title: "Active Users", value: "+573" },
    ],
    mobile: [
      { title: "Mobile Users", value: "12,234", className: "md:col-span-2" },
      { title: "App Downloads", value: "+2350" },
      { title: "Active Sessions", value: "1,234" },
      { title: "Session Duration", value: "15m" },
    ],
    card: [
      { title: "Card Revenue", value: "$23,456", className: "md:col-span-2" },
      { title: "Active Cards", value: "4,321" },
      { title: "New Cards", value: "+123" },
      { title: "Card Usage", value: "78%" },
    ],
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats[type].map((stat, index) => (
        <Card key={index} className={cn(stat.className)}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;

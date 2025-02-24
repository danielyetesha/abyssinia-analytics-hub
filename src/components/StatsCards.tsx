import { LineChart, Line } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DashboardType } from "@/types/dashboard";

interface StatsCardsProps {
  type: DashboardType;
}

const StatsCards = ({ type }: StatsCardsProps) => {
  const mockData = Array(10).fill(0).map((_, i) => ({ value: Math.random() * 100 }));

  const statsConfig = {
    apollo: [
      { title: "Apollo Accounts", value: "783,419" },
      { title: "Account Balance", value: "871,363,301" },
      { title: "Average Account Balance", value: "1,112" },
      { title: "Funded Accounts", value: "501,215" },
      { title: "Login Accounts", value: "399,644" },
      { title: "Accounts with Transactions", value: "121,704" },
    ],
    mobile: [
      { title: "Active Users", value: "452,891" },
      { title: "Daily Transactions", value: "234,567" },
      { title: "App Downloads", value: "892,345" },
      { title: "Average Session Time", value: "12.5 mins" },
      { title: "Payment Volume", value: "654,321" },
      { title: "New Registrations", value: "8,765" },
    ],
    card: [
      { title: "Active Cards", value: "324,567" },
      { title: "Monthly Spend", value: "543,210,987" },
      { title: "International Usage", value: "87,654" },
      { title: "Domestic Usage", value: "456,789" },
      { title: "Card Applications", value: "12,345" },
      { title: "Declined Transactions", value: "2,345" },
    ],
  };

  const stats = statsConfig[type];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card 
          key={stat.title} 
          className="hover:shadow-lg transition-all duration-300 animate-fade-in" 
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="h-[40px]">
              <LineChart width={100} height={40} data={mockData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={1.5}
                  dot={false}
                />
              </LineChart>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;

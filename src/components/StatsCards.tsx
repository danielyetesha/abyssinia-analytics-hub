
import { LineChart, Line } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StatsCards = () => {
  const mockData = Array(10).fill(0).map((_, i) => ({ value: Math.random() * 100 }));

  const stats = [
    { title: "Apollo Accounts", value: "783,419" },
    { title: "Account Balance", value: "871,363,301" },
    { title: "Average Account Balance", value: "1,112" },
    { title: "Funded Accounts", value: "501,215" },
    { title: "Login Accounts", value: "399,644" },
    { title: "Accounts with Transactions", value: "121,704" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={stat.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{
          animationDelay: `${index * 100}ms`
        }}>
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

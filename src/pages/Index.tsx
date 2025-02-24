
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line } from "recharts";

const Index = () => {
  const mockData = Array(10).fill(0).map((_, i) => ({ value: Math.random() * 100 }));
  
  const overallStats = [
    { title: "Total Users", value: "1,234,567" },
    { title: "Total Transactions", value: "$89,432,123" },
    { title: "Active Accounts", value: "892,345" },
    { title: "Daily Active Users", value: "234,567" }
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {overallStats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-all duration-300">
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
      
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>System Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <LineChart width={800} height={300} data={mockData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;

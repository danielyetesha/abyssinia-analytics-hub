
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const userActivityData = [
  { month: "Jan", active: 4000, new: 2400, churn: 1000 },
  { month: "Feb", active: 4500, new: 2800, churn: 1200 },
  { month: "Mar", active: 5000, new: 3000, churn: 800 },
  { month: "Apr", active: 5500, new: 2600, churn: 900 },
  { month: "May", active: 6000, new: 2900, churn: 1100 },
  { month: "Jun", active: 6500, new: 3100, churn: 1000 },
];

const featureUsageData = [
  { feature: "Transfers", usage: 8500 },
  { feature: "Bill Pay", usage: 7200 },
  { feature: "Account Info", usage: 6800 },
  { feature: "Investment", usage: 5400 },
  { feature: "Support", usage: 4200 },
];

export const MobileBankingCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* User Activity Trends */}
      <Card className="animate-fade-in animation-delay-200 lg:col-span-2">
        <CardHeader>
          <CardTitle>User Activity Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={userActivityData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="active" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="new" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="churn" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Feature Usage */}
      <Card className="animate-fade-in animation-delay-400">
        <CardHeader>
          <CardTitle>Feature Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={featureUsageData} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="feature" type="category" />
              <Tooltip />
              <Bar dataKey="usage" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

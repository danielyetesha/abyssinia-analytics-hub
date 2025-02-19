
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const Charts = () => {
  const accountOpeningData = [
    { name: "Jan", type1: 100, type2: 120, type3: 80 },
    { name: "Feb", type1: 120, type2: 100, type3: 90 },
    { name: "Mar", type1: 140, type2: 80, type3: 100 },
    // Add more data points as needed
  ];

  const districtData = [
    { name: "District A", value: 400 },
    { name: "District B", value: 300 },
    { name: "District C", value: 200 },
    // Add more districts as needed
  ];

  const pieData = [
    { name: "Success", value: 871363301 },
    { name: "Failure", value: 1112 },
  ];

  const transactionData = [
    { name: "giro zip", value: 800 },
    { name: "ftm", value: 600 },
    { name: "website", value: 400 },
    { name: "pos", value: 300 },
    { name: "RTGS", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="animate-fade-in animation-delay-200">
        <CardHeader>
          <CardTitle>Account Opening Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={accountOpeningData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="type1" stroke="#0088FE" />
              <Line type="monotone" dataKey="type2" stroke="#00C49F" />
              <Line type="monotone" dataKey="type3" stroke="#FFBB28" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="animate-fade-in animation-delay-400">
        <CardHeader>
          <CardTitle>District Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={districtData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="animate-fade-in animation-delay-200">
        <CardHeader>
          <CardTitle>Success & Failure Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="animate-fade-in animation-delay-400">
        <CardHeader>
          <CardTitle>Apollo Transactions by Type</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart layout="vertical" data={transactionData}>
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="value" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Charts;

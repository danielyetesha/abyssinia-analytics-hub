
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Check, X } from "lucide-react";

const Charts = () => {
  const accountOpeningData = [
    { name: "Jan", type1: 100, type2: 120, type3: 80 },
    { name: "Feb", type1: 120, type2: 100, type3: 90 },
    { name: "Mar", type1: 140, type2: 80, type3: 100 },
  ];

  const districtData = [
    { name: "District A", value: 400 },
    { name: "District B", value: 300 },
    { name: "District C", value: 200 },
  ];

  const transactionData = [
    { name: "giro zip", value: 800 },
    { name: "ftm", value: 600 },
    { name: "website", value: 400 },
    { name: "pos", value: 300 },
    { name: "RTGS", value: 200 },
  ];

  const successData = [
    { name: "Existing", value: 871363301 },
    { name: "New", value: 1112 },
  ];

  const failureData = [
    { name: "Existing", value: 300 },
    { name: "New", value: 812 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  const SUCCESS_COLORS = ["#F2FCE2", "#FFDEE2"];
  const FAILURE_COLORS = ["#FFDEE2", "#F2FCE2"];

  const formatLargeNumber = (num: number) => {
    return num.toLocaleString();
  };

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
          <div className="grid grid-cols-3 gap-4">
            <Card className="col-span-1 border shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/46dc45ab-988e-4058-afaa-98d473dcbc97.png" 
                      alt="Total Attempt" 
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="text-sm text-center text-muted-foreground">
                    TOTAL ATTEMPT
                  </div>
                  <div className="text-2xl font-bold text-center">
                    182,268
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-2 border shadow-sm">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-sm text-muted-foreground">SUCCESS</span>
                    </div>
                    <div className="text-2xl font-bold">
                      {formatLargeNumber(871363301)}
                    </div>
                    <div className="w-full h-32">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={successData}
                            outerRadius={40}
                            dataKey="value"
                          >
                            {successData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={SUCCESS_COLORS[index]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-5 h-5 text-red-500" />
                      </div>
                      <span className="text-sm text-muted-foreground">FAILURE</span>
                    </div>
                    <div className="text-2xl font-bold">
                      {formatLargeNumber(1112)}
                    </div>
                    <div className="w-full h-32">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={failureData}
                            outerRadius={40}
                            dataKey="value"
                          >
                            {failureData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={FAILURE_COLORS[index]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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

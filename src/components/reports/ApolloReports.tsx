
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts";

const ApolloReports = () => {
  // Loan Performance Data
  const loanTypeData = [
    { name: "Salary Advance", value: 30867 },
    { name: "Micro Loan", value: 1053 },
    { name: "Asbeza", value: 30 }
  ];

  const loanTrendData = [
    { month: "Jan", repaid: 80000000, expired: 5000000 },
    { month: "Feb", repaid: 85000000, expired: 5500000 },
    { month: "Mar", repaid: 90000000, expired: 6000000 }
  ];

  const loanGrowthData = [
    { month: "Jan", amount: 100000000 },
    { month: "Feb", amount: 110000000 },
    { month: "Mar", amount: 120000000 }
  ];

  // USSD Transaction Data
  const ussdSubscriberData = [
    { month: "Jan", subscribers: 380000 },
    { month: "Feb", subscribers: 400000 },
    { month: "Mar", subscribers: 423008 }
  ];

  const transactionFrequencyData = [
    { frequency: "1 Transaction", users: 3987 },
    { frequency: "2 Transactions", users: 2018 },
    { frequency: "5 Transactions", users: 3430 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="p-6 space-y-6">
      {/* Loan Performance Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Apollo Loan Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Loan Disbursed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(1240088808)} Br
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Repaid Amount</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {formatNumber(949079211)} Br
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Expired / Unpaid Loans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {formatNumber(66988933)} Br
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Loan Distribution by Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={loanTypeData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label
                    >
                      {loanTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loan Repayment vs Expired Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={loanTrendData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="repaid" stroke="#00C49F" />
                    <Line type="monotone" dataKey="expired" stroke="#FF8042" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* USSD Transactions Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Apollo USSD Transactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total USSD Subscribers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(423008)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(12246)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Transaction Amount</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(224061835)} Br
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(75742)}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>USSD Subscriber Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={ussdSubscriberData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="subscribers" stroke="#0088FE" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Transaction Frequency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={transactionFrequencyData}>
                    <XAxis dataKey="frequency" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="users" fill="#0088FE" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ApolloReports;

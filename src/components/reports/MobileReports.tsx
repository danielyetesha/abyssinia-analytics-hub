
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, XAxis, YAxis, Tooltip, Cell } from "recharts";

const userGrowthData = [
  { month: "July", appUsers: 18906, ussdUsers: 39720 },
  { month: "August", appUsers: 52845, ussdUsers: 63000 },
  { month: "September", appUsers: 47842, ussdUsers: 22244 },
  { month: "October", appUsers: 83053, ussdUsers: 99712 },
  { month: "November", appUsers: 64307, ussdUsers: 125552 },
  { month: "December", appUsers: 141114, ussdUsers: 85528 }
];

const districtData = [
  { name: "East", total: 174510, app: 73294, ussd: 101216 },
  { name: "West", total: 139872, app: 65740, ussd: 74132 },
  { name: "Central", total: 125273, app: 58878, ussd: 66395 },
  { name: "Bahirdar", total: 103880, app: 53000, ussd: 50880 },
  { name: "Hawasa", total: 85788, app: 40000, ussd: 45788 }
];

const potentialUsersData = [
  { name: "Unique USSD Users", value: 627877 },
  { name: "Card Users (No MB)", value: 1165103 },
  { name: "Branch FT Users", value: 118083 },
  { name: "Branch TT Users", value: 656072 }
];

const transactionTypeData = [
  { type: "Account Transfer", count: 455022 },
  { type: "Telebirr", count: 367843 },
  { type: "EthSwitch Transfer", count: 320929 },
  { type: "AirTime Top-Up", count: 77483 },
  { type: "Money Send/Receive", count: 20389 },
  { type: "RTGS Transfer", count: 14684 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export const MobileBankingCharts = () => {
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="space-y-8">
      {/* User Growth Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">User Growth & Recruitment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(1298085)}</div>
              <p className="text-sm text-muted-foreground">Unique: {formatNumber(797289)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total USSD Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(57115)}</div>
              <p className="text-sm text-muted-foreground">Existing: {formatNumber(500796)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total App/Web Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(1128672)}</div>
              <p className="text-sm text-muted-foreground">Existing: {formatNumber(169413)}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>App vs USSD Growth Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userGrowthData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="appUsers" name="App Users" stroke="#0088FE" />
                  <Line type="monotone" dataKey="ussdUsers" name="USSD Users" stroke="#00C49F" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>District-wise User Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={districtData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="app" name="App Users" stackId="a" fill="#0088FE" />
                  <Bar dataKey="ussd" name="USSD Users" stackId="a" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Potential Users Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Mobile Banking Potential Users</h2>
        <Card>
          <CardHeader>
            <CardTitle>User Segmentation</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={potentialUsersData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {potentialUsersData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Transaction Performance Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Transaction Performance</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Transaction Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">Total (App + USSD)</p>
                  <p className="text-2xl font-bold">{formatNumber(7770122155)} Br</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">USSD Transactions</p>
                  <p className="text-2xl font-bold">{formatNumber(6367547996)} Br</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Transaction Type Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={transactionTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    nameKey="type"
                    label
                  >
                    {transactionTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* High-Value Users Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">High-Value Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>App Users (10+ transactions)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(107708)}</div>
              <p className="text-sm text-muted-foreground">Total Value: {formatNumber(84100000000)} Br</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>USSD Users (10+ transactions)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(128470)}</div>
              <p className="text-sm text-muted-foreground">Total Value: {formatNumber(19500000000)} Br</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

import type { DashboardType } from "@/App";
import { CardBankingCharts } from "./reports/CardReports";
import { MobileBankingCharts } from "./reports/MobileReports";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Check, X } from "lucide-react";

interface ChartsProps {
  type: DashboardType;
}

const Charts = ({ type }: ChartsProps) => {
  const dataConfig = {
    apollo: {
      accountOpeningData: [
        { name: "Jan", type1: 100, type2: 120, type3: 80 },
        { name: "Feb", type1: 120, type2: 100, type3: 90 },
        { name: "Mar", type1: 140, type2: 80, type3: 100 },
      ],
      districtData: [
        { name: "District A", value: 400 },
        { name: "District B", value: 300 },
        { name: "District C", value: 200 },
      ],
    },
    mobile: {
      accountOpeningData: [
        { name: "Jan", type1: 150, type2: 90, type3: 110 },
        { name: "Feb", type1: 180, type2: 140, type3: 130 },
        { name: "Mar", type1: 200, type2: 160, type3: 150 },
      ],
      districtData: [
        { name: "Region X", value: 600 },
        { name: "Region Y", value: 450 },
        { name: "Region Z", value: 350 },
      ],
    },
    card: {
      accountOpeningData: [
        { name: "Jan", type1: 80, type2: 140, type3: 60 },
        { name: "Feb", type1: 100, type2: 160, type3: 80 },
        { name: "Mar", type1: 120, type2: 180, type3: 100 },
      ],
      districtData: [
        { name: "Zone 1", value: 500 },
        { name: "Zone 2", value: 400 },
        { name: "Zone 3", value: 300 },
      ],
    },
  };

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

  const SUCCESS_COLORS = ["#F2FCE2", "#FFDEE2"];
  const FAILURE_COLORS = ["#FFDEE2", "#F2FCE2"];

  const formatLargeNumber = (num: number) => {
    return num.toLocaleString();
  };

  const loanPerformanceData = {
    loanTypes: [
      { name: "Salary Advance", value: 30867 },
      { name: "Micro Loan", value: 1053 },
      { name: "Asbeza", value: 30 }
    ],
    loanTrend: [
      { month: "Jan", repaid: 300000000, expired: 20000000 },
      { month: "Feb", repaid: 320000000, expired: 22000000 },
      { month: "Mar", repaid: 329079211, expired: 24988933 }
    ]
  };

  const ussdData = {
    growth: [
      { month: "Jan", subscribers: 380000 },
      { month: "Feb", subscribers: 400000 },
      { month: "Mar", subscribers: 423008 }
    ],
    frequency: [
      { type: "1 Txn", users: 3987 },
      { type: "2 Txn", users: 2018 },
      { type: "5 Txn", users: 3430 }
    ]
  };

  const cardPerformanceData = {
    cardStatus: [
      { name: "Active Cards", value: 1995 },
      { name: "Inactive Cards", value: 527 },
      { name: "Non-Activated", value: 390 }
    ]
  };

  const transactionOverviewData = {
    byType: [
      { name: "Apollo to Apollo", value: 6375817381 },
      { name: "Telebirr", value: 560842423 },
      { name: "RTGS", value: 313029 }
    ]
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const renderApolloLoanPerformance = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Loan Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Disbursed</p>
              <p className="text-2xl font-bold">{formatNumber(1240088808)} Br</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Repaid</p>
              <p className="text-2xl font-bold text-green-600">{formatNumber(949079211)} Br</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expired/Unpaid</p>
              <p className="text-2xl font-bold text-red-600">{formatNumber(66988933)} Br</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Loan Distribution by Type</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={loanPerformanceData.loanTypes}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {loanPerformanceData.loanTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  const renderUssdTransactions = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>USSD Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Subscribers</p>
              <p className="text-2xl font-bold">{formatNumber(423008)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Transactions</p>
              <p className="text-2xl font-bold">{formatNumber(12246)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Transaction Amount</p>
              <p className="text-2xl font-bold">{formatNumber(224061835)} Br</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Users</p>
              <p className="text-2xl font-bold">{formatNumber(75742)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transaction Frequency</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ussdData.frequency}>
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  const renderCardPerformance = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Card Status Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Cards Issued</p>
              <p className="text-2xl font-bold">{formatNumber(2385)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Cards</p>
              <p className="text-2xl font-bold text-green-600">{formatNumber(1995)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Inactive Cards</p>
              <p className="text-2xl font-bold text-yellow-600">{formatNumber(527)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Non-Activated</p>
              <p className="text-2xl font-bold text-red-600">{formatNumber(390)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Card Status Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={cardPerformanceData.cardStatus}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {cardPerformanceData.cardStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  const renderTransactionsOverview = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Transaction Volume</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Inward Transactions</p>
              <p className="text-2xl font-bold">{formatNumber(45500)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Outward Transactions</p>
              <p className="text-2xl font-bold">{formatNumber(23843)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transaction Amount by Type</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={transactionOverviewData.byType}
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={40}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {transactionOverviewData.byType.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  const renderDashboard = () => {
    switch(type) {
      case "card":
        return <CardBankingCharts />;
      case "mobile":
        return <MobileBankingCharts />;
      case "apollo":
      default:
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="animate-fade-in animation-delay-200">
                <CardHeader>
                  <CardTitle>
                    Account Opening Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={dataConfig[type].accountOpeningData}>
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
                  <CardTitle>
                    District Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={dataConfig[type].districtData}>
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

            <h2 className="text-2xl font-bold mt-8">Apollo Loan Performance</h2>
            {renderApolloLoanPerformance()}
            
            <h2 className="text-2xl font-bold mt-8">Apollo USSD Transactions</h2>
            {renderUssdTransactions()}
            
            <h2 className="text-2xl font-bold mt-8">Apollo Debit Card Performance</h2>
            {renderCardPerformance()}
            
            <h2 className="text-2xl font-bold mt-8">Apollo Transactions Overview</h2>
            {renderTransactionsOverview()}
          </div>
        );
    }
  };

  return renderDashboard();
};

export default Charts;

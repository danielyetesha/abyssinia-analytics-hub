
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter, XAxis, YAxis, Tooltip, ZAxis, ComposedChart, Area, Bar } from "recharts";

const cardStatusData = [
  { name: "Active", value: 45000, color: "#0088FE" },
  { name: "Inactive", value: 15000, color: "#00C49F" },
  { name: "Non-activated", value: 8000, color: "#FFBB28" },
  { name: "Closed", value: 2000, color: "#FF8042" },
];

const transactionScatterData = Array(50).fill(0).map(() => ({
  amount: Math.floor(Math.random() * 10000),
  time: Math.floor(Math.random() * 24),
  count: Math.floor(Math.random() * 100) + 1,
}));

const geographicalData = [
  { region: "North", domestic: 4000, international: 2400, total: 6400 },
  { region: "South", domestic: 3000, international: 1398, total: 4398 },
  { region: "East", domestic: 2000, international: 9800, total: 11800 },
  { region: "West", domestic: 2780, international: 3908, total: 6688 },
];

export const CardBankingCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Card Status Distribution */}
      <Card className="animate-fade-in animation-delay-200">
        <CardHeader>
          <CardTitle>Card Status Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={cardStatusData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={(entry) => entry.name}
              >
                {cardStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Transaction Pattern Analysis */}
      <Card className="animate-fade-in animation-delay-400">
        <CardHeader>
          <CardTitle>Transaction Pattern Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <XAxis dataKey="time" name="Time (24h)" unit="h" />
              <YAxis dataKey="amount" name="Amount" unit="$" />
              <ZAxis dataKey="count" range={[20, 200]} name="Frequency" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Transactions" data={transactionScatterData} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Geographical Distribution */}
      <Card className="animate-fade-in animation-delay-600 lg:col-span-2">
        <CardHeader>
          <CardTitle>Geographical Transaction Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={geographicalData}>
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="domestic" barSize={20} fill="#413ea0" />
              <Bar dataKey="international" barSize={20} fill="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

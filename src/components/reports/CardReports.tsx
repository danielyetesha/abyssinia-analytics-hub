
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Cell } from "recharts";

const cardHolderData = {
  performance: {
    activated: 710475,
    nonActivated: 240784,
    totalNonActivated: 469260,
    recruited: 714417,
    plan: 485678
  },
  transactionVolume: {
    total: 33081170,
    approved: 28746001,
    declined: 9089385,
    atm: 3467031,
    pos: 7310896
  }
};

const cardStatusData = [
  { name: "Active", value: 1687973, transactions: "79% > 2 txns" },
  { name: "Inactive", value: 724053, transactions: "53% < 2 txns" },
  { name: "Issued", value: 588442, transactions: "" },
  { name: "Non-Activated", value: 469260, transactions: "67% < 2 txns" },
  { name: "Destroyed", value: 36653, transactions: "" }
];

const replacementData = [
  { name: "Lost", value: 91 },
  { name: "Damaged", value: 4 },
  { name: "Expired", value: 3 },
  { name: "Stolen", value: 2 },
  { name: "Destroyed", value: 1 }
];

const districtTransactions = [
  { district: "Central Addis", teller: 1447408, card: 4334250 },
  { district: "East Addis", teller: 1893486, card: 5865380 },
  { district: "West Addis", teller: 1258191, card: 3774927 },
  { district: "Bahirdar", teller: 1643469, card: 1663820 },
  { district: "Adama", teller: 835690, card: 1171271 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export const CardBankingCharts = () => {
  const formatNumber = (num: number) => num.toLocaleString();
  const calculatePercentage = (value: number, total: number) => ((value / total) * 100).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Card Holder Performance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Card Holder Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Activated Cards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(cardHolderData.performance.activated)}</div>
              <p className="text-sm text-muted-foreground">
                Achievement: {calculatePercentage(cardHolderData.performance.activated, cardHolderData.performance.plan)}%
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Non-Activated Cards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(cardHolderData.performance.nonActivated)}</div>
              <p className="text-sm text-muted-foreground">Total: {formatNumber(cardHolderData.performance.totalNonActivated)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Recruited Cards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(cardHolderData.performance.recruited)}</div>
              <p className="text-sm text-muted-foreground">This Year</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transaction Volume Analysis */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Transaction Volume Analysis</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>ATM vs POS Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'ATM', value: cardHolderData.transactionVolume.atm },
                      { name: 'POS', value: cardHolderData.transactionVolume.pos }
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {cardStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Approved vs Declined Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={[{
                    name: 'Transactions',
                    approved: cardHolderData.transactionVolume.approved,
                    declined: cardHolderData.transactionVolume.declined
                  }]}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="approved" stackId="a" fill="#0088FE" name="Approved" />
                  <Bar dataKey="declined" stackId="a" fill="#FF8042" name="Declined" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Card Status Analysis */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Card Status Analysis</h2>
        <Card>
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
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {cardStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      {/* Card Replacement Requests */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Card Replacement Analysis</h2>
        <Card>
          <CardHeader>
            <CardTitle>Replacement Reasons</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={replacementData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {replacementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      {/* District Transactions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Transactions by District</h2>
        <Card>
          <CardHeader>
            <CardTitle>Teller vs Card Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={districtTransactions}>
                <XAxis dataKey="district" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="teller" stackId="a" fill="#0088FE" name="Teller" />
                <Bar dataKey="card" stackId="a" fill="#00C49F" name="Card" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

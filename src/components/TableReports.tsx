
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const transactionsData = [
  { id: 1, date: "2024-02-20", type: "Payment", amount: 500, status: "Completed" },
  { id: 2, date: "2024-02-19", type: "Transfer", amount: 1000, status: "Pending" },
  { id: 3, date: "2024-02-18", type: "Withdrawal", amount: 300, status: "Completed" },
];

const usersData = [
  { id: 1, name: "John Doe", activity: "Login", timestamp: "2024-02-20 10:30" },
  { id: 2, name: "Jane Smith", activity: "Transfer", timestamp: "2024-02-20 11:15" },
  { id: 3, name: "Mike Johnson", activity: "Payment", timestamp: "2024-02-20 12:00" },
];

export const TableReports = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports Tables</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="transactions" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="users">User Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions">
            <div className="rounded-md border">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="py-3 px-4 text-left">ID</th>
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Type</th>
                    <th className="py-3 px-4 text-left">Amount</th>
                    <th className="py-3 px-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionsData.map((transaction) => (
                    <tr key={transaction.id} className="border-t">
                      <td className="py-3 px-4">{transaction.id}</td>
                      <td className="py-3 px-4">{transaction.date}</td>
                      <td className="py-3 px-4">{transaction.type}</td>
                      <td className="py-3 px-4">${transaction.amount}</td>
                      <td className="py-3 px-4">{transaction.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="users">
            <div className="rounded-md border">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="py-3 px-4 text-left">ID</th>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Activity</th>
                    <th className="py-3 px-4 text-left">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.map((user) => (
                    <tr key={user.id} className="border-t">
                      <td className="py-3 px-4">{user.id}</td>
                      <td className="py-3 px-4">{user.name}</td>
                      <td className="py-3 px-4">{user.activity}</td>
                      <td className="py-3 px-4">{user.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

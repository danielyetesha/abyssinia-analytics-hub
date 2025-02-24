
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DashboardType } from "@/types/dashboard";

interface TablesProps {
  activeTab: DashboardType;
}

const Tables = ({ activeTab }: TablesProps) => {
  const transactionsData = {
    apollo: [
      { id: 1, date: "2024-02-20", type: "Apollo Payment", amount: 500, status: "Completed" },
      { id: 2, date: "2024-02-19", type: "Apollo Transfer", amount: 1000, status: "Pending" },
    ],
    mobile: [
      { id: 1, date: "2024-02-20", type: "Mobile Payment", amount: 300, status: "Completed" },
      { id: 2, date: "2024-02-19", type: "Mobile Transfer", amount: 800, status: "Pending" },
    ],
    card: [
      { id: 1, date: "2024-02-20", type: "Card Payment", amount: 400, status: "Completed" },
      { id: 2, date: "2024-02-19", type: "Card Transfer", amount: 900, status: "Pending" },
    ]
  };

  const usersData = {
    apollo: [
      { id: 1, name: "John Doe", activity: "Apollo Login", timestamp: "2024-02-20 10:30" },
      { id: 2, name: "Jane Smith", activity: "Apollo Transfer", timestamp: "2024-02-20 11:15" },
    ],
    mobile: [
      { id: 1, name: "Alice Brown", activity: "Mobile Login", timestamp: "2024-02-20 10:30" },
      { id: 2, name: "Bob Wilson", activity: "Mobile Transfer", timestamp: "2024-02-20 11:15" },
    ],
    card: [
      { id: 1, name: "Carol White", activity: "Card Login", timestamp: "2024-02-20 10:30" },
      { id: 2, name: "David Black", activity: "Card Transfer", timestamp: "2024-02-20 11:15" },
    ]
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <Tabs defaultValue={activeTab} className="w-full">
          <TabsList>
            <TabsTrigger value="apollo">Apollo</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Banking</TabsTrigger>
            <TabsTrigger value="card">Card Banking</TabsTrigger>
          </TabsList>
          <TabsContent value="apollo">
            <TableContent 
              transactionsData={transactionsData.apollo} 
              usersData={usersData.apollo}
            />
          </TabsContent>
          <TabsContent value="mobile">
            <TableContent 
              transactionsData={transactionsData.mobile} 
              usersData={usersData.mobile}
            />
          </TabsContent>
          <TabsContent value="card">
            <TableContent 
              transactionsData={transactionsData.card} 
              usersData={usersData.card}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface TableContentProps {
  transactionsData: Array<{
    id: number;
    date: string;
    type: string;
    amount: number;
    status: string;
  }>;
  usersData: Array<{
    id: number;
    name: string;
    activity: string;
    timestamp: string;
  }>;
}

const TableContent = ({ transactionsData, usersData }: TableContentProps) => {
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
                <thead className="bg-muted/50 dark:bg-muted/20">
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
                    <tr key={transaction.id} className="border-t border-border">
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
                <thead className="bg-muted/50 dark:bg-muted/20">
                  <tr>
                    <th className="py-3 px-4 text-left">ID</th>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Activity</th>
                    <th className="py-3 px-4 text-left">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.map((user) => (
                    <tr key={user.id} className="border-t border-border">
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

export default Tables;

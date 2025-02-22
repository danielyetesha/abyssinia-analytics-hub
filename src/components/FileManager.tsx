
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Star } from "lucide-react";

interface ReportFile {
  id: number;
  name: string;
  date: string;
  type: string;
  size: string;
}

const downloadedReports: ReportFile[] = [
  { id: 1, name: "Transaction Report Q1", date: "2024-02-20", type: "PDF", size: "2.5 MB" },
  { id: 2, name: "User Activity Summary", date: "2024-02-19", type: "PDF", size: "1.8 MB" },
  { id: 3, name: "Monthly Analytics", date: "2024-02-18", type: "PDF", size: "3.2 MB" },
];

const favoriteReports: ReportFile[] = [
  { id: 1, name: "Key Performance Indicators", date: "2024-02-20", type: "PDF", size: "2.1 MB" },
  { id: 2, name: "Customer Insights", date: "2024-02-19", type: "PDF", size: "1.5 MB" },
];

export const FileManager = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>File Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="downloaded" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="downloaded">Downloaded</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>
          
          <TabsContent value="downloaded">
            <div className="rounded-md border divide-y">
              {downloadedReports.map((report) => (
                <div key={report.id} className="p-4 flex items-center justify-between hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{report.size}</div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="favorites">
            <div className="rounded-md border divide-y">
              {favoriteReports.map((report) => (
                <div key={report.id} className="p-4 flex items-center justify-between hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{report.size}</div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

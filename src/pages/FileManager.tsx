
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReportFile {
  id: number;
  name: string;
  date: string;
  type: string;
  size: string;
}

const FileManager = () => {
  const downloadedReports: ReportFile[] = [
    { id: 1, name: "Transaction Report Q1", date: "2024-02-20", type: "PDF", size: "2.5 MB" },
    { id: 2, name: "User Activity Summary", date: "2024-02-19", type: "PDF", size: "1.8 MB" },
    { id: 3, name: "Monthly Analytics", date: "2024-02-18", type: "PDF", size: "3.2 MB" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-8">File Manager</h1>
      <Card>
        <CardHeader>
          <CardTitle>Downloaded Reports</CardTitle>
        </CardHeader>
        <CardContent>
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
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{report.size}</span>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FileManager;

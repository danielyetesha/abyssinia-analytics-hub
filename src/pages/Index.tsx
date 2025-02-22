
import { useState } from "react";
import { Download } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import StatsCards from "@/components/StatsCards";
import Charts from "@/components/Charts";
import { Button } from "@/components/ui/button";

export type DashboardType = "apollo" | "mobile" | "card";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<DashboardType>("apollo");

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">
              {activeTab === "apollo" && "Apollo Reports"}
              {activeTab === "mobile" && "Mobile Banking Reports"}
              {activeTab === "card" && "Card Banking Reports"}
            </h1>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
          <TopBar />
          <StatsCards type={activeTab} />
          <Charts type={activeTab} />
        </div>
      </main>
    </div>
  );
};

export default Index;

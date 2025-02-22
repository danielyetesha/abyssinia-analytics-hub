
import { useState } from "react";
import { Download, Search, Menu, X } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import StatsCards from "@/components/StatsCards";
import Charts from "@/components/Charts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export type DashboardType = "apollo" | "mobile" | "card";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<DashboardType>("apollo");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      {/* Mobile Navigation */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
          <div className="flex items-center justify-between p-4">
            <img
              src="/lovable-uploads/028fc144-93a6-47d3-962d-c7de734dfa5b.png"
              alt="Bank Logo"
              className="h-8"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          <Sidebar 
            isOpen={true}
            setIsOpen={() => setMobileMenuOpen(false)}
            activeTab={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
              setMobileMenuOpen(false);
            }}
            className="w-full"
          />
        </div>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sidebar 
          isOpen={sidebarOpen} 
          setIsOpen={setSidebarOpen}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}

      <main className={cn(
        "flex-1 overflow-y-auto",
        isMobile && "pt-16"
      )}>
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
            <h1 className="text-2xl font-semibold">
              {activeTab === "apollo" && "Apollo Reports"}
              {activeTab === "mobile" && "Mobile Banking Reports"}
              {activeTab === "card" && "Card Banking Reports"}
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-9 w-[200px]"
                />
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
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

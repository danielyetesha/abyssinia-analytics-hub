
import { useState, useRef } from "react";
import { Download, Search, Menu, X } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import StatsCards from "@/components/StatsCards";
import Charts from "@/components/Charts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export type DashboardType = "apollo" | "mobile" | "card";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<DashboardType>("apollo");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleDownloadPDF = async () => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    const canvas = await html2canvas(content, {
      ignoreElements: (element) => {
        return element.classList.contains('fixed') || 
               element.classList.contains('sticky');
      }
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });
    
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('report.pdf');
  };

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      {/* Mobile Navigation */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
          <div className="flex items-center justify-between p-4">
            <img
              src="/lovable-uploads/028fc144-93a6-47d3-962d-c7de734dfa5b.png"
              alt="Bank Logo"
              className="h-8"
            />
            <div className="flex items-center gap-2">
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
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background">
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
        "flex-1 overflow-y-auto bg-background",
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
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={handleDownloadPDF}
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>

          <div ref={contentRef}>
            <TopBar />
            <StatsCards type={activeTab} />
            <div className="mb-8">
              <Charts type={activeTab} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

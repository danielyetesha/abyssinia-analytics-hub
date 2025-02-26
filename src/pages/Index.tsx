
import { useState, useRef, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { DateRangeFilter } from "@/components/DateRangeFilter";
import { useFilteredData } from "@/hooks/useFilteredData";
import { ApolloTabs } from "@/components/ApolloTabs";
import type { DashboardType } from "../App";

interface IndexProps {
  defaultTab: DashboardType;
}

const Index = ({ defaultTab }: IndexProps) => {
  const [activeTab, setActiveTab] = useState<DashboardType>(defaultTab);
  const [searchQuery, setSearchQuery] = useState("");
  const [apolloSubTab, setApolloSubTab] = useState<"account" | "onboarding" | "loan" | "transaction" | "merchant">("account");
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { data, filters, setFilters, resetFilters } = useFilteredData(activeTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleTabChange = (tab: DashboardType) => {
    setActiveTab(tab);
    resetFilters();
    navigate(`/reports/${tab}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setFilters(prev => ({
      ...prev,
      startDate,
      endDate
    }));
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
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <DateRangeFilter onDateChange={handleDateChange} />
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

        {/* Show Apollo sub-navigation only when on Apollo reports */}
        {activeTab === "apollo" && (
          <ApolloTabs
            activeTab={apolloSubTab}
            onChange={setApolloSubTab}
          />
        )}

        <div ref={contentRef}>
          <TopBar />
          <StatsCards type={activeTab} />
          <div className="mb-8">
            <Charts 
              type={activeTab} 
              subType={apolloSubTab}
              data={data}
              onChartClick={(type, value) => {
                setFilters(prev => ({
                  ...prev,
                  selectedType: type,
                  selectedValue: value
                }));
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;

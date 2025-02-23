
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Tables from "./pages/Tables";
import Comments from "./pages/Comments";
import FileManager from "./pages/FileManager";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export type DashboardType = "apollo" | "mobile" | "card";
export type SectionType = "reports" | "tables" | "comments" | "file-manager";

const queryClient = new QueryClient();

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<DashboardType>("apollo");
  const [activeSection, setActiveSection] = useState<SectionType>("reports");

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TooltipProvider>
            <div className="flex h-screen bg-background dark:bg-zinc-900">
              <Sidebar 
                isOpen={isOpen} 
                setIsOpen={setIsOpen} 
                activeTab={activeTab} 
                onTabChange={setActiveTab}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
              <div className="flex-1 overflow-auto">
                <Toaster />
                <Sonner />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/tables" element={<Tables activeTab={activeTab} />} />
                  <Route path="/comments" element={<Comments activeTab={activeTab} />} />
                  <Route path="/file-manager" element={<FileManager activeTab={activeTab} />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </TooltipProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;

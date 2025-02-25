
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import Index from "./pages/Index";
import Tables from "./pages/Tables";
import Comments from "./pages/Comments";
import FileManager from "./pages/FileManager";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

export type DashboardType = "apollo" | "mobile" | "card";
export type SectionType = "reports" | "tables" | "comments" | "file-manager";

const queryClient = new QueryClient();

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TooltipProvider>
            <div className="flex h-screen bg-background dark:bg-zinc-900">
              <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div className="flex-1 overflow-auto">
                <Toaster />
                <Sonner />
                <Routes>
                  <Route path="/" element={<Navigate to="/reports/apollo" replace />} />
                  <Route path="/reports/apollo" element={<Index defaultTab="apollo" />} />
                  <Route path="/reports/mobile" element={<Index defaultTab="mobile" />} />
                  <Route path="/reports/card" element={<Index defaultTab="card" />} />
                  <Route path="/tables" element={<Tables />} />
                  <Route path="/comments" element={<Comments />} />
                  <Route path="/file-manager" element={<FileManager />} />
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

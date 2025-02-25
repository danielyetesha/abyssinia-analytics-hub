
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
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { Button } from "./components/ui/button";

export type DashboardType = "apollo" | "mobile" | "card";
export type SectionType = "reports" | "tables" | "comments" | "file-manager";

const queryClient = new QueryClient();

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TooltipProvider>
            <div className="flex h-screen bg-background dark:bg-zinc-900">
              {/* Mobile Header */}
              {isMobile && (
                <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
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

              {/* Mobile Menu */}
              {isMobile && mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background">
                  <Sidebar 
                    isOpen={true}
                    setIsOpen={() => setMobileMenuOpen(false)}
                    className="w-full"
                  />
                </div>
              )}

              {/* Desktop Sidebar */}
              {!isMobile && (
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
              )}

              <div className={cn(
                "flex-1 overflow-auto",
                isMobile && "pt-16"
              )}>
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

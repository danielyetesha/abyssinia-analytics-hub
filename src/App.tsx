
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

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <div className="flex h-screen bg-background">
            <Sidebar isOpen={true} setIsOpen={() => {}} activeTab="apollo" onTabChange={() => {}} />
            <div className="flex-1 overflow-auto">
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/" element={<Index />} />
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

export default App;

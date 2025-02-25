
import { Menu, Home, FileText, Smartphone, CreditCard, Table, MessageSquare, FolderOpen, Settings, LogOut, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  className?: string;
}

const Sidebar = ({ isOpen, setIsOpen, className }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Reports"]);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const menuItems = [{
    icon: FileText,
    label: "Reports",
    submenu: [{
      icon: Home,
      label: "Apollo",
      path: "/reports/apollo"
    }, {
      icon: Smartphone,
      label: "Mobile Banking",
      path: "/reports/mobile"
    }, {
      icon: CreditCard,
      label: "Card Banking",
      path: "/reports/card"
    }]
  }, {
    icon: Table,
    label: "Tables",
    path: "/tables"
  }, {
    icon: MessageSquare,
    label: "Comments",
    path: "/comments"
  }, {
    icon: FolderOpen,
    label: "File Manager",
    path: "/file-manager"
  }];

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside className={cn(
      "h-screen border-r border-border transition-all duration-300 ease-in-out flex flex-col",
      "bg-background dark:bg-zinc-900",
      isOpen ? "w-64" : "w-20",
      className
    )}>
      <div className="p-4 border-b border-border flex items-center gap-4 bg-background/95 dark:bg-zinc-900/95">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>
        {isOpen && (
          <img
            src="/lovable-uploads/028fc144-93a6-47d3-962d-c7de734dfa5b.png"
            alt="Bank Logo"
            className="h-8"
          />
        )}
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleExpanded(item.label)}
                    className={cn(
                      "w-full flex items-center gap-4 p-2 rounded-lg transition-all",
                      "hover:bg-muted dark:hover:bg-zinc-800",
                      expandedItems.includes(item.label) && "text-primary bg-primary/10 dark:bg-primary/5"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {isOpen && <span>{item.label}</span>}
                  </button>
                  {isOpen && expandedItems.includes(item.label) && (
                    <ul className="ml-6 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            to={subItem.path}
                            className={cn(
                              "flex items-center gap-4 p-2 rounded-lg transition-all w-full",
                              "hover:bg-muted dark:hover:bg-zinc-800",
                              isActivePath(subItem.path) && "text-primary bg-primary/10 dark:bg-primary/5"
                            )}
                          >
                            <subItem.icon className="h-5 w-5" />
                            <span>{subItem.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-4 p-2 rounded-lg transition-all",
                    "hover:bg-muted dark:hover:bg-zinc-800",
                    isActivePath(item.path) && "text-primary bg-primary/10 dark:bg-primary/5"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              )}
            </li>
          ))}
          
          {/* Theme Toggle Button */}
          <li>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full flex items-center gap-4 justify-start",
                "hover:bg-muted dark:hover:bg-zinc-800"
              )}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-5 w-5" />
                  {isOpen && <span>Light Mode</span>}
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5" />
                  {isOpen && <span>Dark Mode</span>}
                </>
              )}
            </Button>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t border-border bg-background/95 dark:bg-zinc-900/95">
        <div className="flex items-center gap-4 p-2">
          <div className="h-8 w-8 rounded-full bg-muted dark:bg-zinc-800" />
          {isOpen && (
            <div className="flex-1">
              <p className="text-sm font-medium">Your Name</p>
              <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

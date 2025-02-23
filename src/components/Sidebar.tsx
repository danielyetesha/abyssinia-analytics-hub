
import { Menu, Home, FileText, Smartphone, CreditCard, Table, MessageSquare, FolderOpen, Star, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { DashboardType } from "@/pages/Index";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeTab: DashboardType;
  onTabChange: (tab: DashboardType) => void;
  className?: string;
}

const Sidebar = ({ isOpen, setIsOpen, activeTab, onTabChange, className }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Reports"]);
  const location = useLocation();

  const menuItems = [{
    icon: FileText,
    label: "Reports",
    submenu: [{
      icon: Home,
      label: "Apollo",
      id: "apollo" as DashboardType
    }, {
      icon: Smartphone,
      label: "Mobile Banking",
      id: "mobile" as DashboardType
    }, {
      icon: CreditCard,
      label: "Card Banking",
      id: "card" as DashboardType
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
  }, {
    icon: Star,
    label: "Favorites",
    path: "/favorites"
  }];

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <aside className={cn(
      "h-screen bg-white border-r border-border transition-all duration-300 ease-in-out flex flex-col",
      isOpen ? "w-64" : "w-20",
      className
    )}>
      <div className="p-4 border-b border-border flex items-center gap-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
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
                      "w-full flex items-center gap-4 p-2 rounded-lg transition-all hover:bg-gray-100",
                      expandedItems.includes(item.label) && "text-primary bg-primary/10 hover:bg-primary/20"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {isOpen && <span>{item.label}</span>}
                  </button>
                  {isOpen && expandedItems.includes(item.label) && (
                    <ul className="ml-6 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <button
                            onClick={() => onTabChange(subItem.id)}
                            className={cn(
                              "flex items-center gap-4 p-2 rounded-lg transition-all hover:bg-gray-100 w-full",
                              activeTab === subItem.id && "text-primary bg-primary/10 hover:bg-primary/20"
                            )}
                          >
                            <subItem.icon className="h-5 w-5" />
                            <span>{subItem.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path || "#"}
                  className={cn(
                    "flex items-center gap-4 p-2 rounded-lg transition-all hover:bg-gray-100",
                    location.pathname === item.path && "text-primary bg-primary/10 hover:bg-primary/20"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-4 p-2">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
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

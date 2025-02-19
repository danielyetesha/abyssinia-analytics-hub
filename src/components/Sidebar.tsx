
import { Menu, Home, FileText, Smartphone, CreditCard, Table, MessageSquare, FolderOpen, Star, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const menuItems = [
    { icon: FileText, label: "Reports", active: true },
    { icon: Home, label: "Apollo" },
    { icon: Smartphone, label: "Mobile Banking" },
    { icon: CreditCard, label: "Card Banking" },
    { icon: Table, label: "Tables" },
    { icon: MessageSquare, label: "Comments" },
    { icon: FolderOpen, label: "File Manager" },
    { icon: Star, label: "Favorites" },
  ];

  const bottomItems = [
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside className={cn(
      "h-screen bg-white border-r border-border transition-all duration-300 ease-in-out flex flex-col",
      isOpen ? "w-64" : "w-20"
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
            src="/lovable-uploads/110caa20-4a1d-4bc3-809e-cdb004f5cff6.png"
            alt="Bank of Abyssinia"
            className="h-8"
          />
        )}
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={cn(
                  "flex items-center gap-4 p-2 rounded-lg transition-all hover:bg-gray-100",
                  item.active && "text-primary bg-primary/10 hover:bg-primary/20"
                )}
              >
                <item.icon className="h-5 w-5" />
                {isOpen && <span>{item.label}</span>}
              </a>
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

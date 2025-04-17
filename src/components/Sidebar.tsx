
import { 
  HomeIcon, 
  ReceiptIcon, 
  BarChart3Icon, 
  CalendarIcon, 
  FileTextIcon, 
  SettingsIcon, 
  HelpCircleIcon 
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: HomeIcon, label: "Dashboard", active: true, href: "/" },
  { icon: ReceiptIcon, label: "รายรับ/รายจ่าย", href: "/transactions" },
  { icon: FileTextIcon, label: "วางแผนภาษี", href: "/tax-planner" },
  { icon: BarChart3Icon, label: "รายงาน", href: "#" },
  { icon: CalendarIcon, label: "ปฏิทินภาษี", href: "#" },
  { icon: SettingsIcon, label: "ตั้งค่า", href: "#" },
  { icon: HelpCircleIcon, label: "ช่วยเหลือ", href: "#" },
];

const Sidebar = () => {
  return (
    <div className="h-screen w-64 border-r bg-secondary flex flex-col">
      <div className="p-6">
        <h2 className="font-semibold text-primary text-lg">Tax Savvy</h2>
        <p className="text-xs text-muted-foreground">ระบบจัดการภาษีสำหรับฟรีแลนซ์</p>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-md text-sm transition-colors",
                  item.active 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <div className="bg-accent/30 rounded-md p-4">
          <h3 className="font-medium text-sm">ใกล้ถึงเวลายื่นภาษี</h3>
          <p className="text-xs text-muted-foreground mt-1">อีก 15 วันจะถึงกำหนดยื่นภาษีครึ่งปี</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

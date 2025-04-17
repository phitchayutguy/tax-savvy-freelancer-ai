
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import IncomeExpenseChart from "@/components/dashboard/IncomeExpenseChart";
import TaxSummary from "@/components/dashboard/TaxSummary";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import TaxCalendar from "@/components/dashboard/TaxCalendar";
import { BanknoteIcon, ReceiptIcon, CalculatorIcon, TrendingUpIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight">ยินดีต้อนรับ, คุณสมศักดิ์</h1>
              <p className="text-muted-foreground">นี่คือภาพรวมการเงินและภาษีของคุณสำหรับปี 2024</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatCard 
                title="รายได้ทั้งหมด" 
                value="฿468,000" 
                description="ปี 2024 (ม.ค. - พ.ย.)"
                icon={<BanknoteIcon className="h-6 w-6" />}
                trend="up"
                trendValue="8%"
              />
              <StatCard 
                title="รายจ่ายทางธุรกิจ" 
                value="฿164,800" 
                description="ปี 2024 (ม.ค. - พ.ย.)"
                icon={<ReceiptIcon className="h-6 w-6" />}
                trend="up"
                trendValue="12%"
              />
              <StatCard 
                title="ภาษีที่ต้องจ่าย" 
                value="฿24,320" 
                description="ประมาณการสำหรับปี 2024"
                icon={<CalculatorIcon className="h-6 w-6" />}
                trend="down"
                trendValue="5%"
              />
              <StatCard 
                title="รายได้สุทธิ" 
                value="฿303,200" 
                description="หลังหักรายจ่ายและภาษี"
                icon={<TrendingUpIcon className="h-6 w-6" />}
                trend="up"
                trendValue="6%"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <IncomeExpenseChart />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RecentTransactions />
              <div className="space-y-6">
                <TaxSummary />
                <TaxCalendar />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const chartData = {
  months: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
  income: [35000, 42000, 38000, 45000, 39000, 40000, 41000, 44000, 46000, 48000, 50000, 0],
  expenses: [12000, 15000, 13000, 14000, 14500, 15000, 14800, 16000, 15500, 17000, 18000, 0]
};

const IncomeExpenseChart = () => {
  // For this frontend mockup, we're not implementing actual chart rendering
  // In a real implementation, you would use a library like Recharts

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">ภาพรวมรายรับและรายจ่าย</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="yearly">
          <TabsList className="mb-4">
            <TabsTrigger value="yearly">รายปี</TabsTrigger>
            <TabsTrigger value="monthly">รายเดือน</TabsTrigger>
            <TabsTrigger value="weekly">รายสัปดาห์</TabsTrigger>
          </TabsList>
          <TabsContent value="yearly" className="space-y-4">
            <div className="h-[200px] bg-muted/30 rounded-md flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Chart would render here in the actual implementation</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-secondary p-4 rounded-md">
                <p className="text-sm text-muted-foreground">รายรับทั้งหมด</p>
                <p className="text-xl font-bold mt-1">฿468,000</p>
              </div>
              <div className="bg-secondary p-4 rounded-md">
                <p className="text-sm text-muted-foreground">รายจ่ายทั้งหมด</p>
                <p className="text-xl font-bold mt-1">฿164,800</p>
              </div>
              <div className="bg-secondary p-4 rounded-md">
                <p className="text-sm text-muted-foreground">กำไรสุทธิ</p>
                <p className="text-xl font-bold mt-1">฿303,200</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="monthly">
            <div className="h-[260px] bg-muted/30 rounded-md flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Monthly chart would render here</p>
            </div>
          </TabsContent>
          <TabsContent value="weekly">
            <div className="h-[260px] bg-muted/30 rounded-md flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Weekly chart would render here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default IncomeExpenseChart;

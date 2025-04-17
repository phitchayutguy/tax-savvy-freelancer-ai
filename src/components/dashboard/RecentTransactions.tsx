
import { Calendar, FileText, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const transactions = [
  {
    id: 1,
    description: "รับงานออกแบบเว็บไซต์",
    amount: 35000,
    date: "15 พ.ย. 2024",
    type: "income",
    category: "งานออกแบบ",
  },
  {
    id: 2,
    description: "ค่าโฮสติ้งรายเดือน",
    amount: -1200,
    date: "10 พ.ย. 2024",
    type: "expense",
    category: "ค่าบริการออนไลน์",
  },
  {
    id: 3,
    description: "รับงานเขียนบทความ",
    amount: 8500,
    date: "5 พ.ย. 2024",
    type: "income",
    category: "งานเขียน",
  },
  {
    id: 4,
    description: "ค่าอุปกรณ์สำนักงาน",
    amount: -2450,
    date: "2 พ.ย. 2024",
    type: "expense",
    category: "อุปกรณ์",
  },
];

const RecentTransactions = () => {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">รายการล่าสุด</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="h-8">
            <FileText className="h-3.5 w-3.5 mr-1" />
            <span className="text-xs">เพิ่มรายการ</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8">
            <Upload className="h-3.5 w-3.5 mr-1" />
            <span className="text-xs">อัปโหลดสลิป</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex justify-between items-center border-b pb-3">
              <div className="flex items-start space-x-3">
                <div className={`rounded-full p-2 ${transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
                  <Calendar className={`h-4 w-4 ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`} />
                </div>
                <div>
                  <p className="text-sm font-medium">{transaction.description}</p>
                  <p className="text-xs text-muted-foreground">{transaction.category} • {transaction.date}</p>
                </div>
              </div>
              <span className={`font-medium ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.type === 'income' ? '+' : ''}{transaction.amount.toLocaleString()} ฿
              </span>
            </div>
          ))}
          <Button variant="ghost" className="w-full text-xs text-muted-foreground">
            ดูรายการทั้งหมด
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;

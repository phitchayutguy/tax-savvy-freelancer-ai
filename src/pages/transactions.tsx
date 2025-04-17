
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowDownIcon, ArrowUpIcon, CalendarIcon, ChevronLeftIcon, ChevronRightIcon, FileTextIcon, PlusIcon, SearchIcon, UploadIcon } from "lucide-react";
import AddTransactionForm from "@/components/transactions/AddTransactionForm";
import OcrUpload from "@/components/documents/OcrUpload";

const transactions = [
  {
    id: 1,
    description: "รับงานออกแบบเว็บไซต์",
    amount: 35000,
    date: "15 พ.ย. 2024",
    type: "income",
    category: "งานออกแบบ",
    status: "completed",
  },
  {
    id: 2,
    description: "ค่าโฮสติ้งรายเดือน",
    amount: 1200,
    date: "10 พ.ย. 2024",
    type: "expense",
    category: "ค่าบริการออนไลน์",
    status: "completed",
  },
  {
    id: 3,
    description: "รับงานเขียนบทความ",
    amount: 8500,
    date: "5 พ.ย. 2024",
    type: "income",
    category: "งานเขียน",
    status: "completed",
  },
  {
    id: 4,
    description: "ค่าอุปกรณ์สำนักงาน",
    amount: 2450,
    date: "2 พ.ย. 2024",
    type: "expense",
    category: "อุปกรณ์",
    status: "completed",
  },
  {
    id: 5,
    description: "ค่าอินเทอร์เน็ต",
    amount: 799,
    date: "1 พ.ย. 2024",
    type: "expense",
    category: "ค่าสาธารณูปโภค",
    status: "completed",
  },
  {
    id: 6,
    description: "รับงานพัฒนาเว็บไซต์",
    amount: 45000,
    date: "28 ต.ค. 2024",
    type: "income",
    category: "งานพัฒนา",
    status: "completed",
  },
  {
    id: 7,
    description: "ดอกเบี้ยเงินฝาก",
    amount: 1200,
    date: "25 ต.ค. 2024",
    type: "income",
    category: "ดอกเบี้ย",
    status: "completed",
  },
  {
    id: 8,
    description: "ค่าซอฟต์แวร์ Adobe Creative Cloud",
    amount: 6520,
    date: "20 ต.ค. 2024",
    type: "expense",
    category: "ซอฟต์แวร์",
    status: "completed",
  },
];

const Transactions = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold tracking-tight">รายรับ/รายจ่าย</h1>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <UploadIcon className="h-4 w-4 mr-2" />
                  อัปโหลดเอกสาร
                </Button>
                <Button size="sm">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  เพิ่มรายการใหม่
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <Card className="col-span-3">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">รายการทั้งหมด</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div className="flex items-center space-x-2 w-full sm:w-auto">
                        <div className="relative w-full sm:w-64">
                          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="ค้นหารายการ..." className="pl-8" />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[140px] h-9">
                            <SelectValue placeholder="ประเภทรายการ" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">ทั้งหมด</SelectItem>
                            <SelectItem value="income">รายรับ</SelectItem>
                            <SelectItem value="expense">รายจ่าย</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[140px] h-9">
                            <SelectValue placeholder="หมวดหมู่" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">ทั้งหมด</SelectItem>
                            <SelectItem value="design">งานออกแบบ</SelectItem>
                            <SelectItem value="development">งานพัฒนา</SelectItem>
                            <SelectItem value="writing">งานเขียน</SelectItem>
                            <SelectItem value="equipment">อุปกรณ์</SelectItem>
                            <SelectItem value="software">ซอฟต์แวร์</SelectItem>
                            <SelectItem value="utilities">ค่าสาธารณูปโภค</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="relative">
                          <Button variant="outline" size="sm" className="h-9">
                            <CalendarIcon className="h-4 w-4 mr-2" />
                            พ.ย. 2024
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-md overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[300px]">รายละเอียด</TableHead>
                            <TableHead>หมวดหมู่</TableHead>
                            <TableHead>วันที่</TableHead>
                            <TableHead className="text-right">จำนวนเงิน</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {transactions.map((transaction) => (
                            <TableRow key={transaction.id}>
                              <TableCell className="font-medium flex items-center">
                                <div className={`rounded-full p-1.5 mr-3 ${transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
                                  {transaction.type === 'income' ? (
                                    <ArrowUpIcon className="h-3.5 w-3.5 text-green-600" />
                                  ) : (
                                    <ArrowDownIcon className="h-3.5 w-3.5 text-red-600" />
                                  )}
                                </div>
                                {transaction.description}
                              </TableCell>
                              <TableCell>{transaction.category}</TableCell>
                              <TableCell>{transaction.date}</TableCell>
                              <TableCell className={`text-right font-medium ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                                {transaction.type === 'income' ? '+' : '-'}{transaction.amount.toLocaleString()} ฿
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        แสดง 1-8 จาก 24 รายการ
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <ChevronLeftIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 w-8">
                          1
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 w-8">
                          2
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 w-8">
                          3
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <ChevronRightIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-fit">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">สรุปรายรับรายจ่าย</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="month">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="month">เดือนนี้</TabsTrigger>
                      <TabsTrigger value="quarter">ไตรมาสนี้</TabsTrigger>
                      <TabsTrigger value="year">ปีนี้</TabsTrigger>
                    </TabsList>
                    <div className="pt-4 space-y-4">
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground">รายรับทั้งหมด</Label>
                        <div className="bg-green-50 border border-green-100 p-3 rounded-md">
                          <div className="flex items-center">
                            <ArrowUpIcon className="h-5 w-5 text-green-600 mr-2" />
                            <span className="text-lg font-bold text-green-600">+88,500 ฿</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground">รายจ่ายทั้งหมด</Label>
                        <div className="bg-red-50 border border-red-100 p-3 rounded-md">
                          <div className="flex items-center">
                            <ArrowDownIcon className="h-5 w-5 text-red-600 mr-2" />
                            <span className="text-lg font-bold text-red-600">-11,769 ฿</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground">คงเหลือ</Label>
                        <div className="bg-blue-50 border border-blue-100 p-3 rounded-md">
                          <span className="text-lg font-bold text-blue-600">76,731 ฿</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full text-xs" size="sm">
                        <FileTextIcon className="h-3.5 w-3.5 mr-1.5" />
                        ดูรายงานรายรับรายจ่าย
                      </Button>
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AddTransactionForm />
              <OcrUpload />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Transactions;

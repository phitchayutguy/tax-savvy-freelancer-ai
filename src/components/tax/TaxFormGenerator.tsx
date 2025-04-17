
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DownloadIcon, FileTextIcon, PaperclipIcon, CheckIcon } from "lucide-react";

const TaxFormGenerator = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">แบบฟอร์มภาษี</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="generate">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="generate">สร้างแบบฟอร์ม</TabsTrigger>
            <TabsTrigger value="history">ประวัติการสร้าง</TabsTrigger>
          </TabsList>
          
          <TabsContent value="generate" className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">เลือกแบบฟอร์มภาษี</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border rounded-md p-4 bg-secondary/30 hover:bg-secondary cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium">ภ.ง.ด.90</h4>
                    <div className="bg-primary/10 rounded-full p-1">
                      <CheckIcon className="h-3.5 w-3.5 text-primary" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    สำหรับผู้มีรายได้จากการจ้างงานและการประกอบวิชาชีพอิสระ
                  </p>
                </div>
                
                <div className="border rounded-md p-4 hover:bg-secondary cursor-pointer">
                  <h4 className="text-sm font-medium mb-2">ภ.ง.ด.91</h4>
                  <p className="text-xs text-muted-foreground">
                    สำหรับผู้มีรายได้จากการประกอบวิชาชีพอิสระเท่านั้น
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium">ข้อมูลประกอบการยื่นภาษี</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">รายการ</TableHead>
                    <TableHead className="text-right">จำนวนเงิน (บาท)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">รายได้จากวิชาชีพอิสระ</TableCell>
                    <TableCell className="text-right">468,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ค่าใช้จ่ายทางธุรกิจ</TableCell>
                    <TableCell className="text-right">164,800</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">เงินได้พึงประเมิน</TableCell>
                    <TableCell className="text-right">303,200</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">หัก ค่าลดหย่อนส่วนตัว</TableCell>
                    <TableCell className="text-right">60,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">หัก ค่าลดหย่อนอื่นๆ</TableCell>
                    <TableCell className="text-right">64,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">เงินได้สุทธิ</TableCell>
                    <TableCell className="text-right">179,200</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ภาษีที่ต้องชำระ</TableCell>
                    <TableCell className="text-right">9,180</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <Button variant="outline">
                <PaperclipIcon className="h-4 w-4 mr-2" />
                <span>แนบเอกสารเพิ่มเติม</span>
              </Button>
              <Button>
                <FileTextIcon className="h-4 w-4 mr-2" />
                <span>สร้างแบบฟอร์ม ภ.ง.ด.90</span>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-sm font-medium">ภ.ง.ด.90 ปีภาษี 2565</h3>
                    <p className="text-xs text-muted-foreground">สร้างเมื่อ 10 มี.ค. 2566</p>
                  </div>
                  <Button variant="outline" size="sm" className="h-8">
                    <DownloadIcon className="h-3.5 w-3.5 mr-1" />
                    <span className="text-xs">ดาวน์โหลด PDF</span>
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    ยื่นแล้ว
                  </span>
                  <span className="text-xs text-muted-foreground">ภาษีที่ชำระ: 7,250 บาท</span>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-sm font-medium">ภ.ง.ด.90 ปีภาษี 2564</h3>
                    <p className="text-xs text-muted-foreground">สร้างเมื่อ 15 มี.ค. 2565</p>
                  </div>
                  <Button variant="outline" size="sm" className="h-8">
                    <DownloadIcon className="h-3.5 w-3.5 mr-1" />
                    <span className="text-xs">ดาวน์โหลด PDF</span>
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    ยื่นแล้ว
                  </span>
                  <span className="text-xs text-muted-foreground">ภาษีที่ชำระ: 5,120 บาท</span>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-sm font-medium">ภ.ง.ด.91 ปีภาษี 2563</h3>
                    <p className="text-xs text-muted-foreground">สร้างเมื่อ 20 มี.ค. 2564</p>
                  </div>
                  <Button variant="outline" size="sm" className="h-8">
                    <DownloadIcon className="h-3.5 w-3.5 mr-1" />
                    <span className="text-xs">ดาวน์โหลด PDF</span>
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    ยื่นแล้ว
                  </span>
                  <span className="text-xs text-muted-foreground">ภาษีที่ชำระ: 3,450 บาท</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TaxFormGenerator;

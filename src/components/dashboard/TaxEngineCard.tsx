
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRightIcon, CalculatorIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const TaxEngineCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-medium">เครื่องคำนวณภาษี</CardTitle>
            <CardDescription>คำนวณภาษีตามอัตราก้าวหน้าของกรมสรรพากร</CardDescription>
          </div>
          <div className="bg-primary/10 rounded-full p-2">
            <CalculatorIcon className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="summary">สรุป</TabsTrigger>
            <TabsTrigger value="details">รายละเอียด</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary" className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-secondary/50 p-3 rounded-md">
                <p className="text-xs text-muted-foreground">รายได้สุทธิ</p>
                <p className="text-lg font-bold">179,200 บาท</p>
              </div>
              <div className="bg-secondary/50 p-3 rounded-md">
                <p className="text-xs text-muted-foreground">ภาษีที่ต้องชำระ</p>
                <p className="text-lg font-bold">9,180 บาท</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">อัตราภาษีเฉลี่ย</h4>
              <div className="bg-muted/30 h-7 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-primary w-[5.1%] rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-medium">5.1%</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <span>35%</span>
              </div>
            </div>

            <Button variant="outline" className="w-full text-xs" size="sm">
              <span>ดูรายละเอียดการคำนวณ</span>
              <ArrowRightIcon className="h-3.5 w-3.5 ml-1" />
            </Button>
          </TabsContent>
          
          <TabsContent value="details" className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">รายได้ทั้งหมด</span>
                <span className="font-medium">468,000 บาท</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">หัก ค่าใช้จ่าย (35%)</span>
                <span className="font-medium">-164,800 บาท</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">เงินได้หลังหักค่าใช้จ่าย</span>
                <span className="font-medium">303,200 บาท</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">หัก ค่าลดหย่อนส่วนตัว</span>
                <span className="font-medium">-60,000 บาท</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">หัก ค่าลดหย่อนอื่นๆ</span>
                <span className="font-medium">-64,000 บาท</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t font-medium">
                <span>เงินได้สุทธิ</span>
                <span>179,200 บาท</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">การคำนวณภาษีแบบขั้นบันได</h4>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between border-b pb-1">
                  <span className="text-muted-foreground">0 - 150,000 บาท (0%)</span>
                  <span className="font-medium">0 บาท</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="text-muted-foreground">150,001 - 300,000 บาท (5%)</span>
                  <span className="font-medium">29,200 × 5% = 1,460 บาท</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="text-muted-foreground">300,001 - 500,000 บาท (10%)</span>
                  <span className="font-medium">0 × 10% = 0 บาท</span>
                </div>
                <div className="flex justify-between pt-1 font-medium">
                  <span>ภาษีที่ต้องชำระ</span>
                  <span>1,460 บาท</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 p-3 rounded-md">
              <h4 className="text-sm font-medium">ภาษีที่หักไว้แล้ว</h4>
              <div className="mt-2 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ภาษีหัก ณ ที่จ่าย (3%)</span>
                  <span>7,720 บาท</span>
                </div>
                <div className="flex justify-between border-t pt-1 mt-1">
                  <span className="font-medium">ภาษีที่ต้องชำระเพิ่ม</span>
                  <span className="font-medium text-green-600">0 บาท</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">ภาษีที่ชำระเกิน (ขอคืนได้)</span>
                  <span className="font-medium text-green-600">6,260 บาท</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TaxEngineCard;

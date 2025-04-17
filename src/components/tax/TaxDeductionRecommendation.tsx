
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { AlertCircleIcon, BookOpenIcon, HeartPulseIcon, HomeIcon, PlusIcon, TrendingUpIcon } from "lucide-react";

const TaxDeductionRecommendation = () => {
  const recommendedDeductions = [
    {
      id: 1,
      name: "กองทุน SSF",
      description: "ลดหย่อนได้สูงสุด 30% ของรายได้ แต่ไม่เกิน 200,000 บาท",
      icon: TrendingUpIcon,
      maxAmount: 200000,
      currentAmount: 30000,
      remainingAmount: 170000,
      progress: 15,
    },
    {
      id: 2,
      name: "ประกันสุขภาพ",
      description: "ลดหย่อนได้ตามจริง แต่ไม่เกิน 25,000 บาท",
      icon: HeartPulseIcon,
      maxAmount: 25000,
      currentAmount: 0,
      remainingAmount: 25000,
      progress: 0,
    },
    {
      id: 3,
      name: "ซื้อหนังสือ",
      description: "ลดหย่อนได้ตามจริง แต่ไม่เกิน 15,000 บาท",
      icon: BookOpenIcon,
      maxAmount: 15000,
      currentAmount: 2500,
      remainingAmount: 12500,
      progress: 17,
    },
    {
      id: 4,
      name: "ดอกเบี้ยกู้ซื้อบ้าน",
      description: "ลดหย่อนได้ตามจริง แต่ไม่เกิน 100,000 บาท",
      icon: HomeIcon,
      maxAmount: 100000,
      currentAmount: 0,
      remainingAmount: 100000,
      progress: 0,
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">แนะนำสิทธิลดหย่อนภาษี</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-primary/5 p-4 rounded-md border border-primary/10 flex items-start">
            <AlertCircleIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium">ประหยัดภาษีได้อีก 42,500 บาท</h4>
              <p className="text-xs text-muted-foreground mt-1">
                จากการวิเคราะห์รายได้และรายจ่ายของคุณ ระบบแนะนำสิทธิลดหย่อนที่เหมาะสมกับคุณมากที่สุด ซึ่งจะช่วยให้คุณประหยัดภาษีได้มากขึ้น
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {recommendedDeductions.map((deduction) => (
              <div key={deduction.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-3 mt-0.5">
                      <deduction.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{deduction.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {deduction.description}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-7">
                    <PlusIcon className="h-3.5 w-3.5 mr-1" />
                    <span className="text-xs">เพิ่ม</span>
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>ใช้ไปแล้ว: {deduction.currentAmount.toLocaleString()} บาท</span>
                    <span>คงเหลือ: {deduction.remainingAmount.toLocaleString()} บาท</span>
                  </div>
                  <Progress value={deduction.progress} className="h-1.5" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0 บาท</span>
                    <span>{deduction.maxAmount.toLocaleString()} บาท</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-medium mb-3">การคำนวณผลประหยัดภาษี</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">ภาษีที่ต้องจ่าย (ก่อนลดหย่อนเพิ่ม)</span>
                <span className="font-medium">24,320 บาท</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">ภาษีที่ต้องจ่าย (หลังลดหย่อนเพิ่ม)</span>
                <span className="font-medium text-green-600">9,180 บาท</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t mt-2">
                <span className="font-medium">ประหยัดภาษี</span>
                <span className="font-medium text-green-600">15,140 บาท</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxDeductionRecommendation;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const TaxSummary = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">สรุปภาษี</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">ประมาณการภาษีที่ต้องจ่าย</span>
              <span className="text-sm font-medium">฿24,320</span>
            </div>
            <Progress value={65} className="h-2" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">ที่ชำระแล้ว ฿15,808</span>
              <span className="text-xs text-muted-foreground">คงเหลือ ฿8,512</span>
            </div>
          </div>
          
          <div className="pt-2">
            <h4 className="text-sm font-medium mb-2">สิทธิลดหย่อนที่ใช้</h4>
            <ul className="space-y-1.5">
              <li className="flex justify-between text-sm">
                <span className="text-muted-foreground">ค่าลดหย่อนส่วนตัว</span>
                <span>฿60,000</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-muted-foreground">ประกันสังคม</span>
                <span>฿9,000</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-muted-foreground">ประกันชีวิต</span>
                <span>฿25,000</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-muted-foreground">กองทุน SSF</span>
                <span>฿30,000</span>
              </li>
            </ul>
          </div>
          
          <div className="pt-2">
            <h4 className="text-sm font-medium text-primary mb-1">แนะนำสิทธิลดหย่อนเพิ่มเติม</h4>
            <p className="text-xs text-muted-foreground">คุณยังสามารถใช้สิทธิลดหย่อนเพิ่มได้ถึง ฿50,000</p>
            <div className="bg-secondary/50 rounded-md p-3 mt-2">
              <p className="text-xs font-medium">เงินบริจาคสถานศึกษา</p>
              <p className="text-xs text-muted-foreground mt-0.5">ลดหย่อนได้ 2 เท่าของจำนวนที่บริจาค</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxSummary;

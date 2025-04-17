
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "ยื่นภาษีครึ่งปี",
    date: "30 ธ.ค. 2024",
    days: 15,
    priority: "high",
  },
  {
    id: 2,
    title: "กำหนดชำระภาษีรอบสุดท้าย",
    date: "31 มี.ค. 2025",
    days: 106,
    priority: "medium",
  },
];

const TaxCalendar = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">ปฏิทินภาษี</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className={`p-3 rounded-md space-y-1 ${
                event.priority === "high" 
                  ? "bg-red-50 border border-red-100" 
                  : event.priority === "medium"
                  ? "bg-amber-50 border border-amber-100"
                  : "bg-blue-50 border border-blue-100"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">{event.title}</h3>
                <span 
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    event.priority === "high" 
                      ? "bg-red-100 text-red-700" 
                      : event.priority === "medium"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {event.days} วัน
                </span>
              </div>
              <p className="text-xs text-muted-foreground">กำหนด: {event.date}</p>
            </div>
          ))}
          <div className="pt-2">
            <h4 className="text-sm font-medium mb-1">เตรียมตัวสำหรับยื่นภาษี</h4>
            <ul className="text-xs space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="h-4 w-4 mr-2 rounded-full border border-green-500 flex items-center justify-center flex-shrink-0">
                  <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                </span>
                <span>รวบรวมเอกสารหลักฐานรายรับ-รายจ่ายทั้งปี</span>
              </li>
              <li className="flex items-start">
                <span className="h-4 w-4 mr-2 rounded-full border border-gray-300 flex-shrink-0"></span>
                <span>ตรวจสอบค่าลดหย่อนภาษีที่มีสิทธิได้รับ</span>
              </li>
              <li className="flex items-start">
                <span className="h-4 w-4 mr-2 rounded-full border border-gray-300 flex-shrink-0"></span>
                <span>จัดทำแบบฟอร์ม ภ.ง.ด.90/91</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxCalendar;

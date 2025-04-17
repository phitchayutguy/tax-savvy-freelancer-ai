
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TaxDeductionRecommendation from "@/components/tax/TaxDeductionRecommendation";
import TaxFormGenerator from "@/components/tax/TaxFormGenerator";
import TaxEngineCard from "@/components/dashboard/TaxEngineCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, FileTextIcon, TrendingUpIcon } from "lucide-react";

const TaxPlanner = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">วางแผนภาษี</h1>
                <p className="text-muted-foreground">วางแผนและจัดการภาษีอย่างมีประสิทธิภาพ</p>
              </div>
              <Button>
                <FileTextIcon className="h-4 w-4 mr-2" />
                สร้างแบบฟอร์มภาษี
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="col-span-1">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-base font-medium">ปฏิทินภาษี</CardTitle>
                  <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-100 p-3 rounded-md">
                      <h3 className="text-sm font-medium text-red-800">วันยื่นภาษีครึ่งปี</h3>
                      <p className="text-xs text-muted-foreground mt-1">30 ธันวาคม 2024 (15 วัน)</p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="bg-red-100 rounded-full px-2 py-0.5">
                          <span className="text-xs font-medium text-red-800">เร่งด่วน</span>
                        </div>
                        <Button variant="outline" size="sm" className="h-7 text-xs">
                          เพิ่มเตือนความจำ
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-100 p-3 rounded-md">
                      <h3 className="text-sm font-medium text-amber-800">เตรียมเอกสารภาษีประจำปี</h3>
                      <p className="text-xs text-muted-foreground mt-1">เริ่มรวบรวมเอกสารเพื่อยื่นภาษีในเดือนมีนาคม</p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="bg-amber-100 rounded-full px-2 py-0.5">
                          <span className="text-xs font-medium text-amber-800">สำคัญ</span>
                        </div>
                        <Button variant="outline" size="sm" className="h-7 text-xs">
                          ดูคำแนะนำ
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-secondary/30 border p-3 rounded-md">
                      <h3 className="text-sm font-medium">กำหนดชำระภาษีรอบสุดท้าย</h3>
                      <p className="text-xs text-muted-foreground mt-1">31 มีนาคม 2025 (106 วัน)</p>
                    </div>
                    
                    <div className="space-y-2 pt-2">
                      <h4 className="text-sm font-medium">เอกสารที่ต้องเตรียม</h4>
                      <ul className="text-xs space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="h-4 w-4 mr-2 rounded-full border border-green-500 flex items-center justify-center flex-shrink-0">
                            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                          </span>
                          <span>รวบรวมเอกสารหลักฐานรายรับทั้งปี</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-4 w-4 mr-2 rounded-full border border-green-500 flex items-center justify-center flex-shrink-0">
                            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                          </span>
                          <span>รวบรวมเอกสารค่าใช้จ่ายที่เกี่ยวข้องกับการประกอบอาชีพ</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-4 w-4 mr-2 rounded-full border border-gray-300 flex-shrink-0"></span>
                          <span>รวบรวมหลักฐานการลดหย่อนภาษี</span>
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
              
              <div className="col-span-2 space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">สรุปภาษีประจำปี 2024</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="summary">
                      <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="summary">สรุปภาพรวม</TabsTrigger>
                        <TabsTrigger value="quarterly">รายไตรมาส</TabsTrigger>
                      </TabsList>
                      <TabsContent value="summary">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-green-50 border border-green-100 p-4 rounded-md">
                              <div className="flex flex-col">
                                <span className="text-sm text-muted-foreground">รายได้ทั้งหมด</span>
                                <span className="text-xl font-bold text-green-600">468,000 ฿</span>
                                <span className="text-xs text-muted-foreground mt-1">ม.ค. - พ.ย. 2024</span>
                              </div>
                            </div>
                            <div className="bg-amber-50 border border-amber-100 p-4 rounded-md">
                              <div className="flex flex-col">
                                <span className="text-sm text-muted-foreground">ภาษีที่ต้องชำระ</span>
                                <span className="text-xl font-bold text-amber-600">9,180 ฿</span>
                                <span className="text-xs text-muted-foreground mt-1">ประมาณการปี 2024</span>
                              </div>
                            </div>
                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-md">
                              <div className="flex flex-col">
                                <span className="text-sm text-muted-foreground">ประหยัดภาษีได้</span>
                                <span className="text-xl font-bold text-blue-600">15,140 ฿</span>
                                <span className="text-xs text-muted-foreground mt-1">จากสิทธิลดหย่อน</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-secondary/30 p-4 rounded-md border">
                            <div className="flex items-start">
                              <TrendingUpIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="text-sm font-medium">แผนภาษีของคุณอยู่ในเกณฑ์ดี</h4>
                                <p className="text-xs text-muted-foreground mt-1">
                                  คุณได้ใช้สิทธิลดหย่อนภาษีไปแล้ว 62% และยังสามารถประหยัดภาษีได้อีกประมาณ 15,140 บาท หากใช้สิทธิลดหย่อนที่แนะนำเพิ่มเติม
                                </p>
                              </div>
                            </div>
                          </div>

                          <TaxEngineCard />
                        </div>
                      </TabsContent>
                      <TabsContent value="quarterly">
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="border rounded-md p-4">
                              <h3 className="text-sm font-medium mb-2">ไตรมาสที่ 1 (ม.ค. - มี.ค.)</h3>
                              <div className="space-y-1.5 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">รายได้</span>
                                  <span className="font-medium">115,000 ฿</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">ค่าใช้จ่าย</span>
                                  <span className="font-medium">40,250 ฿</span>
                                </div>
                                <div className="flex justify-between pt-1 mt-1 border-t">
                                  <span className="font-medium">ภาษีที่ประมาณการ</span>
                                  <span className="font-medium">2,250 ฿</span>
                                </div>
                              </div>
                            </div>
                            <div className="border rounded-md p-4">
                              <h3 className="text-sm font-medium mb-2">ไตรมาสที่ 2 (เม.ย. - มิ.ย.)</h3>
                              <div className="space-y-1.5 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">รายได้</span>
                                  <span className="font-medium">122,000 ฿</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">ค่าใช้จ่าย</span>
                                  <span className="font-medium">42,700 ฿</span>
                                </div>
                                <div className="flex justify-between pt-1 mt-1 border-t">
                                  <span className="font-medium">ภาษีที่ประมาณการ</span>
                                  <span className="font-medium">2,380 ฿</span>
                                </div>
                              </div>
                            </div>
                            <div className="border rounded-md p-4">
                              <h3 className="text-sm font-medium mb-2">ไตรมาสที่ 3 (ก.ค. - ก.ย.)</h3>
                              <div className="space-y-1.5 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">รายได้</span>
                                  <span className="font-medium">131,000 ฿</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">ค่าใช้จ่าย</span>
                                  <span className="font-medium">45,850 ฿</span>
                                </div>
                                <div className="flex justify-between pt-1 mt-1 border-t">
                                  <span className="font-medium">ภาษีที่ประมาณการ</span>
                                  <span className="font-medium">2,550 ฿</span>
                                </div>
                              </div>
                            </div>
                            <div className="border rounded-md p-4">
                              <h3 className="text-sm font-medium mb-2">ไตรมาสที่ 4 (ต.ค. - ธ.ค.)</h3>
                              <div className="space-y-1.5 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">รายได้</span>
                                  <span className="font-medium">100,000 ฿</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">ค่าใช้จ่าย</span>
                                  <span className="font-medium">36,000 ฿</span>
                                </div>
                                <div className="flex justify-between pt-1 mt-1 border-t">
                                  <span className="font-medium">ภาษีที่ประมาณการ</span>
                                  <span className="font-medium">2,000 ฿</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border rounded-md p-4">
                            <h3 className="text-sm font-medium mb-2">ภาษีครึ่งปี</h3>
                            <div className="space-y-1.5 text-xs">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">รายได้ (ม.ค. - มิ.ย.)</span>
                                <span className="font-medium">237,000 ฿</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">ค่าใช้จ่าย (ม.ค. - มิ.ย.)</span>
                                <span className="font-medium">82,950 ฿</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">เงินได้สุทธิ</span>
                                <span className="font-medium">154,050 ฿</span>
                              </div>
                              <div className="flex justify-between pt-1 mt-1 border-t">
                                <span className="font-medium">ภาษีที่ต้องชำระครึ่งปี</span>
                                <span className="font-medium text-amber-600">202 ฿</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-xs text-muted-foreground">(ชำระภายใน 30 ธ.ค. 2024)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TaxDeductionRecommendation />
              <TaxFormGenerator />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TaxPlanner;


import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircleIcon, FileTextIcon, ScanIcon, UploadCloudIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OcrUpload = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">อัปโหลดเอกสาร</CardTitle>
        <CardDescription>
          อัปโหลดใบเสร็จหรือเอกสารภาษีเพื่อให้ระบบสแกนและบันทึกข้อมูลโดยอัตโนมัติ
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upload">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="upload">อัปโหลดเอกสาร</TabsTrigger>
            <TabsTrigger value="history">ประวัติ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload" className="space-y-4">
            <div className="flex flex-col items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-secondary/50 hover:bg-secondary"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadCloudIcon className="w-10 h-10 mb-3 text-muted-foreground" />
                  <p className="mb-2 text-sm text-center text-muted-foreground">
                    <span className="font-semibold">คลิกเพื่ออัปโหลดไฟล์</span> หรือลากและวาง
                  </p>
                  <p className="text-xs text-center text-muted-foreground">
                    รองรับไฟล์ PDF, JPG, PNG (สูงสุด 10MB ต่อไฟล์)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">ประเภทเอกสารที่รองรับ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center p-3 border rounded-md">
                  <div className="mr-3 bg-blue-100 rounded-full p-2">
                    <FileTextIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">ใบเสร็จรับเงิน</p>
                    <p className="text-xs text-muted-foreground">ร้านค้า, บริการออนไลน์</p>
                  </div>
                </div>
                <div className="flex items-center p-3 border rounded-md">
                  <div className="mr-3 bg-blue-100 rounded-full p-2">
                    <FileTextIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">ใบกำกับภาษี</p>
                    <p className="text-xs text-muted-foreground">ใบกำกับภาษีแบบเต็มและแบบย่อ</p>
                  </div>
                </div>
                <div className="flex items-center p-3 border rounded-md">
                  <div className="mr-3 bg-blue-100 rounded-full p-2">
                    <FileTextIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">ใบแจ้งหนี้</p>
                    <p className="text-xs text-muted-foreground">เอกสารที่ขอเก็บเงิน</p>
                  </div>
                </div>
                <div className="flex items-center p-3 border rounded-md">
                  <div className="mr-3 bg-blue-100 rounded-full p-2">
                    <FileTextIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">สลิปการโอนเงิน</p>
                    <p className="text-xs text-muted-foreground">หลักฐานการรับเงิน</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-4 rounded-md border flex items-start">
              <AlertCircleIcon className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium">เพิ่มความแม่นยำในการสแกน</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  เพื่อให้ระบบสแกนข้อมูลได้แม่นยำมากขึ้น กรุณาถ่ายภาพใบเสร็จให้ชัดเจน ไม่มีเงา และครบถ้วน อัปโหลดเอกสารที่มีคุณภาพสูงเพียงพอให้อ่านตัวอักษรได้
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-sm font-medium">ใบเสร็จค่าซอฟต์แวร์ Adobe.pdf</h3>
                    <p className="text-xs text-muted-foreground">อัปโหลดเมื่อ 12 พ.ย. 2024, 15:42</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    สำเร็จ
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ScanIcon className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-xs text-muted-foreground">ค่าใช้จ่าย: ซอฟต์แวร์ - 6,520 บาท</span>
                  </div>
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    ดูข้อมูล
                  </Button>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-sm font-medium">ใบแจ้งหนี้งานออกแบบเว็บไซต์.jpg</h3>
                    <p className="text-xs text-muted-foreground">อัปโหลดเมื่อ 5 พ.ย. 2024, 10:15</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    สำเร็จ
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ScanIcon className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-xs text-muted-foreground">รายได้: งานออกแบบ - 35,000 บาท</span>
                  </div>
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    ดูข้อมูล
                  </Button>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-sm font-medium">ใบกำกับภาษี_ร้านอาหาร.jpg</h3>
                    <p className="text-xs text-muted-foreground">อัปโหลดเมื่อ 1 พ.ย. 2024, 18:30</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    ตรวจสอบ
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ScanIcon className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-xs text-muted-foreground">กำลังประมวลผล...</span>
                  </div>
                  <Progress value={65} className="h-1.5" />
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">กำลังวิเคราะห์ข้อมูล</span>
                    <span className="text-xs text-muted-foreground">65%</span>
                  </div>
                </div>
              </div>
              
              <Button variant="ghost" className="w-full text-xs text-muted-foreground">
                แสดงประวัติทั้งหมด
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default OcrUpload;

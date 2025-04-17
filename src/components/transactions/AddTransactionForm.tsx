
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, CheckIcon, PlusCircleIcon, UploadIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const AddTransactionForm = () => {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">บันทึกรายการใหม่</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="income" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="income">รายรับ</TabsTrigger>
            <TabsTrigger value="expense">รายจ่าย</TabsTrigger>
          </TabsList>
          <TabsContent value="income">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="income-description">รายละเอียด</Label>
                <Input id="income-description" placeholder="เช่น รับงานออกแบบเว็บไซต์" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="income-amount">จำนวนเงิน (บาท)</Label>
                <Input id="income-amount" type="number" placeholder="0.00" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="income-category">ประเภทรายรับ</Label>
                <Select>
                  <SelectTrigger id="income-category">
                    <SelectValue placeholder="เลือกประเภทรายรับ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="freelance">งานฟรีแลนซ์</SelectItem>
                    <SelectItem value="consulting">งานที่ปรึกษา</SelectItem>
                    <SelectItem value="design">งานออกแบบ</SelectItem>
                    <SelectItem value="development">งานพัฒนาซอฟต์แวร์</SelectItem>
                    <SelectItem value="content">งานเขียนคอนเทนต์</SelectItem>
                    <SelectItem value="other">อื่นๆ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>วันที่</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "dd MMMM yyyy") : <span>เลือกวันที่</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(date) => date && setDate(date)}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="income-note">บันทึกเพิ่มเติม (ไม่บังคับ)</Label>
                <Textarea id="income-note" placeholder="รายละเอียดเพิ่มเติม..." />
              </div>

              <div className="space-y-2">
                <Label>แนบเอกสาร (ใบแจ้งหนี้, สัญญา, ฯลฯ)</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="income-attachment"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-secondary"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadIcon className="w-8 h-8 mb-2 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">คลิกเพื่ออัปโหลดไฟล์</span> หรือลากและวาง
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, JPG หรือ PNG (สูงสุด 10MB)
                      </p>
                    </div>
                    <input id="income-attachment" type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full">
                <PlusCircleIcon className="mr-2 h-4 w-4" />
                บันทึกรายรับ
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="expense">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="expense-description">รายละเอียด</Label>
                <Input id="expense-description" placeholder="เช่น ค่าโฮสติ้ง, อุปกรณ์สำนักงาน" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expense-amount">จำนวนเงิน (บาท)</Label>
                <Input id="expense-amount" type="number" placeholder="0.00" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expense-category">ประเภทรายจ่าย</Label>
                <Select>
                  <SelectTrigger id="expense-category">
                    <SelectValue placeholder="เลือกประเภทรายจ่าย" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="equipment">อุปกรณ์/เครื่องใช้</SelectItem>
                    <SelectItem value="software">ซอฟต์แวร์/บริการออนไลน์</SelectItem>
                    <SelectItem value="office">ค่าเช่าสำนักงาน</SelectItem>
                    <SelectItem value="utilities">ค่าสาธารณูปโภค</SelectItem>
                    <SelectItem value="travel">ค่าเดินทาง</SelectItem>
                    <SelectItem value="education">การศึกษา/อบรม</SelectItem>
                    <SelectItem value="tax">ภาษี/ประกันสังคม</SelectItem>
                    <SelectItem value="other">อื่นๆ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>วันที่</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "dd MMMM yyyy") : <span>เลือกวันที่</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(date) => date && setDate(date)}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="tax-deductible">สามารถหักภาษีได้</Label>
                  <input type="checkbox" id="tax-deductible" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                </div>
                <p className="text-xs text-muted-foreground">เลือกตัวเลือกนี้หากรายจ่ายนี้สามารถนำไปลดหย่อนภาษีได้</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expense-note">บันทึกเพิ่มเติม (ไม่บังคับ)</Label>
                <Textarea id="expense-note" placeholder="รายละเอียดเพิ่มเติม..." />
              </div>

              <div className="space-y-2">
                <Label>แนบใบเสร็จ</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="expense-receipt"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-secondary"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadIcon className="w-8 h-8 mb-2 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">คลิกเพื่ออัปโหลดใบเสร็จ</span> หรือลากและวาง
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, JPG หรือ PNG (สูงสุด 10MB)
                      </p>
                    </div>
                    <input id="expense-receipt" type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full">
                <PlusCircleIcon className="mr-2 h-4 w-4" />
                บันทึกรายจ่าย
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AddTransactionForm;

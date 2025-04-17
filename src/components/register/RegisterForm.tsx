
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const RegisterForm = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">สมัครสมาชิก</CardTitle>
        <CardDescription>
          สร้างบัญชีเพื่อเริ่มใช้งานระบบจัดการภาษีสำหรับฟรีแลนซ์
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">ชื่อ-นามสกุล</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <UserIcon className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input id="name" placeholder="ชื่อ นามสกุล" className="pl-10" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">อีเมล</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MailIcon className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input id="email" placeholder="your.email@example.com" type="email" className="pl-10" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">รหัสผ่าน</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <LockIcon className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input id="password" type="password" className="pl-10" />
          </div>
          <p className="text-xs text-muted-foreground">
            รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร ประกอบด้วยตัวอักษรพิมพ์ใหญ่ พิมพ์เล็ก และตัวเลข
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">ยืนยันรหัสผ่าน</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <LockIcon className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input id="confirm-password" type="password" className="pl-10" />
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox id="terms" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              ยอมรับเงื่อนไขการใช้งานและนโยบายความเป็นส่วนตัว
            </label>
            <p className="text-xs text-muted-foreground">
              ฉันยอมรับ{" "}
              <a href="#" className="text-primary hover:underline">
                เงื่อนไขการใช้งาน
              </a>{" "}
              และ{" "}
              <a href="#" className="text-primary hover:underline">
                นโยบายความเป็นส่วนตัว
              </a>
            </p>
          </div>
        </div>
        <Button className="w-full">สมัครสมาชิก</Button>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">หรือสมัครด้วย</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline">Google</Button>
          <Button variant="outline">Facebook</Button>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          มีบัญชีอยู่แล้ว?{" "}
          <a href="#" className="text-primary hover:underline">
            เข้าสู่ระบบ
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;

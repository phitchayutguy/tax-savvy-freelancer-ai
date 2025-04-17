
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LockIcon, MailIcon } from "lucide-react";

const LoginForm = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">เข้าสู่ระบบ</CardTitle>
        <CardDescription>
          กรอกอีเมลและรหัสผ่านเพื่อเข้าใช้งานระบบจัดการภาษีฟรีแลนซ์
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
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
          <div className="flex items-center justify-between">
            <Label htmlFor="password">รหัสผ่าน</Label>
            <a href="#" className="text-xs text-primary hover:underline">
              ลืมรหัสผ่าน?
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <LockIcon className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input id="password" type="password" className="pl-10" />
          </div>
        </div>
        <Button className="w-full">เข้าสู่ระบบ</Button>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">หรือเข้าสู่ระบบด้วย</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline">Google</Button>
          <Button variant="outline">Facebook</Button>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          ยังไม่มีบัญชี?{" "}
          <a href="#" className="text-primary hover:underline">
            สมัครสมาชิก
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;

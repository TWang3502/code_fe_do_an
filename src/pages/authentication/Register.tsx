import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { GoogleButton } from "@/components/authentication";
export default function Register() {
  return (
    <div className="flex flex-row w-[1100px] h-[670px] px-20 py-10">
      <div className="basis-1/2 flex flex-col pr-10 gap-6">
        <div className="text-3xl font-semibold text-center">Đăng ký tài khoản</div>
        <div className="flex flex-col gap-5">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="">Họ và tên</Label>
            <Input
              type="text"
              id="name"
              placeholder="Nhập họ và tên"
              className="bg-[#f3f4f6]"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Nhập email"
              className="bg-[#f3f4f6]"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="">Mật khẩu</Label>
            <Input
              type="password"
              id="password"
              placeholder="Tối thiểu 8 ký tự"
              className="bg-[#f3f4f6]"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="">Nhập lại mật khẩu</Label>
            <Input
              type="password"
              id="repassword"
              placeholder="Nhập lại mật khẩu"
              className="bg-[#f3f4f6]"
            />
          </div>
          <div className="flex items-center space-x-2 pr-4">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <span>Tôi đồng ý với các <strong>điều khoản sử dụng</strong> và <strong>chính sách bảo mật</strong> của website</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Button className="w-full bg-[#70be58] shadow-md">Đăng ký</Button>
          <div className="text-center">Hoặc</div>
          <GoogleButton/>
        </div>
      </div>
      <div className="basis-1/2 bg-green-600 rounded-xl"></div>
    </div>
  )
}

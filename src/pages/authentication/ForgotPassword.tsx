import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/layout/Logo";
import { Label } from "@radix-ui/react-label";
import { MdOutlineMail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="flex justify-center pt-28">
      <div className=" flex flex-col gap-16 px-40 pt-20 w-[800px] h-[700px] border border-[#7d9c64]">
        <Logo />
        <div>
          <div className="font-semibold text-2xl">Quên mật khẩu?</div>
          <div className="flex flex-col gap-10">
            <div> Nhập email của bạn và chúng tôi sẽ gửi bạn mã xác nhận. </div>
            <div className=" grid w-full items-center gap-1.5">
              <Label className="font-semibold" htmlFor="email">
                Email
              </Label>
              <div className="flex gap-3">
                <MdOutlineMail size={36} />
                <Input
                  type="email"
                  id="email"
                  placeholder="Vui lòng nhập email của bạn"
                />
              </div>
            </div>
          </div>
          <Link to={"/getAuthenticationCode"}>
            <Button className="w-full mt-5">Gửi mã xác nhận</Button>
          </Link>

          <div className="text-center mt-32">
            <NavLink className={"w-fit"} to={"/"}>
              Quay lại trang chủ
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/layout/Logo";
import { Label } from "@radix-ui/react-label";
import { Link, NavLink } from "react-router-dom";

export default function GetNewPassword() {
  return (
    <div className="flex justify-center pt-28">
      <div className=" flex flex-col gap-16 px-40 pt-20 w-[800px] h-[700px] border-[#7d9c64]">
        <Logo />
        <div>
          <div className="font-semibold text-2xl">Mật khẩu mới</div>
          <div className="flex flex-col gap-10">
            <div> Mật khẩu của bạn phải ít nhất 8 ký tự </div>
            <div className=" grid w-full items-center gap-1.5">
              <Label className="font-semibold" htmlFor="email">
                Mã xác thực
              </Label>
              <div className="flex gap-3">
                <Input
                  type="email"
                  id="email"
                  placeholder="Vui lòng nhập mã xác thực"
                />
              </div>
            </div>
          </div>
          <Link to={"/getNewPassword"}>
            <Button className="w-full mt-5">Xác nhận</Button>
          </Link>
          <div className="flex pt-5">
            <div className="basis-1/2">Chưa nhận được mã?</div>
            <div className="basis-1/2 text-right text-black">
              Gửi lại mã xác thực
            </div>
          </div>
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

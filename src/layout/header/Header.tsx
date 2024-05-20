import LoginButton from "./LoginButton";
import Logo from "../Logo";
import { Nav } from "./Nav";
import { UserDropDown } from "./UserDropDown";

export default function Header() {
  const isLogin = false;
  return (
    <div className="w-full h-28">
      <div className="container flex justify-between h-full items-center">
        <Logo />
        <div className="flex gap-7">
          <Nav />
          {isLogin ? <UserDropDown /> : <LoginButton />}
        </div>
      </div>
    </div>
  );
}

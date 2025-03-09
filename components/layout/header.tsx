import Logo from "@/components/layout/logo";
import User from "@/components/ui/user";
import Line from "@/components/ui/line";

export default function Header() {
  return (
    <header className="">
      <div className="w-11/12 mx-auto flex justify-between items-center lg:py-4 py-2">
        <Logo />
        <User/>
      </div>
      <Line className="h-[1px] w-screen"/>
    </header>
  );
}

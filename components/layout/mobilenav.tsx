import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChartNoAxesColumn, File, Award, X } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const genericHamburgerLine = `h-[3px] w-8 my-1 rounded-full bg-black transition ease transform duration-300`;

  const handleLinkClick = () => {
    setOpen(false);
  };

  const navLinks = [
    {
      name: "Dashboard",
      icon: <ChartNoAxesColumn size={18} />,
      href: "/dashboard",
      isActive: pathname === "/dashboard",
    },
    {
      name: "Skill Test",
      icon: <Award size={18} />,
      href: "/",
      isActive: pathname === "/",
    },
    {
      name: "Internship",
      icon: <File size={18} />,
      href: "/internship",
      isActive: pathname === "/internship",
    },
  ];

  return (
    <div>
      <button
        aria-label="Toggle navigation"
        className="flex flex-col items-center justify-center w-12 h-8 group"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "translate-y-3 rotate-45 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open ? "opacity-0" : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "-translate-y-3 -rotate-45 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
      </button>

      <section className={open ? "" : "hidden"}>
        <div className="fixed inset-0 z-50 w-screen h-screen bg-black bg-opacity-50">
          <div className="relative w-7/12 h-full pt-20 bg-white">
            <button
              onClick={handleLinkClick}
              className="absolute top-3 right-3"
            >
              <X size={36} />
            </button>
            {navLinks.map(({ name, icon, href, isActive }) => (
              <div
                key={name}
                onClick={handleLinkClick}
                className={cn(
                  "text-gray-500 transition-all duration-150 ease-in-out font-semibold w-[90%] mb-5",
                  isActive ? "rounded-r-full py-4 text-blue-500 bg-blue-50" : ""
                )}
              >
                <div className="flex items-center gap-2 pl-4">
                  <div>{icon}</div>

                  <Link href={href}>
                    <span>{name}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

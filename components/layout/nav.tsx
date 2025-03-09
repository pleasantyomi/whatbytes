"use client";

import { usePathname } from "next/navigation";
import { ChartNoAxesColumn, File, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();

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
    <section className="md:block hidden w-full h-full border-r-[1px] border-gray-300">
      <div className="pt-16 grid gap-8">
        {navLinks.map(({ name, icon, href, isActive }) => (
          <div
            key={name}
            className={cn(
              "text-gray-500 transition-all duration-150 ease-in-out font-semibold w-[90%]",
              isActive ? "rounded-r-full py-4 text-blue-500 bg-blue-50" : ""
            )}
          >
            <div className="pl-4 flex items-center gap-2">
              <div>{icon}</div>

              <Link href={href}>
                <span>{name}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

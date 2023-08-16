import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// assets
import SideBarIcon from "@/assets/SideBarIcon";

// utils
import cn from "@/utils/cn";

function SideBar() {
  const router = useRouter();

  return (
    <div className="flex flex-col shrink-0 items-start bg-[#fafafa] py-3 md:max-w-[13rem] md:max-h-[27rem] h-full w-full pl-4">
      <div className="flex items-center justify-center space-x-2">
        <SideBarIcon />
        <Link
          href="/"
          className={cn("font-normal", {
            "font-bold": router.pathname == "/",
          })}
        >
          Profile
        </Link>
      </div>

      {/* <div className="flex items-center justify-center space-x-2 mt-6">
        <SideBarIcon />
        <Link href="/socials" className={cn("font-normal", {
          "font-bold": router.pathname == "/socials"
        })}>Socials</Link>
      </div> */}

      <div className="flex items-center justify-center space-x-2 mt-6">
        <SideBarIcon />
        <Link href="/portfolio" className={cn("font-normal", {
          "font-bold": router.pathname == "/portfolio"
        })}>Portfolio</Link>
      </div>

      <div className="flex items-center justify-center space-x-2 mt-6">
        <SideBarIcon />
        <Link href="/resume" className={cn("font-normal", {
          "font-bold": router.pathname == "/resume"
        })}>Resume</Link>
      </div>
    </div>
  );
}

export default SideBar;

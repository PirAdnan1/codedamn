import React,{useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// assets
import SideBarIcon from "@/assets/SideBarIcon";

// utils
import cn from "@/utils/cn";

function SideBar() {
  const router = useRouter();

  const [svgColor, setSvgColor] = useState('currentColor');


  const handleColorChange = (color) => {
    setSvgColor(color);
  };



  return (
    <div className="flex flex-col items-start bg-[#fafafa] py-3 max-w-[13rem] max-h-[27rem] h-full w-full pl-4">
      <div className="flex text-gray-400 items-center justify-center space-x-2" onClick={() => handleColorChange('black')}>
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

      <div className="flex items-center justify-center space-x-2 mt-6">
        <SideBarIcon />
        <Link href="/socials" className={cn("font-normal", {
          "font-bold": router.pathname == "/socials"
        })}>Socials</Link>
      </div>

      <div className="flex items-center justify-center space-x-2 mt-6">
        <SideBarIcon />
        <Link href="#">Portfolio</Link>
      </div>

      <div className="flex items-center justify-center space-x-2 mt-6">
        <SideBarIcon />
        <Link href="#">Resume</Link>
      </div>
    </div>
  );
}

export default SideBar;

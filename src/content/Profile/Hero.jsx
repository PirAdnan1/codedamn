import React from "react";
import Image from "next/image";

// assets
import ProfileImage from "@/assets/Profile.png";

// components
import ProfileForm from "./ProfileForm";
function Hero() {
  return (
    <div className="flex flex-col max-w-[628px]">
      <div className="flex items-center space-x-6">
        <Image src={ProfileImage} />
        <span className="bg-[#4f46e5] text-white rounded-lg px-3 py-2 cursor-pointer">Upload new picture</span>
        <span className="bg-[#f4f4f5] px-3 py-3 rounded-lg font-semibold cursor-pointer">Delete</span>
      </div>
      <ProfileForm />
    </div>
  );
}

export default Hero;

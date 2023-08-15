import React from "react";
import Image from "next/image";

// components
import Container from "./Container";
import BellNotification from "@/content/Profile/BellNotification";
// assets
import Vector from "@/assets/Vector";
import Bell from "@/assets/Bell";
import ProfileImage from "@/assets/Profile.png";
function Navigation() {
  return (
    <Container>
      <nav className="flex justify-between items-center mx-12 mt-3">
        <span className="text-xl font-bold">codedamn</span>
        <div className="flex items-center space-x-">
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 relative border px-2 py-2 rounded-md mr-14 w-[25rem]">
              <input
                type="text"
                placeholder="Search"
                className="border-none outline-none"
              />
              <select
                data-te-select-init
                data-te-select-placeholder="Courses"
                className="absolute outline-none focus:outline-none right-1 bg-[#f4f4f5] rounded-md py-1"
              >
                <optgroup className="text-gray-600">
                  <option value="1">Courses</option>
                  <option value="2">ReactJs</option>
                  <option value="3">NextJs</option>
                  <option value="4">ThreeJs</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <Vector />
              <span className="font-bold text-gray-600">2</span>
            </div>
            <div className="relative cursor-pointer">
              <Bell />
              <div className="absolute -top-3 left-2">
                <BellNotification value={1} />
              </div>
            </div>
            <div>
              <Image src={ProfileImage} />
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Navigation;

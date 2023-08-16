import React from "react";
import Image from "next/image";

// assets
import HTML5 from "@/assets/HTML5";
import Contributor1 from "@/assets/contributor1.png";
import Contributor2 from "@/assets/contributor2.png";
function Card() {
  return (
    <div className="bg-[#fafafa] px-3 cursor-pointer py-1 rounded-lg  shrink-0">
      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center space-x-2">
          <HTML5 />
          <span className="font-bold">Playground title</span>
        </div>
        <div class="flex items-center">
          <input
            checked
            id="default-radio"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </div>
      <div className="ml-12">
        <p className="text-gray-400 text-xs mt-1">
          HTML5/CSS3 <span className="bg-gray-400 w-5 h-5"></span>{" "}
          <span>1 min ago</span>
        </p>
        <div className="flex items-center space-x-2 mt-2 max-w-[14rem]">
          <div className="flex">
            <Image src={Contributor1} />
            <Image src={Contributor2} />
          </div>
          <p className="text-xs">
            Shared with <span className="font-bold">Adam, Amna </span>..+7 more
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";

import cn from "@/utils/cn";
function BellNotification({ value, ...rest }) {
  return <div className={cn(`bg-[#ec4899] w-5 h-5 text-white flex justify-center items-center rounded-full`)} {...rest}>{value}</div>;
}

export default BellNotification;

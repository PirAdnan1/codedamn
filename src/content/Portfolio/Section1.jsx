import React from "react";

// components
import Card from "./Card";

function Section1() {
  return (
    <div className="max-w-[636px] w-full shrink-0">
      <h3 className="font-bold text-2xl">Playgrounds</h3>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card />
        <Card />

        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Section1;

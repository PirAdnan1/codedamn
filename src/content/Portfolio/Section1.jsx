import React from "react";

// components
import Card from "./Card";

function Section1() {
  return (
    <div>
      <h3 className="font-bold text-2xl">Playgrounds</h3>
      <div>
        <div className="flex space-x-10">
          <Card />
          <Card />
        </div>
        <div className="flex space-x-10">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Section1;

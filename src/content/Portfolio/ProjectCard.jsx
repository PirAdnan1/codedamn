import React,{useState} from "react";
import Image from "next/image";

// assets
import contributor1 from "@/assets/contributor1.png";
import contributor2 from "@/assets/contributor2.png";

function ProjectCard({ imageSrc, heading, intro }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
      };

      const cardStyle = {
        border: isClicked ? '2px solid blue' : '2px solid white',
        backgroundColor: isClicked ? '#eef2ff' : '#fafafa',
        padding: '10px',
        borderRadius: '5px',
      }


  return (
    <div className="bg-[#fafafa] py-4 px-2 rounded-lg shrink-0 cursor-pointer mx-auto" style={cardStyle} onClick={handleClick}>
      <Image className="mx-auto md:mx-0" src={imageSrc} />
      <h3 className="font-semibold text-lg mt-2 ">{heading}</h3>
      <p className="text-gray-500 text-xs mt-1">{intro}</p>
      <div className="flex items-center space-x-2">
        <div className="flex mt-2">
          <Image src={contributor1} />
          <Image src={contributor2} />
        </div>
        <p className="text-gray-500 text-xs mt-2">3 contributors</p>
      </div>
    </div>
  );
}

export default ProjectCard;

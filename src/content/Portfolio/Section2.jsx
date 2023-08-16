import React from "react";

// components
import ProjectCard from "./ProjectCard";

// assets
import ProjectManager from "@/assets/ProjectManager.png";
import ProjectBanner from "@/assets/ProjectBanner.png";

function Section2() {
  return (
    <div className="mt-12">
      <h1 className="font-bold text-2xl">Projects</h1>
      <div className="grid lg:grid-cols-2 mt-4 gap-6">
        <div>
          <div>
            <ProjectCard
              imageSrc={ProjectManager}
              heading={"Personal Portfolio Website"}
              intro={"HTML/CSS Javascript 1 min"}
            />
          </div>
        </div>

        <div>
          <ProjectCard
            imageSrc={ProjectBanner}
            heading={"Personal Portfolio Website"}
            intro={"HTML/CSS Javascript 1 min"}
          />
        </div>

        <div>
          <ProjectCard
            imageSrc={ProjectBanner}
            heading={"Personal Portfolio Website"}
            intro={"HTML/CSS Javascript 1 min"}
          />
        </div>

        <div>
          <ProjectCard
            imageSrc={ProjectBanner}
            heading={"Personal Portfolio Website"}
            intro={"HTML/CSS Javascript 1 min"}
          />
        </div>
      </div>
      <div className="flex justify-end space-x-4 my-6">
        <button className="bg-[#f4f4f5] px-2 py-2 font-semibold rounded-lg">Cancel</button>
        <button className="bg-[#4f46e5] px-2 py-2 font-semibold rounded-lg text-white">Save Changes</button>
      </div>
    </div>
  );
}

export default Section2;

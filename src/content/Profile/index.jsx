import React from "react";

// components
import Navigation from "@/components/Navigation";
import SideBar from "./SideBar";
import Hero from "./Hero";
import Container from "@/components/Container";

function ProfileMain() {
  return (
    <div>
      <Navigation />
      <Container>
      <div className="flex flex-col md:flex-row md:space-x-28 md:mx-12 mx-6 mt-28">
        <SideBar />
        <Hero />
      </div>
      </Container>
    </div>
  );
}

export default ProfileMain;

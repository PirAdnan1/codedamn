import React from "react";

// components
import Navigation from "@/components/Navigation";
import SideBar from "@/content/Profile/SideBar";
import Container from "@/components/Container";

function Layout({ children }) {
  return (
    <div className="md:mx-36 mx:4">
      <Navigation />
      <Container>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-20 space-x-4 mt-16 max-w-[628px] w-full">
          <SideBar />
          <div className="mx-4 md:mx-0">{children}</div>
        </div>
      </Container>
    </div>
  );
}

export default Layout;

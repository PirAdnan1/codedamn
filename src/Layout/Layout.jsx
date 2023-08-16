import React from "react";

// components
import Navigation from "@/components/Navigation";
import SideBar from "@/content/Profile/SideBar";
import Container from "@/components/Container";

function Layout({ children }) {
  return (
    <div className="mx-36">
      <Navigation />
      <Container>
        <div className="flex flex-col md:flex-row space-x-20 mt-16 max-w-[628px] w-full">
          <SideBar />
          <div className="w-[888px]">{children}</div>
        </div>
      </Container>
    </div>
  );
}

export default Layout;

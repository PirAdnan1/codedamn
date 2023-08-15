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
        <div className="flex space-x-20 mt-16">
          <SideBar />
          <main>{children}</main>
        </div>
      </Container>
    </div>
  );
}

export default Layout;

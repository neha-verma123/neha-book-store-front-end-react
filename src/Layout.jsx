import React from "react";
import Topbar from "./components/topbar/Topbar";

function MainLayout({ children }) {
  return (
    <div className="main_wrap">
      <Topbar />
      <div>{children}</div>
    </div>
  );
}

export default MainLayout;

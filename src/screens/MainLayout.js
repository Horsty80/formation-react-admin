import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";
import useToggleNavigation from "../hooks/useToggleNavigation";

const MainLayout = () => {
  const { isToggle } = useToggleNavigation();
  const activeStyle = isToggle
    ? "left-[80px] w-[calc(100%-80px)]"
    : "left-[300px] w-[calc(100%-300px)]";
  return (
    <div>
      <Navigation />
      <div
        className={`${activeStyle} absolute min-h-[100vh] bg-white transition-all duration-500`}
      >
        <div className="sticky top-0 bg-white">
          <TopBar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

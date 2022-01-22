import React, { useState } from "react";
import logo from "../logo.svg";
import {
  ChatIcon,
  CogIcon,
  HomeIcon,
  LockClosedIcon,
  LogoutIcon,
  SupportIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import NavItem from "./NavItem";
import useToggleNavigation from "../hooks/useToggleNavigation";

const navItems = [
  { icon: HomeIcon, title: "Dashboard", uri: "/" },
  { icon: UserGroupIcon, title: "Customers", uri: "/customers" },
  { icon: ChatIcon, title: "Messages", uri: "/messages" },
  { icon: SupportIcon, title: "Help", uri: "/help" },
  { icon: CogIcon, title: "Settings", uri: "/settings" },
  { icon: LockClosedIcon, title: "Password", uri: "/password" },
];

function Navigation() {
  const [currentPath] = useState(window.location.pathname);

  const { isToggle } = useToggleNavigation();
  const activeStyle = isToggle ? "w-[80px]" : "w-[300px]";
  return (
    <div
      data-testid="navigation"
      className={`${activeStyle} fixed h-full bg-primary border-l-[10px] border-l-primary transition-all duration-500 overflow-hidden`}
    >
      <ul className="absolute top-0 left-0 w-full">
        <li className="navItem mb-10 pointer-events-none">
          <a className="navLink" href="#">
            <span className="navIcon mt-4 mr-4">
              <img
                src={logo}
                className="h-full w-full bg-white px-3 rounded-[30px]"
                alt="logo"
                data-testid="app-logo"
              />
            </span>
          </a>
        </li>
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            Icon={navItem.icon}
            title={navItem.title}
            uri={navItem.uri}
            isActive={currentPath === navItem.uri}
          />
        ))}
        <li className="navItem">
          <button
            className={`navLink curverOutside`}
            onClick={() => alert("Bye bye")}
          >
            <span className="navIcon">
              <LogoutIcon className="navSvg" data-testid="svg" />
            </span>
            <span className="navTitle">Signout</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

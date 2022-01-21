import React from "react";
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

const navItems = [
  { icon: HomeIcon, title: "Dashboard" },
  { icon: UserGroupIcon, title: "Customers" },
  { icon: ChatIcon, title: "Messages" },
  { icon: SupportIcon, title: "Help" },
  { icon: CogIcon, title: "Settings" },
  { icon: LockClosedIcon, title: "Password" },
  { icon: LogoutIcon, title: "Signout" },
];

function Navigation() {
  return (
    <div className="fixed w-[300px] h-full bg-primary border-l-[10px] border-l-primary transition-all duration-500 overflow-hidden">
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
          <NavItem key={index} Icon={navItem.icon} title={navItem.title} />
        ))}
      </ul>
    </div>
  );
}

export default Navigation;

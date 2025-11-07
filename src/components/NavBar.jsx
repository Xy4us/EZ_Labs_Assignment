import React from "react";
import logo from "../assets/VFilmsLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import menuIcon from "../assets/menu.png";
import openIcon from "../assets/MenuOpen.png";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      name: "Services",
      path: "/",
    },
    {
      name: "Their Stories",
      path: "/",
    },
    {
      name: "Our Story",
      path: "/",
    },
    {
      name: "Varnan",
      path: "/",
    },
    {
      name: "Let's Talk",
      path: "/",
    },
  ];

  return (
    <div className="w-[100vw] h-[103px] flex items-center justify-between px-5 py-4 fixed top-0 z-50 ">
      {/* Logo */}
      <img alt="logo" src={logo} className="w-[174px] h-[63px]" />

      <div className="flex items-center gap-x-12">
        {/* Tabs */}
        {menu &&
          navItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="cursor-pointer gap-x-2 ease-in-out duration-150 items-center  justify-between "
            >
              {item.name}{" "}
            </Link>
          ))}

        <img
          alt="menu"
          src={menu ? openIcon : menuIcon}
          onClick={() => setMenu(!menu)}
        />
      </div>
    </div>
  );
};

export default NavBar;

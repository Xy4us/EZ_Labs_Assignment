import React from "react";
import logo from "../assets/VFilmsLogo.png";
import { useState } from "react";
import menuIcon from "../assets/menu.png";
import openIcon from "../assets/MenuOpen.png";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      name: "Services",
      path: "/#services",
    },
    {
      name: "Their Stories",
      path: "/#theirStory",
    },
    {
      name: "Our Story",
      path: "/#ourStory",
    },
    {
      name: "Varnan",
      path: "/#varnan",
    },
    {
      name: "Let's Talk",
      path: "/#contact",
    },
  ];

  return (
    <div className="w-[100vw] h-[103px] flex items-center justify-between px-5 py-4 fixed top-0 z-50 ">
      {/* Logo */}
      <img
        alt="logo"
        src={logo}
        className="md:w-[174px] md:h-[63px] sm:w-[120px] sm:h-[45px] xs:w-[90px] xs:h-[35px] xxs:w-[60px] xxs:h-[25px]"
      />

      <ul className="flex items-center lg:gap-x-12 md:gap-x-5 sm:gap-x-3 xs:gap-x-2 xxs:gap-x-1 ">
        {/* Tabs */}
        {menu &&
          navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer lg:gap-x-2  ease-in-out duration-150 items-center  justify-between"
            >
              <a
                className={`md:text-base lg:text-xl sm:text-sm xxs:text-[8px] ${
                  item.name === "Let's Talk"
                    ? "bg-[#F15D2B] text-white rounded-xl px-4 py-2"
                    : ""
                }`}
                href={item.path}
              >
                {item.name}
              </a>
            </li>
          ))}

        <img
          alt="menu"
          src={menu ? openIcon : menuIcon}
          onClick={() => setMenu(!menu)}
        />
      </ul>
    </div>
  );
};

export default NavBar;

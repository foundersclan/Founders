import { LogOut, Menu, User, Users } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Hamburger = ({ click, handleMenu }) => {
  const links = [
    { name: "Team", path: "/team", icon: Users },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Support", path: "/support" },
  ];

  return (
    <div
      className={`fixed top-0 right-0 z-20 min-h-full w-1/4 bg-zinc-900 p-4
      transform transition-all duration-500 ease-in-out
      ${click ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center w-56 justify-center gap-6 rounded-2xl py-3 px-6 font-semibold text-4xl border border-yellow-500 text-yellow-500">
            <User className="size-10" />
            <span>Profile</span>
          </div>
          <Menu
            className="size-15 mt-1 text-yellow-500 cursor-pointer"
            onClick={handleMenu}
          />
        </div>

        <div className="flex flex-col items-center py-4 px-4 rounded-2xl text-white/80 text-4xl gap-8 mt-4">
          {links.map((ele) => (
            <NavLink key={ele.name} to={ele.path}>
              <span className="hover:shadow-2xs transition-all shadow-yellow-500 w-full">
                {ele.name}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hamburger;

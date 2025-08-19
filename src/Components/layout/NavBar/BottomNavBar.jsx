import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as Icons from "lucide-react";
import { bottomNavLinks } from "../../../routes/routesConfig";

const BottomNavbar = () => {
  const location = useLocation();

  const getLinkClass = (path) =>
    `text-xs font-medium ${
      location.pathname === path ? "text-white" : "text-[#d2d6db]"
    }`;

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 
        flex justify-around py-2 md:hidden 
        border-t border-gray-700 
        backdrop-blur-md bg-black/30
        z-50
      "
    >
      {bottomNavLinks.map((link) => {
        const IconComponent = Icons[link.icon];
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.name}
            to={link.path}
            className="flex flex-col items-center"
          >
            <IconComponent
              className={`w-5 h-5 ${
                isActive ? "text-white" : "text-[#d2d6db]"
              }`}
            />
            <span className={getLinkClass(link.path)}>{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavbar;

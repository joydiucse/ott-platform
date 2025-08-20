import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import {useNavigation} from "@/hooks/useNavigation.js";

const BottomNavBar = () => {
    const { bottomNavLinks, isActive } = useNavigation();

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
                return (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="flex flex-col items-center"
                    >
                        <IconComponent
                            className={`w-5 h-5 ${
                                isActive(link.path) ? "text-white" : "text-[#d2d6db]"
                            }`}
                        />
                        <span
                            className={`text-xs font-medium ${
                                isActive(link.path) ? "text-white" : "text-[#d2d6db]"
                            }`}
                        >
              {link.name}
            </span>
                    </Link>
                );
            })}
        </div>
    );
};

export default BottomNavBar;


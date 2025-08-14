import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User } from "lucide-react";
import { topNavLinks } from "../../../routes/routesConfig";

const TopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-black/30" : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
        {/* MOBILE VIEW */}
        <div className="flex flex-col md:hidden">
          {/* Logo + Icons */}
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              BIOSCOPE+
            </Link>
            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 cursor-pointer" />
              <Link
                to="/account"
                className="flex items-center space-x-1 border rounded px-3 py-1"
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>
            </div>
          </div>
          {/* Nav Links below logo */}
          <div className="flex space-x-2 mt-2">
            {topNavLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white text-black"
                      : "bg-gray-700/50 hover:bg-gray-600/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            OTT Platform
          </Link>
          {/* Centered Nav Links */}
          <div className="flex space-x-2">
            {topNavLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white text-black"
                      : "bg-gray-700/50 hover:bg-gray-600/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 cursor-pointer" />
            <Link
              to="/account"
              className="flex items-center space-x-1 border rounded px-3 py-1"
            >
              <User className="w-5 h-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;

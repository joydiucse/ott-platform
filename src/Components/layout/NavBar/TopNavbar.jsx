import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import { useNavigation } from "@/hooks/useNavigation.js";
import ThemeToggleButton from "@/Components/ui/theme-toggle-button.jsx";

const TopNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { topNavLinks, isActive } = useNavigation();

    // Scroll handle
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Detect dark mode dynamically
    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    // Background based on scroll & theme
    const navbarBgClass = isDarkMode
        ? "backdrop-blur-md background"
        : isScrolled
            ? "backdrop-blur-md background"
            : "bg-gradient-to-t from-slate-500";

    // Mobile link classes
    const getMobileLinkClass = (path) => {
        if (isDarkMode) {
            return `px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                isActive(path) ? "bg-white text-black" : "bg-[#34393a] text-white"
            }`;
        } else {
            return `px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
                isActive(path) ? "bg-black text-white border-black" : "bg-white text-black border-black"
            }`;
        }
    };

    // Desktop link classes
    const getDesktopLinkClass = (path) => {
        if (isDarkMode) {
            return `text-sm font-medium transition-colors ${
                isActive(path) ? "text-white" : "text-[#d2d6db]"
            }`;
        } else {
            return `text-sm font-medium transition-colors ${
                isActive(path) ? "text-white" : "text-black"
            }`;
        }
    };

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${navbarBgClass} text-white`}>
            <div className="container">
                {/* MOBILE VIEW */}
                <div className="flex flex-col md:hidden space-y-2">
                    <div className="flex justify-between items-center pt-2">
                        <Link to="/" className="text-xl text-black dark:text-white font-bold">
                            OTT PLATFORM
                        </Link>
                        <div className="flex items-center gap-3 text-black dark:text-white">
                            <Search className="w-5 h-5 cursor-pointer" />
                            <ThemeToggleButton variant="circle-blur" start="top-right" />
                            <Link
                                to="/account"
                                className="flex items-center space-x-1 text-black dark:text-white border border-black dark:border-white rounded px-2 py-1 text-sm"
                            >
                                <User className="w-4 h-4" />
                                <span>Login</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex space-x-2 overflow-x-auto pb-2">
                        {topNavLinks.map((link) => (
                            <Link key={link.name} to={link.path} className={getMobileLinkClass(link.path)}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* DESKTOP VIEW */}
                <div className="hidden md:flex justify-between items-center h-16">
                    <Link to="/" className="text-xl text-black dark:text-white font-bold">
                        OTT PLATFORM
                    </Link>

                    <div className="flex space-x-6">
                        {topNavLinks.map((link) => (
                            <Link key={link.name} to={link.path} className={getDesktopLinkClass(link.path)}>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center text-black dark:text-white gap-3">
                        <Search className="w-6 h-6 cursor-pointer" />
                        <ThemeToggleButton variant="circle-blur" start="top-right" />
                        <Link
                            to="/account"
                            className="flex items-center text-black dark:text-white space-x-1 border border-black dark:border-white rounded px-3 py-1"
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

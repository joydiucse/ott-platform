// src/routes/routesConfig.jsx

import Home from "@/Pages/Home.jsx";
import Movies from "@/Pages/Movies.jsx";
import Shorts from "@/Pages/Shorts.jsx";
import New from "@/Pages/New.jsx";
import Account from "@/Pages/Account.jsx";

export const topNavLinks = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Shorts", path: "/shorts" },
    { name: "New", path: "/new" },
];

export const bottomNavLinks = [
    { name: "Home", path: "/", icon: "Home" },
    { name: "Shorts", path: "/shorts", icon: "PlaySquare" },
    { name: "New", path: "/new", icon: "Sparkles" },
    { name: "Account", path: "/account", icon: "User" },
];

export const routes = [
    { path: "/", element: <Home /> },
    { path: "/movies", element: <Movies /> },
    { path: "/shorts", element: <Shorts /> },
    { path: "/new", element: <New /> },
    { path: "/account", element: <Account /> },
];

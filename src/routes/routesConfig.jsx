// src/routes/routesConfig.jsx

import Home from "@/Pages/Home.jsx";
import Movies from "@/Pages/Movies.jsx";
import Shorts from "@/Pages/Shorts.jsx";
import New from "@/Pages/New.jsx";
import Account from "@/Pages/Account.jsx";
import Shows from "@/Pages/Shows.jsx";
import Sports from "@/Pages/Sports.jsx";
import Description from "../Pages/Description";


export const topNavLinks = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Shows", path: "/shows" },
    { name: "Sports", path: "/sports" },
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
    { path: "/shows", element: <Shows /> },
    { path: "/sports", element: <Sports /> },
    { path: "/shorts", element: <Shorts /> },
    { path: "/new", element: <New /> },
    { path: "/account", element: <Account /> },
    { path: "/description/:id", element: <Description /> },

];

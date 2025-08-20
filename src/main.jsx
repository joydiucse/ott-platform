// src/main.jsx
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css"; // Global styles
import App from "@/App.jsx";
import AppLayout from "@/Components/layout/AppLayout.jsx";
import {routes} from "@/routes/routesConfig.jsx";



const router = createBrowserRouter([
    {
        element: <App />, // global providers
        children: [
            {
                element: <AppLayout />, // layout wrapper
                children: routes, // actual pages
            },
        ],
        errorElement: <div className="text-center p-10">404 | Page Not Found</div>, // error fallback
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

// src/App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// import { AuthProvider } from "./providers/AuthProvider";
// import { ThemeProvider } from "./providers/ThemeProvider";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

function App() {
    return (
        // Wrap with providers (if needed)
        // <AuthProvider>
           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
             {/* <QueryClientProvider client={queryClient}> */}
                <Outlet />
             {/* </QueryClientProvider> */}
             
           </ThemeProvider>
        // </AuthProvider>
    );
}

export default App;

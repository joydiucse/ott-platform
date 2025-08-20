// src/Components/layout/AppLayout.jsx
import { Outlet } from "react-router-dom";
import TopNavbar from "./NavBar/TopNavbar";
import BottomNavBar from "./NavBar/BottomNavBar";
import Footer from "./Footer";

function AppLayout() {
    return (
        <div className="background min-h-screen flex flex-col">
            <TopNavbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <BottomNavBar />
        </div>
    );
}

export default AppLayout;

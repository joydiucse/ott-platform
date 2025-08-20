import { useNavigate, useLocation } from "react-router-dom";
import { topNavLinks, bottomNavLinks } from "../routes/routesConfig.jsx";


export const useNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const goTo = (path) => navigate(path);


    const isActive = (path) => location.pathname === path;


    return {
        goTo,
        isActive,
        currentPath: location.pathname,
        topNavLinks,
        bottomNavLinks,
    };
};
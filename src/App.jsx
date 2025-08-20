import TopNavbar from "./Components/layout/NavBar/TopNavbar";
import BottomNavBar from "./Components/layout/NavBar/BottomNavBar";
import Footer from "./Components/layout/Footer";
import Data from "./Components/Data";
import Top10 from './Components/sections/Cards/Top10';

import ThemeSwitcher from "./Components/ThemeSwitcher";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="background min-h-screen flex flex-col">
        <TopNavbar />
        <ThemeSwitcher />

        {/* Main Content */}
        <Data />
        <Top10 />

        {/* Footer */}
        <Footer />
        <BottomNavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import TopNavbar from "./Components/layout/NavBar/TopNavbar";
import BottomNavBar from "./Components/layout/NavBar/BottomNavBar";
import Cards from "./Components/sections/Cards/Cards";
import WideCards from "./Components/sections/Cards/WideCards";
import Footer from "./Components/layout/Footer";
import HeroBanner from "./Components/sections/HeroBanner";

/* // Pages
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Shorts from "./Pages/Shorts/Shorts";
import LiveTV from "./Pages/LiveTV/LiveTV";
import Account from "./Pages/Account/Account"; */

function App() {
  return (
    <div className="background min-h-screen flex flex-col">
      <TopNavbar />
      <HeroBanner />
      
      {/*       <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/live-tv" element={<LiveTV />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div> */}

      <div className="flex -ml-2 md:-ml-3 xl:-ml-5">
        <Cards/>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      <div className="flex -ml-2 md:-ml-3 xl:-ml-5">
        <WideCards/>
        <WideCards />
        <WideCards />
        <WideCards />
        <WideCards />
      </div>
      <Footer/>
      <BottomNavBar />
    </div>
  );
}

export default App;

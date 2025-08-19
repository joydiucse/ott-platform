import { Routes, Route } from "react-router-dom";
import TopNavbar from "./Components/layout/NavBar/TopNavbar";
import BottomNavBar from "./Components/layout/NavBar/BottomNavBar";
import Cards from "./Components/sections/Cards/Cards";
import WideCards from "./Components/sections/Cards/WideCards";
import Footer from "./Components/layout/Footer";
import HeroBanner from "./Components/sections/HeroBanner";
import Data from "./Components/Data";
import Top10 from "./Components/sections/Cards/Top10";
import CategoryRow from "./Components/sections/CategoryRow";
import RoundedCard from "./Components/sections/Cards/RoundedCard";
import Demo from "./Components/Demo";
























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
      {/* <HeroBanner /> */}
      <Data/>
      {/* <RoundedCard/> */}     
      <Demo/>
















      
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





      <Footer/>
      <BottomNavBar />
    </div>
  );
}

export default App;

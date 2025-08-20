import TopNavbar from "./Components/layout/NavBar/TopNavbar";
import BottomNavBar from "./Components/layout/NavBar/BottomNavBar";
import Footer from "./Components/layout/Footer";
import Data from "./Components/Data";
import Demo from "./Components/Demo";
function App() {
  return (
    <div className="background min-h-screen flex flex-col">
      <TopNavbar />
      {/* <HeroBanner /> */}
      <Data/>
      {/* <RoundedCard/> */}     
      <Demo/>
      <Footer/>
      <BottomNavBar />
    </div>
  );
}

export default App;

import "./scss/style.scss";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideNavigation, showNavigation } from "./store/actions/usersActions";
import Artists from "./Components/Artists";
import Contact from "./Components/Contact";
import Downloads from "./Components/Downloads";
import Releases from "./Components/Releases";
import Supporters from "./Components/Supporters";
import Videos from "./Components/Videos";
import OutOfFlow from "./Components/OutOfFlow";
import Absorbed from "./Components/artists/Absorbed";
import ArtsDifficult from "./Components/artists/ArtsDifficult";
import BbDeng from "./Components/artists/BbDeng";
import BelowSurface from "./Components/artists/BelowSurface";
import BlackMirrorPark from "./Components/artists/BlackMirrorPark";
import ChenKu from "./Components/artists/Chenku";
import ElectricRescue from "./Components/artists/ElectricRescue";
import Entitet   from "./Components/artists/Entitet";
import Fntk from "./Components/artists/Fntk";
import HuYang from "./Components/artists/HuYang";
import Mamwadi from "./Components/artists/Mamwadi";
import Miiia from "./Components/artists/Miiia";
import MillerBosscher from "./Components/artists/MillerBosscher";
import Responder from "./Components/artists/Responder";
import Tekseven from "./Components/artists/Tekseven";
import Tension from "./Components/artists/Tension";
import Footer from "./Components/Footer";
import Impressum from "./Components/Impressum";
import Datenschutz from "./Components/Datenschutz";
import Promos from "./Components/Promos";

function App(props) {

  // redux
  const dispatch = useDispatch();
    // navigation
    const hiddenNavigation = (useSelector((state) => state.userReducer.navigation));
    const triggerNavigation = () => (hiddenNavigation) ? navigationOff() : navigationOn();
    const navigationOn = () => dispatch(showNavigation());
    const navigationOff = () => dispatch(hideNavigation());
    // navigation end
  // redux end

  return (
    <>
      <HashRouter>
        {hiddenNavigation && 
          <div className="click-navigation">
            <NavLink to="releases" onClick={triggerNavigation}>Releases</NavLink>
            <NavLink to="artists" onClick={triggerNavigation}>Artists</NavLink>
            <NavLink to="videos" onClick={triggerNavigation}>Videos</NavLink>
            <NavLink to="supporters" onClick={triggerNavigation}>Supporters</NavLink>
            <NavLink to="downloads" onClick={triggerNavigation}>Downloads</NavLink>
            <NavLink to="contact" onClick={triggerNavigation}>Contact</NavLink>
          </div>
        }
        <OutOfFlow />
        <Routes>
          <Route path="/" element={<Releases />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/artists" element={<Artists />} />
            <Route path="/artists/absorbed" element={<Absorbed />} />
            <Route path="/artists/artsdifficult" element={<ArtsDifficult />} />
            <Route path="/artists/bbdeng" element={<BbDeng />} />
            <Route path="/artists/belowsurface" element={<BelowSurface />} />
            <Route path="/artists/blackmirrorpark" element={<BlackMirrorPark />} />
            <Route path="/artists/chenku" element={<ChenKu />} />
            <Route path="/artists/electricrescue" element={<ElectricRescue />} />
            <Route path="/artists/entitet" element={<Entitet />} />
            <Route path="/artists/fntk" element={<Fntk />} />
            <Route path="/artists/huyang" element={<HuYang />} />
            <Route path="/artists/mamwadi" element={<Mamwadi />} />
            <Route path="/artists/miiia" element={<Miiia />} />
            <Route path="/artists/millerbosscher" element={<MillerBosscher />} />
            <Route path="/artists/responder" element={<Responder />} />
            <Route path="/artists/tekseven" element={<Tekseven />} />
            <Route path="/artists/tension" element={<Tension />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/supporters" element={<Supporters />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/promos" element={<Promos />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;

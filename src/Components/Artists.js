import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


function Artists() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>
      <main>
        <div className="artists">
          <h2>All Be Sure Artists</h2>
          <div className="faces">
            <Link to="absorbed"><img src={require("../pics/artists/absorbed.jpg")} alt="Absorbed" /><p>Absorbed</p></Link>
            <Link to="artsdifficult"><img src={require("../pics/artists/elvis.jpg")} alt="Art's Difficult" /><p>Art's Difficult</p></Link>
            <Link to="bbdeng"><img src={require("../pics/artists/bb.jpg")} alt="BB Deng" /><p>BB Deng</p></Link>
            <Link to="belowsurface"><img src={require("../pics/artists/fabian.jpg")} alt="Below Surface" /><p>Below Surface</p></Link>
            <Link to="blackmirrorpark"><img src={require("../pics/artists/erik.jpg")} alt="Black Mirror Park" /><p>Black Mirror Park</p></Link>
            <Link to="chenku"><img src={require("../pics/artists/chen.jpg")} alt="Chen Ku" /><p>Chen Ku</p></Link>
            <Link to="electricrescue"><img src={require("../pics/artists/antoine.jpg")} alt="Electric Rescue" /><p>Electric Rescue</p></Link>
            <Link to="entitet"><img src={require("../pics/artists/tommy.jpg")} alt="Entitet" /><p>Entitet</p></Link>
            <Link to="fntk"><img src={require("../pics/artists/fntk.jpg")} alt="FNTK" /><p>FNTK</p></Link>
            <Link to="huyang"><img src={require("../pics/artists/hu.jpg")} alt="Hu Yang" /><p>Hu Yang</p></Link>
            <Link to="mamwadi"><img src={require("../pics/artists/mamwadi.jpg")} alt="Mamwadi" /><p>Mamwadi</p></Link>
            <Link to="miiia"><img src={require("../pics/artists/mia.jpg")} alt="MIIIA" /><p>MIIIA</p></Link>
            <Link to="millerbosscher"><img src={require("../pics/artists/millerbosscher.jpg")} alt="Miller & Bosscher" /><p>Miller & Bosscher</p></Link>
            <Link to="responder"><img src={require("../pics/artists/responder.jpg")} alt="Responder" /><p>Responder</p></Link>
            <Link to="tekseven"><img src={require("../pics/artists/robin.jpg")} alt="Tekseven" /><p>Tekseven</p></Link>
            <Link to="tension"><img src={require("../pics/artists/will.jpg")} alt="Tension" /><p>Tension</p></Link>   
          </div>
        </div>
      </main>
  </>;
}

export default Artists;

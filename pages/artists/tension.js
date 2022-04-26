import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Tension() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <main>
    <div class="artists">
      <div class="artist">
        <h2>Tension</h2>
        <div class="text-and-image">
            <p>Tension is the one who delivers both quality and quantity of techno with more than just a bit of passion and knowledge. Based in Bielefeld Tension gained international attention of the big players in underground dance music and published music on labels like R&S, Illegal Alien, Kaputt and Vector Functions Records to just mention a few. Recently Tension started his own techno imprint aspect:ratio and published releases by Sven Sinclair, Below Surface, Rasser and himself with remixes by Denise Rabe, Ricardo Garduno, Abstract Division and Vril. By the way, Tension assured to keep releasing tracks to Be Sure aswell, which we are very much looking forward to! DJ and liveact Tension performed at venues like Tresor, Maria am Ostbahnhof and HÖR in Berlin and of course at various locations in Bielefeld and sourrounding cities. To be highlighted is his DJ tour to South Africa in 2013. Tension's style ranges from deep to peak, from ambient to dub, from techno and house to drum and bass. </p>
            <img src={require("../../pics/artists/will.jpg")} alt="Tension" />
        </div>
        <div class="socials">
            <a href="https://www.youtube.com/channel/UCLTx4SojM5R5hK_xjzHv2_g/videos" target="_blank" rel="noreferrer"><img src={require("../../pics/yt.png")} alt="Youtube Logo" /><p>Youtube</p></a>
            <a href="https://www.instagram.com/tension_ger/" target="_blank" rel="noreferrer"><img src={require("../../pics/ig.png")} alt="Instagram Logo" /><p>Instagram</p></a>
            <a href="https://www.facebook.com/tensioninfo" target="_blank" rel="noreferrer"><img src={require("../../pics/fb.png")} alt="Facebook Logo" /><p>Facebook</p></a>
            <a href="https://soundcloud.com/tension-music" target="_blank" rel="noreferrer"><img src={require("../../pics/sc.png")} alt="Soundcloud Logo" /><p>Soundcloud</p></a>
            <a href="https://open.spotify.com/artist/1kPf5CDQfHMXF0EUeixQbR" target="_blank" rel="noreferrer"><img src={require("../../pics/sf.png")} alt="Spotify Logo" /><p>Spotify</p></a>
            <a href="https://www.beatport.com/artist/tension-ger/529145" target="_blank" rel="noreferrer"><img src={require("../../pics/bp.png")} alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div class="releases">
          <h3>Releases on Be Sure</h3>
          <div class="artworks">
            <a href="https://www.beatport.com/release/metamorfose-ep/3316896" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE024.jpg")} alt="Release Artwork of BESURE024" /><p>BESURE024</p></a>
            <a href="https://www.beatport.com/release/be-sure-selected-vol4/3201124" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE023.jpg")} alt="Release Artwork of BESURE023" /><p>BESURE023</p></a>
            <a href="https://www.beatport.com/release/currents/2483042" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE017.jpg")} alt="Release Artwork of BESURE017" /><p>BESURE017</p></a>
            <a href="https://www.beatport.com/release/waves-and-particles/2296716" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE014.jpg")} alt="Release Artwork of BESURE014" /><p>BESURE014</p></a>
            <a href="https://www.beatport.com/release/advanced-state/2167793" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE011.jpg")} alt="Release Artwork of BESURE011" /><p>BESURE011</p></a>
            <a href="https://www.beatport.com/release/tension/1771625" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE008.jpg")} alt="Release Artwork of BESURE008" /><p>BESURE008</p></a>
            <a href="https://www.beatport.com/release/be-sure-selected-vol1/1634592" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE004.jpg")} alt="Release Artwork of BESURE004" /><p>BESURE004</p></a>
            <a href="https://www.beatport.com/release/triebmensch-ep/1554123" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE002.jpg")} alt="Release Artwork of BESURE002" /><p>BESURE002</p></a>
          </div>
        </div>
      </div>
    </div>

    <div className="artists">
      <h2>All Be Sure Artists</h2>
      <div className="faces">
        <Link to="../artists/absorbed"><img src={require("../../pics/artists/absorbed.jpg")} alt="Absorbed" /><p>Absorbed</p></Link>
        <Link to="../artists/artsdifficult"><img src={require("../../pics/artists/elvis.jpg")} alt="Art's Difficult" /><p>Art's Difficult</p></Link>
        <Link to="../artists/bbdeng"><img src={require("../../pics/artists/bb.jpg")} alt="BB Deng" /><p>BB Deng</p></Link>
        <Link to="../artists/belowsurface"><img src={require("../../pics/artists/fabian.jpg")} alt="Below Surface" /><p>Below Surface</p></Link>
        <Link to="../artists/blackmirrorpark"><img src={require("../../pics/artists/erik.jpg")} alt="Black Mirror Park" /><p>Black Mirror Park</p></Link>
        <Link to="../artists/chenku"><img src={require("../../pics/artists/chen.jpg")} alt="Chen Ku" /><p>Chen Ku</p></Link>
        <Link to="../artists/electricrescue"><img src={require("../../pics/artists/antoine.jpg")} alt="Electric Rescue" /><p>Electric Rescue</p></Link>
        <Link to="../artists/entitet"><img src={require("../../pics/artists/tommy.jpg")} alt="Entitet" /><p>Entitet</p></Link>
        <Link to="../artists/fntk"><img src={require("../../pics/artists/fntk.jpg")} alt="FNTK" /><p>FNTK</p></Link>
        <Link to="../artists/huyang"><img src={require("../../pics/artists/hu.jpg")} alt="Hu Yang" /><p>Hu Yang</p></Link>
        <Link to="../artists/mamwadi"><img src={require("../../pics/artists/mamwadi.jpg")} alt="Mamwadi" /><p>Mamwadi</p></Link>
        <Link to="../artists/miiia"><img src={require("../../pics/artists/mia.jpg")} alt="MIIIA" /><p>MIIIA</p></Link>
        <Link to="../artists/millerbosscher"><img src={require("../../pics/artists/millerbosscher.jpg")} alt="Miller & Bosscher" /><p>Miller & Bosscher</p></Link>
        <Link to="../artists/responder"><img src={require("../../pics/artists/responder.jpg")} alt="Responder" /><p>Responder</p></Link>
        <Link to="../artists/tekseven"><img src={require("../../pics/artists/robin.jpg")} alt="Tekseven" /><p>Tekseven</p></Link>
        <Link to="../artists/tension"><img src={require("../../pics/artists/will.jpg")} alt="Tension" /><p>Tension</p></Link>   
      </div>
    </div>
  </main>;
}

export default Tension;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function HuYang() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <main>
    <div class="artists">
      <div class="artist">
        <h2>Hu Yang</h2>
        <div class="text-and-image">
          <p>Hu Yang was an early contributor of Be Sure. His debut release "Xu Huai Ruo Guo" sadly did not have any follow up release yet, but hopes dies last. Be Sure hopes to welcome Hu Yang back anytime soon.</p>
          <img src={require("../../pics/artists/hu.jpg")} alt="Hu Yang" />
        </div>
        <div class="socials">
          <a href="https://www.instagram.com/hu_ygaa/" target="_blank" rel="noreferrer"><img src={require("../../pics/ig.png")} alt="Instagram Logo" /><p>Instagram</p></a>
          <a href="https://www.facebook.com/huyangmusic/" target="_blank" rel="noreferrer"><img src={require("../../pics/fb.png")} alt="Facebook Logo" /><p>Facebook</p></a>
          <a href="https://www.facebook.com/huyangmusic/" target="_blank" rel="noreferrer"><img src={require("../../pics/sc.png")} alt="Soundcloud Logo" /><p>Soundcloud</p></a>
          <a href="https://open.spotify.com/artist/1QY4bYx7cy8ihWwR6iw3zw" target="_blank" rel="noreferrer"><img src={require("../../pics/sf.png")} alt="Spotify Logo" /><p>Spotify</p></a>
          <a href="https://www.beatport.com/artist/hu-yang/542313" target="_blank" rel="noreferrer"><img src={require("../../pics/bp.png")} alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div class="releases">
          <h3>Releases on Be Sure</h3>
          <div class="artworks">
            <a href="https://www.beatport.com/release/xu-huai-ruo-gu/1728253" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE007.jpg")} alt="Release Artwork of BESURE007" /><p>BESURE007</p></a>
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

export default HuYang;

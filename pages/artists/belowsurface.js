import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function BelowSurface() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <main>
    <div class="artists">
      <div class="artist">
        <h2>Below Surface</h2>
        <div class="text-and-image">
          <p>Below Surface is the owner of Be Sure. His styles are ambient and techno. Before ending his DJ career in 2015 Below Surface performed in places like Tresor, the Great Wall of China, and various clubs and festivals in Europe and Asia. Today Below Surface is one of a few people who just focuses on producing music without being a DJ or liveact.</p>
          <img src={require("../../pics/artists/fabian.jpg")} alt="Below Surface" />
        </div>
        <div class="socials">
          <a href="https://www.youtube.com/user/belowsurfacemedia/videos" target="_blank" rel="noreferrer"><img src={require("../../pics/yt.png")} alt="Youtube Logo" /><p>Youtube</p></a>
          <a href="https://www.instagram.com/belowsurface3000" target="_blank" rel="noreferrer"><img src={require("../../pics/ig.png")} alt="Instagram Logo" /><p>Instagram</p></a>
          <a href="https://facebook.com/belowsurfaceofficial" target="_blank" rel="noreferrer"><img src={require("../../pics/fb.png")} alt="Facebook Logo" /><p>Facebook</p></a>
          <a href="https://soundcloud.com/belowsurface" target="_blank" rel="noreferrer"><img src={require("../../pics/sc.png")} alt="Soundcloud Logo" /><p>Soundcloud</p></a>
          <a href="https://open.spotify.com/artist/6tcSqEAmHTLmrztjM0dQl2" target="_blank" rel="noreferrer"><img src={require("../../pics/sf.png")} alt="Spotify Logo" /><p>Spotify</p></a>
          <a href="https://www.beatport.com/artist/below-surface/385487" target="_blank" rel="noreferrer"><img src={require("../../pics/bp.png")} alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div class="releases">
          <h3>Releases on Be Sure</h3>
          <div class="artworks">
            <a href="https://www.beatport.com/release/25/3392543" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE025.jpg")} alt="Release Artwork of BESURE025" /><p>BESURE025</p></a>
            <a href="https://www.beatport.com/release/metamorfose-ep/3316896" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE024.jpg")} alt="Release Artwork of BESURE024" /><p>BESURE024</p></a>
            <a href="https://www.beatport.com/release/be-sure-selected-vol4/3201124" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE023.jpg")} alt="Release Artwork of BESURE023" /><p>BESURE023</p></a>
            <a href="https://www.beatport.com/release/transitions-and-transmissions/2883978" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE021.jpg")} alt="Release Artwork of BESURE021" /><p>BESURE021</p></a>
            <a href="https://www.beatport.com/release/archives-ep/2781302" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE019.jpg")} alt="Release Artwork of BESURE019" /><p>BESURE019</p></a>
            <a href="https://www.beatport.com/release/be-sure/2540660" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE018.jpg")} alt="Release Artwork of BESURE028" /><p>BESURE018</p></a>
            <a href="https://www.beatport.com/release/depths-of-sound/2447832" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE016.jpg")} alt="Release Artwork of BESURE016" /><p>BESURE016</p></a>
            <a href="https://www.beatport.com/release/be-sure-selected-vol3/2348051" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE015.jpg")} alt="Release Artwork of BESURE015" /><p>BESURE015</p></a>
            <a href="https://www.beatport.com/release/waves-and-particles/2296716" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE014.jpg")} alt="Release Artwork of BESURE014" /><p>BESURE014</p></a>
            <a href="https://www.beatport.com/release/on-the-run/2196603" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE012.jpg")} alt="Release Artwork of BESURE012" /><p>BESURE012</p></a>
            <a href="https://www.beatport.com/release/advanced-state/2167793" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE011.jpg")} alt="Release Artwork of BESURE011" /><p>BESURE011</p></a>
            <a href="https://www.beatport.com/release/escaping-the-void/1859166" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE010.jpg")} alt="Release Artwork of BESURE010" /><p>BESURE010</p></a>
            <a href="https://www.beatport.com/release/be-sure-selected-vol2/1819156" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE009.jpg")} alt="Release Artwork of BESURE009" /><p>BESURE009</p></a>
            <a href="https://www.beatport.com/release/waves-from-the-past/1654450" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE005.jpg")} alt="Release Artwork of BESURE005" /><p>BESURE005</p></a>
            <a href="https://www.beatport.com/release/be-sure-selected-vol1/1634592" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE004.jpg")} alt="Release Artwork of BESURE004" /><p>BESURE004</p></a>
            <a href="https://www.beatport.com/release/below-surface/1591854" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE003.jpg")} alt="Release Artwork of BESURE003" /><p>BESURE003</p></a>
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

export default BelowSurface;

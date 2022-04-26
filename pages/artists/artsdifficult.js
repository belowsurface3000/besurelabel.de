import artistLayout from "../../components/layouts/artistLayout";

function ArtsDifficult() {

  return (
    <artistLayout>
 <div className="artists">
      <div className="artist">
        <h2>Art's Difficult</h2>
        <div className="text-and-image">
          <p>Art's Difficult has been a key artist in the east asian techno scene for years. Vinyl, CDJ and analogue LIVEsets of Art's Difficult - alias Elvis.T - are a guarantee for memorable music experiences.</p>
          <img src={require("../../pics/artists/elvis.jpg")} alt="Art's Difficult" />
        </div>
        <div className="socials">
          <a href="https://www.youtube.com/watch?v=n7LD3w2Y6mM" target="_blank" rel="noreferrer"><img src={require("../../pics/yt.png")} alt="Youtube Logo" /><p>Youtube</p></a>
          <a href="https://www.instagram.com/elvis_t/" target="_blank" rel="noreferrer"><img src={require("../../pics/ig.png")} alt="Instagram Logo" /><p>Instagram</p></a>
          <a href="https://www.facebook.com/ELVIST-53181716905/" target="_blank" rel="noreferrer"><img src={require("../../pics/fb.png")} alt="Facebook Logo" /><p>Facebook</p></a>
          <a href="https://soundcloud.com/groovingelvis" target="_blank" rel="noreferrer"><img src={require("../../pics/sc.png")} alt="Soundcloud Logo" /><p>Soundcloud</p></a>
          <a href="https://open.spotify.com/artist/2YWXAg7i9lDnX1VFfFs730" target="_blank" rel="noreferrer"><img src={require("../../pics/sf.png")} alt="Spotify Logo" /><p>Spotify</p></a>
          <a href="https://www.beatport.com/artist/arts-difficult/515428" target="_blank" rel="noreferrer"><img src={require("../../pics/bp.png")} alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div className="releases">
          <h3>Releases on Be Sure</h3>
          <div className="artworks">
            <a href="https://www.beatport.com/release/be-sure-selected-vol1/1634592" target="_blank" rel="noreferrer"><img src={require("../../pics/artworks/BESURE004.jpg")} alt="Release Artwork of BESURE004" /><p>BESURE004</p></a>
          </div>
        </div>
      </div>
    </div>  
    </artistLayout>
  
  )
}

export default ArtsDifficult;

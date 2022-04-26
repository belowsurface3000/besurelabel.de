import ArtistLayout from "../../components/layouts/ArtistLayout";

function Fntk() {
  return (
    <ArtistLayout>
      <div className="artist">
        <h2>FNTK</h2>
        <div className="text-and-image">
          <p>DJ and producer FNTK is based in Lisbon, Portugal. His music style can be described to be deep, hypnotic and atmospheric techno. With his BESURE024 release he joined Be Sure and received two remixes by Below Surface and Tension. We are looking forward to see more tracks coming up by FNTK in the future!</p>
          <img src="/pics/artists/fntk.jpg" alt="FNTK" />
        </div>
        <div className="socials">
          <a href="https://youtu.be/dG_a6l7W1T0" target="_blank" rel="noreferrer"><img src="/pics/yt.png" alt="Youtube Logo" /><p>Youtube</p></a>
          <a href="https://www.instagram.com/fntk._/" target="_blank" rel="noreferrer"><img src="/pics/ig.png" alt="Instagram Logo" /><p>Instagram</p></a>
          <a href="https://www.facebook.com/fntklivee" target="_blank" rel="noreferrer"><img src="/pics/fb.png" alt="Facebook Logo" /><p>Facebook</p></a>
          <a href="https://soundcloud.com/fntklive" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Soundcloud Logo" /><p>Soundcloud</p></a>
          <a href="https://open.spotify.com/artist/04I5Ee5tYZH46507gG5crT" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Spotify Logo" /><p>Spotify</p></a>
          <a href="https://www.beatport.com/artist/fntk/968089" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div className="releases">
          <h3>Releases on Be Sure</h3>
          <div className="artworks">
            <a href="https://www.beatport.com/release/metamorfose-ep/3316896" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE024.jpg" alt="Release Artwork of BESURE024" /><p>BESURE024</p></a>
          </div>
        </div>
      </div>
    </ArtistLayout>
  )
}

export default Fntk;
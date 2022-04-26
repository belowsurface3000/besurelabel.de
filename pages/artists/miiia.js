import ArtistLayout from "../../components/layouts/ArtistLayout";

function Miiia() {
  return (
    <ArtistLayout>
      <div className="artist">
        <h2>MIIIA</h2>
        <div className="text-and-image">
          <p>MIIIA is one of the most active underground music artists of east asia for a decade now. Over the years her style envolved from deeper techno and house sounds to the rough techno that is represented in her Be Sure contributions.</p>
          <img src="/pics/artists/mia.jpg" alt="MIIIA" />
        </div>
        <div className="socials">
          <a href="https://www.youtube.com/watch?v=lWI5Vc_EYFA" target="_blank" rel="noreferrer"><img src="/pics/yt.png" alt="Youtube Logo" /><p>Youtube</p></a>
          <a href="https://www.instagram.com/miiia_santaizi/" target="_blank" rel="noreferrer"><img src="/pics/ig.png" alt="Instagram Logo" /><p>Instagram</p></a>
          <a href="https://www.facebook.com/MIIIA303/" target="_blank" rel="noreferrer"><img src="/pics/fb.png" alt="Facebook Logo" /><p>Facebook</p></a>
          <a href="https://soundcloud.com/miiia_303" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Soundcloud Logo" /><p>Soundcloud</p></a>
          <a href="https://open.spotify.com/artist/1VJiJGLbJhq6uRWczlQAOM" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Spotify Logo" /><p>Spotify</p></a>
          <a href="https://www.beatport.com/artist/miiia/472033" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div className="releases">
          <h3>Releases on Be Sure</h3>
          <div className="artworks">
            <a href="https://www.beatport.com/release/be-sure-selected-vol3/2348051" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE015.jpg" alt="Release Artwork of BESURE015" /><p>BESURE015</p></a>
            <a href="https://www.beatport.com/release/be-sure-selected-vol2/1819156" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE009.jpg" alt="Release Artwork of BESURE009" /><p>BESURE009</p></a>
          </div>
        </div>
      </div>
    </ArtistLayout>
  )
}

export default Miiia;
import ArtistLayout from "../../components/layouts/ArtistLayout";

function Tekseven() {
  return (
    <ArtistLayout>
      <div className="artist">
        <h2>Tekseven</h2>
        <div className="text-and-image">
          <p>Tekseven is the Belfast based techno artist and owner of the same named techno label. His music is shaped by cinematic influences and refined with sophisticated drum and synthesizer sounds.</p>
          <img src="/pics/artists/robin.jpg" alt="Tekseven" />
        </div>
        <div className="socials">
          <a href="https://www.youtube.com/watch?v=FWkbLvpq0cg&list=PLTkc4XTODssnbccykzbb-9HR2F9JYnnwH" target="_blank" rel="noreferrer"><img src="/pics/yt.png" alt="Youtube Logo" /><p>Youtube</p></a>
          <a href="https://twitter.com/TeksevenMusic" target="_blank" rel="noreferrer"><img src="/pics/ig.png" alt="Instagram Logo" /><p>Instagram</p></a>
          <a href="https://www.facebook.com/tekseven.music/" target="_blank" rel="noreferrer"><img src="/pics/fb.png" alt="Facebook Logo" /><p>Facebook</p></a>
          <a href="https://soundcloud.com/tekseven" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Soundcloud Logo" /><p>Soundcloud</p></a>
          <a href="https://open.spotify.com/artist/4GJsjiYz4pGvPRYBESJGse" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Spotify Logo" /><p>Spotify</p></a>
          <a href="https://www.beatport.com/artist/tekseven/319828" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div className="releases">
          <h3>Releases on Be Sure</h3>
          <div className="artworks">
              <a href="https://www.beatport.com/release/be-sure-selected-vol2/1819156" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE009.jpg" alt="Release Artwork of BESURE009" /><p>BESURE009</p></a>
              <a href="https://www.beatport.com/release/time-lord-ep/1686647" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE006.jpg" alt="Release Artwork of BESURE006" /><p>BESURE006</p></a>
          </div>
        </div>
      </div>
    </ArtistLayout>
  )
}

export default Tekseven;
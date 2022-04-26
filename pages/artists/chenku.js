import ArtistLayout from "../../components/layouts/ArtistLayout";

function Chenku() {
  return (
    <ArtistLayout>
      <div className="artist">
        <h2>Chenku</h2>
        <div className="text-and-image">
            <p>Chen Ku is an upcoming techno artist from Xiamen, China. His contribution to &apos;VA - Be Sure Selected Vol.3&apos; was pretty decent, so we hope to see new music coming from him soon.</p>
            <img src="/pics/artists/chen.jpg" alt="Chenku" />
        </div>
        <div className="socials">
            <a href="https://www.youtube.com/watch?v=X78jNtXYfwU" target="_blank" rel="noreferrer"><img src="/pics/yt.png" alt="Youtube Logo" /><p>Youtube</p></a>
            <a href="https://www.instagram.com/chenkukukuku/" target="_blank" rel="noreferrer"><img src="/pics/ig.png" alt="Instagram Logo" /><p>Instagram</p></a>
            <a href="https://soundcloud.com/chenku303" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Soundcloud Logo" /><p>Soundcloud</p></a>
            <a href="https://open.spotify.com/artist/6ms7DDJSbcKm9l796nQqoB" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Spotify Logo" /><p>Spotify</p></a>
            <a href="https://www.beatport.com/artist/chen-ku/705044" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div className="releases">
          <h3>Releases on Be Sure</h3>
          <div className="artworks">
              <a href="https://www.beatport.com/release/be-sure-selected-vol3/2348051" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE015.jpg" alt="Release Artwork of BESURE015" /><p>BESURE015</p></a>
          </div>
        </div>
      </div>
    </ArtistLayout>
  )
}
export default Chenku;
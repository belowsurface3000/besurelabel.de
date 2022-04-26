import ArtistLayout from "../../components/layouts/ArtistLayout";

function ElectricRescue() {
  return (
    <ArtistLayout>
      <div className="artist">
        <h2>Electric Rescue</h2>
        <div className="text-and-image">
            <p>In the past two decades Electric Rescue has performed in the best underground venues all over the planet. He simultaneously worked with the most relevant heavy weights of the techno industry and to the luck of Be Sure, Electric Rescue decided to join the label in 2020.</p>
            <img src="/pics/artists/antoine.jpg" alt="Electric Rescue" />
        </div>
        <div className="socials">
          <a href="https://www.youtube.com/results?search_query=electric+rescue" target="_blank" rel="noreferrer"><img src="/pics/yt.png" alt="Youtube Logo" /><p>Youtube</p></a>
          <a href="https://www.instagram.com/electricrescue" target="_blank" rel="noreferrer"><img src="/pics/ig.png" alt="Instagram Logo" /><p>Instagram</p></a>
          <a href="https://www.facebook.com/electricrescueofficial" target="_blank" rel="noreferrer"><img src="/pics/fb.png" alt="Facebook Logo" /><p>Facebook</p></a>
          <a href="https://soundcloud.com/electricrescue" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Soundcloud Logo" /><p>Soundcloud</p></a>
          <a href="https://open.spotify.com/artist/1vVMjCph2wKndDKiQpf0eo" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Spotify Logo" /><p>Spotify</p></a>
          <a href="https://www.beatport.com/artist/electric-rescue/8030" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div className="releases">
          <h3>Releases on Be Sure</h3>
          <div className="artworks">
              <a href="index#22"><img src="/pics/artworks/BESURE022.jpg" alt="Release Artwork of BESURE022" /><p>BESURE022</p></a>
          </div>
        </div>
      </div>
    </ArtistLayout>
  )
}

export default ElectricRescue;
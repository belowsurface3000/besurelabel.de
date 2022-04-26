import ArtistLayout from "../../components/layouts/ArtistLayout";

function Responder() {

  return (
    <ArtistLayout>
      <div className="artist">
        <h2>Responder</h2>
        <div className="text-and-image">
            <p>Responder is the Bielefeld based artist duo of Benjamin and Rico. Combining a range of different techno styles in their sets and productions, they continued their professional career by bringing their sounds to labels like Flash, Sleaze and Planet Rhythm.</p>
            <img src="/pics/artists/responder.jpg" alt="Responder" />
        </div>
        <div className="socials">
            <a href="https://www.youtube.com/channel/UCIIIKr7XSPJbkFzErqzZmRA" target="_blank" rel="noreferrer"><img src="/pics/yt.png" alt="Youtube Logo" /><p>Youtube</p></a>
            <a href="https://www.instagram.com/responder_music/" target="_blank" rel="noreferrer"><img src="/pics/ig.png" alt="Instagram Logo" /><p>Instagram</p></a>
            <a href="https://www.facebook.com/respondermusic/" target="_blank" rel="noreferrer"><img src="/pics/fb.png" alt="Facebook Logo" /><p>Facebook</p></a>
            <a href="https://soundcloud.com/respondermusic" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Soundcloud Logo" /><p>Soundcloud</p></a>
            <a href="https://open.spotify.com/artist/07SbKxZ0SXrlg3z0FS2K5Y" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Spotify Logo" /><p>Spotify</p></a>
            <a href="https://www.beatport.com/artist/responder/473768" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div className="releases">
            <h3>Releases on Be Sure</h3>
            <div className="artworks">
                <a href="https://www.beatport.com/release/be-sure-selected-vol1/1634592" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE004.jpg" alt="Release Artwork of BESURE004" /><p>BESURE004</p></a>
            </div>
        </div>
      </div>
    </ArtistLayout>
  )
}

export default Responder;
import ArtistLayout from "../../components/layouts/ArtistLayout";

function Mamwadi() {
  return (
    <ArtistLayout>
      <div className="artist">
        <h2>Mamwadi</h2>
        <div className="text-and-image">
          <p>Mamwadi is of swedish origin and based in Berlin. Becoming a talented DJ and producer is the only logical result of his long term obsession for electronic music. After taking the journey throughout various electronic genres like Dubstep, Gabber and Psytrance to Ambient and Techno, Mamwadi succeeds to combine the best influences of each style into his unique productions.</p>
          <img src="/pics/artists/mamwadi.jpg" alt="Mamwadi" />
        </div>
        <div className="socials">
          <a href="https://www.youtube.com/channel/UCW_11WBcsvPjIGY4nhQ11Ng" target="_blank" rel="noreferrer"><img src="/pics/yt.png" alt="Youtube Logo" /><p>Youtube</p></a>
          <a href="https://www.instagram.com/mamwadi_" target="_blank" rel="noreferrer"><img src="/pics/ig.png" alt="Instagram Logo" /><p>Instagram</p></a>
          <a href="https://www.facebook.com/MamwadiTechno" target="_blank" rel="noreferrer"><img src="/pics/fb.png" alt="Facebook Logo" /><p>Facebook</p></a>
          <a href="https://soundcloud.com/mamwadi" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Soundcloud Logo" /><p>Soundcloud</p></a>
          <a href="https://open.spotify.com/artist/5LYQg0Xbu9GAavVFkcuKoC" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Spotify Logo" /><p>Spotify</p></a>
          <a href="https://www.beatport.com/artist/mamwadi/654172" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div className="releases">
          <h3>Releases on Be Sure</h3>
          <div className="artworks">
            <a href="https://www.beatport.com/release/be-sure-selected-vol4/3201124" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE023.jpg" alt="Release Artwork of BESURE023" /><p>BESURE023</p></a>
          </div>
        </div>
      </div>
    </ArtistLayout>
  )
}

export default Mamwadi;
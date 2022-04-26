import ArtistLayout from "../../components/layouts/ArtistLayout";

function Entitet() {
  return (
    <ArtistLayout>
      <div className="artist">
        <h2>Entitet</h2>
        <div className="text-and-image">
          <p>Entitet is the Berlin based producer and DJ of swedish origin. His sounds are mesmerizing and can lead the attentive listener into a meditative state of mind.</p>
          <img src="/pics/artists/tommy.jpg" alt="Entitet" />
        </div>
        <div className="socials">
          <a href="https://www.youtube.com/watch?v=bkD0Yb-LJ5k&list=PLTkc4XTODssm7n2zTO3boDSDRhNpugGNe" target="_blank" rel="noreferrer"><img src="/pics/yt.png" alt="Youtube Logo" /><p>Youtube</p></a>
          <a href="https://www.instagram.com/entit.et/" target="_blank" rel="noreferrer"><img src="/pics/ig.png" alt="Instagram Logo" /><p>Instagram</p></a>
          <a href="https://www.facebook.com/entitet.official/" target="_blank" rel="noreferrer"><img src="/pics/fb.png" alt="Facebook Logo" /><p>Facebook</p></a>
          <a href="https://soundcloud.com/entitet" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Soundcloud Logo" /><p>Soundcloud</p></a>
          <a href="https://open.spotify.com/artist/2SlpLglhsJiThtBged5BL4" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Spotify Logo" /><p>Spotify</p></a>
          <a href="https://www.beatport.com/artist/entitet/681393" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div className="releases">
          <h3>Releases on Be Sure</h3>
          <div className="artworks">
            <a href="https://www.beatport.com/release/be-sure-selected-vol4/3201124" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE023.jpg" alt="Release Artwork of BESURE023" /><p>BESURE023</p></a>
            <a href="https://www.beatport.com/release/be-sure-selected-vol3/2348051" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE015.jpg" alt="Release Artwork of BESURE015" /><p>BESURE015</p></a>
            <a href="https://www.beatport.com/release/entitet/2263438" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE013.jpg" alt="Release Artwork of BESURE013" /><p>BESURE013</p></a>
          </div>
        </div>
      </div>
    </ArtistLayout>
  )
}

export default Entitet;
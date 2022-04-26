import ArtistLayout from "../../components/layouts/ArtistLayout";

function HuYang() {
  return (
    <ArtistLayout>
      <div className="artist">
        <h2>Hu Yang</h2>
        <div className="text-and-image">
          <p>Hu Yang was an early contributor of Be Sure. His debut release &apos;Xu Huai Ruo Guo&apos; sadly did not have any follow up release yet, but hopes dies last. Be Sure hopes to welcome Hu Yang back anytime soon.</p>
          <img src="/pics/artists/hu.jpg" alt="Hu Yang" />
        </div>
        <div className="socials">
          <a href="https://www.instagram.com/hu_ygaa/" target="_blank" rel="noreferrer"><img src="/pics/ig.png" alt="Instagram Logo" /><p>Instagram</p></a>
          <a href="https://www.facebook.com/huyangmusic/" target="_blank" rel="noreferrer"><img src="/pics/fb.png" alt="Facebook Logo" /><p>Facebook</p></a>
          <a href="https://www.facebook.com/huyangmusic/" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Soundcloud Logo" /><p>Soundcloud</p></a>
          <a href="https://open.spotify.com/artist/1QY4bYx7cy8ihWwR6iw3zw" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Spotify Logo" /><p>Spotify</p></a>
          <a href="https://www.beatport.com/artist/hu-yang/542313" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Beatport Logo" /><p>Beatport</p></a>
        </div>
        <div className="releases">
          <h3>Releases on Be Sure</h3>
          <div className="artworks">
            <a href="https://www.beatport.com/release/xu-huai-ruo-gu/1728253" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE007.jpg" alt="Release Artwork of BESURE007" /><p>BESURE007</p></a>
          </div>
        </div>
      </div>
    </ArtistLayout>
  )
}

export default HuYang;
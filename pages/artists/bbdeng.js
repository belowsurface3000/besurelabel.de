import ArtistLayout from "../../components/layouts/ArtistLayout";

function BbDeng() {

return (
  <ArtistLayout>
    <div className="artists">
          <div className="artist">
            <h2>BB Deng</h2>
            <div className="text-and-image">
              <p>Originating from Hong Kong, growing up in Taiwan and spending many years in Beijing, BB Deng made her big move to Berlin in 2018. After being one of the top artists and passionate event organizer in the chinese underground scene, BB Deng decided to leave it all behind and move to one of the epicenters of electronic music, the infamous techno city Berlin. Once arrived she immediately profited of the connections made in asia in the past few years, to become one of the lucky busy DJs. With gigs in Berlin&amp;s Kitkat Club, Golden Gate, Suicide Circus, aswell as techno trips to other european countries like Netherlands, Poland, Switzerland - to just name a few - and releases on various labels, BB Deng successfully established herself in Europe at a stunning pace.</p>
              <img src="/pics/artists/bb.jpg" alt="BB Deng" />
            </div>
            <div className="socials">
              <a href="https://www.youtube.com/user/djbbdeng" target="_blank" rel="noreferrer"><img src="/pics/yt.png" alt="Youtube Logo" /><p>Youtube</p></a>
              <a href="https://www.instagram.com/bb.deng.music/" target="_blank" rel="noreferrer"><img src="/pics/ig.png" alt="Instagram Logo" /><p>Instagram</p></a>
              <a href="https://www.facebook.com/DjBbDeng" target="_blank" rel="noreferrer"><img src="/pics/fb.png" alt="Facebook Logo" /><p>Facebook</p></a>
              <a href="https://soundcloud.com/djbbdeng" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Soundcloud Logo" /><p>Soundcloud</p></a>
              <a href="https://open.spotify.com/artist/4Z8XHVKqanfVvjA091etno" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Spotify Logo" /><p>Spotify</p></a>
              <a href="https://www.beatport.com/artist/bb-deng/597499" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Beatport Logo" /><p>Beatport</p></a>
            </div>
            <div className="releases">
              <h3>Releases on Be Sure</h3>
              <div className="artworks">
                <a href="https://www.beatport.com/release/be-sure-selected-vol4/3201124" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE023.jpg" alt="Release Artwork of BESURE023" /><p>BESURE023</p></a>
              </div>
            </div>
          </div>
        </div>
    </ArtistLayout>
  )
}

export default BbDeng;

import ArtistLayout from "../../components/layouts/ArtistLayout";

function BlackMirrorPark() {

  return (
    <ArtistLayout>
      <div className="artist">
        <h2>Black Mirror Park</h2>
        <div className="text-and-image">
            <p>Black Mirror Park looks back on half a decade DJ career that can be decribed to be mostly vinyl, sometimes digital and always techno. With sets at Berlin&apos;s ://about.blank, Arena Club, Mensch Meier, Hamburg&apos;s Rote Flora and the infamous Institut für Zukunft in Leipzig, Black Mirror Park performed at some of the most relevant venues for electronic music. Also to be mentioned is his gig at Sa Terza Metra Festival in Sardinia and his active participation at the collective Sonntagsinstitut, whom host and organize parties and political events and do festival bookings. Black Mirror Park joins Be Sure with melodic vibes and strong drums, a perfect addition to the fourth various artist compilation. Let&apos;s see if we will have an artist EP later on!</p>
            <img src="/pics/artists/erik.jpg" alt="Absorbed" />
        </div>
        <div className="socials">
            <a href="https://www.instagram.com/blackmirrorpark/" target="_blank" rel="noreferrer"><img src="/pics/ig.png" alt="Instagram Logo" /><p>Instagram</p></a>
            <a href="https://www.facebook.com/blackmirrorpark" target="_blank" rel="noreferrer"><img src="/pics/fb.png" alt="Facebook Logo" /><p>Facebook</p></a>
            <a href="https://soundcloud.com/blackmirrorpark" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Soundcloud Logo" /><p>Soundcloud</p></a>
            <a href="https://open.spotify.com/artist/1eW4AuZNhLEhKL4ZYkqUag" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Spotify Logo" /><p>Spotify</p></a>
            <a href="https://www.beatport.com/artist/black-mirror-park/931621" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Beatport Logo" /><p>Beatport</p></a>
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

export default BlackMirrorPark;
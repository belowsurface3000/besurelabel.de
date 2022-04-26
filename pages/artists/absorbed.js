import artistLayout from "../../components/layouts/artistLayout";

export default function absorbed() {

  return (
      <artistLayout>
        <div className="artists">
            <div className="artist">
                <h2>Absorbed</h2>
                <div className="text-and-image">
                    <p>Absorbed was the LIVE-project duo of Below Surface and Florian Bo in 2014 and 2015. Gigs in Tresor Berlin, Sugarfactory Amsterdam and the YinYang Festival at the Great Wall of China were definitly a huge fun.</p>
                    <img src="/pics/artists/absorbed.jpg" alt="Absorbed" />
                </div>
                <div className="socials">
                    <a href="https://www.youtube.com/watch?v=PwzkRUTl0fU" target="_blank" rel="noreferrer"><img src="/pics/yt.png" alt="Youtube Logo" /><p>Youtube</p></a>
                    <a href="https://www.facebook.com/absorbedlive" target="_blank" rel="noreferrer"><img src="/pics/fb.png" alt="Facebook Logo" /><p>Facebook</p></a>
                    <a href="https://soundcloud.com/absorbedlive" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Soundcloud Logo" /><p>Soundcloud</p></a>
                    <a href="https://open.spotify.com/artist/2GS3NHSf7A4fymQtgRRKtb" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Spotify Logo" /><p>Spotify</p></a>
                    <a href="https://www.beatport.com/artist/absorbed/451023" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Beatport Logo" /><p>Beatport</p></a>
                </div>
                <div className="releases">
                    <h3>Releases on Be Sure</h3>
                    <div className="artworks">
                        <a href="https://www.beatport.com/release/introduction-ep/2845447" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE020.jpg" alt="Release Artwork of BESURE020" /><p>BESURE020</p></a>
                        <a href="https://www.beatport.com/release/be-sure-selected-vol2/1819156" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE009.jpg" alt="Release Artwork of BESURE009" /><p>BESURE009</p></a>
                        <a href="https://www.beatport.com/release/be-pure/1515615" target="_blank" rel="noreferrer"><img src="/pics/artworks/BESURE001.jpg" alt="Release Artwork of BESURE001" /><p>BESURE001</p></a>
                    </div>
                </div>
            </div>
        </div>  
      </artistLayout>
    ) 
}

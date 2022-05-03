import Link from "next/link";

function Artists() {
  return (
    <main>
      <div className="artists">
        <h2>All Be Sure Artists</h2>
        <div className="faces">
          <Link href="/artists/absorbed"><a><img src="/pics/artists/absorbed.jpg" alt="Absorbed" /><p>Absorbed</p></a></Link>
          <Link href="/artists/artsdifficult"><a><img src="/pics/artists/elvis.jpg" alt="Art's Difficult" /><p>Art&apos;s Difficult</p></a></Link>
          <Link href="/artists/bbdeng"><a><img src="/pics/artists/bb.jpg" alt="BB Deng" /><p>BB Deng</p></a></Link>
          <Link href="/artists/belowsurface"><a><img src="/pics/artists/fabian.jpg" alt="Below Surface" /><p>Below Surface</p></a></Link>
          <Link href="/artists/blackmirrorpark"><a><img src="/pics/artists/erik.jpg" alt="Black Mirror Park" /><p>Black Mirror Park</p></a></Link>
          <Link href="/artists/chenku"><a><img src="/pics/artists/chen.jpg" alt="Chen Ku" /><p>Chen Ku</p></a></Link>
          <Link href="/artists/electricrescue"><a><img src="/pics/artists/antoine.jpg" alt="Electric Rescue" /><p>Electric Rescue</p></a></Link>
          <Link href="/artists/entitet"><a><img src="/pics/artists/tommy.jpg" alt="Entitet" /><p>Entitet</p></a></Link>
          <Link href="/artists/fntk"><a><img src="/pics/artists/fntk.jpg" alt="FNTK" /><p>FNTK</p></a></Link>
          <Link href="/artists/huyang"><a><img src="/pics/artists/hu.jpg" alt="Hu Yang" /><p>Hu Yang</p></a></Link>
          <Link href="/artists/mamwadi"><a><img src="/pics/artists/mamwadi.jpg" alt="Mamwadi" /><p>Mamwadi</p></a></Link>
          <Link href="/artists/miiia"><a><img src="/pics/artists/mia.jpg" alt="MIIIA" /><p>MIIIA</p></a></Link>
          <Link href="/artists/millerbosscher"><a><img src="/pics/artists/millerbosscher.jpg" alt="Miller &amp; Bosscher" /><p>Miller &amp; Bosscher</p></a></Link>
          <Link href="/artists/responder"><a><img src="/pics/artists/responder.jpg" alt="Responder" /><p>Responder</p></a></Link>
          <Link href="/artists/tekseven"><a><img src="/pics/artists/robin.jpg" alt="Tekseven" /><p>Tekseven</p></a></Link>
          <Link href="/artists/tension"><a><img src="/pics/artists/will.jpg" alt="Tension" /><p>Tension</p></a></Link>   
        </div>
      </div>
    </main>
  );
}

export default Artists;

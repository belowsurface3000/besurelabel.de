import Link from "next/link";

function Artists() {
  return <>
    <main>
      <div className="artists">
        <h2>All Be Sure Artists</h2>
        <div className="faces">
          <Link href="/absorbed"><a><img src="/pics/artists/absorbed.jpg" alt="Absorbed" /><p>Absorbed</p></a></Link>
          <Link href="/artsdifficult"><a><img src="/pics/artists/elvis.jpg" alt="Art's Difficult" /><p>Art's Difficult</p></a></Link>
          <Link href="/bbdeng"><a><img src="/pics/artists/bb.jpg" alt="BB Deng" /><p>BB Deng</p></a></Link>
          <Link href="/belowsurface"><a><img src="/pics/artists/fabian.jpg" alt="Below Surface" /><p>Below Surface</p></a></Link>
          <Link href="/blackmirrorpark"><a><img src="/pics/artists/erik.jpg" alt="Black Mirror Park" /><p>Black Mirror Park</p></a></Link>
          <Link href="/chenku"><a><img src="/pics/artists/chen.jpg" alt="Chen Ku" /><p>Chen Ku</p></a></Link>
          <Link href="/electricrescue"><a><img src="/pics/artists/antoine.jpg" alt="Electric Rescue" /><p>Electric Rescue</p></a></Link>
          <Link href="/entitet"><a><img src="/pics/artists/tommy.jpg" alt="Entitet" /><p>Entitet</p></a></Link>
          <Link href="/fntk"><a><img src="/pics/artists/fntk.jpg" alt="FNTK" /><p>FNTK</p></a></Link>
          <Link href="/huyang"><a><img src="/pics/artists/hu.jpg" alt="Hu Yang" /><p>Hu Yang</p></a></Link>
          <Link href="/mamwadi"><a><img src="/pics/artists/mamwadi.jpg" alt="Mamwadi" /><p>Mamwadi</p></a></Link>
          <Link href="/miiia"><a><img src="/pics/artists/mia.jpg" alt="MIIIA" /><p>MIIIA</p></a></Link>
          <Link href="/millerbosscher"><a><img src="/pics/artists/millerbosscher.jpg" alt="Miller & Bosscher" /><p>Miller & Bosscher</p></a></Link>
          <Link href="/responder"><a><img src="/pics/artists/responder.jpg" alt="Responder" /><p>Responder</p></a></Link>
          <Link href="/tekseven"><a><img src="/pics/artists/robin.jpg" alt="Tekseven" /><p>Tekseven</p></a></Link>
          <Link href="/tension"><a><img src="/pics/artists/will.jpg" alt="Tension" /><p>Tension</p></a></Link>   
        </div>
      </div>
    </main>
  </>;
}

export default Artists;

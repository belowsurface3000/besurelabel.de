import Link from "next/link";

function Footer() {
    return (
        <footer>
            <div className="content">
                <h1>Reached the end!</h1>
                <div className="links">
                    <Link href="/releases"><a>Releases</a></Link>
                    <Link href="/artists"><a>Artists</a></Link>
                    <Link href="/videos"><a>Videos</a></Link>
                    <Link href="/supporters"><a>Supporters</a></Link>
                    <Link href="/downloads"><a>Downloads</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                </div>
            </div>
            <div className="bottom">
                <div className="links">
                    <Link href="/impressum"><a>Impressum</a></Link>
                    <Link href="/promos"><a>|</a></Link>
                    <Link href="/datenschutz"><a>Datenschutz</a></Link>
                </div>    
                <p>(c) 2022 <a href="https://belowsurface.de" target="_blank" rel="noreferrer">Below Surface Medien</a></p>
            </div>
        </footer>
    )
}

export default Footer;

import Head from "next/head";

function Header() {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
            <meta name="description" content="Quality Techno and Ambient from Bonn. International artists, great supporters and state of the art music." />
            <meta name="keywords" content="Techno, Ambient, Music, Bonn" />
            <meta name="author" content="Below Surface" />
            <meta property="og:image" content="/pics/thumb-img.png" />
            <meta property="og:url" content="https://besurelabel.de" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Be Sure - the Techno and Ambient Label from Bonn" />
            <meta property="og:description" content="Quality music from Bonn's underground. International artists, respectable supporters and state of the art music." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="referrer" content="origin" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon" href="/pics/custom-icon.png" />
            <title>Be Sure | Techno &amp; Ambient Music</title>
        </Head>
    )
}

export default Header;
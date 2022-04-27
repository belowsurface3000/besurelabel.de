import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allReducers } from "../store/reducers/allReducers"
import "../styles/style.scss";
import Head from "next/head"
import Navigation from "../components/Navigation"
import NavigationButton from "../components/NavigationButton";
import Background from '../components/Background';
import CookieBanner from '../components/CookieBanner';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const myStore = createStore(allReducers, composeWithDevTools());

function App({ Component, pageProps }) {
  return (
    <Provider store={myStore}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <meta name="description" content="Quality Techno and Ambient from Bonn. International artists, great supporters and state of the art music." />
        <meta name="keywords" content="Techno, Ambient, Music, Bonn" />
        <meta name="author" content="Below Surface" />
        <meta property="og:image" content="/pics/thumb-img.png" />
        <meta property="og:url" content="https://besurelabel.de" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Be Sure - the Techno and Ambient Label from Berlin" />
        <meta property="og:description" content="Quality music from Berlin's underground. International artists, respectable supporters and state of the art music." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/pics/custom-icon.png" />
        <title>Be Sure | Techno &amp; Ambient Music</title>
      </Head>

      <Background />

      <CookieBanner />
      
      <Navigation />
      <NavigationButton />

      <Component {...pageProps} />

      <Footer />

    </Provider>
  )
}

export default App
import { useDispatch, useSelector } from 'react-redux';
import { acceptCookies } from "../store/actions/usersActions";
import ReleaseList from "./releaseList.json";
import LazyLoad from "../components/Lazyload";
import { useEffect, useRef, useState } from 'react';

function Releases() {

    // redux part
    const dispatch = useDispatch();
    const cookiesAccepted = (useSelector((state) => state.usersReducer.cookies));
    const confirmCookies = () => {
        dispatch(acceptCookies());
        localStorage.setItem("acceptedCookies", "true");
    };
    // redux end

    // Custom hook "LazyLoad"
    const iframeRef = useRef();
    const iframeRefValue = LazyLoad(iframeRef);
    const [isIframeRef, setIsIframeRef] = useState(false);
    useEffect(() => {
        if (!isIframeRef) setIsIframeRef(iframeRefValue);
    }, [iframeRefValue]);

    
   


    return <>
        <div className="logo">
            <img src="/pics/logo-shadow.png" alt="Be Sure Logo" />
        </div>
        <main>
        <div className="releases" id="releases">
            {/* LEFT BOX */}
            <div className="left">
            {/* SIDE RELEASE NAVIGATION */}
                <div className="release-navigation">
                    <a href="#25" className="sidenav-item">BESURE025</a>
                    <a href="#24" className="sidenav-item">BESURE024</a>
                    <a href="#23" className="sidenav-item">BESURE023</a>
                    <a href="#22" className="sidenav-item">BESURE022</a>
                    <a href="#21" className="sidenav-item">BESURE021</a>
                    <a href="#20" className="sidenav-item">BESURE020</a>
                    <a href="#19" className="sidenav-item">BESURE019</a>
                    <a href="#18" className="sidenav-item">BESURE018</a>
                    <a href="#17" className="sidenav-item">BESURE017</a>
                    <a href="#16" className="sidenav-item">BESURE016</a>
                    <a href="#15" className="sidenav-item">BESURE015</a>
                    <a href="#14" className="sidenav-item">BESURE014</a>
                    <a href="#13" className="sidenav-item">BESURE013</a>
                    <a href="#12" className="sidenav-item">BESURE012</a>
                    <a href="#11" className="sidenav-item">BESURE011</a>
                    <a href="#10" className="sidenav-item">BESURE010</a>
                    <a href="#9" className="sidenav-item">BESURE009</a>
                    <a href="#8" className="sidenav-item">BESURE008</a>
                    <a href="#7" className="sidenav-item">BESURE007</a>
                    <a href="#6" className="sidenav-item">BESURE006</a>
                    <a href="#5" className="sidenav-item">BESURE005</a>
                    <a href="#4" className="sidenav-item">BESURE004</a>
                    <a href="#3" className="sidenav-item">BESURE003</a>
                    <a href="#2" className="sidenav-item">BESURE002</a>
                    <a href="#1" className="sidenav-item">BESURE001</a>
                </div>
            </div>

            {/* CENTER BOX */}
            <div className="center">
                <h2>Releases on Be Sure</h2>
                {
                    ReleaseList.map(item => {
                    return  <div className="release" key={item.id} id={item.id}>
                                <div className="meta">
                                    <p>{item.catalogueNumber}</p>
                                    <p>{item.releaseArtist} - {item.releaseName}</p>
                                    <p>{item.releaseDate}</p>
                                </div>
                                <p>{item.releaseDescription}</p>
                                <div className="links">
                                    <a href={item.beatportLink} target="_blank" rel="noreferrer">Beatport</a>
                                    <a href={item.youtubeLink} target="_blank" rel="noreferrer">Youtube</a>
                                    <a href={item.spotifyLink} target="_blank" rel="noreferrer">Spotify</a>
                                </div>
                                {(cookiesAccepted) ?
                                    <>
                                        {item.iframeLarge === false ?
                                            <div className="iframe-container">
                                                <iframe title="Release Preview" src={item.soundcloudPreview}></iframe>
                                            </div>
                                        :
                                            <div className="iframe-container-large">
                                                <iframe title="Release Preview" className="iframe-large" src={item.soundcloudPreview}></iframe>
                                            </div>
                                        }
                                    </>
                                :
                                    <div className="iframe-without-cookies">
                                        <p>You have not accepted Cookies yet. To display the Soundcloud preview of this track, please accept Cookies first. Read more about Soundcloud Cookies here: <a href="https://soundcloud.com/pages/cookies">https://soundcloud.com/pages/cookies</a></p>
                                        <div className="buttons">
                                            <button className="accept-btn" onClick={confirmCookies}>Accept</button>
                                        </div>
                                    </div>
                                }
                            </div>
                    })
                }
            </div>{/* CLOSING RELEASES / CENTER BOX */}

            {/* RIGHT BOX */}
            <div className="right">
                {/* <p>Release Focus:</p>
                <div id="catNumber"></div>
                <div className="rightflexpicture" id="relArtistImage"></div>
                <div id="artistName"></div> */}
            </div>
            {/* CLOSING FLEX CONTAINER */}
        </div>
        </main>
    </>;
}

export default Releases;

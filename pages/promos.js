import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptCookies } from "../store/actions/usersActions";
import LazyLoad from "react-lazyload";
import { HashLink } from 'react-router-hash-link';
import ReleaseList from "./releaseList.json";

function Promos() {

    // redux part
    const dispatch = useDispatch();
    const cookiesAccepted = (useSelector((state) => state.userReducer.cookies));
    const confirmCookies = () => {
        dispatch(acceptCookies());
        localStorage.setItem("acceptedCookies", "true");
    };
    // redux end

    return <>
        <div className="logo">
            <img src="../pics/logo-shadow.png" alt="Be Sure Logo" />
        </div>
        <main>
            <div className="releases" id="releases">
                {/* LEFT BOX */}
                <div className="left">
                {/* SIDE RELEASE NAVIGATION */}
                    <div className="release-navigation">
                        <HashLink to="#25" className="sidenav-item">BESURE025</HashLink>
                        <HashLink to="#24" className="sidenav-item">BESURE024</HashLink>
                        <HashLink to="#23" className="sidenav-item">BESURE023</HashLink>
                        <HashLink to="#22" className="sidenav-item">BESURE022</HashLink>
                        <HashLink to="#21" className="sidenav-item">BESURE021</HashLink>
                        <HashLink to="#20" className="sidenav-item">BESURE020</HashLink>
                        <HashLink to="#19" className="sidenav-item">BESURE019</HashLink>
                        <HashLink to="#18" className="sidenav-item">BESURE018</HashLink>
                        <HashLink to="#17" className="sidenav-item">BESURE017</HashLink>
                        <HashLink to="#16" className="sidenav-item">BESURE016</HashLink>
                        <HashLink to="#15" className="sidenav-item">BESURE015</HashLink>
                        <HashLink to="#14" className="sidenav-item">BESURE014</HashLink>
                        <HashLink to="#13" className="sidenav-item">BESURE013</HashLink>
                        <HashLink to="#12" className="sidenav-item">BESURE012</HashLink>
                        <HashLink to="#11" className="sidenav-item">BESURE011</HashLink>
                        <HashLink to="#10" className="sidenav-item">BESURE010</HashLink>
                        <HashLink to="#9" className="sidenav-item">BESURE009</HashLink>
                        <HashLink to="#8" className="sidenav-item">BESURE008</HashLink>
                        <HashLink to="#7" className="sidenav-item">BESURE007</HashLink>
                        <HashLink to="#6" className="sidenav-item">BESURE006</HashLink>
                        <HashLink to="#5" className="sidenav-item">BESURE005</HashLink>
                        <HashLink to="#4" className="sidenav-item">BESURE004</HashLink>
                        <HashLink to="#3" className="sidenav-item">BESURE003</HashLink>
                        <HashLink to="#2" className="sidenav-item">BESURE002</HashLink>
                        <HashLink to="#1" className="sidenav-item">BESURE001</HashLink>
                    </div>
                </div>

                {/* CENTER BOX */}
                <div className="center">
                    <h2>Promotion Page</h2>
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
                                    <a href={item.downloadWav} target="_blank" rel="noreferrer">WAVE download</a>
                                    <a href={item.downloadMp3} target="_blank" rel="noreferrer">MP3 download</a>
                                </div>
                                {(cookiesAccepted) ?
                                    <LazyLoad once>
                                        {item.iframeLarge === false ?
                                            <div className="iframe-container">
                                                <iframe title="Release Preview" src={item.soundcloudPreview}></iframe>
                                            </div>
                                        :
                                            <div className="iframe-container-large">
                                                <iframe title="Release Preview" className="iframe-large" src={item.soundcloudPreview}></iframe>
                                            </div>
                                        }
                                    </LazyLoad>
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

export default Promos;

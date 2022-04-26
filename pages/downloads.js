import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptCookies } from '../store/actions/usersActions';

function Downloads() {

    // redux part
    const dispatch = useDispatch();
    const cookiesAccepted = (useSelector((state) => state.usersReducer.cookies));
    const confirmCookies = () => {
        dispatch(acceptCookies());
        localStorage.setItem("acceptedCookies", "true");
    };
    // redux end

    return <>
        <main>
            <div className="downloads">
                <h2>Downloads - all for free!</h2>

                <div className="download">
                    <div className="meta">
                        <p>BESURE002</p>
                        <p>Tension - Triebmensch EP</p>
                        <p>07/07/15</p>
                    </div>
                    <p>Tension is the one who delivers both, quality and quantity of techno with more than just a bit of passion and knowledge. Triebmensch EP is his debut release on Be Sure and includes five decent tracks from deep to peak, providing drop forged and hardened tools for DJ sets, no matter if warmup or peaktime.</p>
                    <div className="links">
                        <a href="https://besurelabel.de/promos/wav/BESURE002_Tension_-_Triebmensch_EP.zip" target="_blank" rel="noreferrer">WAVE download</a>
                        <a href="https://besurelabel.de/promos/mp3/BESURE002_Tension_-_Triebmensch_EP_%28mp3%29.zip" target="_blank" rel="noreferrer">MP3 download</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <div className="iframe-container">
                                <iframe title="Release Preview" className="iframe-large" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/109625662&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        </div>
                    :
                        <div className="iframe-without-cookies">
                            <p>You have not accepted Cookies yet. To display the Soundcloud preview of this track, please accept Cookies first. Read more about Soundcloud Cookies here: <a href="https://soundcloud.com/pages/cookies">https://soundcloud.com/pages/cookies</a></p>
                            <div className="buttons">
                                <button className="accept-btn" onClick={confirmCookies}>Accept</button>
                            </div>
                        </div>
                    }
                </div>

                <div className="download">
                    <div className="meta">
                        <p>0000</p>
                        <p>Mathew Jonson - Marionette (Below Surface Edit)</p>
                        <p>12/2014</p>
                    </div>
                    <p>Below Surface Edit of &apos;Mathew Jonson - Marionette&apos; - inspired by the edit of Adam Beyer, which i heared in the Drumcode Mix 173 from Berghain (Drumcode Total). Since i loved the idea of Adam, but couldn&apos;t find his edit anywhere, I decided to do one by myself.</p>
                    <div className="links">
                        <a href="https://besurelabel.de/promos/wav/Mathew_Jonson_-_Marionette_%28Below_Surface_Edit%29.zip" target="_blank" rel="noreferrer">WAVE download</a>
                        <a href="https://besurelabel.de/promos/mp3/Mathew_Jonson_-_Marionette_%28Below_Surface_Edit%29_mp3.zip" target="_blank" rel="noreferrer">MP3 download</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <div className="iframe-container">
                            <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177932926&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        </div>
                    :
                        <div className="iframe-without-cookies">
                            <p>You have not accepted Cookies yet. To display the Soundcloud preview of this track, please accept Cookies first. Read more about Soundcloud Cookies here: <a href="https://soundcloud.com/pages/cookies">https://soundcloud.com/pages/cookies</a></p>
                            <div className="buttons">
                                <button className="accept-btn">Accept</button>
                            </div>
                        </div>
                    }
                </div>

                <div className="download">
                    <div className="meta">
                        <p>0000</p>
                        <p>SHDW &amp; Obscure Shape - Die weisse Rose (Below Surface Edit)</p>
                        <p>2020</p>
                    </div>
                    <p>The Below Surface Edit of &apos;Die weisse Rose&apos; by SHDW &amp; Obscure Shape.</p>
                    <div className="links">
                        <a href="https://besurelabel.de/promos/wav/SHDW_%26_Obscure_Shape_-_Die_weisse_Rose_%28Below_Surface_Edit%29.zip" target="_blank" rel="noreferrer">WAVE download</a>
                        <a href="https://besurelabel.de/promos/mp3/SHDW_%26_Obscure_Shape_-_Die_weisse_Rose_%28Below_Surface_Edit%29_mp3.zip" target="_blank" rel="noreferrer">MP3 download</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <div className="iframe-container">
                            <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/816829729&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        </div>
                    :
                        <div className="iframe-without-cookies">
                            <p>You have not accepted Cookies yet. To display the Soundcloud preview of this track, please accept Cookies first. Read more about Soundcloud Cookies here: <a href="https://soundcloud.com/pages/cookies">https://soundcloud.com/pages/cookies</a></p>
                            <div className="buttons">
                                <button className="accept-btn">Accept</button>
                            </div>
                        </div>
                    } 
                </div>

                <div className="download">
                    <div className="meta">
                        <p>0000</p>
                        <p>Below Surface - Silence is Golden</p>
                        <p>2020</p>
                    </div>
                    <p>A trippy techno track with Vocals of Seth Troxler, taken from an Interview with Butch.</p>
                    <div className="links">
                        <a href="https://besurelabel.de/promos/wav/Below_Surface_-_Silence_is_Golden.zip" target="_blank" rel="noreferrer">WAVE download</a>
                        <a href="https://besurelabel.de/promos/mp3/Below_Surface_-_Silence_is_Golden_mp3.zip" target="_blank" rel="noreferrer">MP3 download</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <div className="iframe-container">
                            <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/817036753&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        </div>
                    :
                        <div className="iframe-without-cookies">
                            <p>You have not accepted Cookies yet. To display the Soundcloud preview of this track, please accept Cookies first. Read more about Soundcloud Cookies here: <a href="https://soundcloud.com/pages/cookies">https://soundcloud.com/pages/cookies</a></p>
                            <div className="buttons">
                                <button className="accept-btn">Accept</button>
                            </div>
                        </div>
                    }   
                </div>

                <div className="download">
                    <div className="meta">
                        <p>0000</p>
                        <p>Tension - EVP (Below Surface Remix)</p>
                        <p>2014</p>
                    </div>
                    <p>As played in the Tresor Livest of Absorbed in 2014: Below Surface Remix of Tension&apos;s EVP (unreleased).</p>
                    <div className="links">
                        <a href="https://besurelabel.de/promos/wav/Tension_-_EVP_%28Below_Surface_Remix%29.zip" target="_blank" rel="noreferrer">WAVE download</a>
                        <a href="https://besurelabel.de/promos/mp3/Tension_-_EVP_%28Below_Surface_Remix%29_%28mp3%29.zip" target="_blank" rel="noreferrer">MP3 download</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <div className="iframe-container">
                            <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/745866142&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        </div>
                    :
                        <div className="iframe-without-cookies">
                            <p>You have not accepted Cookies yet. To display the Soundcloud preview of this track, please accept Cookies first. Read more about Soundcloud Cookies here: <a href="https://soundcloud.com/pages/cookies">https://soundcloud.com/pages/cookies</a></p>
                            <div className="buttons">
                                <button className="accept-btn">Accept</button>
                            </div>
                        </div>
                    }    
                </div>

                <div className="download">
                    <div className="meta">
                        <p>0000</p>
                        <p>Florian Bo - Keep the Pressure (Below Surface Remix)</p>
                        <p>2015</p>
                    </div>
                    <p>Released on Underdub Recording in 2015.</p>
                    <div className="links">
                        <a href="https://besurelabel.de/promos/wav/Florian_Bo_-_Keep_the_Pressure_%28Below_Surface_Remix%29.zip" target="_blank" rel="noreferrer">WAVE download</a>
                        <a href="https://besurelabel.de/promos/mp3/Florian_Bo_-_Keep_the_Pressure_%28Below_Surface_Remix%29_%28mp3%29.zip" target="_blank" rel="noreferrer">MP3 download</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <div className="iframe-container">
                            <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228851504&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        </div>
                    :
                        <div className="iframe-without-cookies">
                            <p>You have not accepted Cookies yet. To display the Soundcloud preview of this track, please accept Cookies first. Read more about Soundcloud Cookies here: <a href="https://soundcloud.com/pages/cookies">https://soundcloud.com/pages/cookies</a></p>
                            <div className="buttons">
                                <button className="accept-btn">Accept</button>
                            </div>
                        </div>
                    } 
                </div>
            </div>
        </main>
    </>;
}

export default Downloads;

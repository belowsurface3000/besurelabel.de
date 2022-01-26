import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptCookies } from "../store/actions/usersActions";
import LazyLoad from "react-lazyload";
import { HashLink } from 'react-router-hash-link';

function Releases() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            <img src={require("../pics/logo-shadow.png")} alt="Be Sure Logo" />
        </div>
        <main>
        <div className="releases" id="releases">
            {/* LEFT BOX */}
            <div className="left">
            {/* SIDE RELEASE NAVIGATION */}
                <div className="release-navigation">
                    <HashLink to="#25" className="sidenav-item" data-anchor="25">BESURE025</HashLink>
                    <HashLink to="#24" className="sidenav-item" data-anchor="24">BESURE024</HashLink>
                    <HashLink to="#23" className="sidenav-item" data-anchor="23">BESURE023</HashLink>
                    <HashLink to="#22" className="sidenav-item" data-anchor="22">BESURE022</HashLink>
                    <HashLink to="#21" className="sidenav-item" data-anchor="21">BESURE021</HashLink>
                    <HashLink to="#20" className="sidenav-item" data-anchor="20">BESURE020</HashLink>
                    <HashLink to="#19" className="sidenav-item" data-anchor="19">BESURE019</HashLink>
                    <HashLink to="#18" className="sidenav-item" data-anchor="18">BESURE018</HashLink>
                    <HashLink to="#17" className="sidenav-item" data-anchor="17">BESURE017</HashLink>
                    <HashLink to="#16" className="sidenav-item" data-anchor="16">BESURE016</HashLink>
                    <HashLink to="#15" className="sidenav-item" data-anchor="15">BESURE015</HashLink>
                    <HashLink to="#14" className="sidenav-item" data-anchor="14">BESURE014</HashLink>
                    <HashLink to="#13" className="sidenav-item" data-anchor="13">BESURE013</HashLink>
                    <HashLink to="#12" className="sidenav-item" data-anchor="12">BESURE012</HashLink>
                    <HashLink to="#11" className="sidenav-item" data-anchor="11">BESURE011</HashLink>
                    <HashLink to="#10" className="sidenav-item" data-anchor="10">BESURE010</HashLink>
                    <HashLink to="#9" className="sidenav-item" data-anchor="9">BESURE009</HashLink>
                    <HashLink to="#8" className="sidenav-item" data-anchor="8">BESURE008</HashLink>
                    <HashLink to="#7" className="sidenav-item" data-anchor="7">BESURE007</HashLink>
                    <HashLink to="#6" className="sidenav-item" data-anchor="6">BESURE006</HashLink>
                    <HashLink to="#5" className="sidenav-item" data-anchor="5">BESURE005</HashLink>
                    <HashLink to="#4" className="sidenav-item" data-anchor="4">BESURE004</HashLink>
                    <HashLink to="#3" className="sidenav-item" data-anchor="3">BESURE003</HashLink>
                    <HashLink to="#2" className="sidenav-item" data-anchor="2">BESURE002</HashLink>
                    <HashLink to="#1" className="sidenav-item" data-anchor="1">BESURE001</HashLink>
                </div>
            </div>

            {/* CENTER BOX */}
            <div className="center">
                <h2>Releases on Be Sure</h2>

                <span className="anchor" id="25"></span>
                <div className="release" id="article25" data-anchor="25">
                    <div className="meta">
                        <p>BESURE025</p>
                        <p>Below Surface - 25</p>
                        <p>06/06/21</p>
                    </div>
                    <p>The 25th release on Be Sure is provided by label owner Below Surface himself. Named after its catalogue number, 25 contains three ambient and two techno originals and is produced in the well known Below Surface aesthetics: From deep to peak, multidimensional and intended for various occasions, from dance to trance.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/25/3392543" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=5nbD3V1bTro&list=PLTkc4XTODssmpwgdy6oscHPDzXg8wcOBL" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/07n66U39XaBfwuFnllf7D7" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ?
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1032438718&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="24"></span>
                <div className="release" id="article24" data-anchor="24">
                    <div className="meta">
                        <p>BESURE024</p>
                        <p>FNTK - Metamorfose EP</p>
                        <p>04/04/21</p>
                    </div>
                    <p>With Metamorfose EP the Lisbon based FNTK makes his Be Sure debut in 2021. The included two original tracks Memorias and Tempo - the portugese words for memories and time - may be described as a pleasant interaction of ambient and techno. Besides the newly joined artist Be Sure also celebrates another debut with this EP: Remixes. Below Surface and Tension share the honor to each provide a remix for one of FNTK's tracks.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/metamorfose-ep/3316896" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=dG_a6l7W1T0" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/7ovz7jp2rfVwbK0AchXWTM" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ?
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/982777834&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                
                <span className="anchor" id="23"></span>
                <div className="release" id="article23" data-anchor="23">
                    <div className="meta">
                        <p>BESURE023</p>
                        <p>VA - Be Sure Selected Vol.4</p>
                        <p>12/12/20</p>
                    </div>
                    <p>In the final days of 2020 Be Sure proudly presents the fourth various artists compilation on the label. Gathering four new artists alongside three established ones, the compilation brings together influences and inspirations from Sweden, Netherlands, China and Germany. Besides the Be Sure main contributors Tension and Below Surface, the also familiar Entitet followed the call for participation. Newly signed are the Berlin based Mamwadi, Black Mirror Park and BB Deng, as well as Miller & Bosscher from the Netherlands. Dave Miller is known for being half of the Abstract Division duo and a long term supporter of Be Sure. We are happy to welcome him and everyone on the label. The compilation tracks range from ambient, deep to peaktime techno.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/be-sure-selected-vol-4/3201124" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=Ayczj3FWrJ8&list=PLTkc4XTODssmHI5V5a9HFd0zNSOib9rA9" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/6TyZcO6kcTGFZBLJkXbub4" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/902622715&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="22"></span>
                <div className="release" id="article22" data-anchor="22">
                    <div className="meta">
                        <p>BESURE022</p>
                        <p>Electric Rescue - 9 Hours EP</p>
                        <p>06/06/20</p>
                    </div>
                    <p>On the occasion of his debut on Be Sure, Electric Rescue serves four well crafted dancefloor tracks. 9 Hours EP is an homage to the average duration of a nightlife event. As a veteran DJ and producer with roughly three decades of experience, rest assured that Electric Rescue is an authority on these 9 hour magical journeys. This release encapsulates not only years of experience but also an unrelenting passion for techno and its loyal followers all over the world.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/9-hours-ep/2964729" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=1bcSiqAzQOc&list=PLTkc4XTODssnec_h21eDedEb_wvRQ8kxn" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/0X4MNT7gRZW4sMPI805psv" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/786965596&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="21"></span>
                <div className="release" id="article21" data-anchor="21">
                    <div className="meta">
                        <p>BESURE021</p>
                        <p>Below Surface - Transitions and Transmissions</p>
                        <p>04/04/21</p>
                    </div>
                    <p>Below Surface once again returned from the far off orbits in quest for inspirations to his new ambient release. Compiled of a variety of darker and brighter sounds, Transitions and Transmissions contains soundscapes for both nightmares and meditations. As usual on Be Sure the presented ambient sounds can be enjoyed as single tracks or be played in DJ sets.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/transitions-and-transmissions/2883978" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=FKSx6KfB5pM&list=PLTkc4XTODssmw1hZlEWV5blfWyEnJN8wz" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/0uUeAAa6VJhWoVqrgr5Ev1" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/769129450&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>   
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

                <span className="anchor" id="20"></span>
                <div className="release" id="article20" data-anchor="20">
                    <div className="meta">
                        <p>BESURE020</p>
                        <p>Absorbed - Introduction EP</p>
                        <p>20/02/20</p>
                    </div>
                    <p>Introduction EP was the kick-off release by Below Surface and Florian Bo, teamed up as Absorbed in 2014. First released on another imprint, it was time to come home and be part of the Be Sure catalogue in 2020. This EP is still very popular today and is getting hundreds of views every week via the liveset recording of Absorbed's gig in Tresor Berlin. We are excited to see if this EP will still be pumping strong for another five years.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/introduction-ep/2845447" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=OgjKxRT9iII&list=PLTkc4XTODssmZ3ZDX4iv9gAKBTtDbos-e" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/7IeFTvrxR3hS5pCRYjYrFV" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/751023535&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="19"></span>
                <div className="release" id="article19" data-anchor="19">
                    <div className="meta">
                        <p>BESURE019</p>
                        <p>Below Surface - Archives EP</p>
                        <p>12/12/19</p>
                    </div>
                    <p>Below Surface closes the year with yet another techno and ambient EP on Be Sure. The five track compilation consists of an ambient opening track, three dancefloor cuts and one additional ambient version of one of the dancefloor tracks. With Archives EP Be Sure proudly presents its ninetheenth release, to be a worthy addition to the catalogue.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/archives-ep/2781302" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=N7AByRP1V6o&list=PLTkc4XTODssl-90Ybl4YGD9v_tNZJ_YkN" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/7zoqtESVCn7iAiKAEhLUEP" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/710576053&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>  
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

                <span className="anchor" id="18"></span>
                <div className="release" id="article18" data-anchor="18">
                    <div className="meta">
                        <p>BESURE018</p>
                        <p>Below Surface - Be Sure</p>
                        <p>04/04/19</p>
                    </div>
                    <p>Berlin based Below Surface is back on Be Sure with another five track EP in April 2019. BESURE018 carries the same name as the label and provides a well balanced mix of ambient, dub and techno sounds. As usual the music was made to function in various environments, may it be on the dancefloor or in private spaces.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/be-sure/2540660" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=XzlhaMmMzGo&list=PLTkc4XTODsskndgoApyZXm-9i4oyaBY4M" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/5twHA53KgKAWggoaimRNrV?si=q5_UJ618TyKh_nLqTg52oQ&nd=1" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/584347647&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="17"></span>
                <div className="release" id="article17" data-anchor="17">
                    <div className="meta">
                        <p>BESURE017</p>
                        <p>Tension - Currents</p>
                        <p>02/02/19</p>
                    </div>
                    <p>Tension is highly appreciated for his music of high quality and quantity. After several releases on well established techno labels in 2018, Tension is back on Be Sure in early 2019 with his second album named Currents. The ten tracks are artistic mixes of profound and serious sample and synthesizer sounds, refined with wide stereo field noises and small vocal cuts. This album provides the typical Be Sure kind of sound, to be played on dancefloors and at home.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/currents/2483042" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=ggHRowOJ9zo&list=PL374wKZNt3L6tDZaBOOF2LHvHzcCpaI5O" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/1ZOqFpzz6vCODe2CaM29WY?si=TeaWMdV_QtSyYtbtbIlajw&nd=1" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/546855471&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="16"></span>
                <div className="release" id="article16" data-anchor="16">
                    <div className="meta">
                        <p>BESURE016</p>
                        <p>Below Surface - Depths of Sound</p>
                        <p>12/12/18</p>
                    </div>
                    <p>Surfacing after a long expedition into the depths of sound, Below Surface presents his second album to the conscious world. Bundling techno and ambient music, the album provides a mix of dancefloor tracks and home-listening material. Well balanced interactions of sharp hihats and muffled kickdrums, layered with trippy atmospheric sounds and field recordings, this release is a respectable addition to the Be Sure catalogue.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/depths-of-sound/2447832" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=ouRPI9xR8XI&list=PLTkc4XTODssk6Vd5yqbF9j2dF_2yGBV4w" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/0BqS2yq2SUQ5a88YwyV6LI?si=CFJhwO8vQn-RU5zk51xhFw&nd=1" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">    
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/523698384&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="15"></span>
                <div className="release" id="article15" data-anchor="15">
                    <div className="meta">
                        <p>BESURE015</p>
                        <p>VA - Be Sure Selected Vol.3</p>
                        <p>08/08/18</p>
                    </div>
                    <p>Xiamen, Shanghai and Berlin based artists Chen Ku, MIIIA, Entitet and Below Surface team up for Be Sure Selected Vol.3. The fifteenth release on Be Sure is a five track compilation of ambient and techno music that provides a balanced mix of mesmerizing patterns, solid drums and sophisticated atmospheres.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/be-sure-selected-vol-3/2348051" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=yfDkv5TC6gg&list=PLTkc4XTODssnfEU98kqy24tOQ5EsgtCnO" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/0RvciHjO10ct01VSCJ4nYN" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/468133401&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="14"></span>
                <div className="release" id="article14" data-anchor="14">
                    <div className="meta">
                        <p>BESURE014</p>
                        <p>Below Surface & Tension - Waves and Particles</p>
                        <p></p>
                    </div>
                    <p>In shattered waves, frequencies are passing by. Transmitted by particles, information arrives. Distorted and corrupted, yet making sense. Constantly sending. Constantly receiving.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/waves-and-particles/2296716" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=TpNgl5v51qY&list=PLTkc4XTODssk6WDB4HLnnq_e53ZKPda8X" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/0pTZtIWiqlLOuKexAcFRWA" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/433459611&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="13"></span>
                <div className="release" id="article13" data-anchor="13">
                    <div className="meta">
                        <p>BESURE013</p>
                        <p>Entitet - Entitet</p>
                        <p>04/04/18</p>
                    </div>
                    <p>Entitet makes his Be Sure debut with five unique tracks. Deep yet impulsive, Entitet provides an emotional journey through mesmerizing atmospheres and evolving rhythms, truly refined with its very own signature sound.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/entitet/2263438" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=bkD0Yb-LJ5k&list=PLTkc4XTODssm7n2zTO3boDSDRhNpugGNe" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/026vv14fXErvKGoq1SuBeP" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/406625631&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="12"></span>
                <div className="release" id="article12" data-anchor="12">
                    <div className="meta">
                        <p>BESURE012</p>
                        <p>Below Surface - On the Run</p>
                        <p>02/02/18</p>
                    </div>
                    <p>Below Surface kicks off 2018 with another five track EP on his very own Be Sure imprint. The release contains three spacey ambient tunes and two dancefloor bangers, providing decent sounds to trip out or to shake the dancefloor with.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/on-the-run/2196603" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=0EspDfohHQo&list=PLTkc4XTODsslliJARCTm1bxaD9pT94p0f" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/3Mseez07RRmK3bNsH9qzkx" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/377847773&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="11"></span>
                <div className="release" id="article11" data-anchor="11">
                    <div className="meta">
                        <p>BESURE011</p>
                        <p>Below Surface & Tension - Advanced State</p>
                        <p>12/12/17</p>
                    </div>
                    <p>Below Surface and Tension have developed their music careers closely intertwined over the past few years. Influencing each another contineously, collaborations between the two had happened but now for the first time have led to a full EP. With Advanced State released on Be Sure, the imprint awakes from its one year sleep and brings five originals to continue the saga. The balanced mix of dub, ambient and dancefloor material provides rich sounds for various occasions.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/advanced-state/2167793" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=pIbK4TDiUvg&list=PLTkc4XTODssm3xwpH-JZ6AcAxcdR2LudO" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/7d7UrgYvjOaQK3ipc1gXom" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/361646552&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="10"></span>
                <div className="release" id="article10" data-anchor="10">
                    <div className="meta">
                        <p>BESURE010</p>
                        <p>Below Surface - Escaping the Void</p>
                        <p>10/10/16</p>
                    </div>
                    <p>Be Sure's tenth release comes from its founder Below Surface himself. The first techno EP after his album from 2015 is compiled with original tracks made in the past three years including many sounds and inspirations from his time spent in Asia and Germany. Revealed by a profound ambient track, this release comes with four more dance-floor tracks from the deep to the peak.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/escaping-the-void/1859166" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=LEWNJ5LvF8Q&list=PLTkc4XTODsslu7Cp-irKEOragwtc67eHh" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/1h6ARjYJ04F9FFTi5i8dCn" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280718498&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="9"></span>
                <div className="release" id="article9" data-anchor="9">
                    <div className="meta">
                        <p>BESURE009</p>
                        <p>VA - Be Sure Selected Vol.2</p>
                        <p>08/08/16</p>
                    </div>
                    <p>for the ninth release of the label, Below Surface once again gathered his fellow friends to create this second various artists compilation. New face MIIIA from Shanghai not only reinforces Be Sure's connection to China but also represents the first female artist on the imprint. Rounded up by quality tracks from Tekseven, Absorbed and Below Surface, this release can be danced with in various moods.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/be-sure-selected-vol-2/1819156" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=91ztvPXMc10&list=PLTkc4XTODsslXlT0nMB9I96H39OB7H86d" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/4Nkdnoa7QAlZZTY4CMBf7S" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/271359292&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="8"></span>
                <div className="release" id="article8" data-anchor="8">
                    <div className="meta">
                        <p>BESURE008</p>
                        <p>Tension - Tension</p>
                        <p></p>
                    </div>
                    <p>Back on Be Sure, Tension proudly presents his first techno long player. The same named solo release is the fruit of Tension's time in the studio and it represents his personality as well as the identity of Be Sure. Based on his idiosyncratic sound and track designs, Tension creates atmospheric layers of sound, scapes and rhythms, spaced out modulations and patterns to guide one through an orbital journey. Not only for the club, but also for the mind, this album brings tracks from deep to peak and it is what techno may sound like in 2016.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/tension/1771625" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=Eu5a8RZC9-I&list=PLTkc4XTODssm5280kNnfVl-futK578hro" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/2T060kGmGjPG5CxfC21JI1" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/260623456&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="7"></span>
                <div className="release" id="article7" data-anchor="7">
                    <div className="meta">
                        <p>BESURE007</p>
                        <p>Hu Yang - Xu Huai Ruo Gu</p>
                        <p>04/04/16</p>
                    </div>
                    <p>Xu Huai Ruo Gu - have a mind as open as a valley.<br/>Reinforcing the connection between Be Sure and Asia, China's Hu Yang makes his debut on the label with a solid five track EP. Inspired by the traditional culture of the modernizing country, Hu Yang succeeds to combine heavy drums with smoother elements and creates quality moments in all his tracks - making them a perfect addition to the Be Sure catalogue.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/xu-huai-ruo-gu/1728253" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=I52-l4OORNo&list=PLTkc4XTODsslKiVs20KxK3WxbSBUO5CDR" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/artist/1QY4bYx7cy8ihWwR6iw3zw" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/245608958&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="6"></span>
                <div className="release" id="article6" data-anchor="6">
                    <div className="meta">
                        <p>BESURE006</p>
                        <p>Tekseven - Time Lord EP</p>
                        <p>02/02/16</p>
                    </div>
                    <p>Based in Northern Ireland's Belfast, Tekseven is the next creative allrounder to join Be Sure. The five track Time Lord EP includes a selection of smoother warmup sounds and energetic peak time tracks - made up of blips and blops, cinematic elements and heavy drums - mostly inspired by science fiction movies and tv shows.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/time-lord-ep/1686647" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=FWkbLvpq0cg&list=PLTkc4XTODssnbccykzbb-9HR2F9JYnnwH" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/1YhjSjl44168NYYxkm0Gu4" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/239192500&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="5"></span>
                <div className="release" id="article5" data-anchor="5">
                    <div className="meta">
                        <p>BESURE005</p>
                        <p>Below Surface - Waves from the Past</p>
                        <p>12/12/15</p>
                    </div>
                    <p>After a successful first year, Be Sure closes 2015 with its fifth release. Once again label founder Below Surface takes over and delivers his next five track EP. Inspired by the happenings of leaving Asia and departing back to Europe, this ambient release provides atmospheric rhythms without drums - perfect for the beginning or ending of a set, or for the pure listening experience.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/waves-from-the-past/1654450" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=KxUvZbHPHuM&list=PLTkc4XTODssn0GyyIsdQWkmDqT57t_XdN" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/1sG17MSw5Axus7AryJ1ep1" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/231638549&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="4"></span>
                <div className="release" id="article4" data-anchor="4">
                    <div className="meta">
                        <p>BESURE004</p>
                        <p>VA - Be Sure Selected Vol.1</p>
                        <p>11/11/15</p>
                    </div>
                    <p>Be Sure Selected Vol.1 is the first various artists compilation on Be Sure. for the fourth release of the label, Below Surface invited Tension, Responder and Art's Difficult to submit their ideas of modern techno. As the result Be Sure presents the next quality publication by ambitious artists from Germany and China.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/be-sure-selected-vol-1/1634592" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=WMVmz5bXi-k&list=PLTkc4XTODsskLJZ90Wk7MNkhL-MpCgYWu" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/33pCItKslIeegPZSgr5pL2" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/227325772&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="3"></span>
                <div className="release" id="article3" data-anchor="3">
                    <div className="meta">
                        <p>BESURE003</p>
                        <p>Below Surface - Below Surface</p>
                        <p>09/09/15</p>
                    </div>
                    <p>Being no book, but telling a story Below Surface is the debut album of the same named German artist. Based in China for one year he found himself surrounded by fragments of ancient Asian cultures mixed with ultra modern societies. On expeditions throughout East Asia, Below Surface discovered ShanShui, a traditional Chinese style of painting which represents a steady and peaceful drawn image of landscape, often mountains that nonetheless provide an idea of immense restrained power. Eleven track album Below Surface is the massive outcome of elapsed time and applied potential, containing strong drums and basslines, partially paired with smoother sounds from synthesizers and field-recorders. Summed up: Unobtrusive but steady and powerful, like a mountain covered in fog.</p>
                    <div className="links" id="BESURE002">
                        <a href="https://www.beatport.com/release/below-surface/1591854" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=eKl9WVmIP6o&list=PLTkc4XTODssnwjXREO5EhCeS7HKalNFKF" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/2wKo7MY8tMVmxLInrvJajz" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container">
                                <iframe title="Release Preview" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/217639742&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

                <span className="anchor" id="2"></span>
                <div className="release" id="article2" data-anchor="2">
                    <div className="meta">
                        <p>BESURE002</p>
                        <p>Tension - Triebmensch EP</p>
                        <p>07/07/15</p>
                    </div>
                    <p>Tension is the one who delivers both, quality and quantity of techno with more than just a bit of passion and knowledge. Triebmensch EP is his debut release on Be Sure and includes five decent tracks from deep to peak, providing drop forged and hardened tools for DJ sets, no matter if warmup or peaktime.</p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/triebmensch-ep/1554123" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=JBgPUHLcob8&list=PLTkc4XTODsskU1r9UD6hHFKAWz19W7m-7" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/54Y1LQuwlLCl7v0nZmEzQR" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad className="iframe-container-large" once>
                            <iframe title="Release Preview" className="iframe-large" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/109625662&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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

                <span className="anchor" id="1"></span>
                <div className="release" id="article1" data-anchor="1">
                    <div className="meta">
                        <p>BESURE001</p>
                        <p>Absorbed - Be Pure</p>
                        <p>05/05/15</p>
                    </div>
                    <p>After the first peaktime-techno release the second publication of Absorbed provides again the heavy, intelligent and dancefloor approved basslines of the first EP, but now introduces a slightly different sound, including more atmospheric and melodic charactaristics - designed to create epic moments in LIVE- and DJsets. </p>
                    <div className="links">
                        <a href="https://www.beatport.com/release/be-pure/1515615" target="_blank" rel="noreferrer">Beatport</a>
                        <a href="https://www.youtube.com/watch?v=9XNQGo4e9RE&list=PLTkc4XTODssnV2o1s-E7s_0zq2NJ5RFSm" target="_blank" rel="noreferrer">Youtube</a>
                        <a href="https://open.spotify.com/album/4t60vn6vxlJZVzJ3bO8C6k" target="_blank" rel="noreferrer">Spotify</a>
                    </div>
                    {(cookiesAccepted) ? 
                        <LazyLoad once>
                            <div className="iframe-container-large">
                                <iframe title="Release Preview" className="iframe-large" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/109624346&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
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

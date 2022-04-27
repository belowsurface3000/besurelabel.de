import { useDispatch, useSelector } from 'react-redux';
import { acceptCookies } from "../store/actions/usersActions";
import ReleaseList from "./releaseList.json";
import Link from 'next/link';

function Promos() {

    // redux part
    const dispatch = useDispatch();
    const cookiesAccepted = (useSelector((state) => state.usersReducer.cookies));
    const confirmCookies = () => {
        dispatch(acceptCookies());
        localStorage.setItem("acceptedCookies", "true");
    };
    // redux end

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
                        <Link href="#25" className="sidenav-item"><a>BESURE025</a></Link>
                        <Link href="#24" className="sidenav-item"><a>BESURE024</a></Link>
                        <Link href="#23" className="sidenav-item"><a>BESURE023</a></Link>
                        <Link href="#22" className="sidenav-item"><a>BESURE022</a></Link>
                        <Link href="#21" className="sidenav-item"><a>BESURE021</a></Link>
                        <Link href="#20" className="sidenav-item"><a>BESURE020</a></Link>
                        <Link href="#19" className="sidenav-item"><a>BESURE019</a></Link>
                        <Link href="#18" className="sidenav-item"><a>BESURE018</a></Link>
                        <Link href="#17" className="sidenav-item"><a>BESURE017</a></Link>
                        <Link href="#16" className="sidenav-item"><a>BESURE016</a></Link>
                        <Link href="#15" className="sidenav-item"><a>BESURE015</a></Link>
                        <Link href="#14" className="sidenav-item"><a>BESURE014</a></Link>
                        <Link href="#13" className="sidenav-item"><a>BESURE013</a></Link>
                        <Link href="#12" className="sidenav-item"><a>BESURE012</a></Link>
                        <Link href="#11" className="sidenav-item"><a>BESURE011</a></Link>
                        <Link href="#10" className="sidenav-item"><a>BESURE010</a></Link>
                        <Link href="#9" className="sidenav-item"><a>BESURE009</a></Link>
                        <Link href="#8" className="sidenav-item"><a>BESURE008</a></Link>
                        <Link href="#7" className="sidenav-item"><a>BESURE007</a></Link>
                        <Link href="#6" className="sidenav-item"><a>BESURE006</a></Link>
                        <Link href="#5" className="sidenav-item"><a>BESURE005</a></Link>
                        <Link href="#4" className="sidenav-item"><a>BESURE004</a></Link>
                        <Link href="#3" className="sidenav-item"><a>BESURE003</a></Link>
                        <Link href="#2" className="sidenav-item"><a>BESURE002</a></Link>
                        <Link href="#1" className="sidenav-item"><a>BESURE001</a></Link>
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

export default Promos;

import { useDispatch, useSelector } from 'react-redux';
import { acceptCookies } from '../store/actions/usersActions';

function Videos() {

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
      <div className="videos">
        <h2>Audiovisual works of Below Surface</h2>

        <div className="video">
          <h3>Be Sure | a techno film by Below Surface</h3>
          {(cookiesAccepted) ?
              <iframe src="https://www.youtube.com/embed/OHDyDXFTe1M" loading="lazy" title="Be Sure, a techno film Below Surface" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          :
            <div className="iframe-without-cookies">
              <p>You have not accepted Cookies yet. To display the Youtube video, please accept Cookies first. Read more about Youtube/Google Cookies here: <a href="https://policies.google.com/privacy?hl=de">https://policies.google.com/privacy?hl=de</a></p>
              <div className="buttons">
                  <button className="accept-btn" onClick={confirmCookies}>Accept</button>
              </div>
            </div>
          }
          <div className="download">
            <a href="https://besurelabel.de/promos/wav/Below_Surface_LIVE_-_Be_Sure_film_audio_WAV.zip" target="_blank" rel="noreferrer">WAVE download</a>
            <a href="https://besurelabel.de/promos/mp3/Below_Surface_LIVE_-_Be_Sure_film_audio_MP3.zip" target="_blank" rel="noreferrer">MP3 download</a>
          </div>
          <p>Tracklist:<br />
          01. Below Surface - Absorbed Intro (unreleased)<br />
          02. Below Surface - Space Explorer (Be Sure)<br />
          03. Absorbed - Be Pure (Be Sure)<br />
          04. Below Surface - Be Sure (Be Sure)<br />
          05. Florian Bo - Keep the Pressure (Below Surface Remix) (Underdub Records)<br />
          06. Below Surface - On the Run (Be Sure)<br />
          07. Below Surface - Immersed Spheres (Be Sure)<br />
          08. Below Surface - 215 (Be Sure)<br />
          09. Below Surface & Tension - Intrusion (Be Sure)<br />
          10. Below Surface - A Part Apart (Be Sure)<br />
          11. Below Surface - Sometimes (Be Sure)<br />
          12. Below Surface - Lost in a Subway (Be Sure)<br />
          13. Below Surface - Surreal Perception (Be Sure)<br />
          14. Below Surface - Crazed Again (Be Sure)</p>
        </div>

        <div className="video">
          <h3>Absorbed LIVE at Tresor Berlin</h3>
          {(cookiesAccepted) ?
            <iframe src="https://www.youtube.com/embed/PwzkRUTl0fU" loading="lazy" title="Absorbed live at Tresor Berlin" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            :
            <div className="iframe-without-cookies">
              <p>You have not accepted Cookies yet. To display the Youtube video, please accept Cookies first. Read more about Youtube/Google Cookies here: <a href="https://policies.google.com/privacy?hl=de">https://policies.google.com/privacy?hl=de</a></p>
              <div className="buttons">
                  <button className="accept-btn" onClick={confirmCookies}>Accept</button>
              </div>
            </div>
          }
          <div className="download">
            <a href="https://besurelabel.de/promos/wav/Absorbed_LIVE_at_Tresor_Berlin_-_dec_20th_2014_wave.zip" target="_blank" rel="noreferrer">WAVE download</a>
            <a href="https://besurelabel.de/promos/mp3/Absorbed_LIVE_at_Tresor_Berlin_-_dec_20th_2014_mp3.zip" target="_blank" rel="noreferrer">MP3 download</a>
          </div>
          <p>Tracklist:<br />
          01. Absorbed - Introduction (Be Sure)<br />
          02. Absorbed - Be Pure (Be Sure)<br />
          03. Tension - EVP (Below Surface Remix) (Unreleased)<br />
          04. Absorbed - Steregroove (Be Sure)<br />
          05. Absorbed & Tension - Bodymove (Be Sure)<br />
          06. Absorbed - Independend Robot (Be Sure)<br />
          07. Below Surface - Expanding Metropolis (Be Sure)<br />
          08. Absorbed - In Chaos (Be Sure)<br />
          09. Absorbed - Intrude (Be Sure)<br />
          10. Absorbed - Interstice (Be Sure)<br />
          11. Below Surface - Tragic (Be Sure)<br />
          12. Below Surface - Can't Stup The Dub (NextWeekRecords)<br />
          13. Below Surface - Driving (Be Sure)<br />
          14. Mathew Jonson - Marionette (Below Surface Edit)<br />
          15. Absorbed - Endtrack (Be Sure)</p>
        </div>

        <div className="video">
            <h3>Absorbed LIVE at Midi-Festival Suzhou</h3>
            {(cookiesAccepted) ?
              <iframe src="https://www.youtube.com/embed/4x634402Y7M" loading="lazy" title="Absorbed live at Midi-Festival Suzhou" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            :
              <div className="iframe-without-cookies">
                <p>You have not accepted Cookies yet. To display the Youtube video, please accept Cookies first. Read more about Youtube/Google Cookies here: <a href="https://policies.google.com/privacy?hl=de">https://policies.google.com/privacy?hl=de</a></p>
                <div className="buttons">
                    <button className="accept-btn" onClick={confirmCookies}>Accept</button>
                </div>
              </div>
            }
            <p>Tracklist:<br />
            01. Below Surface - Intro (Unreleased)<br />
            02. Absorbed - Be Pure (Be Sure)<br />
            03. Absorbed - Stereogroove (Be Sure)<br />
            04. Absorbed - Interstice (Be Sure)<br />
            05. Below Surface - Immersed in Spheres (Be Sure)<br />
            06. Below Surface - Expanding Metropolis (Be Sure)<br />
            07. Absorbed & Tension - Bodymove (Be Sure)<br />
            08. Below Surface - Splitting Off (Tekseven)<br />
            09. Below Surface - Can't Stup the Dub (Next Week Records)<br />
            10. Below Surface - Driving (Be Sure)<br />
            11. Absorbed - 215 (Be Sure)<br />
            12. Mathew Jonson - Marionette (Below Surface Edit)<br />
            13. Absorbed - Endtrack (Be Sure)</p>
        </div>
      </div>
    </main>
  </>;
}

export default Videos;

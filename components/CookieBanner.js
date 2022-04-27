import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptCookies, rejectCookies, revokeCookies } from "../store/actions/usersActions";

function CookieBanner() {

    const cookiesAccepted = (useSelector((state) => state.usersReducer.cookies));

    // redux part
    const dispatch = useDispatch();
    // cookie banner
    const confirmCookies = () => {
        dispatch(acceptCookies());
        localStorage.setItem("acceptedCookies", "true");
    };
    const declineCookies = () => {
        dispatch(rejectCookies());
        localStorage.setItem("acceptedCookies", "false");
    };

    useEffect(() => {
        if (localStorage.getItem("acceptedCookies") === "true") {
            dispatch(acceptCookies());
        } else if (localStorage.getItem("acceptedCookies") === "false") {
            dispatch(rejectCookies());
        } else {
            dispatch(revokeCookies());
        }
    }, []);

  return (
    <>
        {cookiesAccepted === null && 
            <div className="cookie-banner">
                <p>Diese Webseite verwendet Cookies. Mit ihrer Zustimmung werden Ihre personenbezogenen Daten verarbeitet um das Nutzererlebnis zu optimieren und zu personalisieren. Dabei kommen auch Cookies von Soundcloud und Youtube zum Einsatz. Bitte lesen Sie unsere <a href="datenschutz">Datenschutzerklärung</a> für mehr Informationen.<br/>
                This website uses cookies. With your agreement your personal data will be used to provide you an optimized and personalized user experience. Cookies of Soundcloud and Youtube are being used and will not be loaded without your agreement.</p>
                <div className="buttons">
                    <button className="decline-btn" onClick={declineCookies}>Ablehnen / Decline</button>
                    <button className="accept-btn" onClick={confirmCookies}>Annehmen / Accept</button>
                </div>
            </div>
        }
    </>
  )
}

export default CookieBanner
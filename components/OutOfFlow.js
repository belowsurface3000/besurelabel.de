import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptCookies, rejectCookies, revokeCookies, hideNavigation, showNavigation } from "../store/actions/usersActions";

function OutOfFlow() {

    // redux part
        const dispatch = useDispatch();
        // cookie banner
        const cookiesAccepted = (useSelector((state) => state.userReducer.cookies));
        const confirmCookies = () => {
            dispatch(acceptCookies());
            localStorage.setItem("acceptedCookies", "true");
        };
        const declineCookies = () => {
            dispatch(rejectCookies());
            localStorage.setItem("acceptedCookies", "false");
        };
        if (localStorage.getItem("acceptedCookies") === "true") {
            dispatch(acceptCookies());
        } else if (localStorage.getItem("acceptedCookies") === "false") {
            dispatch(rejectCookies());
        } else {
            dispatch(revokeCookies());
        }
        // cookies end
        // navigation
        const hiddenNavigation = (useSelector((state) => state.userReducer.navigation));
        const triggerNavigation = () => (hiddenNavigation) ? navigationOff() : navigationOn();
        const navigationOn = () => dispatch(showNavigation());
        const navigationOff = () => dispatch(hideNavigation());
        // navigation end
    // redux end

    // navigation button scroll effect
        const [scrollUp, setScrollUp] = useState(true);
        let prevScrollPos = window.pageYOffset;
        window.addEventListener("scroll", () => {
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos < (window.innerHeight / 2)) {
                setScrollUp(true);
            } else if (prevScrollPos > currentScrollPos) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }
            prevScrollPos = currentScrollPos;
        });
    // navigation button end

    return <>
        {/* TOPBANNER */}
        <div className="background">
            <picture>
                <source srcSet={require("../pics/bannerSmall.jpg")} media="(max-width: 850px)" />
                <source srcSet={require("../pics/bannerMid.jpg")} media="(max-width: 1600px)" />
                <source srcSet={require("../pics/bannerHigh.jpg")} />
                <img src={require("../pics/banner.JPG")} alt="An artistic banner" />
            </picture>
            <div className="darker"></div>
        </div>

        {/* NAVIGATION TRIGGER BUTTON */}
        <div className={(scrollUp) ? "navigation-trigger" : "navigation-trigger navigation-hidden"} onClick={triggerNavigation}>
            <div className={(hiddenNavigation) ? "nav-icon open" : "nav-icon"}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        {/* COOKE BANNER */}
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
    </>;
}

export default OutOfFlow;

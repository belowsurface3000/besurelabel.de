import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideNavigation, showNavigation } from "../store/actions/usersActions";

function NavigationButton() {

    // Navigation
    const dispatch = useDispatch();
    const hiddenNavigation = (useSelector((state) => state.usersReducer.navigation));
    const triggerNavigation = () => (hiddenNavigation) ? navigationOff() : navigationOn();
    const navigationOn = () => dispatch(showNavigation());
    const navigationOff = () => dispatch(hideNavigation());

    // Navigation button scroll effect
    const [scrollUp, setScrollUp] = useState(true);
    useEffect(() => {
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
    }, [])

    return (
        <div className={(scrollUp) ? "navigation-trigger" : "navigation-trigger navigation-hidden"} onClick={triggerNavigation}>
            <div className={(hiddenNavigation) ? "nav-icon open" : "nav-icon"}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default NavigationButton;
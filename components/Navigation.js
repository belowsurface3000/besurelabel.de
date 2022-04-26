import { useDispatch, useSelector } from 'react-redux';
import { hideNavigation } from "../store/actions/usersActions";
import Link from "next/link";

function Navigation() {

    // Redux
    const dispatch = useDispatch();
    // Navigation
    const hiddenNavigation = (useSelector((state) => state.usersReducer.navigation));
    const triggerNavigation = () => {
        if (hiddenNavigation === true) dispatch(hideNavigation());
    };

    return (
        <>
            <nav className={hiddenNavigation ? "mobile-navigation" : ""}>
                <Link href="/">
                    <a onClick={triggerNavigation}>
                        Releases
                    </a>    
                </Link>
                <Link href="/artists">
                    <a onClick={triggerNavigation}>
                        Artists
                    </a>    
                </Link>
                <Link href="/videos">
                    <a onClick={triggerNavigation}>
                        Videos
                    </a>    
                </Link>
                <Link href="/supporters">
                    <a onClick={triggerNavigation}>
                        Supporters
                    </a>    
                </Link>
                <Link href="/downloads">
                    <a onClick={triggerNavigation}>
                        Downloads
                    </a>    
                </Link>
                <Link href="/contact">
                    <a onClick={triggerNavigation}>
                        Contact
                    </a>    
                </Link>
            </nav>
        </>
    )
}

export default Navigation;
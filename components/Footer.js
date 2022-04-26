import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return <>
        <footer>
            <div className="content">
                <h1>Reached the end!</h1>
                <div className="links">
                    <NavLink to="releases">Releases</NavLink>
                    <NavLink to="artists">Artists</NavLink>
                    <NavLink to="videos">Videos</NavLink>
                    <NavLink to="supporters">Supporters</NavLink>
                    <NavLink to="downloads">Downloads</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </div>
            </div>
            <div className="bottom">
                <div className="links">
                    <NavLink to="impressum">Impressum</NavLink>
                    <p>|</p>
                    <NavLink to="datenschutz">Datenschutz</NavLink>
                </div>    
                <p>(c) 2022 <a href="https://belowsurface.de" target="_blank" rel="noreferrer">Below Surface Medien</a></p>
            </div>
        </footer>
    </>;
}

export default Footer;

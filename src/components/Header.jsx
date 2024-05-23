import React from 'react';
import '../../src/Header.css';
import { gsap } from "gsap";

const Header = () => {

    // gsap.to(".logo", { rotation: 90, x: 100, duration: 5 });


    return (
        <header className="header">
            <div className="logo">
                <img src="./Pfp_hires 2.jpg" alt="Logo" className="logo-image" />
                $BANIME
            </div>
            <nav>
                <ul>
                    <li>Chart</li>
                    <li>Telegram</li>
                    <li>Twitter</li>
                    <li>Buy</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
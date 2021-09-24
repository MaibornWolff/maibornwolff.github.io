import React from 'react';
import DarkMode from '../DarkMode/DarkMode';

const NavbarItem: React.FC = () => {
    return (
        //returns 2 Links that will be shown on the Navigation-Bar
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <button
                    className="source-home-button nav-link"
                    onClick={() => {
                        window.location.href = '/';
                    }}
                >
                    Open Source Home
                </button>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.maibornwolff.de">
                    Homepage
                </a>
            </li>
            <li className="nav-item">
                <DarkMode />
            </li>
        </ul>
    );
};

export default NavbarItem;

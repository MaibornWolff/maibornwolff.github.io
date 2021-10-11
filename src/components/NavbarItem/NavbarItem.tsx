import React from 'react';

const NavbarItem: React.FC = () => {
    return (
        //returns 2 Links that will be shown on the Navigation-Bar
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <button
                    className="source-home-button nav-link light-mode"
                    onClick={() => {
                        window.location.href = '/';
                    }}
                >
                    Open Source Home
                </button>
            </li>
            <li className="nav-item">
                <a
                    className="nav-link light-mode"
                    href="https://www.maibornwolff.de"
                >
                    Homepage
                </a>
            </li>
            <li className="nav-item"></li>
        </ul>
    );
};

export default NavbarItem;

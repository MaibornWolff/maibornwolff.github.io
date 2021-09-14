import React from 'react';

const NavbarItem: React.FC = () => {
    return (
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
        </ul>
    );
};

export default NavbarItem;

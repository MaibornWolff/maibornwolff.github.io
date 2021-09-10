import React from 'react';

const NavbarItem: React.FC = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">
                    Open Source Home
                </a>
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

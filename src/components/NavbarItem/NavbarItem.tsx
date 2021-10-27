import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsInLightMode } from '../DarkMode/DarkModeSlice';

const NavbarItem: React.FC = () => {
    const isInLightMode = useSelector(selectIsInLightMode);
    return (
        //returns 2 Links that will be shown on the Navigation-Bar
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a
                    className={`nav-link ${
                        isInLightMode ? 'light-mode' : 'dark-mode'
                    }`}
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

import React, { useState } from 'react';
import './DropDown.scss';
import { useSelector } from 'react-redux';
import { selectIsInLightMode } from '../DarkMode/DarkModeSlice';
import NavbarItem from '../NavbarItem/NavbarItem';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import DarkMode from '../DarkMode/DarkMode';

const DropDown: React.FC = () => {
    const [showList, setShowList] = useState<boolean>(false);
    const isInLightMode = useSelector(selectIsInLightMode);

    const toggleShowList = () => {
        setShowList(!showList);
    };

    return (
        <div className="dd-container">
            <div className="block">
                <button
                    className={`navbar-toggler ${
                        isInLightMode ? 'light-mode' : 'dark-mode'
                    }`}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar-maibornwolff-opensource"
                    aria-controls="navbar-maibornwolff-opensource"
                    aria-label="Toggle navigation"
                    onClick={toggleShowList}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div
                className={`${isInLightMode ? 'light-mode' : 'dark-mode'} ${
                    showList ? 'list-show' : 'list-hide'
                }`}
            >
                <div className="dropdown-items">
                    <a
                        className={`nav-link ${
                            isInLightMode ? 'light-mode' : 'dark-mode'
                        }`}
                        href="https://www.maibornwolff.de"
                    >
                        Homepage
                    </a>
                    <div className="nav-bar-toggles">
                        <LanguageToggle />
                        <DarkMode /> {/* see components folder */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDown;

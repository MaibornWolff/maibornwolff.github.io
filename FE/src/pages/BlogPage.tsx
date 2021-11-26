import './bootstrap.min.css';

import DarkMode from '../components/DarkMode/DarkMode';
import DropDown from '../components/DropDown/DropDown';
import NavbarItem from '../components/NavbarItem/NavbarItem';
import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import logo from '../maibornwolff-logo.png';

import LanguageToggle from '../components/LanguageToggle/LanguageToggle';

function BlogPage() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="navbar container">
                        <a
                            className="navbar-brand"
                            href="https://www.maibornwolff.de"
                        >
                            <img
                                src={logo}
                                className="mwlogo"
                                alt="maibornwolffs logo"
                            ></img>{' '}
                            {/* shows the maibornwolff logo at the top left corner. When clicked links to maibornwolff.de*/}
                        </a>

                        <div className="navbar-right-content">
                            <div className="nav-item dropdown-flex">
                                <DropDown /> {/* see components folder */}
                            </div>
                            <div
                                className="collapse navbar-collapse remove"
                                id="navbar-maibornwolff-opensource"
                            >
                                <NavbarItem /> {/* see components folder */}
                            </div>
                            <div className="nav-item searchfield-flex">
                                <SearchBar />
                            </div>
                            <div className="nav-bar-toggles remove">
                                <LanguageToggle />
                                <DarkMode /> {/* see components folder */}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <body></body>
        </>
    );
}

export default BlogPage;

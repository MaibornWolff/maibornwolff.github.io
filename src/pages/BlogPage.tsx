import './bootstrap.min.css';

import DarkMode from '../components/DarkMode/DarkMode';
import DropDown from '../components/DropDown/DropDown';
import NavbarItem from '../components/NavbarItem/NavbarItem';
import OpenSourcedProjects from '../components/OpenSourcedProjects/OpenSourcedProjects';
import ParallaxWithOverlay from '../components/ParallaxWithOverlay/ParallaxWithOverlay';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ProjectsShown from '../components/ProjectsShown/ProjectsShown';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ZenQuote from '../components/CatPicture/CatPicture';
import logo from '../maibornwolff-logo.png';

import { selectLanguage } from '../components/OpenSourcedProjects/openSourceProjectsSlice';
import LanguageToggle from '../components/LanguageToggle/LanguageToggle';
import { selectIsInLightMode } from '../components/DarkMode/DarkModeSlice';

function BlogPage() {
    return (
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
    );
}

import './App.css';
import './bootstrap.min.css';

import DarkMode from './components/DarkMode/DarkMode';
import DropDown from './components/DropDown/DropDown';
import NavbarItem from './components/NavbarItem/NavbarItem';
import OpenSourcedProjects from './components/OpenSourcedProjects/OpenSourcedProjects';
import ParallaxWithOverlay from './components/ParallaxWithOverlay/ParallaxWithOverlay';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ProjectsShown from './components/ProjectsShown/ProjectsShown';
import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ZenQuote from './components/CatPicture/CatPicture';
import logo from './maibornwolff-logo.png';
import windowCats from './window-cats.jpg';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectLanguage } from './components/OpenSourcedProjects/openSourceProjectsSlice';
import LanguageToggle from './components/LanguageToggle/LanguageToggle';
import { selectIsInLightMode } from './components/DarkMode/DarkModeSlice';

//import sleepyCat from './sleepy-cat.jpg'; //Back-up Picture because... You can never have too many cat pictures
function App() {
    const { t, i18n } = useTranslation();
    const isInLightMode = useSelector(selectIsInLightMode);
    const [lngSafe, setLngSafe] = useState<string>();
    const lng = useSelector(selectLanguage);

    if (lng !== lngSafe) {
        i18n.changeLanguage(lng);
        setLngSafe(lng);
    }

    useEffect(() => {
        document.querySelector('.loader')?.classList.add('loader--hide');
    });

    return (
        <>
            <>
                <header>
                    <div id="top-of-page">
                        <ProgressBar id="progress-bar" animated now={100} />
                    </div>{' '}
                    {/* for a link to top, for later in the code */}
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
                <main role="main">
                    {' '}
                    {/* see components folder */}
                    <ParallaxWithOverlay
                        backGroundImage={windowCats}
                        overlayText={t('body.jumbo-overlay')}
                    />
                    <section
                        className={`grey-info-box ${
                            isInLightMode ? 'light-mode' : 'dark-mode'
                        }`}
                    >
                        <div className="container">
                            <ProjectsShown
                                text1={t('body.info-box-lead-1')}
                                text2={t('body.info-box-lead-2')}
                            />
                            <ZenQuote
                                url="https://api.github.com/zen"
                                className="lead"
                            />{' '}
                            {/* see components folder */}
                        </div>
                    </section>
                    <div className="container">
                        <div className="row" id="open-source-projects">
                            <OpenSourcedProjects
                                headline={t('body.projects-headline')}
                            />{' '}
                            {/* see components folder */}
                        </div>
                    </div>
                </main>
                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                            <a
                                className={
                                    isInLightMode ? 'light-mode' : 'dark-mode'
                                }
                                href="#top-of-page"
                            >
                                {t('footer.top')}
                            </a>{' '}
                            {/* Links to top of page */}
                        </p>
                        <p>&copy; 2019-2020 MaibornWolff GmbH</p>
                    </div>
                </footer>
            </>
        </>
    );
}

export default App;

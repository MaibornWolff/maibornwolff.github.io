import './App.css';
import './bootstrap.min.css';

import NavbarItem from './components/NavbarItem/NavbarItem';
import NavbarToggler from './components/NavbarToggler/NavbarToggler';
import OpenSourcedProjects from './components/OpenSourcedProjects/OpenSourcedProjects';
import ProjectsShown from './components/ProjectsShown/ProjectsShown';
import React from 'react';
import SearchFieldWrapper from './components/SearchFieldWrapper/SearchFieldWrapper';
import ParallaxWithOverlay from './components/ParallaxWithOverlay/ParallaxWithOverlay';

import logo from './maibornwolff-logo.png';
//import sleepyCat from './sleepy-cat.jpg'; //Back-up Picture because... You can never have too many cat pictures
import windowCats from './window-cats.jpg';

function App() {
    return (
        <>
            <>
                <header>
                    <div id="top-of-page"></div>{' '}
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
                                <NavbarToggler /> {/* see components folder */}
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbar-maibornwolff-opensource"
                                >
                                    <NavbarItem /> {/* see components folder */}
                                </div>
                                <SearchFieldWrapper />{' '}
                                {/* see components folder */}
                            </div>
                        </div>
                    </nav>
                </header>
                <main role="main">
                    {' '}
                    {/* see components folder */}
                    <ParallaxWithOverlay
                        backGroundImage={windowCats}
                        overlayText="Open Source at MaibornWolff GmbH"
                    />
                    <section className="grey-info-box">
                        <div className="container">
                            <ProjectsShown /> {/* see components folder */}
                        </div>
                    </section>
                    <div className="container">
                        <div className="row">
                            <OpenSourcedProjects />{' '}
                            {/* see components folder */}
                        </div>
                    </div>
                </main>
                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                            <a href="#top-of-page">Back to top</a>{' '}
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

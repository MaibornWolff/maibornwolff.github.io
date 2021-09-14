import './App.css';
import './bootstrap.min.css';

import NavbarItem from './components/NavbarItem/NavbarItem';
import NavbarToggler from './components/NavbarToggler/NavbarToggler';
import OpenSourcedProjects from './components/OpenSourcedProjects/OpenSourcedProjects';
import ProjectsShown from './components/ProjectsShown/ProjectsShown';
import React from 'react';
import SearchFieldWrapper from './components/SearchFieldWrapper/SearchFieldWrapper';
import logo from './maibornwolff-logo.png';

function App() {
    return (
        <>
            <>
                <header>
                    <div id="top-of-page"></div>
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <div className="navbar container">
                            <a
                                className="navbar-brand"
                                href="https://www.maibornwolff.de"
                            >
                                <img src={logo} alt="maibornwolffs logo"></img>
                            </a>
                            <div className="navbar-right-content">
                                <NavbarToggler />
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbar-maibornwolff-opensource"
                                >
                                    <NavbarItem />
                                </div>
                                <SearchFieldWrapper />
                            </div>
                        </div>
                    </nav>
                </header>
                <main role="main">
                    <section className="jumbotron text-center">
                        <div className="container">
                            <h2 className="jumbotron-heading">
                                Open Source at MaibornWolff GmbH
                            </h2>
                        </div>
                    </section>
                    <section className="grey-info-box">
                        <div className="container">
                            <ProjectsShown />
                        </div>
                    </section>

                    <div className="container">
                        <div className="row">
                            <OpenSourcedProjects />
                        </div>
                    </div>
                </main>
                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                            <a href="#top-of-page">Back to top</a>
                        </p>
                        <p>&copy; 2019-2020 MaibornWolff GmbH</p>
                    </div>
                </footer>
            </>
        </>
    );
}

export default App;

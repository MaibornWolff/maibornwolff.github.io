import './App.css';
import './bootstrap.min.css';

import OpenSourcedProjects from './components/OpenSourcedProjects/OpenSourcedProjects';
import './components/NavbarToggler/NavbarToggler';
import React from 'react';
import NavbarToggler from './components/NavbarToggler/NavbarToggler';
import ProjectsShown from './components/ProjectsShown/ProjectsShown';
import NavbarItem from './components/NavbarItem/NavbarItem';

function App() {
    return (
        <>
            <>
                <header>
                    <div id="top-of-page"></div>
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <a
                            className="navbar-brand"
                            href="https://www.maibornwolff.de"
                        >
                            MaibornWolff GmbH
                        </a>
                        <NavbarToggler />
                        <div
                            className="collapse navbar-collapse"
                            id="navbar-maibornwolff-opensource"
                        >
                            <NavbarItem />
                        </div>
                    </nav>
                </header>
                <main role="main">
                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1 className="jumbotron-heading">
                                Open Source @ MaibornWolff GmbH
                            </h1>
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

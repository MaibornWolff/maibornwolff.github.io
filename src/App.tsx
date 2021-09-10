import './App.css';
import './bootstrap.min.css';

import OpenSourcedProjects from './components/OpenSourcedProjects/OpenSourcedProjects';
import './components/NavbarToggler/NavbarToggler';
import React from 'react';
import NavbarToggler from './components/NavbarToggler/NavbarToggler';
import NavbarItem from './components/NavbarItem/NavbarItem';

function App() {
    return (
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
                    <NavbarToggler></NavbarToggler>
                    <div
                        className="collapse navbar-collapse"
                        id="navbar-maibornwolff-opensource"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Open Source Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://www.maibornwolff.de"
                                >
                                    Homepage
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">
                            Open Source @ MaibornWolff GmbH
                        </h1>
                        <p className="lead text-muted">
                            We love Open Source and want to give back with
                            projects like{' '}
                            <a
                                target="_blank"
                                href="https://github.com/MaibornWolff/clean-air"
                                rel="noreferrer"
                            >
                                CleanAir
                            </a>{' '}
                            and{' '}
                            <a
                                target="_blank"
                                href="https://github.com/MaibornWolff/codecharta"
                                rel="noreferrer"
                            >
                                CodeCharta
                            </a>
                            .
                        </p>
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
    );
}

export default App;

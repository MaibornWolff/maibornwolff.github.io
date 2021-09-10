import React from 'react';

const NavbarToggler: React.FC = () => {
    return (
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-maibornwolff-opensource"
            aria-controls="navbar-maibornwolff-opensource"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
    );
};

export default NavbarToggler;

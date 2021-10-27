import React, { useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { setIsInLightMode } from './DarkModeSlice';
import { useDispatch } from 'react-redux';

const DarkMode = () => {
    const [toggleTrueFalse, setToggleTrueFalse] = useState(false);

    const dispatch = useDispatch();

    const applyDarkMode = () => {
        dispatch(setIsInLightMode(toggleTrueFalse));

        document.body.classList.add(
            toggleTrueFalse ? 'light-mode' : 'dark-mode'
        ); //changes the Body
        document.body.classList.remove(
            toggleTrueFalse ? 'dark-mode' : 'light-mode'
        );

        setToggleTrueFalse(!toggleTrueFalse);
    };

    return (
        <div className="nav-item darkmode-flex">
            <DarkModeToggle
                onChange={applyDarkMode}
                checked={toggleTrueFalse}
                size={50}
                className="nav-link dark-toggle"
            />
        </div>
    );
};

export default DarkMode;

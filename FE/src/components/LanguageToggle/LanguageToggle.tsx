import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../OpenSourcedProjects/openSourceProjectsSlice';

import './LanguageToggle.css';

const LanguageToggle = () => {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();

    const toggleLanguage = () => {
        setToggle(!toggle);
        dispatch(setLanguage(toggle ? 'en' : 'de'));
    };
    return (
        <div className="languages">
            en
            <div
                className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}
                onClick={toggleLanguage}
            >
                <div className="wrg-toggle-container">
                    <div className="wrg-toggle-check"></div>
                    <div className="wrg-toggle-uncheck"></div>
                </div>
                <div className="wrg-toggle-circle"></div>
                <input
                    className="wrg-toggle-input"
                    type="checkbox"
                    aria-label="Toggle Button"
                />
            </div>
            de
        </div>
    );
};

export default LanguageToggle;

import React, { useEffect, useState } from 'react';

import Toggle from '../Toggle/Toggle';

const DarkMode = () => {
    const [value, setValue] = useState<boolean>(false);

    const applyDarkMode = () => {
        document.body.classList.add(value ? 'dark-mode' : 'light-mode');
        document.body.classList.remove(value ? 'light-mode' : 'dark-mode');
    };
    const toggle = () => {
        setValue(!value);
        applyDarkMode();
    };
    const enable = () => {
        setValue(true);
        applyDarkMode();
    };
    const disable = () => {
        setValue(false);
        applyDarkMode();
    };
    return (
        <div className="dark-mode-toggle">
            <button type="button" onClick={disable}>
                ☀
            </button>
            <Toggle checked={value} onClick={toggle} />
            <button type="button" onClick={enable}>
                ☾
            </button>
        </div>
    );
};

export default DarkMode;

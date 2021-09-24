import DarkMode from '../DarkMode/DarkMode';
import React from 'react';
import Toggle from '../Toggle/Toggle';
import useDarkMode from 'use-dark-mode';

interface darkmode {
    classNameDark: string | undefined;
    classNameLight: string | undefined;
    element: HTMLElement | undefined;
    onClick: any;
    storageKey: string;
    storageProvider: string | any;
}

const DarkModeToggle: React.FC = () => {
    const darkModeConfig: darkmode = {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        element: document.body,
        onClick: (val: boolean) => {
            document.body.classList.add(val ? 'dark-mode' : 'light-mode');
            document.body.classList.remove(val ? 'light-mode' : 'dark-mode');
        },
        storageKey: 'darkMode',
        storageProvider: 'localStorage',
    };

    const darkModeVariable = useDarkMode(true, darkModeConfig);

    return (
        <div className="dark-mode-toggle">
            <button type="button" onClick={darkModeVariable.disable}>
                ☀
            </button>
            <Toggle
                checked={darkModeVariable.value}
                onClick={darkModeVariable.toggle}
            />
            <button type="button" onClick={darkModeVariable.enable}>
                ☾
            </button>
        </div>
    );
};

export default DarkModeToggle;

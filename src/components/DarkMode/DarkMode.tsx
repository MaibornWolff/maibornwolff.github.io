import React, { useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

const DarkMode = () => {
    const [value, setValue] = useState<boolean>(false);

    const applyDarkMode = () => {
        setValue(!value);                                                               //reverses value, so it will switch between dark- and light-mode each time the button is pressed
        
        document.body.classList.add(value ? 'light-mode' : 'dark-mode');                //changes the Body
        document.body.classList.remove(value ? 'dark-mode' : 'light-mode');

        document
            .getElementsByClassName('grey-info-box')[0]                                 //the grey Info Box beneath the first picture
            .classList.add(value ? 'light-mode' : 'dark-mode');
        document
            .getElementsByClassName('grey-info-box')[0]
            .classList.remove(value ? 'dark-mode' : 'light-mode');

        document
            .getElementsByClassName('search-bar')[0]                                    //the search bar in the navigation bar
            .classList.add(value ? 'light-mode' : 'dark-mode');
        document
            .getElementsByClassName('search-bar')[0]
            .classList.remove(value ? 'dark-mode' : 'light-mode');

        document
            .getElementsByClassName('source-home-button')[0]                            //the Open source button in the nav bar, needs "special treatment" because its a button instead of a Link
            .classList.add(value ? 'light-mode' : 'dark-mode');
        document
            .getElementsByClassName('source-home-button')[0]
            .classList.remove(value ? 'dark-mode' : 'light-mode');

        let links = document.getElementsByTagName('a');                                 //every Button on the page
        for (let i = 0; i < links.length; i++) {
            links[i].classList.add(value ? 'light-mode' : 'dark-mode');
            links[i].classList.remove(value ? 'dark-mode' : 'light-mode');
        }
    };

    return (
        <div className="nav-item">
            <DarkModeToggle
                onChange={applyDarkMode}
                checked={value}
                size={50}
                className="nav-link"
            />
        </div>
    );
};

export default DarkMode;

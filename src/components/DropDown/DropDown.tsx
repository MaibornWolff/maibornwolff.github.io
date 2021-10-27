import React, { useState } from 'react';
import DropDownItems from '../DropDownItems/DropDownItems';
import './DropDown.scss';

let itemArr = [
    { id: 0, title: 'Open Source Home', link: '/' },
    { id: 1, title: 'Homepage', link: 'https://www.maibornwolff.de' },
];

const DropDown: React.FC = () => {
    const [showList, setShowList] = useState<boolean>(false);

    const toggleShowList = () => {
        setShowList(!showList);
    };

    return (
        <div className="dd-container">
            <button
                className="navbar-toggler light-mode"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-maibornwolff-opensource"
                aria-controls="navbar-maibornwolff-opensource"
                aria-label="Toggle navigation"
                onClick={toggleShowList}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="list-container">
                {showList &&
                    itemArr.map((itemArr) => {
                        return (
                            <div
                                role="list"
                                className="dd-list"
                                key={itemArr.id}
                            >
                                <DropDownItems
                                    id={itemArr.id}
                                    link={itemArr.link}
                                    title={itemArr.title}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default DropDown;

import React, { useState } from 'react';
import {
    selectData,
    selectDataSafe,
    setData,
} from '../OpenSourcedProjects/openSourceProjectsSlice';
import { useDispatch, useSelector } from 'react-redux';

import Repository from '../utils';
import { selectIsInLightMode } from '../DarkMode/DarkModeSlice';
import './SearchBar.css';

const SearchIcon = () => {
    const iconEdge = Math.ceil(35 * 0.6);
    const searchIconStyle = {
        fill: '#727272',
    };
    return (
        <svg
            version="1.1"
            x="0px"
            y="0px"
            width={iconEdge}
            height={iconEdge}
            viewBox="0 0 635 635"
            style={searchIconStyle}
        >
            <g>
                <path
                    d="M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905
            c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891
            c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702
            C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092
            c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091C471.199,364.244,374.448,460.996,255.108,460.996z"
                />
            </g>
        </svg>
    );
};

const SearchBar = () => {
    const dataSafe = useSelector(selectDataSafe);
    const data = useSelector(selectData);
    const dispatch = useDispatch();
    const isInLightMode = useSelector(selectIsInLightMode);

    const [value, setValue] = useState<string>();

    const search = (value: string) => {
        const regexp = new RegExp(value, 'i'); //makes value case-insensitive

        const newResultArray: Array<Repository> = [];

        for (let index = 0; index < data.length; index++) {
            if (
                regexp.test(data[index].description as string) ||
                regexp.test(data[index].name as string) ||
                regexp.test(data[index].language as string)
            ) {
                newResultArray.push(data[index]);
            }
        }
        dispatch(setData(newResultArray));
        document
            .getElementById('open-source-projects')
            ?.scrollIntoView({ block: 'end', behavior: 'smooth' });

        return;
    };

    const onChangeHandler = (event: any) => {
        setValue(event.target.value);
    };

    const keyPressHandler = (event: any) => {
        if (event.which === 13 || event.keyCode === 13) {
            dispatch(setData(dataSafe));
            return search(value as string);
        }
        return;
    };

    const onButtonClickHandler = () => {
        dispatch(setData(dataSafe));
        search(value as string);
    };

    return (
        <div className="search-bar">
            <input
                className={`search-field ${
                    isInLightMode ? 'light-mode' : 'dark-mode'
                }`}
                type="text"
                placeholder="Search..."
                onKeyPress={keyPressHandler}
                onChange={onChangeHandler}
            />

            <button
                type="button"
                className={`search-button ${
                    isInLightMode ? 'light-mode' : 'dark-mode'
                }`}
                onClick={onButtonClickHandler}
            >
                <SearchIcon />
            </button>
        </div>
    );
};

export default SearchBar;

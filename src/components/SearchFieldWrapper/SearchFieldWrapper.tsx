import React from 'react';
import {
    selectData,
    selectDataSafe,
    setData,
} from '../OpenSourcedProjects/openSourceProjectsSlice';
import { useDispatch, useSelector } from 'react-redux';

import Repository from '../utils';
import SearchField from 'react-search-field';

const SearchFieldWrapper = () => {
    //A search bar to search the site for content

    const data = useSelector(selectData);
    const dataSafe = useSelector(selectDataSafe);
    const dispatch = useDispatch();
    let valueSafe: string = '';

    const onSearch = (value: string) => {
        valueSafe = value;
        if (value === '' || value !== valueSafe) {
            dispatch(setData(dataSafe));
        }

        valueSafe = value;

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

    return (
        <SearchField
            placeholder="Search..."
            onSearchClick={onSearch}
            onEnter={onSearch}
            classNames="search-bar light-mode"
        />
        //an installed component for the search bar itself, when enter or the search button is pressed, it will execute "onSearch"
    );
};

export default SearchFieldWrapper;

import React, { useEffect, useState } from 'react';

import SearchField from 'react-search-field';
import { selectIsRendered } from '../OpenSourcedProjects/openSourceProjectsSlice';
import { useSelector } from 'react-redux';

const SearchFieldWrapper = () => {
    //A search bar to search the site for content
    const [index, setIndex] = useState<number>(0);

    const [array, setArray] = useState<Array<Element>>();

    const [resultArray, setResultArray] = useState<Array<Element>>();

    const isRendered = useSelector(selectIsRendered); //checks if the Project-Cards are rendered, before running the following code

    useEffect(() => {
        const cardArray = [
            document.getElementsByClassName('card-title'), //saves every Element of every class, that the search-term should search in,
            document.getElementsByClassName('card-subtitle'), //in an array.
            document.getElementsByClassName('card-text'),
        ];

        const spreadedArray = Array<Element>(); //creates a new Array of the type "Element"

        for (let j = 0; j < cardArray.length; j++) {
            //turns the 3-dimensional Array from earlier, into a 1-dimensional Array
            for (let i = 0; i < cardArray[j].length; i++) {
                spreadedArray.push(cardArray[j][i]);
            }
        }

        setArray(spreadedArray); //saves spreadedArray into the "global" Array
    }, [isRendered]); //sets the depency of "isRendered"

    const onSearch = (value: string) => {
        if (typeof array === 'undefined') {
            //if useEffect didnt run yet, array will be undefined. This prevents the code from running in that case
            return;
        }

        const regexp = new RegExp(value, 'i'); //makes value case-insensitive

        const newResultArray = [];

        let index2 = index;
        for (; index2 < array.length; index2++) {
            if (regexp.test(array[index2].innerHTML)) {
                newResultArray.push(array[index2]);
            }
        }

        setResultArray(newResultArray);

        return;
    };

    return (
        <SearchField
            placeholder="Search..."
            onSearchClick={onSearch}
            onEnter={onSearch}
            classNames="search-bar"
        />
        //an installed component for the search bar itself, when enter or the search button is pressed, it will execute "onSearch"
    );
};

export default SearchFieldWrapper;

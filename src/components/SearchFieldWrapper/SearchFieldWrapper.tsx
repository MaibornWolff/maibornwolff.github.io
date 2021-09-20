import React, { useEffect, useState } from 'react';

import SearchField from 'react-search-field';
import { selectIsRendered } from '../OpenSourcedProjects/openSourceProjectsSlice';
import { useSelector } from 'react-redux';

const SearchFieldWrapper = () => {
    const [index, setIndex] = useState<number>(0);

    const [array, setArray] = useState<Array<Element>>();

    const isRendered = useSelector(selectIsRendered);

    useEffect(() => {
        const cardArray = [
            document.getElementsByClassName('card-title'),
            document.getElementsByClassName('card-subtitle'),
            document.getElementsByClassName('card-text'),
        ];

        const spreadedArray = Array<Element>();

        for (let j = 0; j < cardArray.length; j++) {
            for (let i = 0; i < cardArray[j].length; i++) {
                spreadedArray.push(cardArray[j][i]);
            }
        }

        setArray(spreadedArray);
    }, [isRendered]);

    const onSearch = (value: string) => {
        if (typeof array === 'undefined') {
            return;
        }

        const regexp = new RegExp(value, 'i');

        let index2 = index;
        for (; index2 < array.length; index2++) {
            if (index2 > 0 && index2 === index) {
                (array[index - 1] as HTMLElement).classList.remove(
                    'attention-fade'
                );
            }
            if (regexp.test(array[index2].innerHTML)) {
                array[index2].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center',
                });
                (array[index2] as HTMLElement).classList.add('attention-fade');
                setIndex(index2 + 1);
                return;
            }
        }

        if (index2 === array.length) {
            index2 = 0;
            setIndex(0);
            return;
        }

        console.log('Not found');
    };

    return (
        <SearchField
            placeholder="Suche..."
            onSearchClick={onSearch}
            onEnter={onSearch}
            classNames="search-bar"
        />
    );
};

export default SearchFieldWrapper;

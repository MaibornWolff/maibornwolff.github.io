import React from 'react';

interface Props {
    id: number;
    title: string;
    link: string;
}

const DropDownItems: React.FC<Props> = (props) => {
    return (
        <a href={props.link} className="dd-list-item" key={props.id}>
            {props.title}
        </a>
    );
};

export default DropDownItems;

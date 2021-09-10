import React from 'react';

interface Props {
    linkTo: string;
    DisplayText: string;
}

const NavbarItem: React.FC<Props> = (props) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.linkTo}>
                {props.DisplayText}
            </a>
        </li>
    );
};

export default NavbarItem;

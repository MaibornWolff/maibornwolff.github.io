import React from 'react';

interface State {
    checked: boolean | any;
    onClick: React.MouseEventHandler<HTMLInputElement> | undefined;
}

const Toggle = ({ checked, onClick }: State) => (
    <span className="toggle-control">
        <input
            className="dmcheck"
            type="checkbox"
            checked={checked}
            onClick={onClick}
            id="dmcheck"
        />
        <label htmlFor="dmcheck" />
    </span>
);

export default Toggle;

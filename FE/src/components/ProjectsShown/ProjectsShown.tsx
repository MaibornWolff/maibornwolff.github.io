import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsInLightMode } from '../DarkMode/DarkModeSlice';

interface Props {
    headline: string;
    text1: string;
    text2: string;
}

const ProjectsShown: React.FC<Props> = (props) => {
    const isInLightMode = useSelector(selectIsInLightMode);
    return (
        //Links 2 Projects at the beginning of the page
        <p className="lead">
            <h3 className={isInLightMode ? 'headline' : 'headline-dark'}>{props.headline}</h3>{' '}
            <>{props.text1}</>{' '}
            <a
                className={isInLightMode ? 'light-mode' : 'dark-mode'}
                target="_blank"
                href="https://github.com/MaibornWolff/clean-air"
                rel="noopener noreferrer"
            >
                CleanAir
            </a>{' '}
            <>{props.text2}</>{' '}
            <a
                className={isInLightMode ? 'light-mode' : 'dark-mode'}
                target="_blank"
                href="https://github.com/MaibornWolff/codecharta"
                rel="noopener noreferrer"
            >
                CodeCharta
            </a>
            .
        </p>
    );
};

export default ProjectsShown;

import React from 'react';

interface Props {
    text1: string;
    text2: string;
}

const ProjectsShown: React.FC<Props> = (props) => {
    return (
        //Links 2 Projects at the beginning of the page
        <p className="lead">
            <>{props.text1}</>{' '}
            <a
                className="light-mode"
                target="_blank"
                href="https://github.com/MaibornWolff/clean-air"
                rel="noopener noreferrer"
            >
                CleanAir
            </a>{' '}
            <>{props.text2}</>{' '}
            <a
                className="light-mode"
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

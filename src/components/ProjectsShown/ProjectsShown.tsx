import React from 'react';

const ProjectsShown: React.FC = () => {
    return (
        <p className="lead">
            We love Open Source and want to give back with projects like{' '}
            <a
                target="_blank"
                href="https://github.com/MaibornWolff/clean-air"
                rel="noreferrer"
            >
                CleanAir
            </a>{' '}
            and{' '}
            <a
                target="_blank"
                href="https://github.com/MaibornWolff/codecharta"
                rel="noreferrer"
            >
                CodeCharta
            </a>
            .
        </p>
    );
};

export default ProjectsShown;

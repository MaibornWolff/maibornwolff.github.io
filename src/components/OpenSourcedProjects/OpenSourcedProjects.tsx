import './OpenSourcedProjects.css';

import React, { useEffect, useState } from 'react';

import RenderCard from '../RenderCard/RenderCard';
import Repository from '../utils';
import repositories from '../../data/repositories.json';

const OpenSourcedProjects = () => {
    const [data, setData] = useState<Array<Repository>>();

    useEffect(() => {
        const json = repositories;
        const data = json.filter((repo) => !repo.archived);
        setData(data);
    }, []);

    return (
        <>
            <h2>Open sourced Projects</h2>
            <div id="maibornwolff-opensource-projects" className="card-columns">
                {typeof data !== 'undefined' &&
                    data.map((repo) => {
                        return (
                            <RenderCard key={repo.id} repo={repo}></RenderCard>
                        );
                    })}
            </div>{' '}
        </>
    );
};

export default OpenSourcedProjects;

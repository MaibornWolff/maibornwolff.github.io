import './OpenSourcedProjects.css';

import React, { useEffect, useState } from 'react';

import RenderCard from '../RenderCard/RenderCard';
import Repository from '../utils';
import repositories from '../../data/repositories.json';
import { setIsRendered } from './openSourceProjectsSlice';
import { useDispatch } from 'react-redux';

const OpenSourcedProjects = () => {
    const [data, setData] = useState<Array<Repository>>();
    const dispatch = useDispatch();

    useEffect(() => {
        const json = repositories;
        const data = json.filter((repo) => !repo.archived);
        setData(data);
        dispatch(setIsRendered());
    }, [dispatch]);

    return (
        <>
            <h3 id="headline-opensource-projects">Open sourced Projects</h3>
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

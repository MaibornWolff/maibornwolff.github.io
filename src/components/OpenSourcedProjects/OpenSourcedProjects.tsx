import './OpenSourcedProjects.css';
import '../../App.css';

import React, { useEffect, useState } from 'react';
import {
    selectData,
    setData,
    setIsRendered,
    setDataSafe,
} from './openSourceProjectsSlice';
import { useDispatch, useSelector } from 'react-redux';

import CatErrorImage from '../CatErrorImage/CatErrorImage';
import RenderCard from '../RenderCard/RenderCard';

function getReposAsync() {
    return new Promise(function (resolve, reject) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open(
            'GET',
            'https://api.github.com/orgs/MaibornWolff/repos',
            true
        ); // true for asynchronous
        xmlHttp.responseType = 'json';
        xmlHttp.onload = function () {
            if (
                xmlHttp.readyState === XMLHttpRequest.DONE &&
                xmlHttp.status === 200
            ) {
                resolve(xmlHttp.response);
            } else {
                reject(xmlHttp.status);
            }
        };
        xmlHttp.onerror = function () {
            reject(xmlHttp.status);
        };
        xmlHttp.send(null);
        xmlHttp.onerror = function () {
            reject(xmlHttp.status);
        };
    });
}

const OpenSourcedProjects = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const [error, setError] = useState<boolean>(false);
    const [errCode, setErrCode] = useState<number>(404);

    useEffect(() => {
        getReposAsync()
            .then(function (repoArr: any) {
                const json = repoArr;
                const data = json.filter((repo: any) => !repo.archived); //saves every array of Repository.json (repo) which isnt archived into data
                dispatch(setData(data)); //saves the current data array into the global data array
                dispatch(setDataSafe(data));
            })
            .catch(function (stat) {
                setError(true);
                setErrCode(stat);
            });

        dispatch(setIsRendered()); //tells the store that OpenSourceProjects has rendered, and can now be used for other components

        (document.getElementById('progress-bar') as Element).classList.add(
            'invisible'
        );
    }, [dispatch]);

    const cardOrCat = () => {
        if (!error) {
            return (
                typeof data !== 'undefined' &&
                data.map((repo) => {
                    return <RenderCard key={repo.id} repo={repo}></RenderCard>;
                })
            );
        } else {
            return <CatErrorImage errCode={errCode} />;
        }
    };

    return (
        <>
            <h3 id="headline-opensource-projects">Open sourced Projects</h3>
            <div id="maibornwolff-opensource-projects" className="card-columns">
                {cardOrCat()}
            </div>{' '}
        </>
    );
};

export default OpenSourcedProjects;
export { getReposAsync };

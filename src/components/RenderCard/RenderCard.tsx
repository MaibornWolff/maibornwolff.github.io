import './RenderCard.scss';
import '../../bootstrap.min.css';

import React from 'react';
import Repository from '../utils';
import { selectIsInLightMode } from '../DarkMode/DarkModeSlice';
import { useSelector } from 'react-redux';

interface Props {
    repo: Repository;
}

//Takes an array, sent as a prop from the OpenSourcedProjects component and displays it as a "Card"

const RenderCard: React.FC<Props> = (props) => {
    const isInLightMode = useSelector(selectIsInLightMode);
    if(isInLightMode) {
        return (
            <div className="card border-primary mb-3">
                <div className="card-body">
                    <h5 className="card-title">{props.repo.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {props.repo.language}
                    </h6>
                    <p className="card-text">
                    {props.repo.description}</p>
                    <a
                        target="_blank"
                        href={props.repo.html_url}
                        className="card-link light-mode"
                        rel="noopener noreferrer"
                    >
                        Repository
                    </a>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card-dark border-primary mb-3">
                <div className="card-body">
                    <h5 className="card-title-dark"
                >{props.repo.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted-dark">
                        {props.repo.language}
                    </h6>
                    <p className="card-text-dark">
                    {props.repo.description}</p>
                    <a
                        target="_blank"
                        href={props.repo.html_url}
                        className="card-link link-dark"
                        rel="noopener noreferrer"
                    >
                        Repository
                    </a>
                </div>
            </div>
        );
    }
    
};

export default RenderCard;

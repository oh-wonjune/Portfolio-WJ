import React, {useState} from "react";

const Project = (props) => {
    const tech = {
        sass: 'fab fa-sass',
        css: 'fab fa-css3-alt',
        js: 'fab fa-js-square',
        react: 'fab fa-react',
        vue: 'fab fa-vuejs',
        d3: 'far fa-chart-bar',
        node: 'fab fa-node'
    };

    const link = props.link || 'http://';
    const repo = props.repo || 'http://';

    return (
        <div className="project">
            <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
                <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title}/>
            </a>
            <div className="project-details">
                <div className="project-tile">
                    <p className="icons">
                        {props.tech.split(' ').map(t => (
                            <i className={tech[t]} key={t}/>
                        ))}
                    </p>
                    {props.title}{' '}
                </div>
                {props.children}
                <div className="buttons">
                    <a href={repo} target="_blank" rel="noopener noreferrer" style={{fontSize:"17px"}}>
                        View source <i className="fas fa-external-link-alt" style={{fontSize:"12px"}}/>
                    </a>
                    <a href={link} target="_blank" rel="noopener noreferrer" style={{fontSize:"17px"}}>
                        Try it Live <i className="fas fa-external-link-alt" style={{fontSize:"12px"}}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;

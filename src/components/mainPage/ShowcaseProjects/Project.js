import React from 'react'

function Project({ project }) {
    return (
        <>
            {project.repoLink && project.appLink ? (
                <div className="row project-row">
                    <div className="col s12 project-title">
                        {project.title}
                    </div>
                    <div className="col s12 project-subtitle">
                        {project.subtitle}
                    </div>
                    <div className="col s12 project-tech">
                        <div className="skills-container">
                            {project.tech && project.tech.map(t => {
                                return <div className="skill" key={Math.random() * 100}>{t}</div>
                            })}
                        </div>
                    </div>
                    <div className="col s12">
                        <a href={project.appLink} rel="noreferrer" target="_blank">
                            <img src={project.imagePath} alt={project.title} />
                        </a>
                    </div>
                    <div className="col s12 project-summary summary">
                        {project.summary}
                    </div>
                    <div className="col s12 project-actions">
                        {project.appLink && <a href={project.appLink} rel="noreferrer" target="_blank" className="primary-action">Try the app</a>}
                        {project.repoLink && <a href={project.repoLink} rel="noreferrer" target="_blank" className="secondary-action">View code repository <i className='fab fa-github' /></a>}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default Project

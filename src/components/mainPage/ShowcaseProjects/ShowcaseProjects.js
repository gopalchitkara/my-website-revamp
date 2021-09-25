import React from 'react'
import Project from './Project'
import './ShowcaseProjects.scss'
import { projects } from 'data'

function ShowcaseProjects() {
    return (
        <section className="showcase-projects-container container" id="projects">
            <div className="row">
                <div className="col s12">
                    <div className="title showcase-title">Showcase projects with public code</div>
                </div>
            </div>
            {projects.map(project => {
                return <Project project={project} key={project.id} />
            })}
        </section >
    )
}

export default ShowcaseProjects

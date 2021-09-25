import React, { Fragment } from 'react'
import './Work.scss'
import WorkExperience from './WorkExperience'
import { workExperiences } from 'data'

function Work() {
    return (
        <section className="container work-container" id="work">
            <div className="row">
                <div className="col s12">
                    <p className="title section-title mb-0">Previous Work</p>
                </div>
                <div className="col s12">
                    <p className="center-align mt-0 subtitle section-subtitle">A brief of my engagements till date.</p>
                </div>
            </div>
            <div className="work-experience-container">
                {workExperiences.map(ex => {
                    return <WorkExperience experience={ex} key={ex.id} />
                })}
            </div>
        </section>
    )
}

export default Work

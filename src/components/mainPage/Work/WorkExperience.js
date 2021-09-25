import React from 'react'

function WorkExperience({ experience }) {
    return (
        <div className="row work-experience">
            <div className="col s12 company-details">
                <div className="company-logo">
                    <img src={experience.imagePath} alt="" />
                </div>
                <div className="company-info">
                    <div className="company-name">{experience.companyName}</div>
                    <div className="designation">
                        <span className="designation-title">{experience.title}</span>
                        <span>/</span>
                        <span>Full Time</span>
                    </div>
                </div>
            </div>
            <div className="col s12 experience-summary summary">
                <p>{experience.summary}</p>
            </div>
            <div className="col s12">
                <div className="skills-container">
                    {experience.skillsUsed && experience.skillsUsed.map(skill => {
                        return <div className="skill" key={Math.random() * 100}>{skill}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default WorkExperience

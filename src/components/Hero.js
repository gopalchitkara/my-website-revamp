import React from 'react'
import './Hero.scss'

function Hero() {
    return (
        <div className="container">
            <div className="row hero">
                <div className="col s12 l4 xl3">
                    <div className="profile-picture ">
                        {/* <img src="/public/media/images/avatar.png" alt="gopal-chitkara" /> */}
                        <img src="/media/images/my-image.jpg" alt="gopal-chitkara" />
                    </div>
                </div>
                <div className="col s12 l8 xl9">
                    <div className="row">
                        <div className="col s12">
                            <p className="title hero-title">I'm a Front-End Developer who loves to build awesome web apps and drink Coffee.</p>
                        </div>
                        <div className="col s12">
                            <p className="subtitle hero-subtitle">Over the last 5 years, I helped some big brands build performant user interfaces for their web apps to deliver seamless user experiences. I can help you do the same.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="s12 tech-stack-banner">
                    <img src="/media/images/logos.png" alt="tech-stack" />
                </div>
            </div>
        </div>
    )
}

export default Hero

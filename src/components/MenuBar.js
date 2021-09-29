import React from 'react'
import './MenuBar.scss'

function MenuBar() {
    return (
        <section className="container" id="home">
            <div className="row menubar mb-0">
                <div className="col s12 l4 xl6 social-links">
                    <div className="row mb-0">
                        <ul>
                            <li><a href="mailto:gopal.chitkara@gmail.com"><i className="far fa-envelope"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/gopalchitkara/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/gopalchitkara" rel="noreferrer" target="_blank"> <i className="fab fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col s12 l8 xl6 menu-items">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#getInTouch">Get in touch</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MenuBar

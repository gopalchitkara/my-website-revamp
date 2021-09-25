import MenuBar from 'components/MenuBar'
import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <>
            <section className="container get-in-touch-container" id="getInTouch">
                <section className="get-in-touch">
                    <div className="row">
                        <div className="col s12 title">
                            Get in touch
                        </div>
                        <div className="col s12 contact-message">
                            I'm always excited to talk about anything frontend and work on some exciting projects. Have a question? message me and let's discuss it over coffee.
                        </div>
                        <div className="col s12 contact-email">
                            Send me an email at <a href="mailto:gopal.chitkara@gmail.com">gopal.chitkara@gmail.com</a>
                        </div>
                    </div>
                </section>
            </section>
            <MenuBar />
            <div className="container">
                <div className="row">
                    <div className="col s12 copyright-mark">
                        No copyright issues.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

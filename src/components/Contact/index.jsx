import './style.scss'

function Contact(props) {
    const {data:{
        title = "",
        contactMessage = "",
        cta = {} 
    }} = props;

  return (
    <section className="container get-in-touch-container" id="getInTouch">
        <div className="get-in-touch">
            <div className="row">
                <div className="col s12 title">
                   {title}
                </div>
                <div className="col s12 contact-message">
                    {contactMessage}
                </div>
                <div className="col s12 contact-email">
                    {`${cta?.message} `}<a href={`mailto:${cta.email}`}>{cta.email}</a>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Contact
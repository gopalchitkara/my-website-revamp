import Project from "./Project";
import './style.scss'

function ShowcaseProjects(props) {
    const { showcaseProjects = {} } = props;

    return (
        <section className="showcase-projects-container container" id="projects">
            <div className="row">
                <div className="col s12">
                    <div className="title showcase-title">{showcaseProjects?.title}</div>
                </div>
            </div>
            {showcaseProjects?.projects?.map(project => {
                return <Project project={project} key={project.id} />
            })}
        </section >
    )
}
export default ShowcaseProjects
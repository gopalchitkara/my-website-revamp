import { Fragment } from "react"
import ShowcaseProjects from "./ShowcaseProjects"
import Work from "./Work"

function Content(props) {
    const {data: {work, showcaseProjects}} = props;
    return (
        <Fragment>
            <Work work={work} />
            <ShowcaseProjects showcaseProjects={showcaseProjects}/>
        </Fragment>
    )
}
export default Content
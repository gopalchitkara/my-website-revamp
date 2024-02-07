import WorkExperience from './WorkExperience';
import './style.scss';

function Work(props) {
  const { work = {} } = props;

  return (
    <section className="container work-container" id="work">
      <div className="row">
        <div className="col s12">
          <p className="title section-title mb-0">{work?.title}</p>
        </div>
        <div className="col s12">
          <p className="center-align mt-0 subtitle section-subtitle">{work?.subtitle}</p>
        </div>
      </div>
      <div className="work-experience-container">
        {work?.workExperiences
          ?.sort((a, b) => b.sequence - a.sequence)
          .map((experience) => {
            return <WorkExperience experience={experience} key={experience.id} />;
          })}
      </div>
    </section>
  );
}
export default Work;

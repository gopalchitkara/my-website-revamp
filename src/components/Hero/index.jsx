import './style.scss';

function Hero(props) {
  const {
    data: { profilePicture = {}, title = '', subtitle = '', techStackBanner = {} },
  } = props;

  return (
    <div className="container">
      <div className="row hero">
        <div className="col s12 l4 xl3">
          <div className="profile-picture ">
            <img src={profilePicture.path} alt={profilePicture.alt} />
          </div>
        </div>
        <div className="col s12 l8 xl9">
          <div className="row">
            <div className="col s12">
              <p className="title hero-title">{title}</p>
            </div>
            <div className="col s12">
              <p className="subtitle hero-subtitle">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="s12 tech-stack-banner">
          <img src={techStackBanner.path} alt={techStackBanner.alt} />
        </div>
      </div>
    </div>
  );
}
export default Hero;

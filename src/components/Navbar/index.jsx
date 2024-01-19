import './style.scss';

function Navbar(props) {
  const {
    data: { contactLinks = [], menuItems = [] },
  } = props;

  const linkTypes = {
    email: 'far fa-envelope',
    linkedin: 'fa fa-linkedin',
    github: 'fab fa-github',
  };

  return (
    <section className="container" id="home">
      <div className="row menubar mb-0">
        <div className="col s12 l4 xl6 social-links">
          <div className="row mb-0">
            <ul>
              {contactLinks?.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.value} target="_blank" rel="noreferrer">
                      <i className={linkTypes[link.type]}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col s12 l8 xl6 menu-items">
          <ul>
            {menuItems?.map((item) => {
              return (
                <li key={item.id}>
                  <a href={`#${item.name}`}>{item.value}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Navbar;

import { Fragment } from 'react';
import './style.scss';

function Footer(props) {
  const { children } = props;
  return (
    <Fragment>
      {children}
      <div className="container">
        <div className="row">
          <div className="col s12 copyright-mark">No copyright issues.</div>
        </div>
      </div>
    </Fragment>
  );
}
export default Footer;

import './styles.scss';
import data from './data';
import RouteSection from './RouteSection';
import logo from '../../../../designs/logo.png';

const Footer = () => {
  return (
    <div className="footer mt-4">
      <div className="container">
        <div className="footer__container d-flex justify-content-between">
          <div className="footer__container__social-media">
            <h3>IMAGINE A PLACE</h3>
            Dropdown
            <div className="footer__container-icon-wrapper">
              <i className="bi bi-twitter me-4"></i>
              <i className="bi bi-instagram me-4"></i>
              <i className="bi bi-facebook me-4"></i>
              <i className="bi bi-youtube me-4"></i>
            </div>
          </div>
          <div className="footer__container__route-wrapper d-flex flex-wrap">
            {data.map((item) => (
              <RouteSection data={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="footer__container__border container"></div>
      <div className="footer__container__logo-section container d-flex justify-content-between">
        <div className="logo d-flex align-items-center">
          <img src={logo} alt="logo" className="logo-img me-2" />
          <h5 className="title mb-0">Discord</h5>
        </div>
        <button className="btn download-btn text-center">
          Open Discord
        </button>
      </div>
    </div>
  );
};

export default Footer;

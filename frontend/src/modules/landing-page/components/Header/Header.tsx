import logo from '../../../../designs/logo.png';
import background from '../../../../designs/bg1.svg';
import leftImage from '../../../../designs/bg3.svg';
import rightImage from '../../../../designs/bg2.svg';

import './styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header p-4">
      <div className="header__container container">
        <div className="logo d-flex align-items-center">
          <img src={logo} alt="logo" className="logo-img me-2" />
          <h5 className="title mb-0">Discord</h5>
        </div>
        <div className="menu p-0 mb-0">
          <Link to="/" className="menu-item">
            Download
          </Link>
          <Link to="/" className="menu-item">
            Nitro
          </Link>
          <Link to="/" className="menu-item">
            Safety
          </Link>
          <Link to="/" className="menu-item">
            Support
          </Link>
          <Link to="/" className="menu-item">
            Blog
          </Link>
          <Link to="/" className="menu-item">
            Careers
          </Link>
        </div>
        <button className="btn btn-light login-btn">Login</button>
      </div>
      <div className="header__content container">
        <h1>IMAGINE A PLACE...</h1>
        <p className="my-4">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="button-wrapper">
          <button className="btn btn-light login-btn me-3">
            Download for Windows
          </button>
          <button className="btn btn-dark download-btn">
            Open Discord in your browser
          </button>
        </div>
      </div>
      <div className="header__image-block">
        <img
          className="header__image-block__background position-absolute"
          alt="background"
          src={background}
        ></img>
        <img
          className="header__image-block__leftImg position-absolute"
          alt="leftImg"
          src={leftImage}
        ></img>{' '}
        <img
          className="header__image-block__rightImg position-absolute"
          alt="background"
          src={rightImage}
        ></img>
      </div>
    </div>
  );
};

export default Header;

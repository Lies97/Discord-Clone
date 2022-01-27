import React from 'react';
import Content from './components/Content/components/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './styles.scss';

const LandingPage = () => {
  return (
    <div className="landing-page__container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default LandingPage;
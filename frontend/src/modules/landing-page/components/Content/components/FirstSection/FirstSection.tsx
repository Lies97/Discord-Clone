import './styles.scss';
import image from '../../../../../../designs/content1.svg';
import { useRef } from 'react';
import useOnScreen from '../../../../../../hooks/UseOnScreen';

const FirstSection = () => {
  const containerRef: any = useRef(null);

  const onScreen = useOnScreen(containerRef, '0px', 0.1);

  console.log(onScreen);

  const className = onScreen ? 'animated animatedFadeInUp fadeInUp' : '';
  return (
    <div className={`first-section ${className}`} ref={containerRef}>
      <div className="first-section__container container d-flex align-items-center">
        <div className="first-section-image">
          <img src={image} alt="first-section" className="w-100" />
        </div>
        <div className="first-section-text">
          <h3>Create an invite-only place where you belong</h3>
          <p>
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

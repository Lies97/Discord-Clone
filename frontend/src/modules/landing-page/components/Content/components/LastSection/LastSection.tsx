import './styles.scss';
import image from '../../../../../../designs/content4.svg';
import image1 from '../../../../../../designs/content5.svg';
import { useRef } from 'react';
import useOnScreen from '../../../../../../hooks/UseOnScreen';

const LastSection = () => {
  const containerRef: any = useRef(null);

  const onScreen = useOnScreen(containerRef, '0px', 0.5);

  const className = onScreen ? 'animated animatedFadeInUp fadeInUp' : '';
  return (
    <div className={`last-section ${className} mt-4`} ref={containerRef}>
      <div className="last-section__container container">
        <div className="last-section-text text-center">
          <h3>RELIABLE TECH FOR STAYING CLOSE</h3>
          <p>
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        <div className="last-section-image w-100">
          <img src={image} alt="last-section" className="w-100" />
        </div>
        <div className="button__wrapper pt-4 text-center">
          <div className="button__wrapper-image text-center">
            <img src={image1} alt="star" />
          </div>
          <h3 className="text-center">Ready to start your journey?</h3>
          <button className="btn download-btn text-center mt-4">
            Download for Windows
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastSection;

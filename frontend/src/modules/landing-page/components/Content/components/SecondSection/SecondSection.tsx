import './styles.scss';
import image from '../../../../../../designs/content2.svg';
import { useRef } from 'react';
import useOnScreen from '../../../../../../hooks/UseOnScreen';

const SecondSection = () => {
  const containerRef: any = useRef(null);

  const onScreen = useOnScreen(containerRef, '0px', 0.5);
  const className = onScreen ? 'animated animatedFadeInUp fadeInUp' : '';
  
  return (
    <div className={`second-section ${className} mt-4`}>
      <div
        className="second-section__container container d-flex justify-content-center align-items-center"
        ref={containerRef}
      >
        <div className="second-section-text">
          <h3>Where hanging out is easy</h3>
          <p>
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
        <div className="second-section-image">
          <img src={image} alt="second-section" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

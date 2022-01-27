import './styles.scss';
import image from '../../../../../../designs/content3.svg';
import { useRef } from 'react';
import useOnScreen from '../../../../../../hooks/UseOnScreen';

const ThirdSection = () => {
  const containerRef: any = useRef(null);

  const onScreen = useOnScreen(containerRef, '0px', 0.5);

  const className = onScreen ? 'animated animatedFadeInUp fadeInUp' : '';

  return (
    <div className={`third-section ${className} mt-4`}>
      <div className="third-section__container container d-flex align-items-center" ref={containerRef}>
        <div className="third-section-image">
          <img src={image} alt="third-section" className="w-100" />
        </div>
        <div className="third-section-text">
          <h3>From few to a fandom</h3>
          <p>
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

import FirstSection from './FirstSection/FirstSection';
import LastSection from './LastSection/LastSection';
import SecondSection from './SecondSection/SecondSection';
import './styles.scss';
import ThirdSection from './ThirdSection/ThirdSection';

const Content = () => {
  return (
    <div className="content mt-4">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <LastSection />
    </div>
  );
};

export default Content;
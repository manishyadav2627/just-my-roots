import splash from '../../assets/images/splash.svg';
import '../../assets/css/Common.scss';

const SplashScreen = () => {
  return (
    <div className="splash_screen">
      <img src={splash} alt="splash" />
    </div>
  );
};
export default SplashScreen;

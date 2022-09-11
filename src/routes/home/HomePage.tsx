import { useSelector } from 'react-redux';
import MainAppLayout from '../../common/components/layout/MainAppLayout';
import OnBoardingScreen from '../../common/components/misc/OnBoardingScreen';
// import SplashScreen from '../../common/components/misc/SplashScreen';
import { RootState } from '../../store/Store';
import ListingsPage from '../listings/ListingsPage';

const HomePage = () => {
  const { onBoardingStatus } = useSelector((state: RootState) => state.common);
  return <>{onBoardingStatus ? <OnBoardingScreen /> : <ListingsPage />}</>;
};
export default HomePage;

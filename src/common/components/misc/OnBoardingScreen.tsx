import logo from '../../assets/images/logo.svg';
import googleIcon from '../../assets/images/google-logo.svg';
import '../../assets/css/Common.scss';
import { useDispatch } from 'react-redux';
import { setOnBoardingStatus } from '../layout/reducers/AppReducer';

const OnBoardingScreen = () => {
  const dispatch = useDispatch();
  const onboardingButtons = [
    {
      name: 'Join',
    },
    {
      name: 'Log In',
    },
  ];
  return (
    <div className="onboarding">
      <div className="onboarding_inner">
        <div className="onboarding_inner_child">
          <img src={logo} alt="logo" />
          <p className="onboarding_inner_child_text">Stay High.</p>
          <p className="onboarding_inner_child_text">Stay Happy.</p>
          <p className="onboarding_inner_child_text">Always.</p>
          <div className="onboarding_inner_btns">
            {onboardingButtons?.map((button, index) => (
              <button
                type="button"
                className={` ${
                  index === 0
                    ? 'onboarding_inner_btns_child_active'
                    : 'onboarding_inner_btns_child'
                }`}
                key={button.name}
                onClick={() => dispatch(setOnBoardingStatus(false))}
              >
                {button.name}
              </button>
            ))}
          </div>
        </div>
        <div className="onboarding_inner_google">
          <img src={googleIcon} alt="google-logo" />
          <p>Continue with google</p>
        </div>
      </div>
    </div>
  );
};
export default OnBoardingScreen;

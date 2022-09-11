import { ReactNode } from 'react';
import Header from './Header';
import '../../assets/css/Common.scss';

const MainAppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="main_app">
      <Header />
      {children}
    </div>
  );
};
export default MainAppLayout;

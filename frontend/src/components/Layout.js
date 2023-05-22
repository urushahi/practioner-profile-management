import { useSelector } from 'react-redux';
import CreateAllergy from '../pages/Allergy/components/CreateAllergy';
import CreatePractioner from '../pages/CreatePractitioner/CreatePractioner';
import Header from './Header';
import ModalComponent from './common/ModalComponent';

const Layout = ({ children }) => {
  const { sidebar } = useSelector((state) => state.ui.sidebar);
  const { sidebar: allergySidebar } = useSelector(
    (state) => state.ui.allergySidebar
  );
  const { show } = sidebar;
  const { showAllergySidebar } = allergySidebar;
  return (
    <>
      <div className='d-flex flex-column h-100'>
        <Header />
        <div className='main flex-grow'>
          <div className='wrapper'>{children}</div>
        </div>
        {show && <CreatePractioner />}
        {showAllergySidebar && <CreateAllergy />}
        <ModalComponent />
      </div>
    </>
  );
};

export default Layout;

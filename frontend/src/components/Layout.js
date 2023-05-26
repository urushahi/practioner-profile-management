import { useSelector } from 'react-redux';
import CreateAllergy from '../pages/Allergy/components/CreateAllergy';
import CreatePractioner from '../pages/CreatePractitioner/CreatePractioner';
import Header from './Header';
import ModalComponent from './common/ModalComponent';

const Layout = ({ children }) => {
  const { show } = useSelector((state) => state.ui.sidebar.sidebar);
  const { show: allergySidebar } = useSelector(
    (state) => state.ui.allergySidebar.sidebar
  );
  const { show: showModal } = useSelector((state) => state.ui.modal.modal);
  return (
    <>
      <div className='d-flex flex-column h-100'>
        <Header />
        <div className='main flex-grow'>
          <div className='wrapper'>{children}</div>
        </div>
        {show && <CreatePractioner />}
        {allergySidebar && <CreateAllergy />}
        {showModal && <ModalComponent />}
      </div>
    </>
  );
};

export default Layout;

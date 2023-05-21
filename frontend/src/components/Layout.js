import CreateAllergy from '../pages/Allergy/components/CreateAllergy';
import CreatePractioner from '../pages/CreatePractitioner/CreatePractioner';
import Header from './Header';
import ModalComponent from './common/ModalComponent';

const Layout = ({ children }) => {
  return (
    <>
      <div className='d-flex flex-column h-100'>
        <Header />
        <div className='main flex-grow'>
          <div className='container'>{children}</div>
        </div>
        <CreatePractioner />
        <CreateAllergy />
        <ModalComponent />
      </div>
    </>
  );
};

export default Layout;

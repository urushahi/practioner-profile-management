import CreatePractioner from '../pages/CreatePractitioner/CreatePractioner';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <div className='d-flex flex-column h-100'>
        <Header />
        <div className='main flex-grow'>
          <div className='container'>{children}</div>
        </div>
        <CreatePractioner />
      </div>
    </>
  );
};

export default Layout;

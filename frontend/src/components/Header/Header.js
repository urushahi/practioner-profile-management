import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BrowserRoutes as routes } from '../../routes/routes';

const Header = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    return navigate('/login');
  };
  return (
    <header className='header__dashboard'>
      <div className='container'>
        <div className='header__dashboard--left'>
          <h3 className='logo'>Practitioner's Profile Management System</h3>

          {/* <ul className='list list__nav ml-10x d-sm-flex d-none'>
            {headerRoutes.map(({ to, title }, i) => (
              <li key={i}>
                <NavLink>{title}</NavLink>
              </li>
            ))}
          </ul> */}
        </div>
        <div className='header__dashboard--right'>
          <button
            className='btn btn-error--outlined btn--sm'
            onClick={() => logoutUser()}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

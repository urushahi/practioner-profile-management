import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { routes } from '../../constants/routes';

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

          <ul className='list list-nav ml-8x'>
            <li>
              <NavLink to={routes.DASHBOARD}>Practitioner</NavLink>
            </li>
            <li>
              <NavLink to={routes.ALLERGY}>Allergy</NavLink>
            </li>
          </ul>
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

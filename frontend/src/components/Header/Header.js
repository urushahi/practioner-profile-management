import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { routes } from '../../constants/routes';
import { logout } from '../../services/auth';
import { FaRegUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import * as tokenService from '../../services/token';

const Header = () => {
  const navigate = useNavigate();
  const { name } = tokenService.getAuthDetail();

  const logoutUser = () => {
    logout();
    return navigate('/login');
  };
  return (
    <header className='header__dashboard'>
      <div className='header__dashboard--left'>
        <h3 className='logo'>Practitioner's Profile Management System</h3>

        <ul className='list list-nav'>
          <li>
            <NavLink to={routes.DASHBOARD}>Practitioner</NavLink>
          </li>
          <li>
            <NavLink to={routes.ALLERGY}>Allergy</NavLink>
          </li>
        </ul>
      </div>
      <div className='header__dashboard--right'>
        <div className='d-flex align-items-center mr-4x'>
          <div className='avatar avatar--round bg-primary--base color-white--base mr-2x'>
            <FaRegUser size={20} />
          </div>
          <p>{name}</p>
        </div>
        <MdLogout size={20} onClick={() => logoutUser()} className='logout' />
      </div>
    </header>
  );
};

export default Header;

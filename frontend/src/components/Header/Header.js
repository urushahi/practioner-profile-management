import React, { useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { BrowserRoutes as routes } from '../../routes/routes';

const Header = () => {
  const headerRoutes = [
    {
      to: routes.DASHBOARD,
      title: 'Practitioners Lists',
    },
    // {
    //   to: routes.EVALUATION,
    //   title: 'Evaluation',
    // },
    // {
    //   to: routes.MODELS,
    //   title: 'Models',
    // },
  ];

  const navigate = useNavigate();

  const logoutUser = useCallback(() => {
    // logout();
    window.location.reload();
    return navigate(routes.LOGIN);
  }, []);
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
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

import { Navigate, Outlet, useLocation } from 'react-router-dom';

import Layout from '../components/Layout';

import { getAccessToken } from '../services/token';
import { routes } from '../constants/routes';

const PrivateRoute = () => {
  const isLoggedIn = getAccessToken();
  const { pathname } = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={routes.LOGIN} />;
  }
  if (pathname === routes.PRIVATE_ROUTE) {
    return <Navigate to={routes.DASHBOARD} />;
  }
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default PrivateRoute;

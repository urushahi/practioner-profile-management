import React from 'react';

import { Outlet } from 'react-router-dom';

import Layout from '../components/Layout';

// import { getAccessToken } from "services/token";

const PrivateRoute = () => {
  //   const isLoggedIn = getAccessToken();
  //   const dispatch = useDispatch();
  //   const { pathname } = useLocation();

  //   useEffect(() => {
  //     if (pathname) dispatch(setCurrentRoute(pathname));
  //   }, [pathname]);

  //   if (!isLoggedIn) {
  //     return <Navigate to={routes.LOGIN} />;
  //   }
  //   if (pathname === routes.PRIVATE_ROUTE) {
  //     return <Navigate to={routes.DASHBOARD} />;
  //   }
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default PrivateRoute;

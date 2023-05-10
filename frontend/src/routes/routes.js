import PractionerList from '../pages/Dashboard/PractitonerList/PractionerList';

import { routes } from '../constants/routes';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login/index';
import { createBrowserRouter } from 'react-router-dom';

export const BrowserRoutes = createBrowserRouter([
  {
    path: routes.LOGIN,
    element: <Login />,
  },
  {
    path: routes.PRIVATE_ROUTE,
    element: <PrivateRoute />,
    children: [
      {
        path: routes.DASHBOARD,
        element: <PractionerList />,
      },
    ],
  },
]);

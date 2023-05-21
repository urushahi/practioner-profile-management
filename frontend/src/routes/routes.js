import PractionerList from '../pages/Dashboard/PractitonerList/PractionerList';

import { routes } from '../constants/routes';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login/index';
import { createBrowserRouter } from 'react-router-dom';
import Signup from '../pages/Login/Signup';
import Allery from '../pages/Allergy';
import PractitionerDetail from '../pages/PractitionerDetail';

export const BrowserRoutes = createBrowserRouter([
  {
    path: routes.SIGNUP,
    element: <Signup />,
  },
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
      {
        path: routes.PRACTITIONER_DETAIL,
        element: <PractitionerDetail />,
      },
      {
        path: routes.ALLERGY,
        element: <Allery />,
      },
    ],
  },
]);

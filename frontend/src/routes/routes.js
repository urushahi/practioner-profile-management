import { createBrowserRouter } from 'react-router-dom';
import PractionerList from '../pages/Dashboard/PractitonerList/PractionerList';
// import BagDetail from "pages/Dashboard/BagDetail";
// import ManualBag from "pages/Dashboard/ManualBag";
// import Evaluation from "pages/Evaluation";
// import Login from "pages/login";
// import Models from "pages/Models";
// import PageNotFound from "pages/pageNotFound/PageNotFound";
// import RequestTimeout from "pages/RequestTimeout";

import { routes } from '../constants/routes';

// import PrivateRoute from './PrivateRoutes';

export const BrowserRoutes = createBrowserRouter([
  {
    path: routes.DASHBOARD,
    element: <PractionerList />,
  },
]);

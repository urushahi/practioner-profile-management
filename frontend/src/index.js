import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRoutes as router } from './routes/routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import './assets/sass/style.scss';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </QueryClientProvider>
  </Provider>
);

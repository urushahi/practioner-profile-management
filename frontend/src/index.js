import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { BrowserRoutes as router } from './routes/routes';
import { QueryClient, QueryClientProvider } from 'react-query';

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
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
);

import { createBrowserRouter } from 'react-router';

import { ApplicationLayout } from '@/app/layouts/ApplicationLayout';
import { HomeRouteElement, MyShopsRouteElement } from '@/app/router/LazyRouteElements';
import { NotFoundPage } from '@/app/router/NotFoundPage';
import { RouteErrorPage } from '@/app/router/RouteErrorPage';

export const router = createBrowserRouter([
  {
    element: <ApplicationLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <HomeRouteElement /> },
      { path: 'my-shops', element: <MyShopsRouteElement /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

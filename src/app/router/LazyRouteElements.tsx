import { lazy, Suspense } from 'react';

import { RouteLoading } from '@/app/router/RouteLoading';

const HomePage = lazy(async () => {
  const { HomePage: Component } = await import('@/features/home/pages');
  return { default: Component };
});

const MyShopsPage = lazy(async () => {
  const { MyShopsPage: Component } = await import('@/features/shops/pages');
  return { default: Component };
});

export function HomeRouteElement() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <HomePage />
    </Suspense>
  );
}

export function MyShopsRouteElement() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <MyShopsPage />
    </Suspense>
  );
}

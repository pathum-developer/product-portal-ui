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

const SelectDeploymentModePage = lazy(async () => {
  const { SelectDeploymentModePage: Component } =
    await import('@/features/organization-setup/pages');
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

export function SelectDeploymentModeRouteElement() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <SelectDeploymentModePage />
    </Suspense>
  );
}

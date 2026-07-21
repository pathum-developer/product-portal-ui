import { Link, isRouteErrorResponse, useRouteError } from 'react-router';

export function RouteErrorPage() {
  const error = useRouteError();
  const title = isRouteErrorResponse(error)
    ? `Unable to load this page (${error.status})`
    : 'Unable to load this page';

  return (
    <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="m-0 text-sm font-semibold text-primary">Something went wrong</p>
      <h1 className="mb-0 mt-2 text-3xl font-bold tracking-tight text-color sm:text-4xl">
        {title}
      </h1>
      <p className="mb-0 mt-3 max-w-xl text-base leading-7 text-muted-color">
        Please try again. If the problem continues, contact support.
      </p>
      <Link
        className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-contrast no-underline transition-colors hover:bg-primary-emphasis focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        to="/"
      >
        Return home
      </Link>
    </section>
  );
}

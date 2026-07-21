interface PageHeadingProps {
  readonly description?: string;
  readonly eyebrow?: string;
  readonly title: string;
}

function PageHeading({ description, eyebrow, title }: PageHeadingProps) {
  return (
    <header className="rounded-xl border border-surface bg-surface-0 px-5 py-8 text-center shadow-sm sm:px-8 sm:py-10">
      {eyebrow && <p className="m-0 text-sm font-semibold text-primary">{eyebrow}</p>}
      <h1
        id="page-title"
        className="mb-0 mt-2 text-3xl font-bold tracking-tight text-color sm:text-4xl"
      >
        {title}
      </h1>
      {description && (
        <p className="mx-auto mb-0 mt-3 max-w-2xl text-base leading-7 text-muted-color">
          {description}
        </p>
      )}
    </header>
  );
}

export default PageHeading;

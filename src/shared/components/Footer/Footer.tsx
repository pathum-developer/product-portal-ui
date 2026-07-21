import { Box } from '@primeicons/react/box';

import { LEGAL_NAVIGATION, SITE_NAME } from '@/config/site';

interface FooterProps {
  readonly currentYear?: number;
}

function Footer({ currentYear = new Date().getFullYear() }: FooterProps) {
  return (
    <footer className="border-t border-surface bg-surface-50" aria-label="Site footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-contrast">
            <Box size={18} aria-hidden="true" />
          </span>
          <div>
            <p className="m-0 text-sm font-semibold text-color">{SITE_NAME}</p>
            <p className="m-0 mt-1 text-xs text-muted-color">
              &copy; {currentYear} {SITE_NAME}. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <nav className="flex gap-4" aria-label="Legal navigation">
            {LEGAL_NAVIGATION.map((item) => (
              <a
                key={item.href}
                className="rounded-sm text-sm text-muted-color no-underline hover:text-color focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <span
            className="text-xs text-muted-color"
            aria-label={`Application version ${__APP_VERSION__}`}
          >
            v{__APP_VERSION__}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

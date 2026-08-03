import { AngleRight } from '@primeicons/react/angle-right';
import { Home } from '@primeicons/react/home';
import { Breadcrumb } from '@primereact/ui/breadcrumb';
import { Link } from 'react-router';

import { SITE_NAME } from '@/config/site';

interface SiteBreadcrumbProps {
  readonly currentPage: string;
}

export function SiteBreadcrumb({ currentPage }: SiteBreadcrumbProps) {
  return (
    <Breadcrumb.Root aria-label="Breadcrumb">
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            as={Link}
            to="/"
            className="flex items-center gap-1.5 rounded-sm text-sm font-medium text-muted-color no-underline transition-colors hover:text-color focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`${SITE_NAME} home`}
          >
            <Home size={14} aria-hidden="true" />
            <span>{SITE_NAME}</span>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator aria-hidden="true">
          <AngleRight size={13} />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Current className="text-sm font-medium text-color">
            {currentPage}
          </Breadcrumb.Current>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}

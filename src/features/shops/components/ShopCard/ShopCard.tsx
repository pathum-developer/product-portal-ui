import { ArrowRight } from '@primeicons/react/arrow-right';
import { HeartFill } from '@primeicons/react/heart-fill';
import { MapMarker } from '@primeicons/react/map-marker';
import { Button } from '@primereact/ui/button';
import { Card } from '@primereact/ui/card';
import { Tag } from '@primereact/ui/tag';

import type { Shop } from '@/features/shops/types/shop';

interface ShopCardProps {
  readonly shop: Shop;
}

function ShopCard({ shop }: ShopCardProps) {
  const titleId = `shop-${shop.id}-title`;

  return (
    <Card.Root
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-surface bg-surface-0 shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
      aria-labelledby={titleId}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-100">
        <img
          className="h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105 motion-reduce:group-hover:scale-100"
          src={shop.imageSrc}
          alt={shop.imageAlt}
          width="768"
          height="512"
          loading="lazy"
          decoding="async"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent"
          aria-hidden="true"
        />
        <span
          className="absolute right-3 top-3 grid size-7 place-items-center rounded-full bg-surface-0/95 text-red-500 shadow-md"
          role="img"
          aria-label="Saved as favorite"
        >
          <HeartFill size={17} aria-hidden="true" />
        </span>
      </div>

      <Card.Body className="flex min-w-0 flex-1 flex-col p-3 sm:p-4 2xl:p-5">
        <Card.Caption>
          <Tag
            className="max-w-full truncate text-xs font-semibold"
            severity="info"
            rounded
            title={shop.category}
          >
            {shop.category}
          </Tag>
          <Card.Title>
            <h2
              id={titleId}
              className="mb-0 mt-2 line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-color sm:min-h-12 sm:text-base sm:leading-6 xl:min-h-10 xl:text-sm xl:leading-5 2xl:min-h-12 2xl:text-base 2xl:leading-6"
              title={shop.name}
            >
              {shop.name}
            </h2>
          </Card.Title>
          <Card.Subtitle className="mt-1.5 flex min-h-5 min-w-0 items-center gap-1.5 text-xs text-muted-color 2xl:text-sm">
            <MapMarker className="shrink-0 text-primary" size={14} aria-hidden="true" />
            <span className="truncate" title={shop.location}>
              {shop.location}
            </span>
          </Card.Subtitle>
        </Card.Caption>

        <Card.Content>
          <p className="m-0 line-clamp-3 text-xs leading-5 text-muted-color 2xl:text-sm 2xl:leading-6">
            {shop.description}
          </p>
        </Card.Content>

        <Card.Footer className="mt-auto pt-3 2xl:pt-4">
          <Button
            as="a"
            className="flex w-full justify-center gap-2 no-underline"
            href={shop.href}
            size="small"
            variant="outlined"
            aria-label={`Visit ${shop.name}`}
          >
            <span>Visit shop</span>
            <ArrowRight size={14} aria-hidden="true" />
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
}

export default ShopCard;

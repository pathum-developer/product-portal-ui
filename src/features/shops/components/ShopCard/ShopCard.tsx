import { ArrowRight } from '@primeicons/react/arrow-right';
import { HeartFill } from '@primeicons/react/heart-fill';
import { MapMarker } from '@primeicons/react/map-marker';
import { Button } from '@primereact/ui/button';
import { Card } from '@primereact/ui/card';
import { Tag } from '@primereact/ui/tag';

import type { Shop } from '../../types/shop';

interface ShopCardProps {
  readonly shop: Shop;
}

function ShopCard({ shop }: ShopCardProps) {
  const titleId = `shop-${shop.id}-title`;

  return (
    <Card.Root
      className="group flex h-full flex-col overflow-hidden border border-surface shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
      aria-labelledby={titleId}
    >
      <div className="relative h-24 overflow-hidden bg-surface-100 sm:h-28 2xl:h-32">
        <img
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={shop.imageSrc}
          alt={shop.imageAlt}
          width="768"
          height="512"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-white/95 text-red-500 shadow-sm 2xl:right-3 2xl:top-3 2xl:size-9">
          <HeartFill size={16} aria-hidden="true" />
          <span className="sr-only">Favorite shop</span>
        </span>
      </div>

      <Card.Body className="flex min-w-0 flex-1 flex-col p-3 sm:p-4 2xl:p-5">
        <Card.Caption>
          <Tag
            className="max-w-full truncate text-xs"
            severity="info"
            rounded
            title={shop.category}
          >
            {shop.category}
          </Tag>
          <Card.Title>
            <h2
              id={titleId}
              className="mb-0 mt-3 text-base font-semibold leading-5 text-color sm:text-lg xl:text-base 2xl:text-lg"
            >
              {shop.name}
            </h2>
          </Card.Title>
          <Card.Subtitle className="mt-2 flex min-w-0 items-center gap-1 text-xs text-muted-color 2xl:text-sm">
            <MapMarker className="shrink-0" size={13} aria-hidden="true" />
            <span className="truncate">{shop.location}</span>
          </Card.Subtitle>
        </Card.Caption>

        <Card.Content className="flex-1 py-3 2xl:py-4">
          <p className="m-0 line-clamp-3 text-xs leading-5 text-muted-color 2xl:text-sm 2xl:leading-6">
            {shop.description}
          </p>
        </Card.Content>

        <Card.Footer className="pt-0">
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

import { ShopCard } from '@/features/shops/components/ShopCard';
import type { Shop } from '@/features/shops/types/shop';

interface ShopListingsProps {
  readonly shops: readonly Shop[];
}

function ShopListings({ shops }: ShopListingsProps) {
  if (shops.length === 0) {
    return (
      <section
        className="rounded-xl border border-dashed border-surface bg-surface-0 px-5 py-14 text-center"
        aria-labelledby="shop-listings-title"
      >
        <h2 id="shop-listings-title" className="m-0 text-xl font-semibold text-color">
          No favorite shops yet
        </h2>
        <p className="mb-0 mt-2 text-sm text-muted-color">
          Favorite a shop and it will appear here for quick access.
        </p>
      </section>
    );
  }

  return (
    <section aria-labelledby="shop-listings-title">
      <h2 id="shop-listings-title" className="sr-only">
        Favorite shop listings
      </h2>
      <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 md:grid-cols-4 xl:grid-cols-8">
        {shops.map((shop) => (
          <li key={shop.id} className="min-w-0">
            <ShopCard shop={shop} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShopListings;

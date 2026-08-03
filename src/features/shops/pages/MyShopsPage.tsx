import { ShopListings } from '@/features/shops/components/ShopListings';
import { FAVORITE_SHOPS } from '@/features/shops/data/favoriteShops';
import { SiteBreadcrumb } from '@/shared/components/SiteBreadcrumb';

export function MyShopsPage() {
  return (
    <div className="bg-surface-50">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-5 px-3 py-6 sm:gap-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <SiteBreadcrumb currentPage="My shops" />
        <ShopListings shops={FAVORITE_SHOPS} />
      </div>
    </div>
  );
}

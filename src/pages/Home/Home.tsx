import { PageHeading } from '../../components/PageHeading';
import { ShopListings } from '../../features/shops/components/ShopListings';
import { FAVORITE_SHOPS } from '../../features/shops/data/favoriteShops';

function Home() {
  return (
    <div className="bg-surface-50">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-5 px-3 py-6 sm:gap-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <PageHeading
          eyebrow="Welcome back"
          title="Your favorite shops"
          description="Quickly return to the shops you love and discover what they have to offer."
        />
        <ShopListings shops={FAVORITE_SHOPS} />
      </div>
    </div>
  );
}

export default Home;

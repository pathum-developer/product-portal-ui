import { Outlet } from 'react-router';

import { Footer } from '@/shared/components/Footer';
import { Header } from '@/shared/components/Header';

export function ApplicationLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-0 text-color">
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

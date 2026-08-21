import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { GlobalHeader } from './GlobalHeader';
import { Footer } from './Footer';

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

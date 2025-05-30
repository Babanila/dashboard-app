import React from 'react';
import { Outlet } from 'react-router';

const Layout: React.FC = () => {
  return (
    <main className="mt-[65px] w-full h-full min-h-[80vh] flex flex-col bg-primary py-8">
      <Outlet />
    </main>
  );
};

export default Layout;

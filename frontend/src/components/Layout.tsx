import React from 'react';
import { Outlet } from 'react-router';

const Layout: React.FC = () => {
  return (
    <main className="mt-[65px] w-full h-full min-h-[50vh] flex flex-col bg-primary">
      <Outlet />
    </main>
  );
};

export default Layout;
